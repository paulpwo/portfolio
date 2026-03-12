# Paul's Portfolio

Portfolio personal construido con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/), desplegable en Cloudflare Pages o Docker.

## Tech Stack

- **Astro 5** — generador de sitios estáticos
- **Tailwind CSS 4** — utilidades CSS
- **Wrangler** — deploy a Cloudflare Pages
- **Docker + Nginx** — contenedor de producción alternativo

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Deploy

### Cloudflare Pages

```bash
npm run deploy
```

### Docker

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio
```

## Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── data/
│   └── data.json    # Métricas, skills y experiencia
├── layouts/
│   └── Layout.astro # Layout base
├── pages/
│   └── index.astro  # Página principal
└── styles/
    └── global.css   # Estilos globales
```

## Licencia

MIT
