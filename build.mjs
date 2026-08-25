#!/usr/bin/env node
/* Inlines css + all scripts into a single self-contained dist/start.html,
   handy for dropping on a Desktop or cloud drive as a browser start page. */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
let html = readFileSync(join(root, "index.html"), "utf8");

html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g,
  // remote stylesheets (Google Fonts) stay as links; only local css is inlined
  (m, href) => /^https?:/.test(href) ? m : `<style>\n${readFileSync(join(root, href), "utf8")}\n</style>`);

html = html.replace(/<script src="([^"]+)"><\/script>/g,
  (_, src) => `<script>\n${readFileSync(join(root, src), "utf8")}\n</script>`);

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist", "start.html"), html);
console.log("wrote dist/start.html", (html.length / 1024).toFixed(0) + " KB");
