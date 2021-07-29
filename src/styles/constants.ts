export const BREAK_POINTS = {
  spMin: 320,
  sp: 375,
  spLarge: 520,
  spMax: 767,
  tbMin: 768,
  tbMax: 959,
  pcMin: 960,
  pc: 1200,
  pcMidium: 1440,
  pcLarge: 1600,
  pcHuge: 2000,
} as const

export const mq = {
  // 320 ~
  spMin_gt: `(min-width: ${BREAK_POINTS.spMin}px)`,
  // ~ 520
  spLarge_lt: `(max-width: ${BREAK_POINTS.spLarge}px)`,
  // 520 ~
  spLarge_gt: `(min-width: ${BREAK_POINTS.spLarge}px)`,
  // 520 ~ 767
  spLarge_gt_spMax_lt: `(min-width: ${BREAK_POINTS.spLarge}px) and (max-width: ${BREAK_POINTS.spMax}px)`,
  // ~ 767
  spMax_lt: `(max-width: ${BREAK_POINTS.spMax}px)`,
  // 768 ~
  tbMin_gt: `(min-width: ${BREAK_POINTS.tbMin}px)`,
  // ~ 959
  tbMax_lt: `(max-width: ${BREAK_POINTS.tbMax}px)`,
  // 960 ~
  pcMin_gt: `(min-width: ${BREAK_POINTS.pcMin}px)`,
  // ~ 1200
  pc_lt: `(max-width: ${BREAK_POINTS.pc}px)`,
  // 1200 ~
  pc_gt: `(min-width: ${BREAK_POINTS.pc}px)`,
  // ~ 1440
  pcMidium_lt: `(max-width: ${BREAK_POINTS.pcMidium}px)`,
  // 1440 ~
  pcMidium_gt: `(min-width: ${BREAK_POINTS.pcMidium}px)`,
  // ~ 1600
  pcLarge_lt: `(max-width: ${BREAK_POINTS.pcLarge}px)`,
  // 1600 ~
  pcLarge_gt: `(min-width: ${BREAK_POINTS.pcLarge}px)`,
  // ~ 2000
  pcHuge_lt: `(max-width: ${BREAK_POINTS.pcHuge}px)`,
  // 2000 ~
  pcHuge_gt: `(min-width: ${BREAK_POINTS.pcHuge}px)`,
}
