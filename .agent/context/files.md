# Archivos relevantes — Modo Claro Beta

## Archivos a modificar

### `src/styles/global.css`
**Rol:** Única fuente de verdad para el sistema de diseño. Define los tokens de color mediante el directive `@theme` de Tailwind CSS v4 usando el espacio de color OKLCH. Todos los componentes usan estas variables indirectamente a través de clases utilitarias como `bg-background`, `text-foreground`, `border-border`, etc.

**Cambio requerido:** Agregar bloque `[data-theme="light"]` que sobreescriba los tokens con la paleta clara. También actualizar la regla `body` si fuera necesario.

---

### `src/layouts/Layout.astro`
**Rol:** Template base HTML. Define `<html>`, `<head>` (meta tags, fonts, structured data) y `<body>`. Todos los meta tags de `theme-color`, OG y Twitter Card están aquí. Es el punto donde debe inyectarse el script anti-FOUC.

**Cambio requerido:**
- Agregar script inline en `<head>` (antes de cualquier CSS) que lea `localStorage` y aplique `data-theme` en `<html>` para eliminar el flash.
- Opcionalmente actualizar `<meta name="theme-color">` para que sea dinámica.

---

### `src/pages/index.astro`
**Rol:** Página principal y única del portfolio. Contiene la estructura completa: nav, hero, experiencia, skills, contacto, footer. La barra de navegación está en la línea 14–30.

**Cambio requerido:** Importar el componente `ThemeToggle` e incluirlo en el `<nav>` (dentro del `div` flex `items-center justify-between`, a la derecha).

---

## Archivos a crear

### `src/components/ThemeToggle.astro` *(nuevo)*
**Rol:** Componente Astro autocontenido para el botón de alternancia de tema. Incluye:
- Markup HTML del botón (icono SVG sol/luna + badge BETA).
- Bloque `<script>` con la lógica de toggle y persistencia.
- Estilos scoped opcionales para el botón.

---

## Archivos de referencia (sin modificar)

### `astro.config.mjs`
Framework Astro 5 con plugin `@tailwindcss/vite`. No requiere cambios para esta feature.

### `package.json`
Dependencias: `astro@5.7.0`, `tailwindcss@4.1.0`, `@tailwindcss/vite`. No requiere cambios.

### `tsconfig.json`
Extiende `astro/tsconfigs/strict`. Sin cambios.

### `src/data/data.json`
Datos del portfolio (métricas, skills, experiencia). No involucrado en la feature de tema.

### `public/favicon.svg`, `public/og-image.jpg`
Assets estáticos. No involucrados.
