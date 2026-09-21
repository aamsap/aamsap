import { readFile } from 'node:fs/promises';

// Publish only the named generated files. Preserve output history and other files.
// The source branch is never updated by this script.
const repository = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
if (!token || !/^[\w.-]+\/[\w.-]+$/.test(repository ?? '')) throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required');
const branch = 'output';
const animatedFiles = ['header-light.svg', 'header-dark.svg', 'header-mobile-light.svg', 'header-mobile-dark.svg', 'contribution-snake-light.svg', 'contribution-snake-dark.svg'];
const files = animatedFiles.flatMap(name => [name, name.replace('.svg', '-static.svg')]);

async function api(route, { method = 'GET', body, allowMissing = false } = {}) {
  const response = await fetch(`https://api.github.com/repos/${repository}/git/${route}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'X-GitHub-Api-Version': '2022-11-28' },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(30_000),
  });
  if (response.status === 404 && allowMissing) return null;
  if (!response.ok) throw new Error(`GitHub ${method} ${route}: HTTP ${response.status}`);
  return response.json();
}

// Validate every file before making any remote changes.
const content = await Promise.all(files.map(async path => {
  const svg = await readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
  if (!svg.includes('<svg') || !svg.includes('</svg>') || Buffer.byteLength(svg) > 2_000_000) throw new Error(`Invalid or oversized SVG: ${path}`);
  return { path, svg };
}));

const ref = await api(`ref/heads/${branch}`, { allowMissing: true });
const previous = ref ? await api(`commits/${ref.object.sha}`) : null;
const treeEntries = await Promise.all(content.map(async ({ path, svg }) => {
  const blob = await api('blobs', { method: 'POST', body: { content: svg, encoding: 'utf-8' } });
  return { path, mode: '100644', type: 'blob', sha: blob.sha };
}));
const tree = await api('trees', { method: 'POST', body: { ...(previous ? { base_tree: previous.tree.sha } : {}), tree: treeEntries } });
if (previous?.tree.sha === tree.sha) {
  console.log('Generated SVGs are unchanged; no output commit needed.');
} else {
  const commit = await api('commits', { method: 'POST', body: {
    message: 'Refresh profile animations', tree: tree.sha, parents: previous ? [previous.sha] : [],
    author: { name: 'github-actions[bot]', email: '41898282+github-actions[bot]@users.noreply.github.com' },
  } });
  await api(ref ? `refs/heads/${branch}` : 'refs', {
    method: ref ? 'PATCH' : 'POST',
    body: ref ? { sha: commit.sha, force: false } : { ref: `refs/heads/${branch}`, sha: commit.sha },
  });
  console.log(`Published ${files.length} SVGs to ${repository}/${branch} at ${commit.sha}`);
}
