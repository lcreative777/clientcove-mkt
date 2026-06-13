# CLAUDE.md — clientcove-mkt (clientcove.io)

Astro marketing site on Cloudflare. **This repo is PUBLIC** — that constraint
shapes everything below.

## Public-repo rules (hard)

- **Never commit** secrets, internal architecture docs, droplet IPs/hostnames,
  or `graphify-out/` (it's gitignored; the knowledge graph stays local-only).
- Don't reference internal repo names, deploy mechanics, or security details in
  commits, comments, or content. Marketing copy only.

## Role in the ecosystem

Part of a five-repo system — topology and process live in the **clientcove-docs**
repo (`ECOSYSTEM.md`, `CHANGE_MANAGEMENT_PLAYBOOK.md`; private). Feature claims on
this site should map back to a docs.clientcove.io page. New user-visible product
features (theme, MCP/AI) usually deserve a page or blurb here — the PR checklist
in the other repos files an issue against this repo when that's the case.

## Working here

- A local knowledge graph exists at `graphify-out/` (NOT committed). Use
  `graphify query "<question>"` for codebase questions; `graphify update .` after
  changes. It's registered in `graphify global` as `marketing`.
- Push to `main` triggers the Cloudflare build of the public site — content is
  live shortly after merge; review accordingly.
- Client-facing language: high-touch service vocabulary (offerings, plans,
  services) — never cart/checkout/e-commerce framing.
