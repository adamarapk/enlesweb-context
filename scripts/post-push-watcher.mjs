#!/usr/bin/env node
/**
 * ENLESWEB ECOSYSTEM POST-PUSH WATCHER
 * 
 * Script ini diluncurkan secara detached di latar belakang oleh .git/hooks/pre-push.
 * Bertugas memantau penyelesaian git push induk dengan memantau ref remote-tracking
 * (origin/main) hingga cocok dengan local HEAD. Begitu push berhasil mendarat di remote,
 * script ini memanggil sync-ecosystem.mjs --record-push untuk menyiarkan update ke
 * Custodian Agents, memperbarui dokumen terkait, menjalankan audit 5 lapis,
 * dan meng-auto-push master docs ke GitHub.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WORKSPACE_ROOT = path.resolve(__dirname, '../..');

const repoName = process.argv[2];

if (!repoName) {
  process.exit(1);
}

// Abaikan jika yang di-push adalah master docs itu sendiri demi mencegah loop rekursif
if (repoName === 'enlesweb-context-master') {
  process.exit(0);
}

const repoPath = path.join(WORKSPACE_ROOT, repoName);
const logFile = path.join(repoPath, '.git', 'post-push.log');

function appendLog(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try {
    fs.appendFileSync(logFile, line);
  } catch {}
}

let localHead = '';
try {
  localHead = execSync('git rev-parse HEAD', { cwd: repoPath, encoding: 'utf8' }).trim();
} catch (e) {
  appendLog(`Gagal membaca local HEAD: ${e.message}`);
  process.exit(1);
}

appendLog(`Watcher aktif untuk ${repoName} (menunggu origin/main sinkron ke ${localHead.slice(0, 7)})...`);

let attempts = 0;
const maxAttempts = 60; // 30 detik (polling tiap 500ms)

const interval = setInterval(() => {
  attempts++;
  let originHead = '';
  try {
    originHead = execSync('git rev-parse origin/main', { cwd: repoPath, encoding: 'utf8' }).trim();
  } catch {
    try {
      const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: repoPath, encoding: 'utf8' }).trim();
      originHead = execSync(`git rev-parse origin/${currentBranch}`, { cwd: repoPath, encoding: 'utf8' }).trim();
    } catch {}
  }

  if (originHead === localHead) {
    clearInterval(interval);
    appendLog(`Push terkonfirmasi sukses! origin/main cocok dengan HEAD (${localHead.slice(0, 7)}).`);
    appendLog(`Memicu otomatisasi: Multi-Agent Document Custodians, Audit Anti-Halusinasi, & Auto-Publish...`);

    try {
      const syncScript = path.join(__dirname, 'sync-ecosystem.mjs');
      const output = execSync(`node "${syncScript}" --record-push "${repoName}"`, {
        cwd: path.join(WORKSPACE_ROOT, 'enlesweb-context-master'),
        encoding: 'utf8',
        stdio: 'pipe'
      });

      appendLog(`Hasil eksekusi otomatis:\n${output}`);
      appendLog(`[SELESAI] Ekosistem master docs berhasil disinkronkan dan di-push otomatis ke GitHub.`);
    } catch (err) {
      appendLog(`Error saat eksekusi otomatis pasca-push: ${err.message}`);
    }
    process.exit(0);
  }

  if (attempts >= maxAttempts) {
    clearInterval(interval);
    appendLog(`Timeout 30 detik: origin/main (${originHead ? originHead.slice(0, 7) : 'empty'}) tidak mencapai local HEAD (${localHead.slice(0, 7)}). Push mungkin dibatalkan atau gagal.`);
    process.exit(0);
  }
}, 500);
