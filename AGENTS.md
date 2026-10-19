# Round Builder: rules for AI agents

Kids' touch-first 3D block-building game (three.js). The repo root is deployed as-is to GitHub Pages on push to `main` (`.github/workflows/pages.yml`); the same push also builds an Android debug APK (`build-apk.yml`, Gradle, `app/`).
Requests come from children, so keep changes tiny and visible.

## Where things live
- `index.html` - game code, markup and CSS in one file. Loads `gate.js`.
- `assets/model-library.js` - reusable model definitions (animals, furniture). Edit only when a model changes.
- `PROJECT_STATE.md` - required content (do not trim the palette) and current controls. Read before changing gameplay.
- `dev/` - QA scenes and smoke tests (see `dev/README.md`).
- `gate.js` - family password screen. Do not change unless asked.
- `app/`, `build.gradle` - Android wrapper. Leave alone unless asked.

## Rules
1. Keep changes tiny; copy a neighbouring entry in `model-library.js` and adjust it.
2. Keep the full block/furniture/animal palette; never trim content for speed.
3. Do not hardcode model data in game code if it belongs in `model-library.js`.
4. No new dependencies or build tooling. A JS syntax error blanks the game.
5. Content requests go to `main`; bigger code changes go on a branch with a pull request.

## Checking
Serve the folder (`python3 -m http.server`) and open `index.html`. The password gate is skipped by setting localStorage `familyGamesUnlock` to the hash in `gate.js` (`e9ca42b535c4046696d89181ecb0964bf863dd96be1a8114fb78e255ede5d8b6`).
Run the matching scene or smoke test from `dev/` after a change.
