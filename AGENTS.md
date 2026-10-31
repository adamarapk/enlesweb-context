# ATURAN EKOSISTEM ENLESWEB (CONTEXT MASTER PROTOCOL)

## ATURAN BAKU SINKRONISASI DOKUMENTASI (POST-COMMIT/PUSH BENCHMARK)

1. **Eksperimen Bebas di Sub-Folder:**
   Selama masih dalam tahap mengoding, debugging, atau bereksperimen di sub-folder mana pun (`layout-lab`, `enlesweb`, atau template), developer / AI **tidak perlu** menyentuh atau mengubah berkas master docs di `enlesweb-context-master`.
2. **Patokan Eksekusi (Benchmark Trigger):**
   **Begitu suatu update selesai di-commit dan di-push ke remote GitHub (`git push origin main`) di sub-folder mana pun**, developer / AI **WAJIB LANGSUNG**:
   - Memperbarui dokumentasi teknis proyek bersangkutan (misal `README.md`, `NOTES.md`, `DESIGN.md`).
   - Menyerap pembaruan tersebut ke **10 File Master Utama** di `enlesweb-context-master` (terutama `decision-log.md`, `summary.md`, `ENLESWEB-DOCS-V4.md`, `enlesweb-context-master.md`, dan `ENLESWEB-CONTEXT-PROGRESS-HISTORY.md`).
   - Menjalankan **Gerbang Audit Anti-Halusinasi**:
     ```powershell
     node scripts/sync-ecosystem.mjs --audit
     ```
   - Jika lulus 100% (0 error & 0 warning), lakukan auto-commit dan auto-push ke GitHub:
     ```powershell
     node scripts/sync-ecosystem.mjs --publish
     ```

---

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):
- Core filter, always on: `antislop`: `.agents/skills/antislop/SKILL.md`
- UI / visual: `antislop-ui`: `.agents/skills/antislop-ui/SKILL.md`
- Copy & text: `antislop-copywriting`: `.agents/skills/antislop-copywriting/SKILL.md`
- People: `antislop-human`: `.agents/skills/antislop-human/SKILL.md`
- Mobile / responsive: `antislop-layoutmobile`: `.agents/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `antislop-code`: `.agents/skills/antislop-code/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.
<!-- antislop:end -->
