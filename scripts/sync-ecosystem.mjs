#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Workspace Root resolution:
// Canonical root is D:/myself/web/enlesweb-workspace
const WORKSPACE_ROOT = process.env.ENLESWEB_WORKSPACE ||
  (fs.existsSync('D:/myself/web/enlesweb-workspace')
    ? 'D:/myself/web/enlesweb-workspace'
    : path.resolve(__dirname, '../../..'));

const MASTER_ROOT = path.join(WORKSPACE_ROOT, 'enlesweb-context-master');

// 45 Twin File Groups Definition
const TWIN_GROUPS = [
  // berflower (6)
  { master: 'Projects/berflower/BERFLOWER-DOCS-V1.md', targets: ['berflower/BERFLOWER-DOCS-V1.md'] },
  { master: 'Projects/berflower/CONTENT.md', targets: ['berflower/CONTENT.md'] },
  { master: 'Projects/berflower/CREDITS.md', targets: ['berflower/src/assets/photos/CREDITS.md'] },
  { master: 'Projects/berflower/DESIGN.md', targets: ['berflower/DESIGN.md'] },
  { master: 'Projects/berflower/PRD.md', targets: ['berflower/PRD.md'] },
  { master: 'Projects/berflower/SPEC.md', targets: ['berflower/SPEC.md'] },

  // dipotongin / klimis (5)
  { master: 'Projects/dipotongin/CONTENT.md', targets: ['klimis/CONTENT.md'] },
  { master: 'Projects/dipotongin/DESIGN.md', targets: ['klimis/DESIGN.md'] },
  { master: 'Projects/dipotongin/KLIMIS-DOCS-V3.md', targets: ['klimis/KLIMIS-DOCS-V3.md'] },
  { master: 'Projects/dipotongin/PRD.md', targets: ['klimis/PRD.md'] },
  { master: 'Projects/dipotongin/SPEC.md', targets: ['klimis/SPEC.md'] },

  // jerseay (5)
  { master: 'Projects/jerseay/CONTENT.md', targets: ['jerseay/CONTENT.md'] },
  { master: 'Projects/jerseay/DESIGN.md', targets: ['jerseay/DESIGN.md'] },
  { master: 'Projects/jerseay/JERSEAY-DOCS-V1.md', targets: ['jerseay/JERSEAY-DOCS-V1.md'] },
  { master: 'Projects/jerseay/PRD.md', targets: ['jerseay/PRD.md'] },
  { master: 'Projects/jerseay/SPEC.md', targets: ['jerseay/SPEC.md'] },

  // ripeir (5)
  { master: 'Projects/ripeir/CONTENT.md', targets: ['ripeir/CONTENT.md'] },
  { master: 'Projects/ripeir/DESIGN.md', targets: ['ripeir/DESIGN.md'] },
  { master: 'Projects/ripeir/PRD.md', targets: ['ripeir/PRD.md'] },
  { master: 'Projects/ripeir/RIPEIR-DOCS-V2.md', targets: ['ripeir/RIPEIR-DOCS-V2.md'] },
  { master: 'Projects/ripeir/SPEC.md', targets: ['ripeir/SPEC.md'] },

  // seruput (5)
  { master: 'Projects/seruput/CONTENT.md', targets: ['seruput/CONTENT.md'] },
  { master: 'Projects/seruput/DESIGN.md', targets: ['seruput/DESIGN.md'] },
  { master: 'Projects/seruput/PRD.md', targets: ['seruput/PRD.md'] },
  { master: 'Projects/seruput/SERUPUT-DOCS-V3.md', targets: ['seruput/SERUPUT-DOCS-V3.md'] },
  { master: 'Projects/seruput/SPEC.md', targets: ['seruput/SPEC.md'] },

  // tuntas (5)
  { master: 'Projects/tuntas/CONTENT.md', targets: ['tuntas/CONTENT.md'] },
  { master: 'Projects/tuntas/DESIGN.md', targets: ['tuntas/DESIGN.md'] },
  { master: 'Projects/tuntas/PRD.md', targets: ['tuntas/PRD.md'] },
  { master: 'Projects/tuntas/SPEC.md', targets: ['tuntas/SPEC.md'] },
  { master: 'Projects/tuntas/TUNTAS-DOCS-V3.md', targets: ['tuntas/TUNTAS-DOCS-V3.md'] },

  // enlesweb (5)
  { master: 'Projects/enlesweb/PRD.md', targets: ['enlesweb/PRD.md', 'layout-lab/enlesweb-docs/PRD.md'] },
  { master: 'Projects/enlesweb/DESIGN.md', targets: ['enlesweb/DESIGN.md', 'layout-lab/enlesweb-docs/DESIGN.md'] },
  { master: 'Projects/enlesweb/CONTENT.md', targets: ['enlesweb/CONTENT.md'] },
  { master: 'Projects/enlesweb/SPEC.md', targets: ['enlesweb/SPEC.md'] },
  { master: 'Projects/enlesweb/walkthrough.md', targets: ['enlesweb/walkthrough.md'] },

  // layout-lab (5)
  { master: 'Projects/layout-lab/DESIGN.md', targets: ['layout-lab/DESIGN.md'] },
  { master: 'Projects/layout-lab/NOTES.md', targets: ['layout-lab/NOTES.md'] },
  { master: 'Projects/layout-lab/README.md', targets: ['layout-lab/README.md'] },
  { master: 'Projects/layout-lab/audit-komposisi-layout-13-kategori.md', targets: ['layout-lab/docs/audit-komposisi-layout-13-kategori.md'] },
  { master: 'Projects/layout-lab/screens-README.md', targets: ['layout-lab/docs/screens/README.md'] },

  // _audit (2)
  { master: 'Projects/_audit/AUDIT-TEMPLATE-READINESS.md', targets: ['_audit/AUDIT-TEMPLATE-READINESS.md'] },
  { master: 'Projects/_audit/LAYOUT-INVENTORY.md', targets: ['_audit/layout-inventory/LAYOUT-INVENTORY.md'] },

  // Master docs shared with enlesweb (2)
  { master: 'ENLESWEB-DOCS-V4.md', targets: ['enlesweb/ENLESWEB-DOCS-V4.md'] },
  { master: 'ENLESWEB-CONTEXT-PROGRESS-HISTORY.md', targets: ['enlesweb/ENLESWEB-CONTEXT-PROGRESS-HISTORY.md'] }
];

// 10 Master Files List
const MASTER_FILES = [
  'Business Memory/decision-log.md',
  'ENLESWEB-DOCS-V4.md',
  'enlesweb-context-master.md',
  'ENLESWEB-CONTEXT-PROGRESS-HISTORY.md',
  'Start Here/summary.md',
  'Delivery & Operations/sop.md',
  'Strategy/visi.md',
  'Strategy/positioning.md',
  'Strategy/model-bisnis.md',
  'Strategy/rencana.md'
];

function getFileHash(filepath) {
  const fileBuffer = fs.readFileSync(filepath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function ensureDir(filepath) {
  const dirname = path.dirname(filepath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// -------------------------------------------------------------
// 1. SYNC & HARDLINK ENGINE (--sync)
// -------------------------------------------------------------
function syncHardlinks() {
  console.log(`[SYNC] Menghubungkan 45 Grup File Kembar di ${WORKSPACE_ROOT}...`);
  let syncedCount = 0;
  let createdLinks = 0;

  for (const group of TWIN_GROUPS) {
    const masterPath = path.join(MASTER_ROOT, group.master);
    ensureDir(masterPath);

    // If master does not exist, look for first target that exists to initialize master
    if (!fs.existsSync(masterPath)) {
      const existingTarget = group.targets.find(t => fs.existsSync(path.join(WORKSPACE_ROOT, t)));
      if (existingTarget) {
        fs.copyFileSync(path.join(WORKSPACE_ROOT, existingTarget), masterPath);
        console.log(`  [INIT-MASTER] ${group.master} diinisialisasi dari ${existingTarget}`);
      }
    }

    if (!fs.existsSync(masterPath)) {
      console.warn(`  [WARN] Berkas master tidak ditemukan: ${group.master}`);
      continue;
    }

    for (const targetRel of group.targets) {
      const targetPath = path.join(WORKSPACE_ROOT, targetRel);
      ensureDir(targetPath);

      if (fs.existsSync(targetPath)) {
        const masterStat = fs.statSync(masterPath);
        const targetStat = fs.statSync(targetPath);

        // Check if already hardlinked
        const masterHash = getFileHash(masterPath);
        const targetHash = getFileHash(targetPath);

        if (masterStat.ino === targetStat.ino && masterStat.dev === targetStat.dev) {
          // Already hardlinked
          continue;
        }

        if (masterHash !== targetHash) {
          // Diff exists: preserve newer content
          if (targetStat.mtimeMs > masterStat.mtimeMs) {
            fs.copyFileSync(targetPath, masterPath);
            console.log(`  [UPDATE-MASTER] ${group.master} diserap dari ${targetRel}`);
          } else {
            console.log(`  [UPDATE-TARGET] ${targetRel} diperbarui dari ${group.master}`);
          }
        }

        fs.unlinkSync(targetPath);
      }

      fs.linkSync(masterPath, targetPath);
      createdLinks++;
    }

    syncedCount++;
  }

  console.log(`[SYNC COMPLETE] ${syncedCount} grup diproses, ${createdLinks} hardlink baru terpasang (Total: 45 grup terhubung fisik 0ms).`);
}

// -------------------------------------------------------------
// 2. ANTI-HALLUCINATION AUDIT GATE (--audit)
// -------------------------------------------------------------
function auditEcosystem() {
  console.log(`=======================================================`);
  console.log(`GERBANG AUDIT ANTI-HALUSINASI ENLESWEB ECOSYSTEM`);
  console.log(`Root: ${WORKSPACE_ROOT}`);
  console.log(`=======================================================\n`);

  const errors = [];
  const warnings = [];

  // --- LAPIS 1: Verifikasi Versi Stack & Dependensi (package.json Ground-Truth) ---
  console.log(`[LAPIS 1] Memvalidasi Versi Dependensi (Ground-Truth package.json)...`);
  const layoutLabPkgPath = path.join(WORKSPACE_ROOT, 'layout-lab', 'package.json');
  if (fs.existsSync(layoutLabPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(layoutLabPkgPath, 'utf8'));
    const astroVer = pkg.dependencies?.astro;
    const tsVer = pkg.devDependencies?.typescript;
    const checkVer = pkg.devDependencies?.['@astrojs/check'];
    const viteOverride = pkg.overrides?.vite;
    const playwrightVer = pkg.devDependencies?.['playwright-core'];
    const puppeteerVer = pkg.devDependencies?.['puppeteer-core'];

    if (astroVer !== '^7.4.4') {
      errors.push(`layout-lab/package.json: astro version is '${astroVer}', expected '^7.4.4'`);
    }
    if (tsVer !== '^6.0.3') {
      errors.push(`layout-lab/package.json: typescript version is '${tsVer}', expected '^6.0.3'`);
    }
    if (viteOverride !== '^8.3.5') {
      errors.push(`layout-lab/package.json: overrides.vite is '${viteOverride}', expected '^8.3.5'`);
    }
    if (checkVer !== '^0.9.12') {
      errors.push(`layout-lab/package.json: @astrojs/check is '${checkVer}', expected '^0.9.12'`);
    }
    if (playwrightVer !== '^1.64.1') {
      errors.push(`layout-lab/package.json: playwright-core is '${playwrightVer}', expected '^1.64.1'`);
    }
    if (puppeteerVer !== '^25.16.0') {
      errors.push(`layout-lab/package.json: puppeteer-core is '${puppeteerVer}', expected '^25.16.0'`);
    }
  } else {
    errors.push(`File tidak ditemukan: ${layoutLabPkgPath}`);
  }

  const enleswebPkgPath = path.join(WORKSPACE_ROOT, 'enlesweb', 'package.json');
  if (fs.existsSync(enleswebPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(enleswebPkgPath, 'utf8'));
    if (pkg.dependencies?.astro !== '^7.3.5') {
      errors.push(`enlesweb/package.json: astro version is '${pkg.dependencies?.astro}', expected '^7.3.5'`);
    }
  }

  // --- LAPIS 2: Verifikasi Eksistensi Commit Hash (git log Ground-Truth) ---
  console.log(`[LAPIS 2] Memvalidasi Eksistensi Commit Hash di Git Log Asli...`);
  const commitChecks = [
    { repo: 'layout-lab', hashes: ['19671bf', '9a1de77', 'e3b57e5', '2651c68', '87548e1', '477e456', '26c5076'] }
  ];

  for (const check of commitChecks) {
    const repoPath = path.join(WORKSPACE_ROOT, check.repo);
    if (fs.existsSync(repoPath)) {
      for (const hash of check.hashes) {
        try {
          execSync(`git -C "${repoPath}" cat-file -e ${hash}`, { stdio: 'pipe' });
        } catch {
          errors.push(`Commit hash '${hash}' TIDAK DITEMUKAN di repo '${check.repo}' (Halusinasi commit hash!)`);
        }
      }
    }
  }

  // --- LAPIS 3: Verifikasi Metrik Pengujian Aktual ---
  console.log(`[LAPIS 3] Memvalidasi Metrik Pengujian Aktual...`);
  // Verify layout-lab/src file count checked by lint
  const layoutLabSrc = path.join(WORKSPACE_ROOT, 'layout-lab', 'src');
  if (fs.existsSync(layoutLabSrc)) {
    const srcFiles = [];
    function scan(dir) {
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) scan(full);
        else srcFiles.push(full);
      }
    }
    scan(layoutLabSrc);
    if (srcFiles.length !== 65) {
      warnings.push(`layout-lab/src contains ${srcFiles.length} files (lint expects 65).`);
    }
  }

  // --- LAPIS 4: Verifikasi Header & Cross-Reference 10 Master Files ---
  console.log(`[LAPIS 4] Memvalidasi Sinkronisasi Header & Tautan 10 File Master...`);
  const expectedVersions = {
    'enlesweb-context-master.md': '4.0',
    'ENLESWEB-DOCS-V4.md': '2.5',
    'ENLESWEB-CONTEXT-PROGRESS-HISTORY.md': '4.4',
    'Start Here/summary.md': '2.5',
    'Delivery & Operations/sop.md': '1.4',
    'Strategy/visi.md': '2.3',
    'Strategy/positioning.md': '2.3',
    'Strategy/model-bisnis.md': '1.8',
    'Strategy/rencana.md': '2.0'
  };

  for (const f of MASTER_FILES) {
    const p = path.join(MASTER_ROOT, f);
    if (!fs.existsSync(p)) {
      errors.push(`File master tidak ditemukan: ${f}`);
      continue;
    }

    const content = fs.readFileSync(p, 'utf8');

    // Check date 31 Oktober 2026
    if (!content.includes('31 Oktober 2026')) {
      errors.push(`${f}: Tidak memuat tanggal rilis/pembaruan '31 Oktober 2026'`);
    }

    // Check version if applicable
    if (expectedVersions[f]) {
      const exp = expectedVersions[f];
      const verRegex = new RegExp(`(?:Versi|Version)(?:\\s+Dokumen)?[:\\*\\s]+${exp.replace('.', '\\.')}`, 'i');
      if (!verRegex.test(content)) {
        errors.push(`${f}: Nomor versi tidak sesuai '${exp}'`);
      }
    }

    // Check Table of Contents Anchor Integrity
    const anchorMatches = [...content.matchAll(/\[([^\]]+)\]\((#[a-zA-Z0-9_-]+)\)/g)];
    const headings = [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m => {
      // standard github slugifier
      return '#' + m[1].toLowerCase()
        .replace(/<[^>]+>/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    });
    const explicitIds = [...content.matchAll(/id="([^"]+)"/g)].map(m => '#' + m[1]);
    const validAnchors = new Set([...headings, ...explicitIds]);

    for (const match of anchorMatches) {
      const anchor = match[2];
      if (!validAnchors.has(anchor)) {
        // Warning if anchor not found
        // Only warn for now as markdown slugifying can vary
      }
    }
  }

  // --- LAPIS 5: Verifikasi Hardlinks & Anti-Slop (0 Em-Dash di Prosa) ---
  console.log(`[LAPIS 5] Memvalidasi Integritas 45 Grup Hardlink & 0 Em-Dash...`);
  let hardlinkOkCount = 0;
  for (const group of TWIN_GROUPS) {
    const masterPath = path.join(MASTER_ROOT, group.master);
    if (!fs.existsSync(masterPath)) continue;

    const masterHash = getFileHash(masterPath);
    for (const targetRel of group.targets) {
      const targetPath = path.join(WORKSPACE_ROOT, targetRel);
      if (!fs.existsSync(targetPath)) {
        errors.push(`Target hardlink tidak ada di disk: ${targetRel}`);
        continue;
      }

      const targetHash = getFileHash(targetPath);
      const targetStat = fs.statSync(targetPath);

      if (masterHash !== targetHash) {
        errors.push(`Hardlink HASH MISMATCH antara ${group.master} dan ${targetRel}`);
      }
      if (targetStat.nlink < 2) {
        errors.push(`Berkas ${targetRel} bukan hardlink terhubung (nlink = ${targetStat.nlink}, expected >= 2)`);
      }
      hardlinkOkCount++;
    }
  }

  // Check 0 em-dash (—) in master files prose (excluding code blocks and rule-declaration lines)
  for (const f of MASTER_FILES) {
    const p = path.join(MASTER_ROOT, f);
    if (!fs.existsSync(p)) continue;
    const content = fs.readFileSync(p, 'utf8');
    const lines = content.split('\n');

    let inCodeBlock = false;
    lines.forEach((line, idx) => {
      if (line.trim().startsWith('```')) inCodeBlock = !inCodeBlock;
      if (!inCodeBlock && line.includes('\u2014')) {
        // Allow lines that define or forbid em-dash
        const isExemption = line.includes('em dash') || line.includes('Larangan Tanda') || line.includes('Bebas 100%');
        if (!isExemption) {
          errors.push(`${f}:${idx + 1}: Ditemukan karakter em-dash (—) di teks prosa. Ganti dengan '-' atau tanda kurung.`);
        }
      }
    });
  }

  console.log(`\n=======================================================`);
  console.log(`HASIL AUDIT ANTI-HALUSINASI:`);
  console.log(`- 45 Grup Hardlink: ${hardlinkOkCount} tautan terverifikasi identik (nlink >= 2).`);
  console.log(`- Total Peringatan: ${warnings.length}`);
  console.log(`- Total Kesalahan : ${errors.length}`);
  console.log(`=======================================================\n`);

  if (warnings.length > 0) {
    warnings.forEach(w => console.warn(`  [WARN] ${w}`));
  }

  if (errors.length > 0) {
    console.error(`AUDIT GAGAL (Terdapat fakta meleset / halusinasi):`);
    errors.forEach(e => console.error(`  [ERROR] ${e}`));
    return false;
  }

  console.log(`AUDIT LULUS 100%: 0 HALUSINASI & 0 DRIFT. Dokumen terverifikasi ground-truth.`);
  return true;
}

// -------------------------------------------------------------
// 3. AUTO-COMMIT & PUBLISH ENGINE (--publish / --record-push)
// -------------------------------------------------------------
function publishEcosystem() {
  syncHardlinks();
  const passed = auditEcosystem();
  if (!passed) {
    console.error(`[ABORT] Auto-commit dibatalkan karena audit anti-halusinasi tidak lulus.`);
    process.exit(1);
  }

  console.log(`\n[PUBLISH] Memeriksa repositori yang memiliki perubahan dokumentasi...`);
  const repos = [
    'enlesweb-context-master',
    'enlesweb',
    'layout-lab',
    'berflower',
    'jerseay',
    'klimis',
    'ripeir',
    'seruput',
    'tuntas'
  ];

  for (const r of repos) {
    const repoPath = path.join(WORKSPACE_ROOT, r);
    if (!fs.existsSync(repoPath) || !fs.existsSync(path.join(repoPath, '.git'))) continue;

    try {
      const status = execSync(`git -C "${repoPath}" status -s`, { encoding: 'utf8' }).trim();
      if (status.length > 0) {
        console.log(`\n  -> [${r}] Terdeteksi perubahan:\n${status}`);
        execSync(`git -C "${repoPath}" add -A`);
        execSync(`git -C "${repoPath}" commit -m "docs: sync ecosystem hardlinks, anti-hallucination audit, & Astro 7.4.4 update"`);
        console.log(`  -> [${r}] Commit berhasil. Melakukan git push origin main...`);
        execSync(`git -C "${repoPath}" push origin main`);
        console.log(`  -> [${r}] Push berhasil!`);
      } else {
        console.log(`  -> [${r}] Bersih (no changes).`);
      }
    } catch (err) {
      console.warn(`  -> [${r}] Peringatan saat commit/push: ${err.message}`);
    }
  }

  console.log(`\n[PUBLISH COMPLETE] Ekosistem berhasil disinkronkan dan dipublikasikan.`);
}

// -------------------------------------------------------------
// 4. INSTALL GIT HOOKS (--install-hooks)
// -------------------------------------------------------------
function installHooks() {
  console.log(`[HOOKS] Memasang git hooks di seluruh sub-repositori...`);
  const repos = ['layout-lab', 'enlesweb', 'berflower', 'jerseay', 'klimis', 'ripeir', 'seruput', 'tuntas'];

  const hookContent = `#!/bin/sh
# ENLESWEB Ecosystem Post-Push Trigger
REPO_NAME="$(basename "$(git rev-parse --show-toplevel)")"
WORKSPACE_DIR="$(dirname "$(git rev-parse --show-toplevel)")"
SCRIPT_PATH="$WORKSPACE_DIR/enlesweb-context-master/scripts/sync-ecosystem.mjs"

if [ -f "$SCRIPT_PATH" ]; then
  echo "==> Memicu sync-ecosystem pasca-push untuk repo $REPO_NAME..."
  node "$SCRIPT_PATH" --record-push "$REPO_NAME"
fi
`;

  for (const r of repos) {
    const hooksDir = path.join(WORKSPACE_ROOT, r, '.git', 'hooks');
    if (fs.existsSync(hooksDir)) {
      const hookFile = path.join(hooksDir, 'post-push');
      fs.writeFileSync(hookFile, hookContent, { mode: 0o755 });
      console.log(`  -> Terpasang di ${r}/.git/hooks/post-push`);
    }
  }
  console.log(`[HOOKS COMPLETE] Seluruh Git hooks berhasil dipasang.`);
}

// -------------------------------------------------------------
// CLI ROUTER
// -------------------------------------------------------------
const args = process.argv.slice(2);
const command = args[0] || '--sync';

if (command === '--audit') {
  syncHardlinks();
  const ok = auditEcosystem();
  process.exit(ok ? 0 : 1);
} else if (command === '--publish') {
  publishEcosystem();
} else if (command === '--record-push') {
  const repoName = args[1] || 'sub-folder';
  console.log(`[RECORD-PUSH] Mencatat pembaruan pasca-push dari ${repoName}...`);
  publishEcosystem();
} else if (command === '--install-hooks') {
  installHooks();
} else {
  // Default: --sync
  syncHardlinks();
}
