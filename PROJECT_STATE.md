# Round Builder — Saved Project State

Saved so the game can be resumed later without rebuilding decisions from scratch.

## Current control target
- Minecraft-like mobile controls.
- Left thumbstick moves.
- Drag anywhere in the active game window to look.
- Tap in the active game window should do something useful: interact/build/select target as appropriate.
- Jump button on the right.
- USE button for furniture/animal interactions.
- Remove mode/button for deleting blocks.

## Required content — DO NOT TRIM
Keep the full palette available in normal builds.

### Blocks / building pieces
grass, wood, stone, brick, white, black, red, orange, yellow, green, blue, purple, pink, cyan, lime, brown, glass, water, sand

### Architectural pieces
doors, stairs, roofs, windows, fences

### Furniture / appliances / decor
bed, chair, table, couch, fridge, sink, stove, counter/cabinets, TV, lamp, toilet, bathtub, bookshelf, fireplace, rug, plants/trees

### Animals
chicken, pig, sheep, cow, cat, dog

## Animal style
Cute detailed voxel animals, not placeholder cubes.
- cow: cream/white body, dark spots, pink muzzle, ears, horns, legs, eyes/highlights, tail
- dog: cute face, ears, muzzle/nose, legs, tail
- cat: larger eyes, triangle ears, pink nose, legs, tail
- pig: snout/nostrils, ears, eyes, legs
- sheep: woolly cream body, darker face/ears/legs, cute eyes
- chicken: beak, comb, wings, eyes, legs

Petting animals should show floating heart particles.

## Scale / placement
- 1 block = 1.5 world units.
- Roughly 2 blocks = human height.
- First-person camera from player eye height.
- Furniture and animals should be realistically scaled.
- Directional furniture/animals face the player when placed, snapped to 90-degree increments.

## Performance / QA priorities
- Startup/initialization speed matters; runtime FPS is not the issue.
- Keep full visual quality.
- Reuse cached/persistent model definitions.
- Reuse shared materials/geometries.
- Keep rapid QA scenes and smoke tests.
- Do not trim content just to speed startup.
- Prefer hot-swapping/testing only the changed module.

## Persistent assets already added
- assets/model-library.js
- dev/qa-scenes.js
- dev/smoke-tests.js
- dev/debug-flags.js
- dev/README.md

## Resume instruction
When resuming work, preserve all content above unless explicitly asked to remove or replace it.
