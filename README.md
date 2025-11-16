
# SavePays Website – Next.js + Tailwind (GRATUIT)

Salut! Acesta este starter-ul tău complet pentru site-ul **savepays.com**, fără costuri, gata de publicat pe **Vercel**.

## 0) Ce îți trebuie
- Un cont gratuit **GitHub** (github.com)
- Un cont gratuit **Vercel** (vercel.com)
- Node.js LTS 18+ (instalează de pe nodejs.org)
- (Opțional) VS Code

## 1) Descarcă proiectul
1. Descarcă arhiva `.zip` (din ChatGPT) și dezarhivează.
2. Deschide folderul în VS Code.

## 2) Instalează dependențele
```bash
npm install
```

## 3) Rulează local
```bash
npm run dev
```
Deschide http://localhost:3000

## 4) Configurează Analytics (opțional)
Creează o proprietate GA4 și obține ID-ul (ex: `G-XXXXXX`).  
În Vercel, la Project Settings → Environment Variables, adaugă:
- `NEXT_PUBLIC_GA_ID = G-XXXXXX`

## 5) Publică pe Vercel
1. Creează un nou repo pe GitHub și fă push:
   ```bash
   git init
   git add .
   git commit -m "SavePays starter"
   git branch -M main
   git remote add origin https://github.com/USER/savepays-site-starter.git
   git push -u origin main
   ```
2. Intră pe **vercel.com**, importă repo-ul, apăsă **Deploy** (build-ul pornește automat).
3. După build vei avea un URL de tip `https://savepays.vercel.app`.

## 6) Conectează domeniul savepays.com
În Vercel → Project → Settings → Domains → Add Domain → `savepays.com`  
Dacă domeniul e la alt registrar, setează DNS:
- **A / ALIAS** sau **CNAME** conform instrucțiunilor Vercel (vei vedea pașii).

## 7) Formulare (Contact / Parteneri) – GRATUIT
Folosim **Formspree** (free):
- Creează cont pe formspree.io → creează un formular → primești un **form-id**
- Înlocuiește în fișierele:
  - `app/contact/page.tsx` → `action="https://formspree.io/f/your-form-id"`
  - `app/partners/page.tsx` → la fel

## 8) SEO & Sitemap
- Metadata e setată în `app/layout.tsx`
- `next-sitemap` generează automat `sitemap.xml` și `robots.txt` la `npm run build`

## 9) Schimbă conținutul
- Culori/stiluri: `tailwind.config.ts` + `app/globals.css`
- Header/Footer: `components/`
- Pagini: `app/...`

## 10) Probleme comune
- Build eșuat pe Vercel → verifică versiunea Node (Project Settings → Build → Node 18)
- Domeniul nu se mapează → verifică DNS în registrar, propagarea poate dura până la 24h

Drum bun! 🚀


---

## 11) Treci de pe WordPress pe acest site (domeniu existent)
1. Intră în panoul registrarului unde ai domeniul **savepays.com** (ex: GoDaddy, Namecheap, Cloudflare etc.).
2. În Vercel → Project → Settings → **Domains** → Add Domain → `savepays.com`.
3. Vercel îți va arăta ce înregistrări DNS să adaugi:
   - de obicei un **CNAME** `www → cname.vercel-dns.com` și
   - o înregistrare **A/ALIAS** pentru domeniul rădăcină `@` către IP-urile Vercel (sau un **ANAME/ALIAS** dacă registrarul suportă).
4. Salvezi. Aștepți propagarea (poate dura de la câteva minute la ore).

### 301 Redirect (www → root)
- În Vercel, seteză **www.savepays.com** ca alias și alege **Redirect to savepays.com** (Project → Domains).

### Certificat SSL
- Vercel emite gratuit SSL după ce domeniul este corect mapat.

## 12) Cookie banner (gratuit)
- Recomand: **CookieYes** pentru static: creezi un proiect pe cookieyes.com, copiezi scriptul din dashboard și îl pui în `app/layout.tsx` ca Script client.
- Sau poți folosi un banner foarte simplu personalizat (dacă nu ai nevoie de evidența consimțămintelor).

## 13) Îmbunătățiri rapide după live
- Înlocuiește mockupul din Hero cu un **screenshot real** al aplicației (PNG/WebP).
- Adaugă 2–3 **articole de blog** pentru SEO inițial.
- Conectează **GA4** și **Meta Pixel** pentru campanii (retargeting).
- Adaugă **favicon** real (poți genera din logo pe realfavicongenerator.net).

Succes! 🚀
