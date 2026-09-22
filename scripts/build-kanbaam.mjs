import { mkdir, writeFile } from 'node:fs/promises';

const destination = new URL(process.env.PROFILE_ASSET_DIR ? `../${process.env.PROFILE_ASSET_DIR}/` : '../assets/', import.meta.url);
await mkdir(destination, { recursive: true });

function feature(dark, mobile) {
  const c = dark
    ? { bg: '#201b22', surface: '#2b242e', card: '#3b303d', ink: '#f5eef4', muted: '#c5b4c2', line: '#594552', accent: '#f3a1b3', accentInk: '#29201f', wave: '#624452' }
    : { bg: '#f8f2f5', surface: '#fffafc', card: '#ffffff', ink: '#332731', muted: '#715e6b', line: '#e4d4de', accent: '#ad304b', accentInk: '#ffffff', wave: '#ead5e1' };
  const w = mobile ? 600 : 1200, h = mobile ? 650 : 430;
  const boardX = mobile ? 28 : 430, boardY = mobile ? 285 : 74;
  const columns = ['To do', 'In progress', 'Done'];
  const lanes = columns.map((label, i) => {
    const x = mobile ? boardX : boardX + i * 238, y = mobile ? boardY + i * 91 : boardY;
    return `<g>
      <rect x="${x}" y="${y}" width="${mobile ? 544 : 220}" height="${mobile ? 78 : 246}" rx="14" fill="${c.surface}" stroke="${c.line}"/>
      <circle cx="${x + 20}" cy="${y + 25}" r="4" fill="${i === 2 ? c.accent : c.muted}"/>
      <text x="${x + 33}" y="${y + 31}" fill="${c.ink}" font-size="${mobile ? 19 : 18}" font-weight="600">${label}</text>
      ${mobile ? '' : `<rect x="${x + 16}" y="${y + 146}" width="188" height="73" rx="10" fill="${c.card}" stroke="${c.line}"/><path d="M${x + 30} ${y + 166}h104m-104 15h145m-145 15h68" stroke="${c.line}" stroke-width="5" stroke-linecap="round"/>`}
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
    .task{animation:move-task 10s cubic-bezier(.65,0,.35,1) infinite}
    .tick{animation:complete 10s linear infinite}
    @keyframes move-task{0%,12%{transform:translate(0,0);opacity:1}32%,45%{transform:${mid};opacity:1}66%,86%{transform:${end};opacity:1}92%{transform:${end};opacity:0}93%,100%{transform:translate(0,0);opacity:0}}
    @keyframes complete{0%,65%,92%,100%{opacity:0}68%,86%{opacity:1}}
    @media(prefers-reduced-motion:reduce){.task,.tick{animation:none}.tick{opacity:0}}
  </style>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="20" fill="${c.bg}" stroke="${c.line}"/>
  <g fill="none" stroke="${c.wave}" stroke-width="1.5">
    <path d="M0 ${h - 60}C280 ${h - 260} 480 ${h + 110} ${w} ${h - 130}"/>
    <path d="M0 ${h - 49}C280 ${h - 249} 480 ${h + 121} ${w} ${h - 119}"/>
    <path d="M0 ${h - 38}C280 ${h - 238} 480 ${h + 132} ${w} ${h - 108}"/>
  </g>
  <g fill="${c.accent}"><rect x="${mobile ? 32 : 42}" y="${mobile ? 35 : 50}" width="8" height="24" rx="3"/><rect x="${mobile ? 44 : 54}" y="${mobile ? 35 : 50}" width="8" height="35" rx="3"/><rect x="${mobile ? 56 : 66}" y="${mobile ? 35 : 50}" width="8" height="17" rx="3"/></g>
  <text x="${mobile ? 81 : 90}" y="${mobile ? 59 : 74}" font-size="19" fill="${c.muted}" letter-spacing="2">FEATURED PROJECT</text>
  <text x="${mobile ? 29 : 39}" y="${mobile ? 135 : 153}" font-size="${mobile ? 68 : 62}" font-weight="800" letter-spacing="-3" fill="${c.ink}">kanbaam<tspan fill="${c.accent}">.</tspan></text>
  <text x="${mobile ? 32 : 42}" y="${mobile ? 183 : 201}" font-size="${mobile ? 34 : 30}" font-weight="600" fill="${c.ink}">a little more done.</text>
  <g fill="${c.muted}" font-size="${mobile ? 24 : 22}">
    <text x="${mobile ? 32 : 42}" y="${mobile ? 228 : 245}">Open index.html.</text>
    <text x="${mobile ? 260 : 42}" y="${mobile ? 228 : 276}">Make room to focus.</text>
  </g>
  ${lanes}
  <g class="task">
    <rect x="${cardX}" y="${cardY + 5}" width="${cardW}" height="${cardH}" rx="10" fill="${c.accent}" opacity=".12"/>
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="10" fill="${c.accent}"/>
    <text x="${cardX + 14}" y="${cardY + (mobile ? 35 : 29)}" font-size="${mobile ? 23 : 18}" font-weight="600" fill="${c.accentInk}">Ship something.</text>
    ${mobile ? '' : `<text x="${cardX + 14}" y="${cardY + 53}" font-size="14" fill="${c.accentInk}">One small step.</text>`}
    <path class="tick" d="M${cardX + cardW - 37} ${cardY + cardH - 21}l7 7 12-14" fill="none" stroke="${c.accentInk}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M${mobile ? 28 : 42} ${h - 73}H${w - (mobile ? 28 : 42)}" stroke="${c.line}"/>
  <text x="${mobile ? 32 : 42}" y="${h - 43}" font-size="${mobile ? 19 : 18}" fill="${c.ink}" letter-spacing="1">LOCAL-FIRST / NO LOGIN / YOUR DATA</text>
  <text x="${mobile ? 32 : 920}" y="${h - (mobile ? 17 : 43)}" font-size="${mobile ? 14 : 13}" fill="${c.muted}" letter-spacing="1">ILLUSTRATED WORKFLOW</text>
</svg>\n`;
}

for (const dark of [false, true]) for (const mobile of [false, true]) {
  const name = `kanbaam${mobile ? '-mobile' : ''}-${dark ? 'dark' : 'light'}`;
  const svg = feature(dark, mobile).replace(/[\t ]+$/gm, '');
  await writeFile(new URL(`${name}.svg`, destination), svg);
  await writeFile(new URL(`${name}-static.svg`, destination), svg.replace('</svg>', '<style>.task{animation:none!important}.tick{animation:none!important;opacity:0}</style></svg>'));
  console.log(`Built ${name} and still variant`);
}
