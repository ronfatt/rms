# R.ON Meraki Studio

Premium mobile-first website for R.ON Meraki Studio.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Content Editing

Editable website content lives in:

- `src/data/site.ts` for works, artists, services and contact links
- `public/og-placeholder.svg` for the temporary social preview image

Placeholder content is marked with TODO comments and should be replaced with approved releases, collaborators, platform links, WhatsApp, Instagram and press assets.

## Email Delivery

Creative brief submissions post to `src/app/api/brief/route.ts` and send to `ronfung1313@gmail.com` through Resend.

Required environment variables:

```bash
RESEND_API_KEY=...
CONTACT_FROM_EMAIL="R.ON Meraki Studio <hello@ronmerakistudio.com>"
```

WhatsApp uses `wa.me` and includes the current brief content automatically.
