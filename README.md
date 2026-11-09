# Jeremiah Animaku — Portfolio

A static version of Jeremiah's portfolio, preserving the design, project descriptions, resume, and native expandable project details. No database or browser JavaScript is required.

## Publish from GitHub with Cloudflare Workers

1. Put these files at the root of `jerryanimaku/portfolio` (not inside an extra folder).
2. In your Cloudflare account, open Workers & Pages and create a Worker by importing this GitHub repository. Authorize access to this repository only.
3. Set the Worker/project name to `portfolio`, matching `wrangler.jsonc`.
4. Set production branch to `main` and root directory to the repository root.
5. Leave the build command empty: the website files are ready to serve.
6. Set the deploy command to `npm run deploy`. The dependency installation should use the committed npm lockfile.
7. Deploy, then verify the assigned workers.dev address.
8. Under the Worker's Settings > Domains & Routes, add the custom domain `jerryanimakucsportfolio.com` after you have registered it and its zone is active in this Cloudflare account.
9. Make a small text change in GitHub, commit to main, and confirm a successful automatic deployment.

GitHub connection and Cloudflare Git integration are separate authorizations. This package does not configure your account or purchase/register a domain. Your previous ChatGPT-hosted site remains independent.

## Edit

- `site/index.html`: all page content and links.
- `site/styles.css`: layout, colors and responsive design.
- `site/Jeremiah-Animaku-Resume.pdf`: replace to update the resume.
- `site/images/`: create this folder for screenshots, then reference `/images/filename.png` from the HTML.

The domain can be changed later without changing the repository name. No credentials belong in this repository.

## Local preview and validation

Install Node.js 22 or newer, then:

```sh
npm ci
npm run check
npm run dev
```

Open the local URL printed by Wrangler. `npm run deploy` publishes only after Cloudflare authentication is configured. A local deployment dry run is `npx wrangler deploy --dry-run`.

This version converts the previous React/Vinext presentation into directly editable HTML and CSS. All current interactions use native links and details elements, so their behavior is preserved without a framework build.
