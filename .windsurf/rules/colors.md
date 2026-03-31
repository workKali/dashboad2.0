---
trigger: always_on
---

Refactor all Tailwind arbitrary color values into Tailwind theme tokens.

Rules:
- Find all Tailwind classes using arbitrary color values:
  - bg-[rgb(...)]
  - text-[rgb(...)]
  - border-[rgb(...)]
  - bg-[#...]
  - text-[#...]
- DO NOT replace them with approximate Tailwind default colors
- If the color does NOT exist in tailwind.config.js:
  → ADD it to the theme colors section

Color extraction rules:
- Convert rgb(...) to hex format
- Normalize and deduplicate colors (same color = same token)
- Group colors semantically if possible (success, warning, danger, neutral)

Naming rules:
- Use meaningful names when possible:
  - success, warning, danger, neutral
- If semantic meaning is unclear, use scale naming:
  - green-50-custom, green-100-custom, etc.
  OR
  - custom-1, custom-2 (only as fallback)

Then:
- Replace all arbitrary values in the code with the new Tailwind classes
- Do NOT leave any [...]-based color values
- Do NOT modify spacing, layout, or typography (only colors)

Also:
- Update tailwind.config.js with all new colors
- Ensure consistency across the project (same color → same token)

Avoid creating too many unique colors.
If multiple colors are visually identical or very close, reuse a single token.
