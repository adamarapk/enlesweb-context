/**
 * ENLESWEB Procedural Audio Synthesizer
 * 
 * Generates an 18.0-second studio-grade audio track with:
 * 1. Lo-fi / Upbeat modern groove (warm kicks, soft snaps, Rhodes chord swells)
 * 2. WhatsApp chime notifications at 0.22s, 0.55s, 0.88s
 * 3. Pop sound at 1.20s
 * 4. Cinematic subtle whooshes at scene transitions (2.0s, 4.5s, 8.0s, 11.4s, 14.6s)
 * 5. Tactile mouse click at 16.5s
 * 
 * Output: 44.1kHz 16-bit Stereo PCM WAV (100% royalty-free, zero external dependencies)
 */

const fs = require('fs');
const path = require('path');

function createWavHeader(dataLength, sampleRate = 44100, numChannels = 2, bitsPerSample = 16) {
  const header = Buffer.alloc(44);
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataLength, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  header.writeUInt16LE(1, 20);  // AudioFormat (1 for PCM)
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataLength, 40);

  return header;
}

function synthesizeAudio(durationSec = 18.0, sampleRate = 44100) {
  const totalSamples = Math.round(durationSec * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);

  // --- 1. Lo-Fi / Upbeat Rhythmic Music Bed (115 BPM) ---
  const bpm = 115;
  const beatSec = 60 / bpm; // ~0.5217s per beat
  const totalBeats = Math.floor(durationSec / beatSec);

  // Chord frequencies (Hz) for a chill, optimistic progression: Cmaj7 - Am7 - Dm7 - G7
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
    [220.00, 261.63, 329.63, 392.00], // Am7   (A3, C4, E4, G4)
    [293.66, 349.23, 440.00, 523.25], // Dm7   (D4, F4, A4, C5)
    [196.00, 246.94, 293.66, 349.23], // G7    (G3, B3, D4, F4)
  ];

  for (let b = 0; b < totalBeats; b++) {
    const beatTime = b * beatSec;
    const chordIdx = Math.floor(b / 4) % chords.length;
    const chordNotes = chords[chordIdx];

    // Chord pad note on beat 0 of each bar (every 4 beats)
    if (b % 4 === 0) {
      const padDuration = beatSec * 4;
      const startSamp = Math.floor(beatTime * sampleRate);
      const endSamp = Math.min(totalSamples, startSamp + Math.floor(padDuration * sampleRate));

      for (let i = startSamp; i < endSamp; i++) {
        const t = (i - startSamp) / sampleRate;
        // Smooth attack and release envelope
        const env = Math.sin((t / padDuration) * Math.PI) * 0.12;
        let s = 0;
        for (const freq of chordNotes) {
          s += Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(4 * Math.PI * freq * t);
        }
        left[i] += s * env;
        right[i] += s * env;
      }
    }

    // Warm kick on beats 0 and 2 of each bar
    if (b % 2 === 0) {
      const kickDur = 0.25;
      const startSamp = Math.floor(beatTime * sampleRate);
      const endSamp = Math.min(totalSamples, startSamp + Math.floor(kickDur * sampleRate));
      for (let i = startSamp; i < endSamp; i++) {
        const t = (i - startSamp) / sampleRate;
        const freq = 120 * Math.exp(-t * 22) + 45;
        const env = Math.exp(-t * 14) * 0.22;
        const s = Math.sin(2 * Math.PI * freq * t) * env;
        left[i] += s;
        right[i] += s;
      }
    }

    // Soft rim-snap / clap on beats 1 and 3 of each bar
    if (b % 2 === 1) {
      const snapDur = 0.12;
      const startSamp = Math.floor(beatTime * sampleRate);
      const endSamp = Math.min(totalSamples, startSamp + Math.floor(snapDur * sampleRate));
      for (let i = startSamp; i < endSamp; i++) {
        const t = (i - startSamp) / sampleRate;
        const env = Math.exp(-t * 38) * 0.15;
        const noise = (Math.random() * 2 - 1) * 0.7;
        const tone = Math.sin(2 * Math.PI * 880 * t) * 0.3;
        const s = (noise + tone) * env;
        left[i] += s;
        right[i] += s;
      }
    }

    // Soft shaker / hi-hat on every 8th note (sub-beat)
    const subTimes = [beatTime, beatTime + beatSec / 2];
    for (const st of subTimes) {
      const hatDur = 0.05;
      const startSamp = Math.floor(st * sampleRate);
      const endSamp = Math.min(totalSamples, startSamp + Math.floor(hatDur * sampleRate));
      for (let i = startSamp; i < endSamp; i++) {
        const t = (i - startSamp) / sampleRate;
        const env = Math.exp(-t * 80) * 0.06;
        const noise = (Math.random() * 2 - 1);
        const s = noise * env;
        left[i] += s * 0.8;
        right[i] += s * 1.1; // stereo spread
      }
    }
  }

  // --- 2. WhatsApp Notification Chimes & Phone Haptic Buzz (0.30s & 0.60s) ---
  const notifTimes = [0.30, 0.60];
  const notifFreqs = [
    [1567.9, 2093.0], // High G6 + C7
    [1760.0, 2349.3]  // High A6 + D7
  ];

  notifTimes.forEach((startTime, idx) => {
    const freqs = notifFreqs[idx];
    const dur = 0.40;
    const startSamp = Math.floor(startTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));

    // Chime
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const env = Math.exp(-t * 11) * 0.36;
      const s = (Math.sin(2 * Math.PI * freqs[0] * t) * 0.6 +
                 Math.sin(2 * Math.PI * freqs[1] * t) * 0.4) * env;
      left[i] += s * 1.05;
      right[i] += s * 0.95;
    }

    // Phone vibration haptic buzz (130Hz modulated)
    const vibDur = 0.12;
    const vibEnd = Math.min(totalSamples, startSamp + Math.floor(vibDur * sampleRate));
    for (let i = startSamp; i < vibEnd; i++) {
      const t = (i - startSamp) / sampleRate;
      const vibEnv = Math.sin((t / vibDur) * Math.PI) * 0.22;
      const vibTone = Math.sin(2 * Math.PI * 130 * t) * (0.5 + 0.5 * Math.sin(2 * Math.PI * 35 * t));
      left[i] += vibTone * vibEnv;
      right[i] += vibTone * vibEnv;
    }
  });

  // --- 3. Notification Count Pill Pop (0.90s) & Finger Screen Tap (1.40s) ---
  {
    // Counter pill pop at 0.90s
    const popTime = 0.90;
    const dur = 0.14;
    const startSamp = Math.floor(popTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const freq = 720 * Math.exp(-t * 20) + 320;
      const env = Math.exp(-t * 22) * 0.22;
      const s = Math.sin(2 * Math.PI * freq * t) * env;
      left[i] += s;
      right[i] += s;
    }
  }
  {
    // Tactile phone screen finger tap at 1.40s
    const tapTime = 1.40;
    const dur = 0.08;
    const startSamp = Math.floor(tapTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const env = Math.exp(-t * 55) * 0.32;
      const freq = 650 * Math.exp(-t * 30) + 180;
      const s = (Math.sin(2 * Math.PI * freq * t) + (Math.random() * 2 - 1) * 0.2) * env;
      left[i] += s;
      right[i] += s;
    }
  }

  // --- 4. Outgoing WhatsApp Message Pop (3.10s) & Delivered Double-Tick (3.45s) ---
  {
    // Message sent "whoosh-pop" at 3.10s
    const sendTime = 3.10;
    const dur = 0.12;
    const startSamp = Math.floor(sendTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const freq = 400 + 800 * (t / dur);
      const env = Math.sin((t / dur) * Math.PI) * 0.25;
      const s = Math.sin(2 * Math.PI * freq * t) * env;
      left[i] += s * 0.8;
      right[i] += s * 1.1; // stereo pan right (sent bubble is on right side)
    }
  }
  {
    // Delivered double tick chimes at 3.45s and 3.52s
    const tickTimes = [3.45, 3.52];
    tickTimes.forEach(tTime => {
      const dur = 0.05;
      const startSamp = Math.floor(tTime * sampleRate);
      const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
      for (let i = startSamp; i < endSamp; i++) {
        const t = (i - startSamp) / sampleRate;
        const env = Math.exp(-t * 80) * 0.20;
        const s = Math.sin(2 * Math.PI * 2600 * t) * env;
        left[i] += s * 0.7;
        right[i] += s * 1.2;
      }
    });
  }

  // --- 5. Cinematic Subtle Whooshes at Scene Transitions ---
  // Lockscreen unlock (1.50s), Scene 1B entry (2.00s), Showcase 1 (4.45s), Showcase 2 (7.95s), Showcase 3 (11.35s), Summary (14.55s)
  const whooshTimes = [1.50, 2.00, 4.45, 7.95, 11.35, 14.55];
  whooshTimes.forEach(wTime => {
    const dur = 0.35;
    const startSamp = Math.floor(wTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));

    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const p = t / dur; // 0 to 1
      const env = Math.sin(p * Math.PI) * 0.16;
      // Filtered noise with frequency modulation
      const noise = (Math.random() * 2 - 1);
      const mod = Math.sin(2 * Math.PI * (180 + p * 350) * t);
      const s = noise * mod * env;
      left[i] += s * (1 - p * 0.5);
      right[i] += s * (0.5 + p * 0.5);
    }
  });

  // --- 6. Tactile Mouse Click on WhatsApp CTA Button (16.50s & 16.65s) ---
  // Press down at 16.50s
  {
    const clickTime = 16.50;
    const dur = 0.04;
    const startSamp = Math.floor(clickTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const env = Math.exp(-t * 120) * 0.45;
      const s = Math.sin(2 * Math.PI * 2800 * t) * env;
      left[i] += s;
      right[i] += s;
    }
  }
  // Release click at 16.65s
  {
    const clickTime = 16.65;
    const dur = 0.03;
    const startSamp = Math.floor(clickTime * sampleRate);
    const endSamp = Math.min(totalSamples, startSamp + Math.floor(dur * sampleRate));
    for (let i = startSamp; i < endSamp; i++) {
      const t = (i - startSamp) / sampleRate;
      const env = Math.exp(-t * 150) * 0.35;
      const s = Math.sin(2 * Math.PI * 3400 * t) * env;
      left[i] += s;
      right[i] += s;
    }
  }

  // --- 6. Master Soft Limiting & Fade Out at 17.8s ---
  const fadeStart = Math.floor(17.6 * sampleRate);
  for (let i = 0; i < totalSamples; i++) {
    // Fade out at end
    if (i > fadeStart) {
      const fadeFactor = 1 - (i - fadeStart) / (totalSamples - fadeStart);
      left[i] *= fadeFactor;
      right[i] *= fadeFactor;
    }
    // Soft clip / limiter
    left[i] = Math.tanh(left[i]);
    right[i] = Math.tanh(right[i]);
  }

  // --- 7. Export 16-bit PCM Buffer ---
  const bytesPerSample = 2;
  const numChannels = 2;
  const dataByteLength = totalSamples * numChannels * bytesPerSample;
  const buffer = Buffer.alloc(dataByteLength);

  let offset = 0;
  for (let i = 0; i < totalSamples; i++) {
    const l = Math.max(-32767, Math.min(32767, Math.round(left[i] * 32767)));
    const r = Math.max(-32767, Math.min(32767, Math.round(right[i] * 32767)));
    buffer.writeInt16LE(l, offset);
    buffer.writeInt16LE(r, offset + 2);
    offset += 4;
  }

  const header = createWavHeader(dataByteLength, sampleRate, numChannels, 16);
  return Buffer.concat([header, buffer]);
}

function generateTrack(outputPath) {
  console.log('Synthesizing procedural 18.0s audio track...');
  const wavBuffer = synthesizeAudio(18.0, 44100);
  fs.writeFileSync(outputPath, wavBuffer);
  console.log(`Audio track saved to: ${outputPath} (${(wavBuffer.length / 1024).toFixed(1)} KB)`);
}

if (require.main === module) {
  const target = process.argv[2] || path.resolve(__dirname, 'audio_track.wav');
  generateTrack(target);
}

module.exports = { generateTrack, synthesizeAudio };
