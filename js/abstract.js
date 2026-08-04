/* abstract.js — procedural EPSO-style abstract reasoning generator.
   Each item: a sequence of 5 figures following 2 hidden rules; pick figure 6
   from 4 options. Figures are rendered as inline SVG using currentColor,
   so they work in both themes. The generator is seeded, so questions are
   deterministic per day but effectively unlimited over time. */
"use strict";

const AB_SHAPES = ["circle", "square", "triangle", "diamond", "pentagon"];

function abShapePath(shape, filled) {
  const f = filled ? 'fill="currentColor" fill-opacity="0.85"' : 'fill="none"';
  const s = `stroke="currentColor" stroke-width="2.5" ${f}`;
  switch (shape) {
    case "circle":   return `<circle cx="45" cy="45" r="26" ${s}/>`;
    case "square":   return `<rect x="21" y="21" width="48" height="48" rx="3" ${s}/>`;
    case "triangle": return `<polygon points="45,17 72,68 18,68" ${s}/>`;
    case "diamond":  return `<polygon points="45,15 73,45 45,75 17,45" ${s}/>`;
    case "pentagon": return `<polygon points="45,16 73,38 62,71 28,71 17,38" ${s}/>`;
  }
  return "";
}

/* pointer line + arrowhead at a given angle (degrees, 0 = up) */
function abPointer(angleDeg) {
  return `<g transform="rotate(${angleDeg} 45 45)">
    <line x1="45" y1="45" x2="45" y2="10" stroke="currentColor" stroke-width="2.5"/>
    <polygon points="45,4 40,14 50,14" fill="currentColor"/>
  </g>`;
}

/* n small dots along the bottom */
function abDots(n) {
  let out = "";
  const total = n, gap = 13, x0 = 45 - ((total - 1) * gap) / 2;
  for (let i = 0; i < n; i++) {
    out += `<circle cx="${x0 + i * gap}" cy="83" r="3.4" fill="currentColor"/>`;
  }
  return out;
}

function abRenderState(st) {
  return `<svg viewBox="0 0 90 90" class="ab-cell" role="img">
    ${abShapePath(st.shape, st.filled)}
    ${st.pointer ? abPointer(st.angle) : ""}
    ${abDots(st.dots)}
  </svg>`;
}

const AB_KEY = s => `${s.shape}|${s.filled}|${s.pointer ? s.angle % 360 : "-"}|${s.dots}`;

/* Generate one abstract item from a seeded rng. */
function genAbstractItem(rng, idSuffix) {
  const wrap = (v, lo, hi) => lo + ((v - lo) % (hi - lo + 1) + (hi - lo + 1)) % (hi - lo + 1);

  // pick a rule combination
  const rotStepChoices = [45, 90, 135, -45, -90];
  const rotStep = rotStepChoices[Math.floor(rng() * rotStepChoices.length)];
  const dotStep = [1, -1, 2][Math.floor(rng() * 3)];
  const shapeCycle = rng() < 0.45
    ? seededShuffle(AB_SHAPES, rng).slice(0, 3)   // shape cycles through 3 shapes
    : [AB_SHAPES[Math.floor(rng() * AB_SHAPES.length)]]; // constant shape
  const fillAlternates = rng() < 0.45;
  const usePointer = shapeCycle.length === 1 || rng() < 0.5;

  const start = {
    angle: Math.floor(rng() * 8) * 45,
    dots: 1 + Math.floor(rng() * 3),
    filled: rng() < 0.5
  };

  const states = [];
  for (let i = 0; i < 6; i++) {
    states.push({
      shape: shapeCycle[i % shapeCycle.length],
      filled: fillAlternates ? (i % 2 === 0 ? start.filled : !start.filled) : start.filled,
      pointer: usePointer,
      angle: wrap(start.angle + i * rotStep, 0, 359),
      dots: wrap(start.dots + i * dotStep - 1, 0, 4) + 1   // stays within 1..5
    });
  }
  const correct = states[5];

  // distractors: perturb one attribute of the correct answer each
  const cand = [];
  cand.push(Object.assign({}, correct, { angle: wrap(correct.angle + (rotStep >= 0 ? -Math.abs(rotStep) : Math.abs(rotStep)), 0, 359) }));
  cand.push(Object.assign({}, correct, { dots: wrap(correct.dots + (dotStep > 0 ? -2 : 1) - 1, 0, 4) + 1 }));
  cand.push(Object.assign({}, states[4])); // "sequence stalls" trap
  cand.push(Object.assign({}, correct, { filled: !correct.filled }));
  cand.push(Object.assign({}, correct, {
    shape: AB_SHAPES[(AB_SHAPES.indexOf(correct.shape) + 1) % AB_SHAPES.length]
  }));

  const seen = new Set([AB_KEY(correct)]);
  const distractors = [];
  for (const c of cand) {
    if (distractors.length >= 3) break;
    const k = AB_KEY(c);
    if (!seen.has(k)) { seen.add(k); distractors.push(c); }
  }
  // extremely unlikely fallback
  while (distractors.length < 3) {
    const c = Object.assign({}, correct, { angle: wrap(correct.angle + 180, 0, 359), dots: wrap(correct.dots, 0, 4) + 1 });
    if (!seen.has(AB_KEY(c))) { seen.add(AB_KEY(c)); distractors.push(c); }
    else break;
  }

  const optionStates = seededShuffle([correct, ...distractors], rng);

  const ruleBits = [];
  if (shapeCycle.length > 1) ruleBits.push(`the outer shape cycles ${shapeCycle.join(" → ")}`);
  if (usePointer) ruleBits.push(`the pointer rotates ${Math.abs(rotStep)}° ${rotStep >= 0 ? "clockwise" : "counter-clockwise"} each step`);
  if (fillAlternates) ruleBits.push("the fill alternates between solid and outline");
  ruleBits.push(`the dots ${dotStep > 0 ? "increase by " + dotStep : "decrease by " + Math.abs(dotStep)} each step (wrapping between 1 and 5)`);

  return {
    kind: "abstract",
    id: "ab-" + idSuffix,
    prompt: "Which figure comes next in the sequence?",
    sequenceSvgs: states.slice(0, 5).map(abRenderState),
    options: optionStates.map(abRenderState),
    svgOptions: true,
    answer: optionStates.indexOf(correct),
    expl: "Rule: " + ruleBits.join("; ") + "."
  };
}
