const CommandKind = {
  UNKNOWN: 0,
  LAYER_OPERATION: 1,
  BATCH_OPERATION: 2,
  0xDEADBEEF: 3,
  DRAW: 4,
  ERASE: 5,
  FILL: 6,
  BACKGROUND: 7,
  PASTE: 8,
  CUT: 9,
  INSERT_IMAGE: 10,
  STROKE: 11,
  RECT_FILL: 12,
  RECT_STROKE: 13,
  ARC_FILL: 14,
  ARC_STROKE: 15,
  FLOOD_FILL: 16,
  LIGHTING: 17,
  LAYER_ADD: 18,
  LAYER_REMOVE: 19,
  LAYER_LOCK: 20,
  LAYER_FLIP: 21,
  LAYER_MOVE: 22,
  LAYER_ORDER: 23,
  LAYER_RENAME: 24,
  LAYER_ROTATE: 25,
  LAYER_VISIBILITY: 26
};

export default CommandKind;
