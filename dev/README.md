Round Builder rapid QA harness

Purpose:
- avoid full-game QA after small edits
- keep deterministic test scenes
- keep pure smoke tests separate from renderer/assets
- keep debug toggles isolated

Suggested QA:
controls changes -> controls scene + joystick smoke tests
jump/collision -> jumping scene + jump smoke test
furniture interactions -> furniture scene only
animal interactions/models -> animals scene only

Do not rebuild model-library.js unless asset definitions changed.
