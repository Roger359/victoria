# Victoria

Sitio estático en español de acompañamiento emocional: una landing calmada con hero de apoyo, blog y galería-collage con fotos locales. Sin backend, sin cuentas, solo lectura tranquila en móvil y escritorio.

> “Para ti, hija: aquí estoy siempre.”

## Qué incluye

- **Landing (`/`)** — hero a dos columnas con collage de 3 fotos, sello “Esto pasará también”, tarjetas del blog y galería.
- **Blog (`/blog`)** — índice con tarjetas (portada 16/9, título, extracto, fecha y minutos de lectura).
- **Artículo (`/blog/superar-la-tristeza`)** — primera entrada íntegra en español, con standfirst, meta tabular, cover, barra de progreso dorada y links de vuelta.
- **Galería (`/#galeria`)** — collage responsive de 18 fotos locales, lazy-load, sin stock ni URLs externas.

## Stack

- [Astro](https://astro.build/) `^7.3.2` con output `static`
- TypeScript `^5.6.3`
- Tipografías auto-hospedadas: `@fontsource/sora` (display) + `@fontsource/source-serif-4` (lectura)
- Cero runtime JS de terceros, cero imágenes externas

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Landing: hero + blog + galería |
| `/blog` | Índice del blog |
| `/blog/superar-la-tristeza` | Primera entrada |
| `/#galeria` | Ancla a la galería en la landing |

## Estructura

```
.
├── astro.config.mjs        # output: 'static'
├── public/images/          # 18 fotos locales (se sirven tal cual)
├── src/
│   ├── data/site.ts        # posts[] + gallery[] (fuente de verdad)
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── index.astro     # landing
│       └── blog/
│           ├── index.astro
│           └── superar-la-tristeza.astro
├── DESIGN.md               # tokens y componentes
└── PRODUCT.md              # propósito y principios
```

## Requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+

## Empezar

```bash
npm install
npm run dev      # http://localhost:4321
```

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # compila a dist/
npm run preview  # previsualiza el build estático
```

## Añadir una entrada al blog

1. Añade el objeto en `src/data/site.ts` → `posts[]` (`slug`, `title`, `excerpt`, `cover`, `coverAlt`, `date`, `minutes`).
2. Crea `src/pages/blog/<slug>.astro` usando el mismo layout que `superar-la-tristeza.astro`.
3. La tarjeta aparece sola en `/` y `/blog`.

Para la galería, añade `{ src: '/images/xxx.jpg', alt: '...', span: 'tall' | 'wide' | 'std' }` a `gallery[]` y deja el archivo en `public/images/`.

## Diseño

- Paleta sobre papel cálido: `paper #faf8fe`, `ink #2a1245`, primario morado `#5b21b6`, profundo `#3b1470`, dorado `#c9a227` (un solo acento).
- Display `Sora` 700/800, lectura `Source Serif 4` 400/600/italic, medida ≤72ch.
- Radios 16/20px, sombras offset + blur, onda del hero a papel.
- Un solo momento de movimiento: `rise` en el hero + zoom en cards; `prefers-reduced-motion` lo desactiva todo.
- Contraste cuerpo ≥4.5:1, foco visible dorado, copy 100% en español.

Detalle completo en `DESIGN.md`.

## Accesibilidad y rendimiento

- HTML semántico, landmarks y alts en español.
- Galería con `loading="lazy"` + `decoding="async"`.
- Sin peticiones externas (fuentes e imágenes locales).

## Deploy

Es un estático puro. `npm run build` genera `dist/` — sirve esa carpeta en cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, Nginx).

## Licencia

Proyecto personal y privado (`"private": true`). Las 18 fotos de `public/images/` son personales, no reutilizar.
