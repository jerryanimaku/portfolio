# My portfolio

Hi, I’m Jeremiah Animaku, a Computer Science student at Fisk University. This is the source code for my personal portfolio.

I wanted a place where I could share what I’ve worked on and explain some of the thinking behind it. I enjoy building applications that work well and feel good to use, and I’m interested in the systems that make those experiences possible.

The website brings together my software projects, internship experience, and a little of what I do outside of coding.

## What’s on the site

- My experience at Microsoft, including the API and dashboard I worked on and what I learned while deploying to Azure.
- Projects in mobile development, including my GitHub followers app, Real Circle, and an iOS health app I’m still developing.
- Work Out!, the team project I worked on through Google Tech Exchange. One of my favorite contributions was noticing coordinates in our dataset and using them to create an interactive map. There’s also a demo video.
- A photography section with a few of my photos. I enjoy creating things visually, and I wanted the site to reflect that side of me too.
- My résumé and ways to get in touch.

## How it’s built

The site uses HTML, CSS, and a small amount of JavaScript for the photography gallery. It’s hosted on Cloudflare Workers, with Wrangler handling deployment.

I’ve kept the structure simple so I can update the content, add projects, and change photos without a complicated build process.

## Running it locally

You’ll need Node.js 22 or newer.

```sh
npm ci
npm run check
npm run dev
```

Open the local address printed in the terminal. The check command looks for missing assets, broken section links, and a few key pieces of content.

## Making changes

Most updates happen in these files:

- `site/index.html` — page content, project descriptions, and links
- `site/styles.css` — styling and responsive layouts
- `site/gallery.js` — photography gallery controls
- `site/images/` — portraits and showcase photographs
- `site/Jeremiah-Animaku-Resume.pdf` — the downloadable résumé

The Work Out! demo is embedded from Google Drive. Its sharing settings need to allow visitors to watch it.

## Deployment

The Worker configuration is in `wrangler.jsonc`, and the website files are served from `site/`.

With Cloudflare’s Git integration connected to this repository, changes pushed to `main` can deploy automatically. For a manual deployment after signing in to Cloudflare:

```sh
npm run deploy
```

## Find me

- [GitHub](https://github.com/jerryanimaku)
- [LinkedIn](https://www.linkedin.com/in/jerryanimaku/)
- [Email](mailto:animakujeremiah@gmail.com)

I’ll keep adding to this as I build more things and learn along the way.
