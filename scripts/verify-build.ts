// Post-build SEO sanity checks. Run after `npm run build`: node scripts/verify-build.ts
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const files: string[] = [];
(function walk(dir: string) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(dist);

const titles = new Map<string, string>();
const descriptions = new Map<string, string>();
let problems = 0;
const fail = (msg: string) => {
  problems++;
  console.error('✗', msg);
};

for (const file of files) {
  const rel = '/' + file.slice(dist.length).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  const title = /<title>(.*?)<\/title>/s.exec(html)?.[1];
  const desc = /<meta name="description" content="(.*?)"/.exec(html)?.[1];
  if (!title) fail(`${rel}: missing <title>`);
  if (!desc) fail(`${rel}: missing meta description`);
  if (title && titles.has(title)) fail(`${rel}: duplicate title with ${titles.get(title)}`);
  if (desc && descriptions.has(desc)) fail(`${rel}: duplicate description with ${descriptions.get(desc)}`);
  if (title) titles.set(title, rel);
  if (desc) descriptions.set(desc, rel);

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(`${rel}: ${h1s} <h1> elements`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(m[1]!);
    } catch {
      fail(`${rel}: invalid JSON-LD`);
    }
  }

  if (rel.startsWith('/404')) continue;
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (alts.length !== 3) fail(`${rel}: expected 3 hreflang links, got ${alts.length}`);
  for (const [, , href] of alts) {
    const path = new URL(href!).pathname;
    const target = join(dist, path, 'index.html');
    if (!existsSync(target)) fail(`${rel}: hreflang target missing ${path}`);
    else if (!readFileSync(target, 'utf8').includes(`href="${new URL(rel, href).href}"`))
      fail(`${rel}: hreflang not reciprocal from ${path}`);
  }
  if (!/<link rel="canonical" href="[^"]+"/.test(html)) fail(`${rel}: missing canonical`);
}

assert.ok(existsSync(join(dist, 'robots.txt')), 'robots.txt');
assert.ok(existsSync(join(dist, 'sitemap-index.xml')), 'sitemap-index.xml');
console.log(`Checked ${files.length} pages.`);
if (problems) process.exit(1);
console.log('✓ unique titles/descriptions, one h1 each, valid JSON-LD, reciprocal hreflang, canonicals');
