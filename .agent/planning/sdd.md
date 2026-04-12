# SDD — Agregar Modo Claro Beta

## Descripción del problema
El portfolio de Paul Werner Osinga utiliza exclusivamente un tema oscuro (navy/slate). Se requiere agregar un **modo claro beta**: una variante de paleta luminosa accesible al visitante mediante un botón de alternancia, con persistencia en `localStorage` y respeto al `prefers-color-scheme` del sistema operativo.

Se denomina **beta** porque la identidad visual actual está diseñada para fondos oscuros; la variante clara debe ser funcional y legible, aunque puede refinarse en iteraciones posteriores.

---

## Qué implementar

### 1. Paleta de colores clara (`global.css`)
Agregar un bloque `[data-theme="light"]` (o mediante `@media prefers-color-scheme: light` con override via atributo) que redefina los tokens OKLCH:

| Token | Valor oscuro actual | Valor claro propuesto |
|---|---|---|
| `--color-background` | `oklch(12% 0.02 264)` | `oklch(98% 0.005 264)` |
| `--color-foreground` | `oklch(97% 0.005 264)` | `oklch(10% 0.02 264)` |
| `--color-surface` | `oklch(15% 0.015 264)` | `oklch(93% 0.008 264)` |
| `--color-surface-elevated` | `oklch(18% 0.015 264)` | `oklch(88% 0.010 264)` |
| `--color-muted` | `oklch(68% 0.012 264)` | `oklch(40% 0.015 264)` |
| `--color-muted-soft` | `oklch(50% 0.012 264)` | `oklch(55% 0.012 264)` |
| `--color-border` | `oklch(25% 0.015 264)` | `oklch(82% 0.012 264)` |
| `--color-border-hover` | `oklch(30% 0.015 264)` | `oklch(72% 0.015 264)` |
| `--color-accent` | `oklch(70% 0.14 230)` | `oklch(45% 0.18 230)` |
| `--color-accent-soft` | `oklch(70% 0.14 230 / 0.1)` | `oklch(45% 0.18 230 / 0.10)` |
| `--color-accent-medium` | `oklch(70% 0.14 230 / 0.15)` | `oklch(45% 0.18 230 / 0.15)` |

### 2. Componente `ThemeToggle.astro`
Crear `src/components/ThemeToggle.astro`:
- Botón icono (sol/luna) renderizado con SVG inline.
- Script `<script>` que:
  - Lee el tema guardado en `localStorage` al cargar.
  - Aplica `data-theme` en `<html>`.
  - Alterna entre `"dark"` y `"light"` al hacer clic.
  - Persiste la selección en `localStorage`.
  - Inicializa con `prefers-color-scheme` si no hay preferencia guardada.
- Badge `BETA` visible junto al icono.

### 3. Integración en `Layout.astro`
- Añadir script inline de inicialización temprana (antes de que se pinte el DOM) para evitar FOUC (Flash of Unstyled Content).
- El script lee `localStorage` y aplica `data-theme` en `<html>` inmediatamente.
- Actualizar `<meta name="theme-color">` dinámicamente según el tema activo (JS en cliente).

### 4. Integración en `index.astro`
- Importar y renderizar `<ThemeToggle />` dentro de la barra de navegación (`<nav>`), alineado a la derecha junto a los links existentes.

---

## Criterios de aceptación

- [ ] El visitante puede alternar entre modo oscuro y modo claro con un solo clic.
- [ ] La preferencia se persiste en `localStorage` y se mantiene al recargar la página.
- [ ] Si no hay preferencia guardada, se respeta `prefers-color-scheme` del sistema.
- [ ] No hay FOUC: el tema correcto se aplica antes del primer render visible.
- [ ] El badge "BETA" es visible junto al botón de toggle.
- [ ] Todos los tokens de color (`background`, `surface`, `muted`, `border`, `accent`) tienen equivalentes en la paleta clara.
- [ ] El contraste en modo claro cumple al menos WCAG AA (ratio 4.5:1 para texto normal).
- [ ] El toggle es accesible: tiene `aria-label` descriptivo y responde a teclado.
- [ ] No se rompe ninguna funcionalidad existente en modo oscuro.
- [ ] El sitio se construye sin errores (`npm run build`).

---

## Alcance del beta

- **Incluido:** paleta funcional, toggle persistente, accesibilidad básica.
- **Excluido (iteración futura):** ajuste fino de sombras en modo claro, transición animada entre temas, imagen OG específica para modo claro, pruebas en todos los navegadores.
