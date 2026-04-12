# Enfoque sugerido — Modo Claro Beta

## Estrategia principal: `data-theme` attribute + CSS variable override

### Por qué esta estrategia

Tailwind CSS v4 usa tokens definidos con `@theme` que se compilan a variables CSS nativas. Esto significa que podemos **sobreescribir las variables a nivel de selector CSS** sin necesidad de configuración adicional en Tailwind ni de regenerar clases utilitarias. El bloque:

```css
[data-theme="light"] {
  --color-background: oklch(98% 0.005 264);
  /* ... */
}
```

sobreescribe el valor de cada token cuando el atributo `data-theme="light"` está presente en `<html>`, y Tailwind usará automáticamente el nuevo valor porque las clases utilitarias referencian la variable, no el valor concreto.

### Flujo de inicialización (anti-FOUC)

El FOUC (Flash of Unstyled Content) ocurre cuando el JS carga después del CSS pero el tema correcto aún no está aplicado. La solución es un **script síncrono en `<head>`** (antes del `<slot />` del layout):

```html
<script>
  (function() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

Al ser síncrono y estar en `<head>`, se ejecuta antes de que el navegador pinte cualquier pixel, eliminando el flash.

### Tema por defecto

El sitio ya tiene un tema oscuro. La lógica de inicialización debe:
1. Si hay valor en `localStorage` → usar ese.
2. Si no hay valor → usar `prefers-color-scheme` del sistema.
3. Fallback implícito: los tokens `@theme` sin override representan el modo oscuro (el comportamiento actual), así que si ninguna condición aplica, el sitio se ve oscuro.

---

## Alternativas consideradas

### A. Tailwind `dark:` variant (clase `.dark` en `<html>`)
- **Pro:** Nativo en Tailwind, amplia documentación.
- **Con:** En Tailwind v4 la clase `dark` como selector requiere configuración extra con `@variant dark`. Además implicaría modificar **cada clase utilitaria** en `index.astro` para agregar el prefijo `dark:`, lo que es intrusive y propenso a errores con ~250 líneas de markup.
- **Descartado** a favor de la sobreescritura de variables, que no toca el markup.

### B. `@media prefers-color-scheme: light` (sin toggle manual)
- **Pro:** Cero JavaScript, respeta automáticamente la preferencia del sistema.
- **Con:** El usuario no puede elegir manualmente, requisito explícito de la feature.
- **Descartado** como solución única; se usa como fallback dentro de la lógica JS.

### C. Dos hojas de estilos separadas (`theme-dark.css` / `theme-light.css`)
- **Pro:** Separación clara.
- **Con:** Overhead de red, complejidad de build, duplicación de todos los tokens.
- **Descartado** por sobre-ingeniería para este caso.

---

## Tradeoffs

| Aspecto | Impacto |
|---|---|
| **Sin cambios en markup de `index.astro`** | El override de variables CSS es transparente para todas las clases Tailwind existentes. |
| **Hardcoded color values en hardcoded markup** | Colores fijados directamente en markup (e.g. `text-[#25d366]`, `bg-[#25d366]/10`) no se adaptan al tema y deben revisarse manualmente si se desea coherencia total. |
| **Colores OKLCH en modo claro** | El acento (`color-accent`) necesita bajar su lightness en modo claro para mantener contraste. De `oklch(70% 0.14 230)` a ~`oklch(45% 0.18 230)`. |
| **`bg-background/70` en navbar** | Tailwind v4 usa las variables con opacidad modificada. El override de la variable garantiza que la opacidad también se adapte. |
| **Beta label** | El badge BETA comunica al visitante que el modo claro es experimental; gestiona expectativas sin bloquear el lanzamiento. |

---

## Orden de implementación recomendado

1. **`global.css`** — Agregar bloque `[data-theme="light"]` con la paleta clara.
2. **`Layout.astro`** — Inyectar el script anti-FOUC en `<head>`.
3. **`src/components/ThemeToggle.astro`** — Crear el componente con botón y lógica JS.
4. **`index.astro`** — Importar y montar `<ThemeToggle />` en el `<nav>`.
5. **Verificación visual** — Revisar contraste, bordes, gradientes y colores hardcoded en modo claro.
