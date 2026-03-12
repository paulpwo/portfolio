# Deploy - paulosinga.net

Portfolio desplegado en **Cloudflare Pages** con proxy habilitado (firewall/CDN).

## Requisitos

- Node.js instalado
- `npm install` ejecutado en el proyecto
- API Token de Cloudflare con permisos de **Cloudflare Pages: Edit** y **Workers Scripts: Edit**
  - Crear/editar en: https://dash.cloudflare.com/profile/api-tokens
  - Debe estar scoped a la cuenta `Paulpwo@gmail.com's Account`

## Desplegar

```bash
npm run deploy
```

El token se lee del archivo `.env` en la raíz del proyecto:

```
CLOUDFLARE_API_TOKEN=<tu-token>
```

Esto compila el sitio con Astro y lo sube a Cloudflare Pages automáticamente.

## Configuración

| Recurso | Valor |
|---|---|
| Cuenta Cloudflare | `Paulpwo@gmail.com's Account` (`16a20b705cad29938201ef8e6ce7f14e`) |
| Proyecto Pages | `paul-portfolio` |
| URL Pages | https://paul-portfolio-1bu.pages.dev |
| Dominio custom | https://paulosinga.net |
| DNS | CNAME `paulosinga.net` → `paul-portfolio-1bu.pages.dev` (proxied) |
| SSL | Flexible (configurado a nivel zona en Cloudflare) |

## Dashboard

- Proyecto Pages: https://dash.cloudflare.com/16a20b705cad29938201ef8e6ce7f14e/pages/view/paul-portfolio
- DNS: https://dash.cloudflare.com/16a20b705cad29938201ef8e6ce7f14e/paulosinga.net/dns
