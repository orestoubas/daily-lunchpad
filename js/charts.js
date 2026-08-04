/* charts.js — small SVG chart builders (no libraries; works offline).
   Marks follow the dataviz spec: thin marks, 2px lines, hairline grid,
   recessive axes, hover tooltips, goal line as reference. */
"use strict";

/* Score-over-time line chart, y fixed 0–100 with a dashed goal line. */
function svgLineChart(points, colorVar, goal) {
  const W = 460, H = 190, padL = 34, padR = 10, padT = 12, padB = 24;
  const iw = W - padL - padR, ih = H - padT - padB;
  const ys = v => padT + ih - (v / 100) * ih;
  const n = points.length;
  const xs = i => (n <= 1) ? padL + iw / 2 : padL + (i / (n - 1)) * iw;

  let grid = "";
  for (const g of [0, 25, 50, 75, 100]) {
    grid += `<line x1="${padL}" x2="${W - padR}" y1="${ys(g)}" y2="${ys(g)}" stroke="var(--grid)" stroke-width="1"/>`;
    grid += `<text x="${padL - 6}" y="${ys(g) + 4}" text-anchor="end" font-size="10" fill="var(--text-muted)" style="font-variant-numeric:tabular-nums">${g}</text>`;
  }
  const goalLine = goal != null
    ? `<line x1="${padL}" x2="${W - padR}" y1="${ys(goal)}" y2="${ys(goal)}" stroke="var(--baseline)" stroke-width="1.5" stroke-dasharray="5 4"/>
       <text x="${W - padR}" y="${ys(goal) - 5}" text-anchor="end" font-size="10" fill="var(--text-muted)">goal ${goal}%</text>`
    : "";

  if (n === 0) {
    return `<svg viewBox="0 0 ${W} ${H}" role="img">${grid}${goalLine}
      <text x="${padL + iw / 2}" y="${padT + ih / 2}" text-anchor="middle" font-size="12" fill="var(--text-muted)">No sessions yet</text></svg>`;
  }

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${xs(i).toFixed(1)},${ys(p.y).toFixed(1)}`).join(" ");
  const dots = points.map((p, i) =>
    `<circle cx="${xs(i).toFixed(1)}" cy="${ys(p.y).toFixed(1)}" r="3.5" fill="${colorVar}"
       data-tt="${esc(p.label)}|${p.y}%" style="cursor:default"/>`).join("");
  const lastLabel = `<text x="${xs(n - 1).toFixed(1)}" y="${(ys(points[n - 1].y) - 8).toFixed(1)}"
       text-anchor="${n > 3 ? "end" : "middle"}" font-size="11" font-weight="600" fill="var(--text-secondary)">${points[n - 1].y}%</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" role="img">
    ${grid}${goalLine}
    <path d="${path}" fill="none" stroke="${colorVar}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}${lastLabel}
  </svg>`;
}

/* Completion heatmap: Monday-aligned columns, sequential blue steps. */
function svgHeatmap(cells) {
  const size = 13, gap = 3;
  const cols = Math.ceil(cells.length / 7);
  const W = cols * (size + gap) + 30, H = 7 * (size + gap) + 18;
  const steps = ["var(--grid)", "var(--seq-250)", "var(--seq-400)", "var(--seq-550)"];
  const dayNames = ["Mon", "", "Wed", "", "Fri", "", ""];
  let out = "";
  dayNames.forEach((dn, r) => {
    if (dn) out += `<text x="0" y="${r * (size + gap) + size - 2}" font-size="9" fill="var(--text-muted)">${dn}</text>`;
  });
  cells.forEach((c, i) => {
    const col = Math.floor(i / 7), row = i % 7;
    const x = 28 + col * (size + gap), y = row * (size + gap);
    out += `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="3"
      fill="${steps[c.count]}" ${c.weekend && c.count === 0 ? 'opacity="0.45"' : ""}
      data-tt="${c.key}|${c.count}/3 blocks"/>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" role="img">${out}</svg>`;
}

/* Horizontal accuracy bars (one entity color; length carries the value). */
function svgBarsH(items, colorVar, goal) {
  const rowH = 26, W = 460, padL = 150, padR = 46;
  const H = items.length * rowH + 8;
  const iw = W - padL - padR;
  let out = "";
  items.forEach((it, i) => {
    const y = i * rowH + 5;
    const w = Math.max(2, (it.pct / 100) * iw);
    out += `
      <text x="${padL - 8}" y="${y + 12}" text-anchor="end" font-size="11" fill="var(--text-secondary)">${esc(it.label)}</text>
      <rect x="${padL}" y="${y}" width="${iw}" height="16" rx="4" fill="var(--grid)"/>
      <rect x="${padL}" y="${y}" width="${w.toFixed(1)}" height="16" rx="4" fill="${colorVar}"
        data-tt="${esc(it.label)}|${it.pct}% (${it.n} answered)"/>
      <text x="${padL + iw + 6}" y="${y + 12}" font-size="11" fill="var(--text-secondary)" style="font-variant-numeric:tabular-nums">${it.pct}%</text>`;
  });
  const gx = padL + (goal / 100) * iw;
  out += `<line x1="${gx}" x2="${gx}" y1="0" y2="${H}" stroke="var(--baseline)" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img">${out}</svg>`;
}

/* Leitner box distribution (ordinal, single hue light→dark). */
function svgBoxes(counts) {
  const W = 460, H = 150, padL = 34, padB = 26, padT = 14;
  const iw = W - padL - 12, ih = H - padT - padB;
  const max = Math.max(1, ...counts);
  const steps = ["var(--seq-100)", "var(--seq-250)", "var(--seq-400)", "var(--seq-550)", "var(--seq-700)"];
  const labels = ["new/1", "2", "3", "4", "5"];
  const bw = Math.min(56, iw / counts.length - 14);
  let out = `<line x1="${padL}" x2="${W - 12}" y1="${padT + ih}" y2="${padT + ih}" stroke="var(--baseline)" stroke-width="1"/>`;
  counts.forEach((c, i) => {
    const x = padL + (i + 0.5) * (iw / counts.length) - bw / 2;
    const h = Math.max(c > 0 ? 3 : 0, (c / max) * ih);
    const y = padT + ih - h;
    out += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw}" height="${h.toFixed(1)}" rx="4"
      fill="${steps[i]}" data-tt="Box ${labels[i]}|${c} cards"/>
      <text x="${(x + bw / 2).toFixed(1)}" y="${padT + ih + 15}" text-anchor="middle" font-size="10" fill="var(--text-muted)">${labels[i]}</text>`;
    if (c > 0) out += `<text x="${(x + bw / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--text-secondary)" style="font-variant-numeric:tabular-nums">${c}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" role="img">${out}</svg>`;
}

/* Goal meter row (HTML, not SVG) */
function meterRow(label, colorVar, value, goal, valueText) {
  const v = value == null ? 0 : Math.min(100, value);
  return `
  <div class="goal" style="--gc:${colorVar}">
    <div class="g-label"><span class="dot"></span>${esc(label)}</div>
    <div class="meter">
      <div class="fill" style="width:${v}%"></div>
      <div class="goalmark" style="left:${goal}%"></div>
    </div>
    <div class="g-val">${valueText}</div>
  </div>`;
}

/* Tooltip wiring — call once after injecting charts into the DOM. */
function bindChartTooltips(root) {
  const tip = document.getElementById("tooltip");
  root.querySelectorAll("[data-tt]").forEach(el => {
    el.addEventListener("mouseenter", e => {
      const [l, v] = el.getAttribute("data-tt").split("|");
      tip.innerHTML = `<span class="tt-l">${esc(l)}</span> &nbsp;<b>${esc(v)}</b>`;
      tip.hidden = false;
    });
    el.addEventListener("mousemove", e => {
      tip.style.left = Math.min(window.innerWidth - 160, e.clientX + 12) + "px";
      tip.style.top = (e.clientY + 14) + "px";
    });
    el.addEventListener("mouseleave", () => { tip.hidden = true; });
  });
}
