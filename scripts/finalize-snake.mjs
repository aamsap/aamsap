import { readFile, writeFile } from 'node:fs/promises';

for (const theme of ['light', 'dark']) {
  const file = new URL(`../dist/contribution-snake-${theme}.svg`, import.meta.url);
  const svg = await readFile(file, 'utf8');
  if (!svg.includes('<svg') || !svg.includes('@keyframes')) throw new Error(`Missing snake animation: ${theme}`);
  const accessibility = '<title>My contributions, on a snack break</title><desc>An animated snake eats cells from aamsap\'s actual GitHub contribution calendar. Colors represent contribution intensity, not skill. Generated daily with Platane/snk.</desc>';
  // Appended after upstream styles so this wins without changing the solver's animation.
  const motion = '<style>@media(prefers-reduced-motion:reduce){*{animation:none!important}}</style>';
  const annotated = svg.replace(/(<svg\b[^>]*>)/, `$1${accessibility}`).replace('</svg>', `${motion}</svg>`);
  await writeFile(file, annotated);
  await writeFile(new URL(`../dist/contribution-snake-${theme}-static.svg`, import.meta.url), annotated.replace('</svg>', '<style>*{animation:none!important}</style></svg>'));
  console.log(`Prepared contribution-snake-${theme}.svg (${Buffer.byteLength(annotated)} bytes)`);
}
