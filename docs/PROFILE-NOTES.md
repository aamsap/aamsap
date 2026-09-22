# Profile notes

## Direction

An engineering drawing for a person who connects automation, analytics, and interfaces. Original animated banners echo the drafting-film palette, red annotations, and numbered sheets on Aam's existing portfolio. A color-matched contribution snake adds an arcade moment, and Shields.io badge rows make the toolkit scannable.

The reading order is designed for hiring: positioning and contact, an optional career-background disclosure, Kanbaam as the sole featured project, the working toolkit, and a separate AI tools section. The outcome section was removed at the owner's request. Section headings are unnumbered. The Kanbaam visual is an original animated illustration of a task moving across a board, not a screenshot or an interactive application. Its paper/ink palette, vermilion accent, fine grid, registration marks, square board geometry, and monospaced labels match the profile header. Desktop and phone compositions have still counterparts.

## Research and factual sources

Reviewed on 22 September 2026:

- [GitHub profile metadata](https://api.github.com/users/aamsap): name, location, professional focus, and portfolio URL.
- [Public repositories](https://api.github.com/users/aamsap/repos?per_page=100): project ownership, descriptions, languages, and repository links. Forks were not presented as original projects.
- Public manifest/source audit: Kanbaam supports Playwright, axe accessibility checks, and Lucide; Aamverse supports Three.js and React Three Fiber; foodnow supports Vue, Vite, and Sass; Manre supports FastAPI, MongoDB, Framer Motion, and React Query; Chimp Chart supports Express, Recharts, and Zod; the Tableau tool imports Streamlit and pandas.
- With the owner's explicit permission, private dependency manifests were also inspected. They support the additional Next.js, React Native, Expo, Supabase, PostgreSQL, Redis, Prisma, Drizzle, Fastify, Gemini/OpenAI SDKs, Vitest, Jest, Stripe, Resend, and Sentry badges. Only technology names are published. The repository-to-dependency mapping stays in the ignored local `.preview/` folder. Manifest presence is evidence of use in a repository, not a proficiency rating; boilerplate/transitive dependencies were not exhaustively added.
- Make, Zapier, Claude Code, Codex, OpenCode, Hermes, Antigravity, and Cursor were added from the owner's explicit tool list. Verified named logos are used for Make, Zapier, Claude, OpenCode, and Cursor. Codex, Hermes, and Antigravity use text badges to avoid missing or unrelated brand logos.
- [Personal portfolio](https://aam.excellentchimp.com/): professional email, LinkedIn, Malang location, remote/open-to-work status, work history, toolkit, and client outcomes. The 75% reduction, 2× processing volume, and up-to-15-hours saving are the owner's published case-study claims, not independently measured results. Their scope is retained in the README.
- [Kanbaam README](https://github.com/aamsap/Kanbaam#readme) and package manifest: local-first behavior, keyboard controls, JSON validation, and Playwright checks.
- [Chimp Chart README](https://github.com/aamsap/granite-chimp-charts#readme) and package manifest: dashboard concept, AI-assisted analysis, PDF reporting, and stack. Avoided repeating its unverified production-readiness and performance claims.
- [Tableau Workbook Copier](https://github.com/aamsap/bulk-copy-tableu): repository description and public file listing support the narrow Python/REST API summary. This repository has no README at the time of research.
- [GitHub's profile README guide](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme): repository naming, visibility, and root README requirements.
- [GitHub Markdown API](https://docs.github.com/en/rest/markdown/markdown): researched as a rendering option. Automatic approval review blocked submitting the draft because it includes personal contact details; validation uses a local preview instead.
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme) and [Awesome GitHub Profile](https://github.com/beydemirfurkan/awesome-github-profile): surveyed layout categories, restrained project curation, and self-contained SVG approaches. No template code or artwork was copied.
- [Shields.io static badges](https://shields.io/badges/static-badge): `flat-square` badges for project stacks and `for-the-badge` for toolkit and contact links. Badge colors match the profile; supported logos use their brand colors.
- [Simple Icons slugs](https://github.com/simple-icons/simple-icons/blob/master/slugs.md): checked logo availability. LinkedIn, Excel, Power BI, Tableau, and Playwright no longer have named logos in this collection at the research date, so their badges deliberately use labels without a nonexistent logo parameter.
- [Platane/snk](https://github.com/Platane/snk): chosen for its contribution-based SVG generation, compact files, customizable five-color palette, and theme variants. The original header is our own code; the contribution snake is generated by this credited third-party action.
- [Arcade Contribution Graph](https://github.com/abozanona/pacman-contribution-graph): researched Pac-Man and other arcade alternatives. Chose one snake visual for its fit with the restrained blueprint palette.
- [GitHub scheduled workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule) and [Git references API](https://docs.github.com/en/rest/git/refs): daily scheduling and generated-branch publication. No claim of guaranteed virality is made; the goal is recognizable, playful presentation.
- [GitHub private-contribution visibility](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/manage-visibility-settings-for-private-contributions-and-achievements): anonymized private activity can appear in the calendar without exposing repository names or contents. The account's public calendar already includes those counts. [The actual workflow run](https://github.com/aamsap/aamsap/actions/runs/35680606333) verified that its built-in token sees the private/restricted contribution counts too; no additional token or account-setting change was required. `scripts/check-contributions.mjs` records only aggregate totals in each workflow summary, using the same token and calendar as the snake generator.

## Publish

1. Create a **public** GitHub repository named **aamsap** under **aamsap**. The intended address is `https://github.com/aamsap/aamsap`.
2. Commit the root `README.md`, `.github/workflows/`, `scripts/`, and `assets/`. The checked-in header assets are local preview copies; live image URLs point to `output`.
3. Keep `README.md` at the repository root. GitHub displays it on the matching user profile once its requirements are met.
4. Run **Actions → Refresh profile visuals → Run workflow** once and confirm success. It publishes twenty SVGs to `output` (ten animated, ten still); no GitHub Pages website or personal access token is needed.
5. Check the profile in light and dark themes and on a phone. The `<picture>` element selects a theme and a compact composition; the default image is the light desktop banner.

This workspace started empty. The publication target is the public `aamsap/aamsap` repository; local preview files are excluded from commits.

## Verification

- Parsed all four SVG assets as XML successfully.
- Rendered the README locally with a GFM-capable Markdown parser and a GitHub-like stylesheet.
- Checked Chromium at 1100px and 390px in light and dark modes: all image variants load correctly, there is no page-level horizontal overflow, and the career disclosure opens.
- Visually inspected all four full-page previews.
- Confirmed the linked `part-01`, `part-02`, `part-08`, and `sheet-05` anchors exist on the public portfolio.
- The initial live profile was checked after publishing. The animation workflow's first run completed successfully, and a repeat run correctly skipped a commit when its generated files were unchanged.
- The final twelve-asset workflow passed. All 33 README images loaded in four desktop/mobile and light/dark previews without horizontal overflow. Pixel comparisons confirmed moving banner/snake frames and stable still variants; all four reduced-motion layouts selected the correct still sources.
- The Kanbaam update's twenty-asset workflow passed. All 61 images loaded in four layouts without horizontal overflow; both disclosures worked. Kanbaam animation and still-frame pixel comparisons passed, and all three picture elements chose the right still variants at both viewport sizes in both themes. All 41 named badge logos were checked against Simple Icons.
- The subsequent blueprint restyle and user-specified tool additions were checked in all four layouts: all 69 images loaded, both disclosures opened, and no horizontal overflow appeared. The background disclosure occurs once, above the featured project; the former outcome section is removed.

## Update

- Edit all profile copy and contact links directly in `README.md`.
- Update work availability and job dates when they change.
- Keep outcome numbers tied to their original case studies and scopes.
- Change banner text or colors in `scripts/build-assets.mjs`, then run `node scripts/build-assets.mjs`. The four animated local banners and their four still counterparts regenerate with Node's standard library; no installation is needed. A push affecting `scripts/` triggers a live redraw.
- `.github/workflows/profile-visuals.yml` runs daily at 23:23 UTC (06:23 WIB the next morning), on generator/workflow changes to `main`, or manually. Scheduled GitHub runs can be delayed, and GitHub may disable schedules on inactive public repositories after 60 days. Re-enable the workflow from Actions if needed.
- Change the featured project artwork in `scripts/build-kanbaam.mjs`; `node scripts/build-kanbaam.mjs` rebuilds its eight local SVGs.
- The workflow uses commit-pinned checkout, setup-node, and Platane/snk actions, plus the repository's built-in `GITHUB_TOKEN` with `contents: write`. It generates four banners, four Kanbaam visuals, and two snake variants plus a still counterpart for each, then publishes only those twenty filenames to `output` through the Git API. Existing branch history and other files are preserved; identical results create no new commit. It never commits to `main` or force-pushes.
- `scripts/finalize-snake.mjs` adds a title, description, and reduced-motion CSS to the upstream SVG. Browser checks showed that embedded SVGs do not always inherit reduced-motion settings, so README `<picture>` elements explicitly select still SVGs first when reduced motion is enabled. No JavaScript runs inside the displayed SVGs.
- Shields.io hosts the badges; generated SVGs are served from this repository's `output` branch. The workflow status badge was removed at the owner's request. Badge services and GitHub image caching can take time to refresh.
- Important identity and role information also appears as real Markdown text or image alt text.
- `.preview/` contains local review output and is excluded from Git. It is not needed to publish the profile.
