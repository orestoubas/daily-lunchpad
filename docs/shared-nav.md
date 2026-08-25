# Shared top nav — spec v2

Paste this whole file into any Claude conversation that owns one of Orestis's
boards. It is the single source of truth for the nav bar. Do not redesign it —
the point is that all four pages look identical at the top.

Owner: Orestis Vasileiadis. Last updated 25 August 2026 (v2 — added gears).

---

## 1. The four destinations

Each label is followed by a small **gear** linking to the Claude conversation
that owns and updates that page. The gear is how Orestis gets from a board to
the place where he can change it.

| Label | Destination URL | Gear → Claude conversation |
|---|---|---|
| `Today` | `https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509` | `https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF` |
| `12-Month` | `https://claude.ai/code/artifact/4429ddc0-b38a-4091-97ab-b4d4d69704c1` | `https://claude.ai/cowork/cse_01N6ocPFsForeUxNooisPSDA` |
| `Practice` | `https://orestoubas.github.io/daily-lunchpad/` | `https://claude.ai/code/session_01UKzdN5dVrcuWxj5ZpkMXwo` |
| `SGE Q4` | `https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f` | `https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF` |

Notes: `Practice` points at the GitHub Pages copy — repo `orestoubas/daily-lunchpad`,
deployed by Actions. Two older artifact copies of the Launchpad exist and are stale;
never link them. `SGE Q4` currently shares the `Today` conversation because both pages
were built there — replace it if a dedicated events conversation is created.

Order is fixed: **Today · 12-Month · Practice · SGE Q4**. Labels are fixed —
do not expand, translate, or "improve" them.

---

## 2. Rules

- **Light only.** Every page in this set is light-mode regardless of the
  viewer's OS or browser theme. Define the palette on bare `:root` and write
  **no** `@media (prefers-color-scheme: dark)` block and **no**
  `:root[data-theme="dark"]` block. Set an explicit `background` on `body`.
- **The current page is not a link.** Render it as `<span class="on">` with
  `aria-current="page"`. Every other item is an `<a>`.
- **Left slot** shows a short date, uppercase, mono:
  - on `Today`: the brief's own date — `Tue 25 Aug`
  - on the boards: the last-updated date — `Upd 25 Aug`
- The bar sits **above everything**, full-bleed, outside the page's content
  wrapper. Its inner container matches that page's own max-width.
- **Every item carries a gear** immediately after its label, linking to that
  page's Claude conversation. The gear is a link even when the label is not
  (i.e. on the current page). 13x13, `#8E8E86`, brass on hover, always with an
  `aria-label`.
- No logo, no hamburger, no dropdowns, no icons other than the gear.

---

## 3. Tokens

```
ground    #F4F4F1   bar background
surface   #FFFFFF
ink       #16161D   hover / active text on links
muted     #65656F   resting link text, date slot
hairline  #E1E1DC   bottom border
brass     #9A7B12   current page text + 2px underline
type      IBM Plex Mono, 11px, uppercase, letter-spacing .14em
height    44px min, 13px vertical padding on items (9px under 640px)
gear      13x13 SVG, stroke currentColor 1.5, resting #8E8E86, hover brass
gap       7px between a label and its gear; 22px between items
```

Google Fonts is the only external host artifacts may load:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap">
```

---

## 4. CSS — copy verbatim

Change only `max-width` and `padding` in `.topbar-inner` to match the host page.
(In this repo they are `940px` / `0 18px`, matching `#app`.)

```css
.topbar{background:#F4F4F1;border-bottom:1px solid #E1E1DC;
  font-family:"IBM Plex Mono",ui-monospace,monospace;}
.topbar-inner{max-width:1040px;margin:0 auto;padding:0 28px;
  display:flex;align-items:center;justify-content:space-between;
  gap:20px;min-height:44px;flex-wrap:wrap;}
.topbar .mark{font-size:11px;letter-spacing:.14em;text-transform:uppercase;
  color:#65656F;white-space:nowrap;}
.topbar ul{display:flex;gap:22px;list-style:none;margin:0;padding:0;flex-wrap:wrap;}
.topbar a,.topbar .on{font-size:11px;letter-spacing:.14em;text-transform:uppercase;
  text-decoration:none;white-space:nowrap;display:inline-block;
  padding:13px 0;border-bottom:2px solid transparent;}
.topbar a{color:#65656F;}
.topbar a:hover,.topbar a:focus-visible{color:#16161D;}
.topbar a:focus-visible{outline:2px solid #9A7B12;outline-offset:2px;}
.topbar .on{color:#9A7B12;border-bottom-color:#9A7B12;}
.topbar li{display:flex;align-items:center;gap:7px;}
.topbar .gear{display:inline-flex;align-items:center;color:#8E8E86;padding:13px 0;
  border-bottom:2px solid transparent;line-height:0;}
.topbar .gear:hover,.topbar .gear:focus-visible{color:#9A7B12;}
.topbar .gear:focus-visible{outline:2px solid #9A7B12;outline-offset:2px;}
@media (max-width:640px){
  .topbar-inner{padding:0 18px;gap:4px 18px;}
  .topbar ul{gap:16px;}
  .topbar a,.topbar .on{padding:9px 0;}
}
```

---

## 5. HTML — for the 12-Month Board

Place immediately after `<body>` (or, in an Artifact, as the first element in
the file), before the page's own wrapper.

```html
<nav class="topbar">
  <div class="topbar-inner">
    <span class="mark">Upd 25 Aug</span>
    <ul>
      <li><a href="https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509">Today</a><a class="gear" href="https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF" title="Open the Claude conversation for Today" aria-label="Open the Claude conversation for Today"><svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3.1"/><path d="M13.0 8h1.4M1.6 8h1.4M8 13.0v1.4M8 1.6v1.4M11.54 4.46l.99-.99M3.47 12.53l.99-.99M11.54 11.54l.99.99M3.47 3.47l.99.99"/></svg></a></li>
      <li><span class="on" aria-current="page">12-Month</span><a class="gear" href="https://claude.ai/cowork/cse_01N6ocPFsForeUxNooisPSDA" title="Open the Claude conversation for 12-Month" aria-label="Open the Claude conversation for 12-Month"><svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3.1"/><path d="M13.0 8h1.4M1.6 8h1.4M8 13.0v1.4M8 1.6v1.4M11.54 4.46l.99-.99M3.47 12.53l.99-.99M11.54 11.54l.99.99M3.47 3.47l.99.99"/></svg></a></li>
      <li><a href="https://orestoubas.github.io/daily-lunchpad/">Practice</a><a class="gear" href="https://claude.ai/code/session_01UKzdN5dVrcuWxj5ZpkMXwo" title="Open the Claude conversation for Practice" aria-label="Open the Claude conversation for Practice"><svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3.1"/><path d="M13.0 8h1.4M1.6 8h1.4M8 13.0v1.4M8 1.6v1.4M11.54 4.46l.99-.99M3.47 12.53l.99-.99M11.54 11.54l.99.99M3.47 3.47l.99.99"/></svg></a></li>
      <li><a href="https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f">SGE Q4</a><a class="gear" href="https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF" title="Open the Claude conversation for SGE Q4" aria-label="Open the Claude conversation for SGE Q4"><svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3.1"/><path d="M13.0 8h1.4M1.6 8h1.4M8 13.0v1.4M8 1.6v1.4M11.54 4.46l.99-.99M3.47 12.53l.99-.99M11.54 11.54l.99.99M3.47 3.47l.99.99"/></svg></a></li>
    </ul>
  </div>
</nav>
```

For any other page, move the `<span class="on">` to that page's own item and
turn `12-Month` back into an `<a>`. This repo's copy lives in `index.html` with
**Practice** as the current item.

---

## 6. Email version

Gmail strips `<style>` blocks and `<svg>`. The email nav is a `<table>` with
inline styles only, sitting above the brief's date line. Arial substitutes for
IBM Plex Mono because webfonts do not load in Gmail, and the gear is the
unicode character `&#9881;` (U+2699) because Gmail strips inline SVG.

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0"
       style="width:100%;max-width:640px;margin:0 auto 20px;
              border-bottom:1px solid #E1E1DC;background:#FFFFFF;">
  <tr>
    <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;
               font-size:11px;letter-spacing:1.4px;text-transform:uppercase;
               color:#65656F;">
      <span style="color:#9A7B12;font-weight:bold;">Today</span>
      <a href="https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF" style="color:#8E8E86;text-decoration:none;">&#9881;</a>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://claude.ai/code/artifact/4429ddc0-b38a-4091-97ab-b4d4d69704c1"
         style="color:#65656F;text-decoration:none;">12-Month</a>
      <a href="https://claude.ai/cowork/cse_01N6ocPFsForeUxNooisPSDA" style="color:#8E8E86;text-decoration:none;">&#9881;</a>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://orestoubas.github.io/daily-lunchpad/"
         style="color:#65656F;text-decoration:none;">Practice</a>
      <a href="https://claude.ai/code/session_01UKzdN5dVrcuWxj5ZpkMXwo" style="color:#8E8E86;text-decoration:none;">&#9881;</a>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f"
         style="color:#65656F;text-decoration:none;">SGE Q4</a>
      <a href="https://claude.ai/cowork/cse_01QdM8idBWKbDwTYu9CmfjsF" style="color:#8E8E86;text-decoration:none;">&#9881;</a>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
      <a href="https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509"
         style="color:#9A7B12;text-decoration:underline;">Open this brief in your browser &rarr;</a>
    </td>
  </tr>
</table>
```

Known limit: Gmail on Android may auto-invert colours in its own dark mode.
Explicit `background` on every container reduces it but cannot fully prevent
it. The "open in browser" link is the reliable escape hatch — that is why it
sits directly under the nav rather than in a footer.

---

## 7. Checklist before publishing a page in this set

- [ ] Nav is the first element, above the content wrapper
- [ ] Current page is a `<span class="on">`, not a link
- [ ] No dark-mode CSS anywhere in the file
- [ ] `body` sets an explicit background
- [ ] IBM Plex Mono linked from Google Fonts
- [ ] All four destination hrefs and all four gear hrefs exactly as in section 1
- [ ] Every item has a gear, including the current page
- [ ] Below 640px the bar wraps rather than scrolling sideways

---

## Appendix — notes from this repo (not part of the spec)

`test/smoke.mjs` section 9 asserts every item on the section-7 checklist
automatically, so a future change cannot silently break the bar.

**The app's own in-page header row was renamed.** It used to use the class
`.topbar`, which collides with the shared nav. It is now `.pagehead`. Keep
`.topbar` reserved for the shared nav on every page in this set.

**Two open points for the spec owner**, both shipped as written rather than
silently changed:

1. *The section-5 SVG draws a sun, not a gear.* It is a circle with eight
   straight radial spokes — no teeth — so at 13px it reads as a sun or a
   brightness control. A drop-in replacement that reads as a gear at the same
   size, weight and colour (keep everything else identical, add
   `stroke-linejoin="round"`):

   ```html
   <circle cx="8" cy="8" r="2.5"/><path d="M6.58 3.63L6.78 1.62L9.22 1.62L9.42 3.63L10.09 3.90L11.65 2.62L13.38 4.35L12.10 5.91L12.37 6.58L14.38 6.78L14.38 9.22L12.37 9.42L12.10 10.09L13.38 11.65L11.65 13.38L10.09 12.10L9.42 12.37L9.22 14.38L6.78 14.38L6.58 12.37L5.91 12.10L4.35 13.38L2.62 11.65L3.90 10.09L3.63 9.42L1.62 9.22L1.62 6.78L3.63 6.58L3.90 5.91L2.62 4.35L4.35 2.62L5.91 3.90Z"/>
   ```

   Changing it means updating all four pages together, which is why it is
   flagged here rather than applied unilaterally.

2. *Gear padding is not reduced under 640px.* The mobile block lowers
   `.topbar a,.topbar .on` to `9px` but leaves `.topbar .gear` at `13px`,
   so each row is 8px taller than the labels need. Adding
   `.topbar .gear{padding:9px 0;}` to that block fixes it.
