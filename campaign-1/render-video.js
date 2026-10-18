/**
 * ENLESWEB Meta Ads Video Renderer (with Audio/SFX)
 * 
 * Captures 18-second animated HTML ad (campaign-1/enlesweb-ads-18s.html)
 * frame-by-frame using Puppeteer and window.seekFrame(frame, fps),
 * synthesizes/mixes an 18.0s synchronized audio track (WhatsApp chimes,
 * lo-fi groove, transition whooshes, CTA click), and renders an MP4 video with FFmpeg.
 * 
 * Usage:
 *   node campaign-1/render-video.js                     (renders 9:16 by default)
 *   node campaign-1/render-video.js --ratio=4x5          (renders 4:5 format)
 *   node campaign-1/render-video.js --all                (renders both 9:16 and 4:5)
 *   node campaign-1/render-video.js --no-audio           (silent video render)
 *   node campaign-1/render-video.js --keep-frames        (keeps PNG frame images)
 */

const fs = require('fs');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');
const puppeteer = require('./node_modules/puppeteer-core');
const { generateTrack } = require('./generate-audio');

// Parse CLI arguments
const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const prefix = `--${name}=`;
  const match = args.find(a => a.startsWith(prefix));
  if (match) return match.slice(prefix.length);
  return fallback;
};
const hasFlag = (name) => args.includes(`--${name}`);

const TARGET_RATIO = getArg('ratio', '9x16'); // '9x16', '4x5', or 'all'
const RENDER_ALL = hasFlag('all') || TARGET_RATIO === 'all';
const FPS = parseInt(getArg('fps', '30'), 10);
const DURATION = parseFloat(getArg('duration', '15.0'));
const CRF = parseInt(getArg('crf', '18'), 10);
const KEEP_FRAMES = hasFlag('keep-frames');
const NO_AUDIO = hasFlag('no-audio');
const TEMPLATE_FILE = getArg('file', 'enlesweb-ads-15s-a.html');

// Resolve Chrome binary path
function resolveChromePath() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe')
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error('Google Chrome executable not found in standard directories.');
}

// Resolve FFmpeg binary path
function resolveFFmpegPath() {
  const candidates = [
    'ffmpeg',
    path.join(process.env.LOCALAPPDATA || '', 'Microsoft\\WinGet\\Links\\ffmpeg.exe'),
    'C:\\Users\\damar\\AppData\\Local\\Microsoft\\WinGet\\Links\\ffmpeg.exe',
    'C:\\ProgramData\\chocolatey\\bin\\ffmpeg.exe',
    'C:\\Users\\damar\\scoop\\shims\\ffmpeg.exe'
  ];
  for (const c of candidates) {
    try {
      const res = spawnSync(c, ['-version'], { stdio: 'ignore' });
      if (res.status === 0) return c;
    } catch (_) {}
  }
  throw new Error('FFmpeg executable not found. Please ensure FFmpeg is installed and on PATH.');
}

// Prepare or generate the audio track
function prepareAudioTrack() {
  if (NO_AUDIO) return null;

  // Check if user supplied custom BGM in assets/
  const customBgmCandidates = [
    path.resolve(__dirname, 'assets', 'bgm.mp3'),
    path.resolve(__dirname, 'assets', 'bgm.wav'),
    path.resolve(__dirname, 'assets', 'music.mp3'),
    path.resolve(__dirname, 'assets', 'music.wav')
  ];

  for (const candidate of customBgmCandidates) {
    if (fs.existsSync(candidate)) {
      console.log(`Using custom audio from: ${candidate}`);
      return candidate;
    }
  }

  // Generate procedural audio track with BGM + editorial pops + whooshes + highlighters
  const tempAudioPath = path.resolve(__dirname, 'temp_audio_15s.wav');
  generateTrack(tempAudioPath, DURATION);
  return tempAudioPath;
}

async function renderRatio(config, chromePath, ffmpegPath, audioTrackPath) {
  const { ratio, width, height, outputFile, urlParams } = config;
  console.log('\n' + '='.repeat(60));
  console.log(`Starting render for [${ratio}] (${width}x${height})`);
  console.log(`Target output: ${outputFile}`);
  console.log('='.repeat(60));

  const htmlFile = path.resolve(__dirname, TEMPLATE_FILE);
  const fileUrl = `file://${htmlFile.replace(/\\/g, '/')}?${urlParams}`;
  const tempDir = path.resolve(__dirname, `temp_frames_${ratio}`);

  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  const totalFrames = Math.round(DURATION * FPS);
  console.log(`Rendering ${totalFrames} frames at ${FPS} FPS (${DURATION}s total)...`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    defaultViewport: {
      width,
      height,
      deviceScaleFactor: 1
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--hide-scrollbars',
      `--window-size=${width},${height}`
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });

    console.log(`Loading ad template: ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Lock page layout & ensure fonts are loaded
    await page.evaluate(async () => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      await document.fonts.ready;
      if (window.fit) window.fit();
      if (window.placeLabels) window.placeLabels();
    });

    // Small delay to allow any layout settling
    await new Promise(r => setTimeout(r, 400));

    // Verify stage bounding box
    const stageBox = await page.evaluate(() => {
      const el = document.getElementById('stage');
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    });
    console.log(`Verified stage dimensions: ${stageBox.width}x${stageBox.height} at (${stageBox.x}, ${stageBox.y})`);

    const stageEl = await page.$('#stage');
    const startTime = Date.now();

    console.log(`Capturing frames 0 to ${totalFrames - 1}...`);

    for (let f = 0; f < totalFrames; f++) {
      // Seek timeline to exact frame
      await page.evaluate((frameIdx, fpsVal) => {
        window.seekFrame(frameIdx, fpsVal);
      }, f, FPS);

      const frameFilename = `frame_${String(f).padStart(4, '0')}.png`;
      const framePath = path.join(tempDir, frameFilename);

      await stageEl.screenshot({
        path: framePath,
        type: 'png',
        omitBackground: false
      });

      const now = Date.now();
      // Log progress every 30 frames (1 second of animation) or on last frame
      if (f % 30 === 0 || f === totalFrames - 1) {
        const percent = ((f + 1) / totalFrames * 100).toFixed(1);
        const elapsedSec = ((now - startTime) / 1000).toFixed(1);
        const secPerFrame = (now - startTime) / (f + 1);
        const remainingSec = ((totalFrames - (f + 1)) * secPerFrame / 1000).toFixed(1);
        const animTime = (f / FPS).toFixed(2);
        console.log(`[Frame ${String(f).padStart(3, ' ')}/${totalFrames}] (${percent.padStart(5, ' ')}%) | Ad Time: ${animTime}s / ${DURATION}s | Elapsed: ${elapsedSec}s | ETA: ${remainingSec}s`);
      }
    }

    const captureDuration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\nFrame capture finished in ${captureDuration}s.`);

    await browser.close();

    // Assemble MP4 with FFmpeg (with audio stream)
    console.log('\nAssembling MP4 with FFmpeg...');
    const ffmpegArgs = [
      '-y',
      '-framerate', String(FPS),
      '-i', path.join(tempDir, 'frame_%04d.png')
    ];

    if (audioTrackPath && fs.existsSync(audioTrackPath)) {
      ffmpegArgs.push('-i', audioTrackPath);
      ffmpegArgs.push('-c:a', 'aac', '-b:a', '192k', '-shortest');
    }

    ffmpegArgs.push(
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-crf', String(CRF),
      '-preset', 'slow',
      '-movflags', '+faststart',
      outputFile
    );

    console.log(`Executing: ${ffmpegPath} ${ffmpegArgs.join(' ')}`);
    execFileSync(ffmpegPath, ffmpegArgs, { stdio: 'inherit' });

    if (fs.existsSync(outputFile)) {
      const stats = fs.statSync(outputFile);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`\nSUCCESS: Rendered video saved to:`);
      console.log(`  -> ${outputFile} (${sizeMB} MB)`);
    } else {
      throw new Error(`Output file was not created: ${outputFile}`);
    }

    // Cleanup temporary frames unless requested to keep
    if (!KEEP_FRAMES) {
      console.log('Cleaning up temporary frame images...');
      fs.rmSync(tempDir, { recursive: true, force: true });
      console.log('Temporary frames cleaned.');
    } else {
      console.log(`Frames kept at: ${tempDir}`);
    }

  } catch (err) {
    if (browser) await browser.close();
    throw err;
  }
}

async function main() {
  const chromePath = resolveChromePath();
  const ffmpegPath = resolveFFmpegPath();

  console.log('ENLESWEB Meta Ads Video Renderer (with Audio/SFX)');
  console.log('------------------------------------------------');
  console.log(`Chrome: ${chromePath}`);
  console.log(`FFmpeg: ${ffmpegPath}`);

  // Prepare audio track (procedural or custom)
  const audioTrackPath = prepareAudioTrack();
  if (audioTrackPath) {
    console.log(`Audio Track: ${audioTrackPath}`);
  } else {
    console.log(`Audio: Disabled (Silent video)`);
  }

  const configs = [];

  if (RENDER_ALL || TARGET_RATIO === '9x16') {
    configs.push({
      ratio: '9x16',
      width: 1080,
      height: 1920,
      outputFile: path.resolve(__dirname, 'enlesweb-ads-15s-a-9x16.mp4'),
      urlParams: 'clean&pause'
    });
  }

  if (RENDER_ALL || TARGET_RATIO === '4x5') {
    configs.push({
      ratio: '4x5',
      width: 1080,
      height: 1350,
      outputFile: path.resolve(__dirname, 'enlesweb-ads-15s-a-4x5.mp4'),
      urlParams: 'clean&ratio=4x5&pause'
    });
  }

  const overallStart = Date.now();
  for (const config of configs) {
    await renderRatio(config, chromePath, ffmpegPath, audioTrackPath);
  }

  // Cleanup temporary audio file if generated
  if (audioTrackPath && audioTrackPath.includes('temp_audio_15s.wav') && fs.existsSync(audioTrackPath)) {
    fs.unlinkSync(audioTrackPath);
  }

  const overallDuration = ((Date.now() - overallStart) / 1000).toFixed(1);
  console.log('\n' + '='.repeat(60));
  console.log(`ALL RENDERS COMPLETED SUCCESSFULLY with AUDIO in ${overallDuration}s!`);
  console.log('='.repeat(60));
}

main().catch(err => {
  console.error('\nRENDER FAILED:', err);
  process.exit(1);
});
