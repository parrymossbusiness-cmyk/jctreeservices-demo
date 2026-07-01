# JC Tree Services website

A conversion-focused static website for JC Tree Services in Little Rock, Arkansas.

## Deploy

This site has no framework build step. Create the GitHub repository and Cloudflare Pages project as `jctreeservices-demo`, then use:

- Framework preset: `None`
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`

The resulting Pages address is `https://jctreeservices-demo.pages.dev/` if that project name is available.

## Lead form

The hero form turns the visitor's details into a pre-filled SMS to `(501) 240-3451`. Calls and texts work without a backend or third-party form service.

## Before launch

Add the final production URL to the Open Graph metadata and create a `sitemap.xml` after the custom domain is known.
