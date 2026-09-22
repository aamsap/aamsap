import { mkdir, writeFile } from 'node:fs/promises';

const destination = new URL(process.env.PROFILE_ASSET_DIR ? `../${process.env.PROFILE_ASSET_DIR}/` : '../assets/', import.meta.url);
await mkdir(destination, { recursive: true });

function feature(dark, mobile) {
  const c = dark
    ? { bg: '#101416', surface: '#101416', card: '#182023', ink: '#e4e6e0', muted: '#a4aea9', line: '#607f89', grid: '#283739', accent: '#ff8171', accentInk: '#101416' }
    : { bg: '#e4e6e0', surface: '#e4e6e0', card: '#eef0eb', ink: '#182023', muted: '#505e60', line: '#748f99', grid: '#cbd3cf', accent: '#b63327', accentInk: '#ffffff' };
  const w = mobile ? 600 : 1200, h = mobile ? 650 : 430;
  const boardX = mobile ? 28 : 430, boardY = mobile ? 285 : 74;
  const columns = ['TO DO', 'IN PROGRESS', 'DONE'];
  const lanes = columns.map((label, i) => {
    const x = mobile ? boardX : boardX + i * 238, y = mobile ? boardY + i * 91 : boardY;
    return `<g>
      <rect x="${x}" y="${y}" width="${mobile ? 544 : 220}" height="${mobile ? 78 : 246}" fill="${c.surface}" stroke="${c.line}"/>
      <circle cx="${x + 20}" cy="${y + 25}" r="4" fill="${i === 2 ? c.accent : c.muted}"/>
      <text class="technical" x="${x + 33}" y="${y + 31}" fill="${c.ink}" font-size="${mobile ? 17 : 16}" font-weight="600">${label}</text>
      ${mobile ? '' : `<rect x="${x + 16}" y="${y + 146}" width="188" height="73" fill="${c.card}" stroke="${c.line}"/><path d="M${x + 30} ${y + 166}h104m-104 15h145m-145 15h68" stroke="${c.line}" stroke-width="2"/>`}
    </g>`;
  }).join('\n');
  const cardX = mobile ? 225 : 446, cardY = mobile ? 296 : 134;
  const cardW = mobile ? 330 : 188, cardH = mobile ? 56 : 72;
  const mid = mobile ? 'translate(0px,91px)' : 'translate(238px,0px)';
  const end = mobile ? 'translate(0px,182px)' : 'translate(476px,0px)';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
  <title id="title">Kanbaam — a little more done</title>
  <desc id="desc">Illustrated Kanbaam workflow: a task travels from To do through In progress to Done. A local-first kanban board with no account, server, or build step.</desc>
  <style>
    text{font-family:Arial,Helvetica,sans-serif}
    .technical{font-family:Consolas,monospace}
    .task{animation:move-task 10s cubic-bezier(.65,0,.35,1) infinite}
    .tick{animation:complete 10s linear infinite}
    @keyframes move-task{0%,12%{transform:translate(0,0);opacity:1}32%,45%{transform:${mid};opacity:1}66%,86%{transform:${end};opacity:1}92%{transform:${end};opacity:0}93%,100%{transform:translate(0,0);opacity:0}}
    @keyframes complete{0%,65%,92%,100%{opacity:0}68%,86%{opacity:1}}
    @media(prefers-reduced-motion:reduce){.task,.tick{animation:none}.tick{opacity:0}}
  </style>
  <defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="${c.grid}" stroke-width=".7"/></pattern></defs>
  <rect width="${w}" height="${h}" fill="${c.bg}"/>
  <rect x="16" y="16" width="${w - 32}" height="${h - 32}" fill="url(#grid)" stroke="${c.line}"/>
  <g stroke="${c.ink}" stroke-width="1.4" fill="none">
    <path d="M8 30H30V8M${w - 8} 30H${w - 30}V8M8 ${h - 30}H30V${h - 8}M${w - 8} ${h - 30}H${w - 30}V${h - 8}"/>
  </g>
  <text class="technical" x="${mobile ? 38 : 48}" y="55" font-size="${mobile ? 17 : 15}" fill="${c.muted}" letter-spacing="1.5">AAMSAP / FEATURED PROJECT</text>
  <text x="${mobile ? 34 : 42}" y="${mobile ? 135 : 153}" font-size="${mobile ? 78 : 66}" font-weight="900" letter-spacing="-4" fill="${c.ink}">KANBAAM<tspan fill="${c.accent}">.</tspan></text>
  <text class="technical" x="${mobile ? 38 : 48}" y="${mobile ? 183 : 201}" font-size="${mobile ? 27 : 23}" fill="${c.ink}">A LITTLE MORE DONE.</text>
  <g fill="${c.muted}" font-size="${mobile ? 24 : 22}">
    <text x="${mobile ? 32 : 42}" y="${mobile ? 228 : 245}">Open index.html.</text>
    <text x="${mobile ? 260 : 42}" y="${mobile ? 228 : 276}">Make room to focus.</text>
  </g>
  ${lanes}
  <g class="task">
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" fill="${c.accent}"/>
    <text x="${cardX + 14}" y="${cardY + (mobile ? 35 : 29)}" font-size="${mobile ? 23 : 18}" font-weight="600" fill="${c.accentInk}">Ship something.</text>
    ${mobile ? '' : `<text x="${cardX + 14}" y="${cardY + 53}" font-size="14" fill="${c.accentInk}">One small step.</text>`}
    <path class="tick" d="M${cardX + cardW - 37} ${cardY + cardH - 21}l7 7 12-14" fill="none" stroke="${c.accentInk}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M16 ${h - 73}H${w - 16}${mobile ? '' : `M830 ${h - 73}V${h - 16}`}" stroke="${c.line}"/>
  <text class="technical" x="${mobile ? 38 : 48}" y="${h - 43}" font-size="${mobile ? 18 : 16}" fill="${c.ink}">LOCAL-FIRST / NO LOGIN / YOUR DATA</text>
  <text class="technical" x="${mobile ? 38 : 855}" y="${h - (mobile ? 23 : 43)}" font-size="${mobile ? 13 : 15}" fill="${c.muted}">ILLUSTRATED WORKFLOW</text>
</svg>\n`;
}

for (const dark of [false, true]) for (const mobile of [false, true]) {
  const name = `kanbaam${mobile ? '-mobile' : ''}-${dark ? 'dark' : 'light'}`;
  const svg = feature(dark, mobile).replace(/[\t ]+$/gm, '');
  await writeFile(new URL(`${name}.svg`, destination), svg);
  await writeFile(new URL(`${name}-static.svg`, destination), svg.replace('</svg>', '<style>.task{animation:none!important}.tick{animation:none!important;opacity:0}</style></svg>'));
  console.log(`Built ${name} and still variant`);
}
