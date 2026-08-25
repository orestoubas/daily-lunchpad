# Shared top nav — spec v1

Single source of truth for the nav bar shared by Orestis's four boards.
Do not redesign it — the point is that all four pages look identical at the top.

Owner: Orestis Vasileiadis. Last updated 25 August 2026.

## 1. The four destinations

| Label | URL | Owner / who updates it |
|---|---|---|
| Today | https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509 | Republished every weekday 06:00 by the Morning Brief scheduled task. Same URL always; no archive. |
| 12-Month | https://claude.ai/code/artifact/4429ddc0-b38a-4091-97ab-b4d4d69704c1 | The Twelve-Month Board. |
| Practice | https://orestoubas.github.io/daily-lunchpad/ | Morning Launchpad (this repo), deployed by GitHub Actions. Canonical copy — two older artifact copies exist and are stale; do not link them. |
| SGE Q4 | https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f | Sounds Greek Events Q4 season board. |

Order is fixed: **Today · 12-Month · Practice · SGE Q4**. Labels are fixed — do not
expand, translate, or "improve" them.

## 2. Rules

- **Light only.** Every page in this set is light-mode regardless of the viewer's OS or
  browser theme. Define the palette on bare `:root`; write no
  `@media (prefers-color-scheme: dark)` block and no `:root[data-theme="dark"]` block.
  Set an explicit background on `body`.
- **The current page is not a link.** Render it as `<span class="on">` with
  `aria-current="page"`. Every other item is an `<a>`.
- **Left slot** shows a short date, uppercase, mono:
  - on Today: the brief's own date — `Tue 25 Aug`
  - on the boards: the last-updated date — `Upd 25 Aug`
- The bar sits **above everything, full-bleed, outside the page's content wrapper**.
  Its inner container matches that page's own max-width.
- No logo, no hamburger, no icons, no dropdowns. Four items do not need them.

## 3. Tokens

| Token | Value | Use |
|---|---|---|
| ground | `#F4F4F1` | bar background |
| surface | `#FFFFFF` | |
| ink | `#16161D` | hover / active text on links |
| muted | `#65656F` | resting link text, date slot |
| hairline | `#E1E1DC` | bottom border |
| brass | `#9A7B12` | current page text + 2px underline |

Type: IBM Plex Mono, 11px, uppercase, letter-spacing `.14em`.
Height: 44px min, 13px vertical padding on items (9px under 640px).

Google Fonts is the only external host artifacts may load:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap">
```

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
@media (max-width:640px){
  .topbar-inner{padding:0 18px;gap:4px 18px;}
  .topbar ul{gap:16px;}
  .topbar a,.topbar .on{padding:9px 0;}
}
```

> Note for this repo: the app's own in-page header row used to be called `.topbar`;
> it was renamed to `.pagehead` so the shared spec CSS could be pasted verbatim.
> Keep `.topbar` reserved for the shared nav.

## 5. HTML — for the 12-Month Board

Place immediately after `<body>` (or, in an Artifact, as the first element in the
file), before the page's own wrapper.

```html
<nav class="topbar">
  <div class="topbar-inner">
    <span class="mark">Upd 25 Aug</span>
    <ul>
      <li><a href="https://claude.ai/code/artifact/46907712-3ad5-4d90-8017-47f5bab4e509">Today</a></li>
      <li><span class="on" aria-current="page">12-Month</span></li>
      <li><a href="https://orestoubas.github.io/daily-lunchpad/">Practice</a></li>
      <li><a href="https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f">SGE Q4</a></li>
    </ul>
  </div>
</nav>
```

For any other page, move the `<span class="on">` to that page's own item and turn
12-Month back into an `<a>`. This repo's copy lives in `index.html` with **Practice**
as the current item.

## 6. Email version

Gmail strips `<style>` blocks and `<svg>`. The email nav is a `<table>` with inline
styles only, sitting above the brief's date line. Arial substitutes for IBM Plex Mono
because webfonts do not load in Gmail.

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0"
       style="width:100%;max-width:640px;margin:0 auto 20px;
              border-bottom:1px solid #E1E1DC;background:#FFFFFF;">
  <tr>
    <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;
               font-size:11px;letter-spacing:1.4px;text-transform:uppercase;
               color:#65656F;">
      <span style="color:#9A7B12;font-weight:bold;">Today</span>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://claude.ai/code/artifact/4429ddc0-b38a-4091-97ab-b4d4d69704c1"
         style="color:#65656F;text-decoration:none;">12-Month</a>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://orestoubas.github.io/daily-lunchpad/"
         style="color:#65656F;text-decoration:none;">Practice</a>
      <span style="color:#E1E1DC;">&nbsp;·&nbsp;</span>
      <a href="https://claude.ai/code/artifact/66b2e783-b6f6-42f8-a20e-105f6a20a47f"
         style="color:#65656F;text-decoration:none;">SGE Q4</a>
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

Known limit: Gmail on Android may auto-invert colours in its own dark mode. Explicit
background on every container reduces it but cannot fully prevent it. The "open in
browser" link is the reliable escape hatch — that is why it sits directly under the
nav rather than in a footer.

## 7. Checklist before publishing a page in this set

- [ ] Nav is the first element, above the content wrapper
- [ ] Current page is a `<span class="on">`, not a link
- [ ] No dark-mode CSS anywhere in the file
- [ ] `body` sets an explicit background
- [ ] IBM Plex Mono linked from Google Fonts
- [ ] All four hrefs exactly as listed in section 1
- [ ] Below 640px the bar wraps rather than scrolling sideways

`test/smoke.mjs` section 9 asserts every item on this checklist for this repo.
