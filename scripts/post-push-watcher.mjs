#!/usr/bin/env node
/**
 * ENLESWEB ECOSYSTEM POST-PUSH WATCHER
 * 
 * Script ini diluncurkan secara detached di latar belakang oleh .git/hooks/pre-push.
 * Bertugas memantau proses git push induk. Begitu push berhasil terkirim ke GitHub
 * (origin/main == HEAD), script ini otomatis memanggil sync-ecosystem.mjs --record-push
 * untuk menyiarkan update ke Custodian Agents, memperbarui dokumen terkait,
 * menjalankan audit 5 lapis, dan meng-auto-push master docs ke GitHub.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WORKSPACE_ROOT = path.resolve(__dirname, '../..');

const repoName = process.argv[2];
const pid = parseInt(process.argv[3], 10);

if (!repoName || isNaN(pid)) {
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

appendLog(`Watcher aktif untuk ${repoName} (memantau Git push PID ${pid})...`);

let localHead = '';
try {
  localHead = execSync('git rev-parse HEAD', { cwd: repoPath, encoding: 'utf8' }).trim();
} catch (e) {
  appendLog(`Gagal membaca local HEAD: ${e.message}`);
  process.exit(1);
}

// Pantau sampai proses git push induk selesai
const interval = setInterval(() => {
  try {
    process.kill(pid, 0);
  } catch {
    clearInterval(interval);
    appendLog(`Proses git push (PID ${pid}) telah selesai. Memeriksa status remote...`);

    // Beri jeda 400ms agar Git selesai menulis ref remote ke disk
    setTimeout(() => {
      try {
        let originHead = '';
        try {
          originHead = execSync('git rev-parse origin/main', { cwd: repoPath, encoding: 'utf8' }).trim();
        } catch {
          // Jika branch bukan main, coba baca symbolic-ref
          try {
            const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: repoPath, encoding: 'utf8' }).trim();
            originHead = execSync(`git rev-parse origin/${currentBranch}`, { cwd: repoPath, encoding: 'utf8' }).trim();
          } catch {}
        }

        if (originHead === localHead) {
          appendLog(`Push terkonfirmasi sukses! origin/main cocok dengan HEAD (${localHead.slice(0, 7)}).`);
          appendLog(`Memicu otomatisasi: Multi-Agent Document Custodians, Audit Anti-Halusinasi, & Auto-Publish...`);

          const syncScript = path.join(__dirname, 'sync-ecosystem.mjs');
          const output = execSync(`node "${syncScript}" --record-push "${repoName}"`, {
            cwd: path.join(WORKSPACE_ROOT, 'enlesweb-context-master'),
            encoding: 'utf8',
            stdio: 'pipe'
          });

          appendLog(`Hasil eksekusi otomatis:\n${output}`);
          appendLog(`[SELESAI] Ekosistem master docs berhasil disinkronkan dan di-push otomatis ke GitHub.`);
        } else {
          appendLog(`Push tidak mengubah origin/main (origin: ${originHead.slice(0, 7)} vs local: ${localHead.slice(0, 7)}). Tidak ada update master docs.`);
        }
      } catch (err) {
        appendLog(`Error saat verifikasi atau eksekusi otomatis pasca-push: ${err.message}`);
      }
      process.exit(0);
    }, 400);
  }
}, 100);
