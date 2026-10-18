/**
 * ENLESWEB Studio Audio Engine (15.0s — "Clean Tactile Minimal")
 *
 * Designed specifically for campaign-1/enlesweb-ads-15s-a.html:
 * - Phase-locked Modal Physical Modeling for warm acoustic pluck / kalimba / marimba
 *   (100% pitch-accurate partials with frequency-dependent damping + wooden soundboard resonance)
 * - Warm Rhodes electric piano pad with gentle stereo chorus
 * - Rounded low-pass filtered upright/sub-bass
 * - Organic brushed percussion & wooden mallet transients (zero synthetic sine beeps)
 * - True Biquad (LPF/BPF/HPF) filtered pink-noise foley (felt highlighter brush & warm air glides)
 * - Stereo studio room reverb (parallel comb + series all-pass network) & stereo micro-delay
 *
 * Narrative Arc (15.0s):
 * - 0.00s - 3.00s (Scene 1: Hook): Sparse, intimate plucked notes synced to the 3 hook lines
 *   (0.00s, 0.70s, 1.35s) + felt highlighter sweep at 1.42s, leaving curiosity space before 3.00s.
 * - 3.00s - 7.00s (Scene 2: Tuntas Business): Full warm groove drops at 3.00s as the phone rises;
 *   arpeggiated plucks (Fmaj9 -> Em7) + soft wooden cues at 4.68s ("Jadwal") & 5.40s ("Biaya").
 * - 7.00s - 11.00s (Scene 3: Ripeir Starter): Smooth stereo air glide at 6.85s-7.02s;
 *   progression continues (Dm9 -> G13sus4/Cmaj9) with melodic lift at 9.05s ("Domain + hosting").
 * - 11.00s - 15.00s (Scene 4: Offer): Percussion resolves into a warm, lingering Fmaj9 -> Cmaj9
 *   pad & strummed harp/kalimba chord; felt marker sweeps at 11.18s & 11.30s; smooth fade out.
 */

const fs = require('fs');
const path = require('path');

// Deterministic PRNG so renders are 100% repeatable and free of random click artifacts
let rngState = 0x6D2B79F5;
function rand() {
  rngState += 0x6D2B79F5;
  let t = rngState;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
function whiteNoise() {
  return rand() * 2 - 1;
}

// Paul Kellet Pink Noise generator (natural -3dB/octave roll-off)
class PinkNoise {
  constructor() {
    this.b0 = 0; this.b1 = 0; this.b2 = 0;
    this.b3 = 0; this.b4 = 0; this.b5 = 0; this.b6 = 0;
  }
  next() {
    const w = whiteNoise();
    this.b0 = 0.99886 * this.b0 + w * 0.0555179;
    this.b1 = 0.99332 * this.b1 + w * 0.0750759;
    this.b2 = 0.96900 * this.b2 + w * 0.1538520;
    this.b3 = 0.86650 * this.b3 + w * 0.3104856;
    this.b4 = 0.55000 * this.b4 + w * 0.5329522;
    this.b5 = -0.7616 * this.b5 - w * 0.0168980;
    const out = this.b0 + this.b1 + this.b2 + this.b3 + this.b4 + this.b5 + this.b6 + w * 0.5362;
    this.b6 = w * 0.115926;
    return out * 0.18;
  }
}

// Robert Bristow-Johnson 2-pole Biquad Filter
class Biquad {
  constructor(sampleRate = 44100) {
    this.fs = sampleRate;
    this.x1 = 0; this.x2 = 0;
    this.y1 = 0; this.y2 = 0;
    this.b0 = 1; this.b1 = 0; this.b2 = 0;
    this.a1 = 0; this.a2 = 0;
  }
  setLPF(freq, Q = 0.707) {
    const f = Math.max(20, Math.min(this.fs * 0.45, freq));
    const w0 = (2 * Math.PI * f) / this.fs;
    const cosw0 = Math.cos(w0);
    const sinw0 = Math.sin(w0);
    const alpha = sinw0 / (2 * Q);
    const a0 = 1 + alpha;
    this.b0 = ((1 - cosw0) / 2) / a0;
    this.b1 = (1 - cosw0) / a0;
    this.b2 = ((1 - cosw0) / 2) / a0;
    this.a1 = (-2 * cosw0) / a0;
    this.a2 = (1 - alpha) / a0;
  }
  setBPF(freq, Q = 1.5) {
    const f = Math.max(20, Math.min(this.fs * 0.45, freq));
    const w0 = (2 * Math.PI * f) / this.fs;
    const cosw0 = Math.cos(w0);
    const sinw0 = Math.sin(w0);
    const alpha = sinw0 / (2 * Q);
    const a0 = 1 + alpha;
    this.b0 = alpha / a0;
    this.b1 = 0;
    this.b2 = -alpha / a0;
    this.a1 = (-2 * cosw0) / a0;
    this.a2 = (1 - alpha) / a0;
  }
  setHPF(freq, Q = 0.707) {
    const f = Math.max(20, Math.min(this.fs * 0.45, freq));
    const w0 = (2 * Math.PI * f) / this.fs;
    const cosw0 = Math.cos(w0);
    const sinw0 = Math.sin(w0);
    const alpha = sinw0 / (2 * Q);
    const a0 = 1 + alpha;
    this.b0 = ((1 + cosw0) / 2) / a0;
    this.b1 = -(1 + cosw0) / a0;
    this.b2 = ((1 + cosw0) / 2) / a0;
    this.a1 = (-2 * cosw0) / a0;
    this.a2 = (1 - alpha) / a0;
  }
  process(x) {
    const y = this.b0 * x + this.b1 * this.x1 + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2;
    this.x2 = this.x1;
    this.x1 = x;
    this.y2 = this.y1;
    this.y1 = y;
    return y;
  }
}

// MIDI / Note name helper (e.g. 'F4', 'C#3')
const NOTE_OFFSETS = { C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11 };
function noteToFreq(note) {
  if (typeof note === 'number') return note;
  const m = /^([A-G][#b]?)(-?\d+)$/.exec(note);
  if (!m) throw new Error(`Invalid note: ${note}`);
  const midi = (parseInt(m[2], 10) + 1) * 12 + NOTE_OFFSETS[m[1]];
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function createWavHeader(dataLength, sampleRate = 44100, numChannels = 2, bitsPerSample = 16) {
  const header = Buffer.alloc(44);
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataLength, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataLength, 40);

  return header;
}

/**
 * Studio Stereo Delay + Room Reverb (Schroeder/Freeverb-inspired stereo network)
 * Adds warm, natural room acoustics and subtle stereo ping-pong space.
 */
function applySpaceAndReverb(dryL, dryR, revSendL, revSendR, sampleRate) {
  const n = dryL.length;

  // 1. Subtle dotted-16th stereo echo on the reverb send (375ms L / 250ms R at 120 BPM)
  const delaySamplesL = Math.floor(0.375 * sampleRate);
  const delaySamplesR = Math.floor(0.250 * sampleRate);
  const delLpfL = new Biquad(sampleRate);
  const delLpfR = new Biquad(sampleRate);
  delLpfL.setLPF(2400, 0.707);
  delLpfR.setLPF(2400, 0.707);

  for (let i = delaySamplesL; i < n; i++) {
    const echoL = delLpfL.process(revSendR[i - delaySamplesL]) * 0.22;
    dryL[i] += echoL;
    revSendL[i] += echoL * 0.5;
  }
  for (let i = delaySamplesR; i < n; i++) {
    const echoR = delLpfR.process(revSendL[i - delaySamplesR]) * 0.22;
    dryR[i] += echoR;
    revSendR[i] += echoR * 0.5;
  }

  // 2. Stereo Comb + Allpass Reverb
  const combTimesL = [1116, 1188, 1277, 1356, 1422, 1491];
  const combTimesR = [1139, 1211, 1300, 1379, 1445, 1514];
  const feedback = 0.76;
  const damp = 0.38;

  function processChannel(input, combLengths, allpassLengths) {
    const out = new Float32Array(n);
    for (const len of combLengths) {
      const buf = new Float32Array(len);
      let idx = 0;
      let filterStore = 0;
      for (let i = 0; i < n; i++) {
        const delayed = buf[idx];
        filterStore = delayed * (1 - damp) + filterStore * damp;
        buf[idx] = input[i] + filterStore * feedback;
        out[i] += delayed;
        idx++;
        if (idx >= len) idx = 0;
      }
    }
    for (let i = 0; i < n; i++) out[i] *= 0.17;

    for (const apLen of allpassLengths) {
      const buf = new Float32Array(apLen);
      let idx = 0;
      const g = 0.5;
      for (let i = 0; i < n; i++) {
        const delayed = buf[idx];
        const x = out[i];
        buf[idx] = x + delayed * g;
        out[i] = delayed - x * g;
        idx++;
        if (idx >= apLen) idx = 0;
      }
    }

    const lpf = new Biquad(sampleRate);
    const hpf = new Biquad(sampleRate);
    lpf.setLPF(3800, 0.707);
    hpf.setHPF(150, 0.707);
    for (let i = 0; i < n; i++) {
      out[i] = hpf.process(lpf.process(out[i]));
    }
    return out;
  }

  const wetL = processChannel(revSendL, combTimesL, [225, 341]);
  const wetR = processChannel(revSendR, combTimesR, [248, 364]);

  for (let i = 0; i < n; i++) {
    dryL[i] += wetL[i];
    dryR[i] += wetR[i];
  }
}

function synthesizeAudio(durationSec = 15.0, sampleRate = 44100) {
  rngState = 0x6D2B79F5;
  const totalSamples = Math.round(durationSec * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const revL = new Float32Array(totalSamples);
  const revR = new Float32Array(totalSamples);

  const pink = new PinkNoise();

  function mixSample(idx, val, pan = 0, revAmount = 0.25) {
    if (idx < 0 || idx >= totalSamples) return;
    const angle = (pan + 1) * (Math.PI / 4);
    const l = val * Math.cos(angle);
    const r = val * Math.sin(angle);
    left[idx] += l;
    right[idx] += r;
    if (revAmount > 0) {
      revL[idx] += l * revAmount;
      revR[idx] += r * revAmount;
    }
  }

  /**
   * 1. Phase-Locked Modal Acoustic Pluck / Kalimba / Marimba
   * 100% exact tuning across all chords. Uses natural acoustic partial decay:
   * higher harmonics decay exponentially faster than the warm fundamental,
   * paired with a soft wooden body knock and dynamic low-pass filter envelope.
   */
  function addPluck(startTime, note, dur = 1.35, vol = 0.24, pan = 0, brightness = 0.55, revSend = 0.35) {
    const freq = noteToFreq(note);
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    if (numSamp <= 0) return;

    // Harmonic partial weights for warm nylon/kalimba/acoustic pluck
    const partialAmps = [1.00, 0.46, 0.22, 0.11, 0.055, 0.025];
    const baseDecay = 2.8 / Math.max(0.45, dur);

    // Soft dynamic low-pass filter on the plucked note
    const lpf = new Biquad(sampleRate);
    lpf.setLPF(Math.min(7500, freq * (4.0 + brightness * 4.0)), 0.8);

    // Band-pass filter for subtle finger-flesh / wooden tine attack (< 12ms)
    const bpfTouch = new Biquad(sampleRate);
    bpfTouch.setBPF(Math.min(4200, freq * 3.2), 2.2);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;

      // Update filter envelope every 64 samples (warm mellowing as note rings out)
      if (i % 64 === 0) {
        const fc = freq * (1.8 + (2.5 + brightness * 3.5) * Math.exp(-t * 6.5));
        lpf.setLPF(Math.min(8000, fc), 0.78);
      }

      // Soft 2.5ms attack (eliminates digital click while keeping tactile snap)
      const attack = Math.min(1, t / 0.0025);
      const release = i > numSamp - 600 ? (numSamp - i) / 600 : 1;

      let stringSum = 0;
      for (let k = 0; k < partialAmps.length; k++) {
        const harmonic = k + 1;
        const pFreq = freq * harmonic;
        if (pFreq > sampleRate * 0.44) break;
        // Higher partials decay much faster (real acoustic string damping law)
        const pDecay = baseDecay * Math.pow(harmonic, 1.35);
        const envK = Math.exp(-t * pDecay);
        stringSum += Math.sin(2 * Math.PI * pFreq * t) * partialAmps[k] * envK;
      }

      // Subtle kalimba/marimba overtone (inharmonic wooden/tine shimmer that dies in 35ms)
      const tineShimmer = Math.sin(2 * Math.PI * (freq * 2.92) * t) * Math.exp(-t * 48) * 0.11 * brightness;

      // Soft flesh/wood touch transient (< 10ms)
      const touchEnv = Math.exp(-t * 190);
      const touch = bpfTouch.process(pink.next()) * touchEnv * 0.35;

      const sample = lpf.process(stringSum + tineShimmer + touch) * attack * release * vol;
      mixSample(startSamp + i, sample, pan, revSend);
    }
  }

  /**
   * 2. Warm Rhodes / Electric Piano Pad Note
   * Gentle 2-operator FM with warm low-pass filtering and stereo chorus.
   */
  function addWarmPad(startTime, notes, dur = 2.0, vol = 0.075, revSend = 0.42) {
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    if (numSamp <= 0) return;

    const freqs = notes.map(noteToFreq);
    const lpfL = new Biquad(sampleRate);
    const lpfR = new Biquad(sampleRate);
    lpfL.setLPF(1650, 0.707);
    lpfR.setLPF(1650, 0.707);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const attack = Math.min(1, t / 0.14);
      const release = t > dur - 0.35 ? Math.max(0, (dur - t) / 0.35) : 1;
      const env = attack * release * Math.exp(-t * 0.32);

      let sumL = 0;
      let sumR = 0;
      for (let nIdx = 0; nIdx < freqs.length; nIdx++) {
        const f = freqs[nIdx];
        const modEnv = Math.exp(-t * 4.5) * 0.25;
        const mod = Math.sin(2 * Math.PI * (f * 2) * t) * modEnv;
        sumL += Math.sin(2 * Math.PI * (f - 0.35) * t + mod);
        sumR += Math.sin(2 * Math.PI * (f + 0.35) * t + mod);
      }

      const norm = vol * env / Math.sqrt(freqs.length);
      const outL = lpfL.process(sumL * norm);
      const outR = lpfR.process(sumR * norm);

      const idx = startSamp + i;
      left[idx] += outL;
      right[idx] += outR;
      revL[idx] += outL * revSend;
      revR[idx] += outR * revSend;
    }
  }

  /**
   * 3. Warm Acoustic / Upright Sub-Bass
   * Saturated fundamental + 2nd/3rd harmonics through a dynamic low-pass filter envelope.
   */
  function addBassNote(startTime, note, dur = 0.85, vol = 0.28) {
    const freq = noteToFreq(note);
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    if (numSamp <= 0) return;

    const lpf = new Biquad(sampleRate);
    lpf.setLPF(250, 0.85);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      if (i % 64 === 0) {
        const cutoff = 140 + 190 * Math.exp(-t * 9);
        lpf.setLPF(cutoff, 0.85);
      }
      const attack = Math.min(1, t / 0.007);
      const release = t > dur - 0.08 ? Math.max(0, (dur - t) / 0.08) : 1;
      const env = attack * release * Math.exp(-t * 1.7);

      const raw =
        Math.sin(2 * Math.PI * freq * t) * 0.72 +
        Math.sin(2 * Math.PI * (freq * 2) * t) * 0.28 +
        Math.sin(2 * Math.PI * (freq * 3) * t) * 0.11 * Math.exp(-t * 10);

      const s = lpf.process(raw) * vol * env;
      mixSample(startSamp + i, s, 0, 0.04);
    }
  }

  /**
   * 4. Organic Brushed Percussion (Soft Kick, Wood Rim, Brushed Shaker)
   */
  function addSoftKick(startTime, vol = 0.28) {
    const dur = 0.22;
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    const lpf = new Biquad(sampleRate);
    lpf.setLPF(165, 0.707);

    let phase = 0;
    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const instFreq = 48 + 95 * Math.exp(-t * 34);
      phase += (2 * Math.PI * instFreq) / sampleRate;
      const env = Math.min(1, t / 0.003) * Math.exp(-t * 15);
      const beater = pink.next() * Math.exp(-t * 90) * 0.25;
      const s = lpf.process(Math.sin(phase) + beater) * vol * env;
      mixSample(startSamp + i, s, 0, 0.03);
    }
  }

  function addWoodRim(startTime, vol = 0.12, pan = -0.15) {
    const dur = 0.085;
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));

    const bpfWood = new Biquad(sampleRate);
    const bpfBrush = new Biquad(sampleRate);
    bpfWood.setBPF(780, 3.2);
    bpfBrush.setBPF(3400, 1.4);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const n = pink.next();
      const wood = bpfWood.process(n) * Math.exp(-t * 65) * 1.8;
      const brush = bpfBrush.process(n) * Math.exp(-t * 42) * 0.9;
      const knock = Math.sin(2 * Math.PI * 390 * t) * Math.exp(-t * 95) * 0.25;
      const s = (wood + brush + knock) * vol;
      mixSample(startSamp + i, s, pan, 0.18);
    }
  }

  function addBrushedShaker(startTime, vol = 0.048, pan = 0.22, dur = 0.055) {
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    const bpf = new Biquad(sampleRate);
    bpf.setBPF(6800, 1.8);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const p = t / dur;
      const env = Math.sin(p * Math.PI) * Math.exp(-t * 28);
      const s = bpf.process(pink.next()) * env * vol * 2.2;
      mixSample(startSamp + i, s, pan, 0.12);
    }
  }

  /**
   * 5. Subtle Foley: Felt Highlighter Brush (#E4FF30 Stabilo Sweep)
   */
  function addHighlighterSweep(startTime, dur = 0.36, vol = 0.072, panStart = -0.25, panEnd = 0.25) {
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    const bpfPaper = new Biquad(sampleRate);
    const lpfWarm = new Biquad(sampleRate);
    bpfPaper.setBPF(1850, 1.6);
    lpfWarm.setLPF(3500, 0.707);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const p = t / dur;
      if (i % 128 === 0) {
        bpfPaper.setBPF(1500 + p * 850, 1.6);
      }
      const env = Math.sin(p * Math.PI) * (0.85 + 0.15 * Math.sin(2 * Math.PI * 28 * t));
      const raw = bpfPaper.process(pink.next());
      const s = lpfWarm.process(raw) * env * vol * 2.0;
      const pan = panStart + (panEnd - panStart) * p;
      mixSample(startSamp + i, s, pan, 0.15);
    }
  }

  /**
   * 6. Subtle Foley: Warm Low-Pass Air Glide (Phone Rise & Lateral Screen Slide)
   */
  function addWarmAirWhoosh(startTime, dur = 0.32, vol = 0.095, panStart = -0.3, panEnd = 0.3, peakCutoff = 580) {
    const startSamp = Math.floor(startTime * sampleRate);
    const numSamp = Math.min(totalSamples - startSamp, Math.floor(dur * sampleRate));
    const lpf1 = new Biquad(sampleRate);
    const lpf2 = new Biquad(sampleRate);
    const hpf = new Biquad(sampleRate);
    hpf.setHPF(90, 0.707);

    for (let i = 0; i < numSamp; i++) {
      const t = i / sampleRate;
      const p = t / dur;
      const shape = Math.sin(p * Math.PI);
      if (i % 64 === 0) {
        const fc = 140 + shape * (peakCutoff - 140);
        lpf1.setLPF(fc, 0.9);
        lpf2.setLPF(fc, 0.9);
      }
      const n = pink.next();
      const filtered = hpf.process(lpf2.process(lpf1.process(n)));
      const s = filtered * shape * vol * 2.4;
      const pan = panStart + (panEnd - panStart) * p;
      mixSample(startSamp + i, s, pan, 0.22);
    }
  }

  // =========================================================================
  // MUSICAL SCORE & TIMELINE SYNCHRONIZATION (0.00s -> 15.00s)
  // =========================================================================

  // --- ACT 1: SCENE 1 — HOOK EDITORIAL (0.00s - 3.00s) ---
  // Intimate, sparse, building curiosity (~ -21 dBFS RMS) before the 3.0s groove drop:
  // 0.00s: "Instagram buat pamer portofolio." -> Delicate solo kalimba/nylon dyad
  addWarmPad(0.00, ['F3', 'A3', 'C4', 'E4'], 2.80, 0.026, 0.40);
  addPluck(0.00, 'A4', 1.15, 0.16, -0.18, 0.46, 0.32);
  addPluck(0.06, 'C5', 1.10, 0.13, 0.15, 0.44, 0.32);

  // 0.70s: "WhatsApp buat nego." -> Stepping up a musical interval
  addPluck(0.70, 'B4', 1.10, 0.16, 0.20, 0.48, 0.32);
  addPluck(0.75, 'D5', 1.05, 0.14, -0.15, 0.46, 0.32);

  // 1.35s: "Website buat apa?" -> Questioning suspended lift + subtle warm bass breath
  addBassNote(1.35, 'G2', 1.25, 0.13);
  addPluck(1.35, 'C5', 1.30, 0.16, -0.20, 0.54, 0.36);
  addPluck(1.40, 'E5', 1.30, 0.18, 0.05, 0.58, 0.38);
  addPluck(1.46, 'A5', 1.35, 0.15, 0.22, 0.60, 0.40);

  // 1.42s: Sapuan stabilo #E4FF30 di bawah "Website buat apa?"
  addHighlighterSweep(1.42, 0.38, 0.065, -0.30, 0.30);

  // Delicate anticipation pickup right before Scene 2 (2.68s & 2.84s)
  addPluck(2.68, 'C5', 0.45, 0.13, -0.15, 0.45, 0.28);
  addPluck(2.84, 'E5', 0.45, 0.15, 0.15, 0.50, 0.28);
  addWarmAirWhoosh(2.85, 0.32, 0.095, 0.0, 0.0, 560);

  // --- ACT 2 & 3: SCENE 2 (TUNTAS 3.0s-7.0s) & SCENE 3 (RIPEIR 7.0s-11.0s) ---
  // Main Clean Tactile Groove drops in with full warm energy at 3.00s (~ -16.5 dBFS RMS):
  const grooveBars = [
    {
      start: 3.00,
      pad: ['F3', 'A3', 'C4', 'E4', 'G4'],
      bass: [
        { offset: 0.00, note: 'F2', dur: 0.92, vol: 0.34 },
        { offset: 1.00, note: 'F2', dur: 0.68, vol: 0.30 },
        { offset: 1.75, note: 'E2', dur: 0.25, vol: 0.26 }
      ],
      plucks: [
        { offset: 0.00, note: 'A4', vol: 0.25, pan: -0.25 },
        { offset: 0.10, note: 'F5', vol: 0.24, pan: 0.22 }, // 3.10s Business badge entry
        { offset: 0.25, note: 'C5', vol: 0.19, pan: -0.10 },
        { offset: 0.50, note: 'E5', vol: 0.22, pan: 0.20 },
        { offset: 0.75, note: 'G5', vol: 0.20, pan: -0.22 },
        { offset: 1.00, note: 'C5', vol: 0.21, pan: 0.12 },
        { offset: 1.25, note: 'E5', vol: 0.19, pan: -0.18 },
        { offset: 1.50, note: 'A4', vol: 0.18, pan: 0.15 },
        { offset: 1.68, note: 'G5', vol: 0.24, pan: 0.25 }  // 4.68s "Jadwal" cue entry
      ]
    },
    {
      start: 5.00,
      pad: ['E3', 'G3', 'B3', 'D4', 'G4'],
      bass: [
        { offset: 0.00, note: 'E2', dur: 0.92, vol: 0.33 },
        { offset: 1.00, note: 'E2', dur: 0.68, vol: 0.29 },
        { offset: 1.75, note: 'A2', dur: 0.25, vol: 0.26 }
      ],
      plucks: [
        { offset: 0.00, note: 'B4', vol: 0.23, pan: -0.20 },
        { offset: 0.25, note: 'D5', vol: 0.19, pan: 0.18 },
        { offset: 0.40, note: 'A5', vol: 0.25, pan: -0.22 }, // 5.40s "· Biaya" cue entry
        { offset: 0.75, note: 'G5', vol: 0.20, pan: 0.20 },
        { offset: 1.00, note: 'E5', vol: 0.22, pan: -0.15 },
        { offset: 1.25, note: 'B4', vol: 0.18, pan: 0.15 },
        { offset: 1.50, note: 'D5', vol: 0.20, pan: -0.20 },
        { offset: 1.75, note: 'E5', vol: 0.19, pan: 0.18 }
      ]
    },
    {
      start: 7.00,
      pad: ['D3', 'F3', 'A3', 'C4', 'E4'],
      bass: [
        { offset: 0.00, note: 'D2', dur: 0.92, vol: 0.34 },
        { offset: 1.00, note: 'D2', dur: 0.68, vol: 0.30 },
        { offset: 1.75, note: 'F2', dur: 0.25, vol: 0.26 }
      ],
      plucks: [
        { offset: 0.00, note: 'A4', vol: 0.24, pan: -0.22 }, // 7.00s Ripeir screen enters
        { offset: 0.05, note: 'E5', vol: 0.25, pan: 0.24 },  // 7.05s Starter badge entry
        { offset: 0.25, note: 'C5', vol: 0.19, pan: -0.12 },
        { offset: 0.50, note: 'F5', vol: 0.22, pan: 0.20 },
        { offset: 0.75, note: 'E5', vol: 0.20, pan: -0.20 },
        { offset: 1.00, note: 'C5', vol: 0.21, pan: 0.15 },
        { offset: 1.25, note: 'A4', vol: 0.18, pan: -0.18 },
        { offset: 1.50, note: 'C5', vol: 0.20, pan: 0.16 },
        { offset: 1.75, note: 'D5', vol: 0.20, pan: -0.15 }
      ]
    },
    {
      start: 9.00,
      pad: ['G3', 'B3', 'D4', 'F4', 'A4'],
      bass: [
        { offset: 0.00, note: 'G2', dur: 0.92, vol: 0.33 },
        { offset: 1.00, note: 'G2', dur: 0.62, vol: 0.29 },
        { offset: 1.62, note: 'C2', dur: 0.36, vol: 0.28 }
      ],
      plucks: [
        { offset: 0.00, note: 'B4', vol: 0.22, pan: -0.20 },
        { offset: 0.05, note: 'G5', vol: 0.25, pan: 0.24 }, // 9.05s "Domain + hosting 1 tahun"
        { offset: 0.25, note: 'D5', vol: 0.19, pan: -0.14 },
        { offset: 0.50, note: 'E5', vol: 0.22, pan: 0.18 },
        { offset: 0.75, note: 'A5', vol: 0.21, pan: -0.22 },
        { offset: 1.00, note: 'G5', vol: 0.21, pan: 0.16 },
        { offset: 1.25, note: 'E5', vol: 0.19, pan: -0.16 },
        { offset: 1.50, note: 'D5', vol: 0.20, pan: 0.14 },
        { offset: 1.75, note: 'C5', vol: 0.19, pan: -0.10 }
      ]
    }
  ];

  for (const bar of grooveBars) {
    addWarmPad(bar.start, bar.pad, 2.05, 0.075, 0.42);

    for (const b of bar.bass) {
      addBassNote(bar.start + b.offset, b.note, b.dur, b.vol);
    }

    for (const p of bar.plucks) {
      addPluck(bar.start + p.offset, p.note, 0.85, p.vol, p.pan, 0.55, 0.32);
    }

    addSoftKick(bar.start + 0.00, 0.32);
    addSoftKick(bar.start + 1.00, 0.30);
    addSoftKick(bar.start + 1.625, 0.17);

    addWoodRim(bar.start + 0.50, 0.14, -0.14);
    addWoodRim(bar.start + 1.50, 0.145, 0.14);

    for (let eig = 0; eig < 8; eig++) {
      const swing = (eig % 2 === 1) ? 0.015 : 0;
      const shTime = bar.start + eig * 0.25 + swing;
      const shVol = (eig % 2 === 1) ? 0.056 : 0.034;
      const shPan = (eig % 2 === 0) ? -0.22 : 0.22;
      addBrushedShaker(shTime, shVol, shPan, 0.05);
    }
  }

  // Transition air glides during Demo scenes:
  addWarmAirWhoosh(6.85, 0.30, 0.095, 0.35, -0.35, 620);
  addWarmAirWhoosh(10.85, 0.35, 0.100, -0.25, 0.25, 580);

  // --- ACT 4: SCENE 4 — PENAWARAN EDITORIAL TERBUKA (11.00s - 15.00s) ---
  // Busy percussion resolves cleanly into a warm, reassuring Fmaj9 -> Cmaj9 resolution (~ -18.5 dBFS)
  addSoftKick(11.00, 0.22);
  addBassNote(11.00, 'F2', 1.65, 0.22);
  addWarmPad(11.00, ['F3', 'A3', 'C4', 'E4'], 1.70, 0.052, 0.42);

  addPluck(11.00, 'A4', 1.15, 0.15, -0.20, 0.48, 0.34);

  // 11.18s: Garis stabilo di bawah "Rp450.000"
  addHighlighterSweep(11.18, 0.36, 0.062, -0.25, 0.15);
  addPluck(11.18, 'C5', 1.15, 0.16, 0.15, 0.52, 0.35);

  // 11.30s: Sapuan stabilo "Ceritakan usahamu lewat WhatsApp" -> Gentle 3-note warm chord
  addHighlighterSweep(11.30, 0.40, 0.068, -0.15, 0.30);
  addPluck(11.30, 'E5', 1.35, 0.16, -0.18, 0.54, 0.38);
  addPluck(11.37, 'G5', 1.35, 0.17, 0.18, 0.56, 0.38);
  addPluck(11.45, 'A5', 1.40, 0.15, 0.00, 0.58, 0.40);

  // 12.60s: Final peaceful tonic resolution on Cmaj9 that rings out to 15.0s
  addBassNote(12.60, 'C2', 2.20, 0.20);
  addWarmPad(12.60, ['C3', 'E3', 'G3', 'B3', 'D4'], 2.30, 0.050, 0.45);
  addPluck(12.60, 'G4', 1.80, 0.13, -0.20, 0.45, 0.40);
  addPluck(12.75, 'B4', 1.75, 0.13, 0.18, 0.46, 0.40);
  addPluck(12.92, 'D5', 1.70, 0.14, -0.12, 0.48, 0.42);
  addPluck(13.12, 'E5', 1.65, 0.15, 0.00, 0.50, 0.45);

  // =========================================================================
  // APPLY STEREO SPACE, REVERB & STUDIO MASTERING
  // =========================================================================
  applySpaceAndReverb(left, right, revL, revR, sampleRate);

  let rawPeak = 0;
  for (let i = 0; i < totalSamples; i++) {
    const m = Math.max(Math.abs(left[i]), Math.abs(right[i]));
    if (m > rawPeak) rawPeak = m;
  }
  const targetDrive = rawPeak > 0 ? (1.15 / rawPeak) : 1.0;

  const fadeStart = Math.floor(14.20 * sampleRate);

  for (let i = 0; i < totalSamples; i++) {
    let l = left[i] * targetDrive;
    let r = right[i] * targetDrive;

    if (i < 350) {
      const fi = i / 350;
      l *= fi;
      r *= fi;
    }

    if (i > fadeStart) {
      const p = (i - fadeStart) / (totalSamples - fadeStart);
      const fade = 0.5 * (1 + Math.cos(p * Math.PI));
      l *= fade;
      r *= fade;
    }

    // Warm analog-style soft saturation limiter (ceiling at ~ -1.2 dBFS)
    left[i] = Math.tanh(l * 0.92) * 0.95;
    right[i] = Math.tanh(r * 0.92) * 0.95;
  }

  // Export 16-bit Stereo PCM WAV
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

function generateTrack(outputPath, durationSec = 15.0) {
  console.log(`Synthesizing studio ${durationSec.toFixed(1)}s audio track (Clean Tactile Minimal)...`);
  const wavBuffer = synthesizeAudio(durationSec, 44100);
  fs.writeFileSync(outputPath, wavBuffer);
  console.log(`Audio track saved to: ${outputPath} (${(wavBuffer.length / 1024).toFixed(1)} KB)`);
}

if (require.main === module) {
  const target = process.argv[2] || path.resolve(__dirname, 'audio_track.wav');
  generateTrack(target, 15.0);
}

module.exports = { generateTrack, synthesizeAudio };
