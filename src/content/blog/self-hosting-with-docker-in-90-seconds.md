---
title: "Self-hosting ClientCove with Docker in 90 seconds"
description: "A walkthrough of deploying ClientCove on a $5/mo VPS using Docker Compose. From zero to a fully branded client portal in under two minutes."
pubDate: 2026-03-14
author: "Sara Chen"
category: "Engineering"
tags: ["self-hosting", "docker", "deployment"]
---

The fastest way to get ClientCove running is the DigitalOcean one-click image — that's about 90 seconds, no terminal required. But if you'd rather run it on your own VPS (Hetzner, Vultr, AWS Lightsail, your laptop), Docker Compose is the path.

This is the actual `docker-compose.yml` we ship.

## Prerequisites

- A VPS with at least **1 GB RAM** and **10 GB disk**.
- Docker and Docker Compose installed (`apt install docker.io docker-compose-plugin`).
- A subdomain pointed at the VPS (`portal.youragency.com → 1.2.3.4`).
- 90 seconds.

## The compose file

```yaml
services:
  app:
    image: clientcove/app:3.2
    restart: unless-stopped
    environment:
      DATABASE_URL: postgresql://cc:cc@db:5432/cc
      LICENSE_KEY: ${LICENSE_KEY}
      APP_URL: https://portal.youragency.com
      STRIPE_KEY: ${STRIPE_KEY}
    depends_on: [db]
    ports: ["3000:3000"]

  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: cc
      POSTGRES_PASSWORD: cc
      POSTGRES_DB: cc
    volumes: ["./pgdata:/var/lib/postgresql/data"]

  caddy:
    image: caddy:2-alpine
    restart: unless-stopped
    ports: ["80:80", "443:443"]
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data

volumes:
  caddy_data:
```

## The Caddyfile

```
portal.youragency.com {
  reverse_proxy app:3000
}
```

Caddy handles HTTPS automatically — Let's Encrypt cert in 10 seconds.

## Spin it up

```bash
echo "LICENSE_KEY=cc_live_..." > .env
echo "STRIPE_KEY=sk_live_..." >> .env
docker compose up -d
```

Visit `https://portal.youragency.com`. The setup wizard creates your first admin user, walks you through brand colors, and you're live.

## Backups

We strongly recommend nightly database backups. Add this cron entry:

```bash
0 3 * * * docker exec $(docker compose ps -q db) pg_dump -U cc cc | gzip > /backups/cc-$(date +\%F).sql.gz
```

Then `rsync` the backups dir off-site to S3 / B2 / wherever you keep them.

## Updating

When v3.3 ships:

```bash
docker compose pull app
docker compose up -d
```

Migrations run automatically. Total downtime: about 4 seconds.

## What you don't have to think about

- Per-seat pricing creeping up
- Data leaving your infrastructure
- Upstream API changes breaking integrations
- Vendor outages bringing down your client portal

That's the whole pitch.
