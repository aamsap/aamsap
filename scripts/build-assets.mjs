import { mkdir, writeFile } from 'node:fs/promises';

// Original vector artwork. No fonts, image services, or packages to install.
const assets = new URL(process.env.PROFILE_ASSET_DIR ? `../${process.env.PROFILE_ASSET_DIR}/` : '../assets/', import.meta.url);
await mkdir(assets, { recursive: true });

function header(dark, mobile) {
  const c = dark
    ? { bg: '#101416', ink: '#e4e6e0', muted: '#a4aea9', grid: '#283739', blue: '#607f89', red: '#ff8171' }
    : { bg: '#e4e6e0', ink: '#182023', muted: '#505e60', grid: '#cbd3cf', blue: '#748f99', red: '#b63327' };
  const w = mobile ? 600 : 1200;
  const h = mobile ? 490 : 410;
  const diagram = mobile ? '' : `
  <g transform="translate(882 193)" fill="none" stroke="${c.blue}" stroke-width="1.4">
    <circle class="orbit" r="110" stroke-dasharray="4 7"/>
    <circle r="76"/>
    <path d="M-143 0H143M0-133V133" stroke-dasharray="3 6"/>
    <path d="M-71-41L0-82L71-41V41L0 82L-71 41Z" stroke="${c.ink}" stroke-width="2"/>
    <path d="M-71-41L0 0L71-41M0 0V82" stroke="${c.ink}" stroke-width="2"/>
    <path class="signal" d="M0-82L71-41V41L0 82L-71 41V-41Z" pathLength="100" stroke="${c.red}" stroke-width="3" stroke-dasharray="8 92"/>
    <path d="M0-82V-125H95M71 41H136M-71 41H-136"/>
    <circle class="pulse" cy="-82" r="5" fill="${c.red}" stroke="${c.red}"/>
    <circle cx="71" cy="41" r="5" fill="${c.bg}" stroke="${c.ink}"/>
    <circle cx="-71" cy="41" r="5" fill="${c.bg}" stroke="${c.ink}"/>
    <path d="M-13-5L-3 5L16-16" stroke="${c.red}" stroke-width="3"/>
  </g>
  <g font-family="Consolas, monospace" font-size="14" fill="${c.muted}">
    <text x="986" y="73">01 / DATA</text>
    <text x="1029" y="239">02 / WEB</text>
    <text x="653" y="239">03 / AUTO</text>
    <text x="797" y="327">THREE PRACTICES.</text>
    <text x="797" y="347">ONE CONNECTED SYSTEM.</text>
  </g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
  <title id="title">Ilham Saputra — Aam</title>
  <desc id="desc">AI automation, data analytics, and web development. A moving signal connects the three practices. Animation pauses for reduced motion.</desc>
  <style>
    .orbit { animation: orbit 32s linear infinite; transform-origin: 0 0; }
    .signal { animation: signal 9s linear infinite; }
    .pulse { animation: pulse 3s ease-in-out infinite; }
    .delay-1 { animation-delay: 1s; }
    .delay-2 { animation-delay: 2s; }
    @keyframes orbit { to { transform: rotate(360deg); } }
    @keyframes signal { to { stroke-dashoffset: -100; } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
    @media (prefers-reduced-motion: reduce) { .orbit, .signal, .pulse { animation: none; } }
  </style>
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${c.grid}" stroke-width="0.7"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="${c.bg}"/>
  <rect x="16" y="16" width="${w - 32}" height="${h - 32}" fill="url(#grid)" stroke="${c.blue}" stroke-width="1"/>
  <g stroke="${c.ink}" stroke-width="1.4">
    <path d="M8 30H30V8M${w - 8} 30H${w - 30}V8M8 ${h - 30}H30V${h - 8}M${w - 8} ${h - 30}H${w - 30}V${h - 8}" fill="none"/>
  </g>
  <g font-family="Consolas, monospace" font-size="${mobile ? 17 : 15}" fill="${c.muted}" letter-spacing="1.5">
    <text x="${mobile ? 38 : 48}" y="55">AAMSAP / ENGINEERING THE EVERYDAY</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 93 : 110}" font-weight="900" letter-spacing="-5" fill="${c.ink}">
    <text x="${mobile ? 34 : 42}" y="${mobile ? 161 : 167}">ILHAM</text>
    <text x="${mobile ? 34 : 42}" y="${mobile ? 253 : 273}">SAPUTRA<tspan fill="${c.red}">.</tspan></text>
  </g>
  <g stroke="${c.blue}" fill="none">
    <path d="M${mobile ? 40 : 49} ${mobile ? 290 : 307}H${mobile ? 558 : 597}"/>
    <path d="M${mobile ? 40 : 49} ${mobile ? 281 : 298}V${mobile ? 299 : 316}M${mobile ? 558 : 597} ${mobile ? 281 : 298}V${mobile ? 299 : 316}"/>
  </g>
  <rect x="${mobile ? 197 : 205}" y="${mobile ? 279 : 296}" width="${mobile ? 205 : 224}" height="23" fill="${c.bg}"/>
  <text x="${mobile ? 299 : 317}" y="${mobile ? 297 : 313}" text-anchor="middle" font-family="Consolas, monospace" font-size="${mobile ? 19 : 17}" fill="${c.red}">YOU CAN CALL ME AAM</text>
  ${diagram}
  ${mobile ? `
  <g font-family="Consolas, monospace" font-size="20" fill="${c.ink}">
    <text x="40" y="347">01  AI AUTOMATION</text>
    <text x="40" y="380">02  DATA ANALYTICS</text>
    <text x="40" y="413">03  WEB DEVELOPMENT</text>
  </g>
  <g fill="${c.red}">
    <circle class="pulse" cx="538" cy="341" r="5"/>
    <circle class="pulse delay-1" cx="538" cy="374" r="5"/>
    <circle class="pulse delay-2" cx="538" cy="407" r="5"/>
  </g>
  <path d="M16 436H584" stroke="${c.blue}"/>
  <text x="40" y="463" font-family="Consolas, monospace" font-size="16" fill="${c.muted}">MALANG, INDONESIA / WORKING REMOTELY</text>` : `
  <path d="M16 366H1184M742 366V394" stroke="${c.blue}"/>
  <g font-family="Consolas, monospace" font-size="14" fill="${c.ink}" letter-spacing="0.4">
    <text x="48" y="385">AI AUTOMATION / DATA ANALYTICS / WEB DEVELOPMENT</text>
    <text x="770" y="385">MALANG, INDONESIA / WORKING REMOTELY</text>
  </g>`}
</svg>
`;
}

for (const dark of [false, true]) {
  for (const mobile of [false, true]) {
    const name = `header${mobile ? '-mobile' : ''}-${dark ? 'dark' : 'light'}.svg`;
    const svg = header(dark, mobile).replace(/[\t ]+$/gm, '');
    await writeFile(new URL(name, assets), svg);
    await writeFile(new URL(name.replace('.svg', '-static.svg'), assets), svg.replace('</svg>', '<style>*{animation:none!important}</style></svg>'));
    console.log(`Built ${assets.pathname}${name}`);
  }
}
