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
# 🧩 Windsurf Style & Component Rules: Tailwind-Dominant

---

## 🚀 Estrategia Core: Tailwind-First (Prioridad 100%)
- **Motor Principal:** Usa **Tailwind CSS** para el 90-100% de los elementos de la interfaz.
- **Regla de Simplicidad:** Si un componente se puede construir con etiquetas HTML estándar (`div`, `section`, `nav`, `button`, `input`) y Tailwind, **está prohibido usar MUI**.
- **Adiós a los Wrappers de MUI:** No utilices `<Box>`, `<Container>`, `<Stack>` o `<Grid>` de MUI. Sustitúyelos siempre por `<div>` con clases de Flexbox o Grid de Tailwind.
- **Complejidad Funcional:** Solo se permite **MUI** para componentes con lógica interna pesada (ej. `DataGrid`, `DatePicker`, `Autocomplete`, `Selects` con búsqueda, o `Modales` con gestión de foco compleja).

## 🧱 Arquitectura de Componentes (Shared Components)
- **Extracción Inmediata:** Si identificas un patrón HTML + Tailwind que se repite o es propenso a reutilizarse, **extráelo automáticamente** a un componente compartido en `@/components/shared` o `@/components/ui`.
- **Componentes Atómicos:** Prefiere crear un `Button.tsx` propio con Tailwind en lugar de usar `<Button>` de MUI si no requiere estados de carga o lógica compleja del framework.
- **Propiedad `className`:** Todos los componentes compartidos deben aceptar una prop `className` para permitir que el padre controle el margen (`m-`), el espaciado o la posición sin romper el componente.

## 🔤 Tipografía y Tamaños Estándar
- **Escala Tailwind:** No uses `variant` de MUI para textos si no es estrictamente necesario. Usa etiquetas semánticas (`h1`, `h2`, `p`, `span`) con la escala nativa de Tailwind:
  - ✅ `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.
- **Prohibido Hardcoding:** No uses valores arbitrarios como `text-[15px]`. Ajusta el diseño para que encaje en los pasos estándar de Tailwind.
- **Consistencia:** Si el diseño pide un tamaño intermedio, prefiere el valor estándar más cercano de Tailwind para mantener la armonía visual.

## 🎨 Design System & Theming
- **Fuente de Verdad Única:** El archivo `tailwind.config.js` es la autoridad. El tema de MUI debe estar sincronizado para usar los mismos colores y fuentes (vía variables CSS o mapeo directo).
- **Cero Estilos Inline:** No uses el atributo `style={{...}}` ni valores arbitrarios en clases (ej. `bg-[#f3f3f3]`) a menos que sean valores dinámicos calculados en tiempo de ejecución.

## ⚛️ Restricciones de MUI y `sx`
- **Uso de `sx` PROHIBIDO para Layout:** - ❌ NUNCA uses `sx` para: `display`, `flex`, `grid`, `gap`, `padding`, `margin`, `width`, `height` o `position`.
  - ✅ Solo usa `sx` para: Estilos condicionales ultra-complejos que dependan directamente del estado de React y no se puedan resolver con `clsx` o `tailwind-merge`.
- **Interacción:** Usa MUI solo cuando necesites accesibilidad avanzada (ARIA) o estados de interacción que Tailwind no maneje de forma nativa con la misma facilidad (ej. menús desplegables con teclado).

## 📱 Diseño Responsivo
- **Breakpoints de Tailwind:** Usa exclusivamente los prefijos de Tailwind (`sm:`, `md:`, `lg:`, `xl:`) para toda la lógica responsiva. No mezcles con `useMediaQuery` de MUI a menos que sea para lógica de renderizado condicional en JS.

## 🚫 Anti-patrones (Estrictamente Prohibidos)
1. **Mezclar Estilos:** No apliques la misma propiedad con Tailwind y `sx` a la vez. **Tailwind siempre gana.**
2. **Typography de MUI por defecto:** Evita `<Typography variant="body1">`, usa `<p className="text-base">`.
3. **MUI de bajo nivel:** No uses componentes de MUI que solo aporten estilo visual (como `Paper`, `Card`, `Divider`). Hazlos con Tailwind.
4. **Hardcoding de Colores:** No uses `text-red-500` si el tema define un color semántico; usa las clases del tema (ej. `text-error` o `text-primary`).

## ✅ Excepciones
- Animaciones complejas que requieran `Framer Motion` o transiciones nativas de MUI.
- Librerías de terceros que obliguen a usar clases específicas o estilos inyectados.