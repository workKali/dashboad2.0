---
trigger: always_on
---

## 🧩 Styling Strategy

- Use Tailwind CSS as the default styling approach
- Avoid styled-components and CSS modules
- Prefer Tailwind utility classes over custom CSS
- Avoid inline styles unless strictly necessary

## 🎨 Design System

- All colors, typography, and spacing must come from a shared theme
- Do not hardcode colors or font sizes
- Use Tailwind config and MUI theme as the single source of truth
- Allow CSS variables only for theming (dark mode, dynamic colors)

## ⚛️ MUI Usage

- Use MUI components for UI structure (Button, Input, Card, etc.)
- Use MUI `variant` system for component variations
- Use `sx` only for:
  - dynamic styles
  - conditional rendering
  - theme-based overrides

- Do NOT use `sx` for static layout (use Tailwind instead)

## 🧱 Layout Rules

- Use Tailwind for:
  - flex / grid
  - spacing (margin, padding, gap)
  - responsive design
  - positioning

- Example:
  - ✅ `flex gap-4 p-4`
  - ❌ `sx={{ display: 'flex', gap: 2, padding: 2 }}`

## 🔤 Typography

- Define typography scale in theme
- Sync Tailwind font sizes with MUI typography
- Avoid inline font sizes

## 🔘 Component Variants

- All custom variants must be defined in MUI theme
- Do not create ad-hoc button styles with Tailwind
- Use Tailwind only for spacing inside components

## 🧠 State & Interaction

- Use MUI for:
  - hover
  - focus
  - disabled
  - active states

- Avoid Tailwind state duplication unless necessary

## 📱 Responsive Design

- Use Tailwind breakpoints
- Keep responsive logic consistent across components

## 🚫 Anti-patterns

- Mixing Tailwind and `sx` for the same property
- Hardcoding colors (e.g. `text-red-500` outside theme)
- Creating one-off styles instead of variants
- Overusing `sx` instead of Tailwind

## ✅ Exceptions

- External libraries may require custom styles
- Complex animations can use custom CSS
- Edge cases may use inline styles with justification