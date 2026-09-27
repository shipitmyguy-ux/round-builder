export const DEBUG_DEFAULTS = {
  showGridCoords:false,
  showPlayerPosition:false,
  showFacing:false,
  showHitboxes:false,
  showSelectedType:false
};

export function createDebugState(overrides={}) {
  return {...DEBUG_DEFAULTS,...overrides};
}
