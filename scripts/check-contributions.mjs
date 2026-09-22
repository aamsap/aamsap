import { appendFile } from 'node:fs/promises';

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: 'query($login:String!){user(login:$login){contributionsCollection{restrictedContributionsCount contributionCalendar{totalContributions}}}}',
    variables: { login: process.env.PROFILE_OWNER },
  }),
  signal: AbortSignal.timeout(30_000),
});
if (!response.ok) throw new Error(`Contribution visibility check: HTTP ${response.status}`);
const result = await response.json();
if (result.errors?.length) throw new Error('GitHub could not read contribution visibility');
const collection = result.data.user.contributionsCollection;
const summary = `Contribution calendar: ${collection.contributionCalendar.totalContributions} total; ${collection.restrictedContributionsCount} anonymized private/restricted contributions included.\n`;
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
