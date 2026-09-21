# Profile notes

## Direction

An engineering drawing for a person who connects automation, analytics, and interfaces. The original SVG artwork echoes the drafting-film palette, red annotations, and numbered sheets on Aam's existing portfolio. This gives the GitHub profile a recognizable connection to the portfolio without copying another developer's README.

The reading order is designed for hiring: positioning and contact first, client outcomes second, inspectable public projects third, then tools and optional career context. Project descriptions explain useful behavior rather than popularity. No visitor counters, live stats services, unsupported proficiency scores, or invented achievements.

## Research and factual sources

Reviewed on 22 September 2026:

- [GitHub profile metadata](https://api.github.com/users/aamsap): name, location, professional focus, and portfolio URL.
- [Public repositories](https://api.github.com/users/aamsap/repos?per_page=100): project ownership, descriptions, languages, and repository links. Forks were not presented as original projects.
- [Personal portfolio](https://aam.excellentchimp.com/): professional email, LinkedIn, Malang location, remote/open-to-work status, work history, toolkit, and client outcomes. The 75% reduction, 2× processing volume, and up-to-15-hours saving are the owner's published case-study claims, not independently measured results. Their scope is retained in the README.
- [Kanbaam README](https://github.com/aamsap/Kanbaam#readme) and package manifest: local-first behavior, keyboard controls, JSON validation, and Playwright checks.
- [Chimp Chart README](https://github.com/aamsap/granite-chimp-charts#readme) and package manifest: dashboard concept, AI-assisted analysis, PDF reporting, and stack. Avoided repeating its unverified production-readiness and performance claims.
- [Tableau Workbook Copier](https://github.com/aamsap/bulk-copy-tableu): repository description and public file listing support the narrow Python/REST API summary. This repository has no README at the time of research.
- [GitHub's profile README guide](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme): repository naming, visibility, and root README requirements.
- [GitHub Markdown API](https://docs.github.com/en/rest/markdown/markdown): researched as a rendering option. Automatic approval review blocked submitting the draft because it includes personal contact details; validation uses a local preview instead.
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme) and [Awesome GitHub Profile](https://github.com/beydemirfurkan/awesome-github-profile): surveyed layout categories, restrained project curation, and self-contained SVG approaches. No template code or artwork was copied.

## Publish

1. Create a **public** GitHub repository named **aamsap** under **aamsap**. The intended address is `https://github.com/aamsap/aamsap`.
2. Upload the root `README.md` and the complete `assets/` folder together. The scripts and these notes may also be committed; they are maintenance files.
3. Keep `README.md` at the repository root. GitHub displays it on the matching user profile once its requirements are met.
4. Check the profile in light and dark themes and on a phone. The `<picture>` element selects a theme and a compact composition; the default image is the light desktop banner.

This workspace started empty. The publication target is the public `aamsap/aamsap` repository; local preview files are excluded from commits.

## Verification

- Parsed all four SVG assets as XML successfully.
- Rendered the README locally with a GFM-capable Markdown parser and a GitHub-like stylesheet.
- Checked Chromium at 1100px and 390px in light and dark modes: all image variants load correctly, there is no page-level horizontal overflow, and the career disclosure opens.
- Visually inspected all four full-page previews.
- Confirmed the linked `part-01`, `part-02`, `part-08`, and `sheet-05` anchors exist on the public portfolio.
- This checks the local approximation, not GitHub's live sanitizer or profile layout. Perform the final GitHub appearance check after publishing.

## Update

- Edit all profile copy and contact links directly in `README.md`.
- Update work availability and job dates when they change.
- Keep outcome numbers tied to their original case studies and scopes.
- Change banner text or colors in `scripts/build-assets.mjs`, then run `node scripts/build-assets.mjs`. All four SVGs regenerate with Node's standard library; no installation is needed.
- All artwork is local, static SVG with system fonts. Nothing needs an API key or a scheduled workflow. There is no animation, so the graphics are also suitable for reduced-motion preferences.
- Important identity and role information also appears as real Markdown text or image alt text.
- `.preview/` contains local review output and is excluded from Git. It is not needed to publish the profile.
