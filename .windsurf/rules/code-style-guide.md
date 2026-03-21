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

# 🧩 Windsurf Style & Component Rules

---

## 🚀 Core Strategy: Tailwind-First
- **Primary Engine:** Use **Tailwind CSS** for 90% of UI elements.
- **Complexity Check:** Only use **MUI** if the component is functionally complex (e.g., DataGrid, DatePicker, Autocomplete, complex Modals).
- **Simplicity Rule:** If a component can be built with a standard HTML tag and Tailwind in under 10-15 lines, **do not use MUI**. Avoid `<Box>`, `<Container>`, or `<Stack>` from MUI; use `<div>` with Tailwind flex/grid instead.

## 🧱 Component Architecture & Reusability
- **Shared Component Promotion:** If an HTML element or group of elements with Tailwind is identified as reusable or repeatable, **extract it immediately** into a shared component (e.g., `@/components/shared` or `@/components/ui`).
- **Atomic Thinking:** Prefer small, focused functional components over large, monolithic blocks of JSX.
- **Props Overriding:** All shared components should accept a `className` prop to allow for parent-driven layout adjustments (margins, positioning).

## 🎨 Design System & Theming
- **Single Source of Truth:** All colors, spacing, and typography must come from the `tailwind.config.js`.
- **No Hardcoding:** Avoid arbitrary values (e.g., `text-[#333]` or `p-[13px]`). Use the design system scale.
- **MUI Sync:** If MUI is required, it must be configured to inherit the Tailwind theme tokens (via CSS variables or theme mapping).

## ⚛️ MUI Usage & Constraints
- **Restrict `sx` Prop:** - ✅ Use `sx` ONLY for: Dynamic styles based on runtime state or complex MUI theme overrides.
  - ❌ NEVER use `sx` for: Layout (flex, grid), spacing (p, m, gap), or positioning. Use Tailwind classes.
- **Typography:** Use semantic HTML tags (`<h1>`, `<p>`, etc.) with Tailwind classes instead of MUI `<Typography>` unless specific theme-variant logic is required.
- **Interaction:** Use MUI for complex interaction states (managed focus, ARIA accessibility, transitions).

## 📱 Layout & Responsive Design
- **Tailwind Only:** All layout logic (Flexbox, Grid, Responsive Breakpoints) must be handled by Tailwind.
- **Consistency:** Keep responsive logic within Tailwind classes to avoid fragmentation between MUI's system and Tailwind's utilities.

## 🚫 Anti-patterns (Strictly Forbidden)
- **Style Mixing:** Do not apply the same property using both Tailwind and the `sx` prop.
- **MUI Wrappers:** Do not wrap simple layouts in `<Box>` or `<Container>`.
- **Inline Styles:** Do not use the `style={{...}}` attribute unless for calculated dynamic values (like a progress bar width).
- **Ad-hoc Variants:** Do not create one-off button or input styles with Tailwind; if it's a new style, define it as a reusable shared component or a theme variant.

## ✅ Exceptions
- Complex animations requiring `framer-motion` or MUI-specific transition components.
- Third-party library integrations that require specific class overrides.