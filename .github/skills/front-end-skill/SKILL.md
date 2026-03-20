---
name: front-end-skill
description: >
  TailwindCSS v4 expert skill. Use for setup, configuration, theming, utility classes, custom styles,
  dark mode, responsive design, and best practices with TailwindCSS v4 (CSS-first configuration).
  Keywords: tailwind, tailwindcss, css, utility-first, theme, @theme, @utility, @layer, vite, postcss.
applyTo: "**/*.{css,html,jsx,tsx,vue,svelte,astro}"
---

# TailwindCSS v4 Skill

You are an expert in **TailwindCSS v4** (v4.2, current as of early 2026). Always apply this skill when working with Tailwind projects.

---

## 1. Setup & Installation

### Via Vite (recommended)
```bash
npm install tailwindcss @tailwindcss/vite
```

`vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

`src/main.css` (or any entry CSS):
```css
@import "tailwindcss";
```

### Via PostCSS
```bash
npm install tailwindcss @tailwindcss/postcss
```

`postcss.config.mjs`:
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
> Note: Remove `postcss-import` and `autoprefixer` — v4 handles them automatically.

### Via CLI
```bash
npm install @tailwindcss/cli
npx @tailwindcss/cli -i input.css -o output.css
```

### Browser Support Requirements
Tailwind v4 requires **Safari 16.4+, Chrome 111+, Firefox 128+**. It uses `@property`, `color-mix()`, and `oklch()`. Use v3 for older browser support.

---

## 2. Core Concepts & v4 Architecture Changes

### Import (not directives)
```css
/* v4 ✅ */
@import "tailwindcss";

/* v3 ❌ — no longer used */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### CSS-First Configuration (no `tailwind.config.js`)
All theme customization is done via `@theme` in CSS. A JS config file is **not auto-detected** in v4.

To use a legacy JS config explicitly:
```css
@config "../../tailwind.config.js";
```

---

## 3. Theme Configuration with `@theme`

The `@theme` directive replaces `tailwind.config.js` theme customization.

### Extending the Default Theme
```css
@import "tailwindcss";

@theme {
  /* Add custom font */
  --font-display: "Satoshi", "sans-serif";

  /* Add custom breakpoint */
  --breakpoint-3xl: 120rem;

  /* Add custom colors (use oklch) */
  --color-brand-500: oklch(0.62 0.23 259.8);
  --color-brand-600: oklch(0.55 0.24 262.9);

  /* Add custom spacing */
  --spacing-18: 4.5rem;

  /* Add custom animation */
  --animate-fade-in: fade-in 0.3s ease-out;

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

### Overriding Default Theme Values
```css
@theme {
  /* Override a single value */
  --breakpoint-sm: 30rem;

  /* Reset entire namespace, then define custom values */
  --color-*: initial;
  --color-white: #fff;
  --color-black: #000;
  --color-primary: oklch(0.62 0.23 259.8);
}
```

### Complete Custom Theme (no defaults)
```css
@theme {
  --*: initial; /* wipes all default theme variables */
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-primary: oklch(0.72 0.11 221.19);
}
```

### Theme Variable Namespaces
| Namespace | Utilities Generated |
|---|---|
| `--color-*` | `bg-*`, `text-*`, `border-*`, `ring-*`, etc. |
| `--font-*` | `font-sans`, `font-mono`, etc. |
| `--text-*` | `text-sm`, `text-xl`, etc. |
| `--font-weight-*` | `font-bold`, `font-semibold`, etc. |
| `--tracking-*` | `tracking-wide`, etc. |
| `--leading-*` | `leading-tight`, etc. |
| `--breakpoint-*` | `sm:*`, `md:*`, `lg:*`, etc. |
| `--container-*` | `max-w-sm`, `@sm:*`, etc. |
| `--spacing-*` | `p-4`, `m-2`, `w-8`, `h-16`, etc. |
| `--radius-*` | `rounded-md`, `rounded-xl`, etc. |
| `--shadow-*` | `shadow-lg`, etc. |
| `--blur-*` | `blur-sm`, `blur-md`, etc. |
| `--animate-*` | `animate-spin`, `animate-bounce`, etc. |
| `--ease-*` | `ease-in`, `ease-out`, etc. |

### Referencing Other Variables in `@theme`
Use `inline` option when referencing CSS variables to avoid resolution issues:
```css
@theme inline {
  --font-sans: var(--font-inter);
}
```

### Sharing Themes Across Projects
```css
/* packages/brand/theme.css */
@theme {
  --color-primary: oklch(0.72 0.11 221.19);
}

/* app/src/main.css */
@import "tailwindcss";
@import "../packages/brand/theme.css";
```

---

## 4. Directives Reference

| Directive | Purpose |
|---|---|
| `@import "tailwindcss"` | Include Tailwind (base, theme, utilities) |
| `@theme { }` | Define/override design tokens (CSS vars → utility classes) |
| `@source "../path"` | Explicitly add content source for class detection |
| `@utility name { }` | Register a custom utility class |
| `@custom-variant name { }` | Register a custom variant |
| `@variant name { }` | Apply a Tailwind variant inside custom CSS |
| `@apply` | Use Tailwind class names inside custom CSS |
| `@reference "..."` | Import theme for `@apply`/`@variant` use (no CSS duplication) |
| `@layer base/components { }` | Add styles to named cascade layers |
| `@config "path"` | Load a JS config file (compatibility) |
| `@plugin "name"` | Load a JS plugin (compatibility) |

---

## 5. Custom Utilities

### Simple Utility
```css
@utility content-auto {
  content-visibility: auto;
}
```
Now use `content-auto`, `hover:content-auto`, `lg:content-auto` in HTML.

### Complex (Nested) Utility
```css
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

### Functional/Dynamic Utility
```css
@utility tab-* {
  /* Match theme token, bare integer, or arbitrary */
  tab-size: --value(--tab-size-*, integer, [integer]);
}
```
Generates `tab-2`, `tab-github`, `tab-[8]`.

### Replacing Old `@layer utilities`
```css
/* v3 ❌ */
@layer utilities {
  .tab-4 { tab-size: 4; }
}

/* v4 ✅ */
@utility tab-4 {
  tab-size: 4;
}
```

---

## 6. Custom Variants

```css
/* Shorthand syntax */
@custom-variant dark (&:where(.dark, .dark *));

/* Multi-rule syntax */
@custom-variant any-hover {
  @media (any-hover: hover) {
    &:hover { @slot; }
  }
}

/* Data attribute variant */
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

Use in HTML: `theme-midnight:bg-black`, `any-hover:underline`.

---

## 7. Dark Mode

### Default (OS preference via `prefers-color-scheme`)
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  ...
</div>
```

### Manual Class Toggle
```css
/* app.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```
```html
<html class="dark">...</html>
```

### Data Attribute Toggle
```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```
```html
<html data-theme="dark">...</html>
```

---

## 8. Custom CSS with Layers

```css
@import "tailwindcss";

/* Base styles for HTML elements */
@layer base {
  h1 { font-size: var(--text-2xl); }
  h2 { font-size: var(--text-xl); }
}

/* Reusable component classes */
@layer components {
  .card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: --spacing(6);
    box-shadow: var(--shadow-xl);
  }
}
```

### Using `@variant` Inside Custom CSS
```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
}
```

### Using `@apply`
```css
.btn-primary {
  @apply rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700;
}
```

### In Vue/Svelte/CSS Modules — use `@reference`
```vue
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

---

## 9. Responsive Design

Default breakpoints (min-width based):
| Variant | Default Value |
|---|---|
| `sm:` | 40rem (640px) |
| `md:` | 48rem (768px) |
| `lg:` | 64rem (1024px) |
| `xl:` | 80rem (1280px) |
| `2xl:` | 96rem (1536px) |

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  ...
</div>
```

Custom breakpoint:
```css
@theme {
  --breakpoint-3xl: 120rem;
}
```
```html
<div class="3xl:grid-cols-6">...</div>
```

---

## 10. Arbitrary Values & Properties

```html
<!-- Arbitrary value -->
<div class="top-[117px] lg:top-[344px]">...</div>

<!-- Arbitrary color -->
<div class="bg-[#bada55] text-[22px]">...</div>

<!-- CSS variable reference (v4 syntax) -->
<div class="bg-(--brand-color)">...</div>

<!-- Arbitrary property -->
<div class="[mask-type:luminance] hover:[mask-type:alpha]">...</div>

<!-- Arbitrary variant -->
<li class="lg:[&:nth-child(-n+3)]:hover:underline">...</li>

<!-- Whitespace in arbitrary values: use underscore -->
<div class="grid-cols-[1fr_500px_2fr]">...</div>
```

Type hinting for ambiguous arbitrary values:
```html
<div class="text-(length:--my-var)">...</div>  <!-- font-size -->
<div class="text-(color:--my-var)">...</div>   <!-- color -->
```

---

## 11. CSS Functions

### `--alpha()` — Adjust color opacity
```css
.element {
  color: --alpha(var(--color-lime-300) / 50%);
}
/* Compiles to: color: color-mix(in oklab, var(--color-lime-300) 50%, transparent); */
```

### `--spacing()` — Spacing scale values
```css
.element {
  margin: --spacing(4); /* = calc(var(--spacing) * 4) */
}
```
Also usable in arbitrary values: `py-[calc(--spacing(4)-1px)]`.

### Access Theme in JavaScript
```js
const styles = getComputedStyle(document.documentElement);
const shadow = styles.getPropertyValue('--shadow-xl');
```

In animation libraries (e.g. Motion):
```jsx
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

---

## 12. Rules, Conventions & Best Practices

### DO
- Use `@theme` for all design tokens — no JS config for new projects
- Use `oklch()` color values for new custom colors (Tailwind's default palette uses oklch)
- Prefer CSS variable references (`var(--color-brand-500)`) in custom CSS over hardcoded values
- Use `@utility` for custom utilities instead of `@layer utilities`
- Use `@custom-variant` for custom variants instead of plugins
- Use `@reference` in component `<style>` blocks (Vue/Svelte) to avoid CSS duplication
- Use `gap` with flex/grid instead of `space-x-*`/`space-y-*` for better performance
- Always specify border/ring colors explicitly — defaults are now `currentColor`
- Apply the important modifier at the **end**: `flex!` (not `!flex`)
- Stack variants **left-to-right**: `*:first:pt-0` (not `first:*:pt-0`)

### DON'T
- ❌ Don't use `@tailwind base/components/utilities` — use `@import "tailwindcss"` 
- ❌ Don't use `theme()` function — use `var(--token-name)` instead
- ❌ Don't use `bg-opacity-*`, `text-opacity-*` — use opacity modifiers: `bg-black/50`
- ❌ Don't use Sass, Less, or Stylus with v4
- ❌ Don't use `bg-[--my-var]` syntax (v3) — use `bg-(--my-var)` (v4)
- ❌ Don't rely on `hover:*` triggering on touch tap — v4 only applies hover when pointer supports it
- ❌ Don't use `transform-none` to reset individual transforms — use `scale-none`, `rotate-none`

### v3 → v4 Renamed Utilities
| v3 | v4 |
|---|---|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `rounded-sm` | `rounded-xs` |
| `rounded` | `rounded-sm` |
| `blur-sm` | `blur-xs` |
| `blur` | `blur-sm` |
| `outline-none` | `outline-hidden` |
| `ring` | `ring-3` |

### Prefix Usage (if configured)
```css
@import "tailwindcss" prefix(tw);
```
```html
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">...</div>
```

---

## 13. Source Detection

v4 auto-detects source files. To manually add sources:
```css
@source "../node_modules/@my-company/ui-lib";
```

Safelist specific utilities via inline source:
```css
@source inline("underline");
@source inline("{hover,focus}:{text,bg}-{red,green,blue}-{500,600}");
```

---

## 14. Migration from v3

Run the automated upgrade tool:
```bash
npx @tailwindcss/upgrade
```

Requires Node.js 20+. Run in a new branch and review the diff carefully.

Key manual steps if not using the tool:
1. Replace `@tailwind` directives with `@import "tailwindcss"`
2. Move `tailwind.config.js` theme to `@theme {}` in CSS
3. Replace `@layer utilities { .class {} }` with `@utility class {}`
4. Update renamed utilities (see table above)
5. Add explicit border/ring colors wherever defaults were relied upon
6. Replace `bg-[--var]` with `bg-(--var)` for CSS variable arbitrary values
7. Reverse stacked variant order: `first:*:` → `*:first:`
