import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('src');
const FORBIDDEN_WORDS = [
  'eyebrow',
  'kicker',
  'overline',
  'pretitle',
  'supertitle',
  'preheading',
  'topline',
  'badge',
  'pill',
  'chip'
];

// Regex matching forbidden words as words/tokens
// 1. Standalone or separated by non-alphanumeric chars (space, hyphen, underscore, dot, quotes, etc.), case-insensitive
const boundaryRegex = new RegExp(
  `(^|[^a-zA-Z0-9])(${FORBIDDEN_WORDS.join('|')})s?($|[^a-zA-Z0-9])`,
  'i'
);
// 2. camelCase where a lowercase letter is followed by capitalized forbidden word (e.g. myBadge, sectionPill)
const camelRegex = new RegExp(
  `(?<=[a-z])(${FORBIDDEN_WORDS.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('|')})s?($|[^a-zA-Z0-9]|(?=[A-Z0-9]))`
);

const uppercaseRegex = /text-transform\s*:\s*uppercase/i;
const letterSpacingRegex = /letter-spacing\s*:\s*([^;}\n]+)/i;

function checkLetterSpacing(valStr) {
  const trimmed = valStr.trim();
  if (trimmed === 'normal' || trimmed === 'inherit' || trimmed === 'initial' || trimmed === 'unset') {
    return false;
  }
  
  // match number and optional unit
  const match = trimmed.match(/^([+-]?[\d.]+)\s*(em|rem|px|%|pt)?$/i);
  if (!match) return false;
  
  const num = parseFloat(match[1]);
  const unit = (match[2] || 'em').toLowerCase();
  
  if (num <= 0) return false; // zero or negative letter-spacing is allowed
  
  if (unit === 'em' || unit === 'rem') {
    return num > 0.02;
  }
  if (unit === 'px') {
    // 0.02em on 16px is 0.32px.
    return num > 0.32;
  }
  if (unit === '%') {
    return num > 2.0;
  }
  if (unit === 'pt') {
    return num > 0.24;
  }
  
  return num > 0.02;
}

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.astro', '.ts', '.css'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const files = getFiles(SRC_DIR);
const violations = [];

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/);
  const relPath = path.relative('.', filePath).replace(/\\/g, '/');

  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // 1. Forbidden words check
    const boundaryMatch = line.match(boundaryRegex);
    const camelMatch = line.match(camelRegex);
    const matchedWord = boundaryMatch ? boundaryMatch[2] : camelMatch ? camelMatch[1] : null;

    if (matchedWord) {
      violations.push({
        file: relPath,
        line: lineNum,
        reason: `Kata terlarang ditemukan: "${matchedWord}"`,
        snippet: line.trim()
      });
    }

    // 2. text-transform: uppercase check
    if (uppercaseRegex.test(line)) {
      violations.push({
        file: relPath,
        line: lineNum,
        reason: 'Dilarang text-transform: uppercase',
        snippet: line.trim()
      });
    }

    // 3. letter-spacing check
    const lsMatch = line.match(letterSpacingRegex);
    if (lsMatch) {
      if (checkLetterSpacing(lsMatch[1])) {
        violations.push({
          file: relPath,
          line: lineNum,
          reason: `letter-spacing melebihi 0.02em (${lsMatch[1].trim()})`,
          snippet: line.trim()
        });
      }
    }
  });
}

console.log('=== PEMERIKSAAN NOL EYEBROW (LINT) ===');
console.log(`Memeriksa ${files.length} file di src/...`);

if (violations.length > 0) {
  console.error(`\nDITEMUKAN ${violations.length} PELANGGARAN:`);
  for (const v of violations) {
    console.error(`  - ${v.file}:${v.line} [${v.reason}] -> "${v.snippet}"`);
  }
  console.error('\nLint GAGAL (exit code 1).');
  process.exit(1);
} else {
  console.log('Semua file bersih dari pelanggaran eyebrow, uppercase, dan letter-spacing.');
  console.log('Lint LULUS (exit code 0).\n');
  process.exit(0);
}
