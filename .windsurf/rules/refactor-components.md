---
trigger: manual
---

# Component Replacement & Refactoring Rules

## 1. HTML to React Transformation
- When asked to "refactor a component" (reemplaza el componente) from plain HTML:
    - Convert all standard HTML attributes to JSX syntax (e.g., `class` to `className`, `style` to object-based `style` props).
    - Ensure the component is exported as a functional React component using arrow function syntax.

## 2. Styling Strategy: Tailwind First
- Analyze any existing CSS or custom inline styles and map them directly to **Tailwind CSS** utility classes.
- **Visual Fidelity:** Prioritize matching the "Agroclimatica" design language (large border-radius, subtle shadows, and specific color hex codes found in the dashboard).
- Avoid creating new `.css` or `.module.css` files unless strictly necessary for complex animations.

## 3. Utility-Based Component Selection (Tailwind vs. MUI)
- **Visual/Layout Components:** Use 100% **Tailwind CSS** for containers, cards, buttons, and decorative elements to keep the bundle light.
- **Complex Functional Components:** Use **MUI (Material UI)** for components with high interactive complexity (e.g., Data Grids, Select Menus, Modals, Date Pickers).
- **Hybrid Styling:** When using MUI components, apply Tailwind classes or the `sx` prop to override default Material styles so they seamlessly blend with the custom dashboard aesthetic.

## 4. Responsiveness
- Every replaced component MUST be responsive by default using Tailwind's mobile-first breakpoints (`md:`, `lg:`, etc.).
- Ensure the Sidebar and Topbar behavior adapts correctly to different screen sizes.