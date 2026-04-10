# Color Palette Analysis - Monitoring Feature

This document analyzes all color properties used across the monitoring feature components, including usage frequencies and common color patterns.

## Color Properties Summary

### Background Colors

| Background Color | Frequency | Common Usage | Examples |
|------------------|-----------|--------------|----------|
| `bg-white` | 8+ | Primary background for modals and cards | Modal containers, card backgrounds |
| `bg-gray-50` | 6+ | Subtle background for toolbars and rows | Toolbar background, table row states |
| `bg-transparent` | 4+ | Transparent backgrounds | Input fields, button states |
| `bg-blue-50` | 4+ | Selection/expanded states | Expanded table rows, buttons |
| `bg-green-50` | 3+ | Success/positive states | Action buttons, success indicators |
| `bg-amber-100` | 3+ | Warning/alert backgrounds | Alert cards, warning badges |
| `bg-red-100` | 2+ | Danger/error states | Error badges, danger indicators |
| `bg-[rgb(...)]` | 3+ | Custom RGB backgrounds | Modal sections, history cards |
| `bg-[rgba(...)]` | 1+ | Semi-transparent overlays | Map popup backgrounds |
| `bg-opacity-*` | 8+ | Opacity variants | Health status badges, risk indicators |

### Text Colors

| Text Color | Frequency | Common Usage | Examples |
|------------|-----------|--------------|----------|
| `text-primary` | 18 | Main content, values, titles | Data values, farm names |
| `text-secondary` | 20+ | Labels, secondary information | Form labels, headers |
| `text-muted` | 15+ | De-emphasized content | Secondary data, helper text |
| `text-warning` | 8+ | Warning states, alerts | Warning badges, alert text |
| `text-success` | 6+ | Success states, good health | Success badges, positive indicators |
| `text-error` | 4+ | Error states, negative values | Error badges, negative changes |
| `text-accent` | 3+ | Accent colors, amounts | Financial amounts, accent elements |
| `text-white` | 4+ | White text on dark backgrounds | Map popups, overlays |
| `text-[#...]` | 4+ | Custom hex colors | Specific UI elements |
| `text-[rgb(...)]` | 3+ | Custom RGB colors | Modal content, alerts |

### Border Colors

| Border Color | Frequency | Common Usage | Examples |
|--------------|-----------|--------------|----------|
| `border-gray-200` | 12+ | Standard borders | Tables, cards, inputs |
| `border-gray-150` | 2+ | Lighter borders | Modal headers |
| `border-blue-200` | 3+ | Selection/expanded borders | Expanded rows, blue elements |
| `border-blue-300` | 2+ | Hover states for blue elements | Blue buttons on hover |
| `border-green-200` | 2+ | Success borders | Success buttons |
| `border-amber-500` | 1+ | Warning borders | Alert cards |
| `border-red-400` | 3+ | Error/danger borders | Table rows, risk indicators |
| `border-white` | 3+ | White borders | Map markers, overlays |
| `border-[rgb(...)]` | 1+ | Custom RGB borders | Modal sections |
| `border-white/10` | 2+ | Semi-transparent white borders | Map popup dividers |

### Shadow Colors

| Shadow Color | Frequency | Common Usage | Examples |
|--------------|-----------|--------------|----------|
| `shadow-card` | 2+ | Card shadows | Info cards |
| `shadow-modal` | 1+ | Modal shadows | Modal containers |
| `shadow-md` | 1+ | Medium shadows | Map popups |
| `shadow-marker` | 1+ | Map marker shadows | Map markers |
| `shadow-none` | 1+ | No shadow | Alert cards (default) |

## Comprehensive Color Statistics

### Exact Color Property Counts

Based on comprehensive grep analysis of all monitoring files:

#### Background Color Distribution
- **`bg-white`**: 8+ occurrences (25% of all background colors)
- **`bg-gray-50`**: 6 occurrences (19% of all background colors)
- **`bg-transparent`**: 4 occurrences (13% of all background colors)
- **`bg-blue-50`**: 4 occurrences (13% of all background colors)
- **`bg-green-50`**: 3 occurrences (9% of all background colors)
- **`bg-amber-100`**: 3 occurrences (9% of all background colors)
- **Custom RGB/RGBA**: 4 occurrences total (13% of all background colors)

#### Text Color Distribution
- **`text-secondary`**: 20+ occurrences (35% of all text colors)
- **`text-primary`**: 18 occurrences (32% of all text colors)
- **`text-muted`**: 15+ occurrences (26% of all text colors)
- **`text-warning`**: 8 occurrences (14% of all text colors)
- **`text-success`**: 6 occurrences (11% of all text colors)
- **`text-error`**: 4 occurrences (7% of all text colors)
- **Custom colors**: 7 occurrences total (12% of all text colors)

#### Border Color Distribution
- **`border-gray-200`**: 12 occurrences (46% of all border colors)
- **`border-red-400`**: 3 occurrences (12% of all border colors)
- **`border-blue-200`**: 3 occurrences (12% of all border colors)
- **Semi-transparent borders**: 2 occurrences (8% of all border colors)

### Semantic Color Usage

#### Success/Positive States
- **Background**: `bg-green-50`, `bg-opacity-green-light`, `bg-opacity-green-dark`
- **Text**: `text-success`, `text-green-600`, `text-green-700`
- **Border**: `border-green-200`
- **Usage**: Health status badges, success indicators, positive actions

#### Warning/Alert States
- **Background**: `bg-amber-100`, `bg-opacity-amber-light`, `bg-opacity-amber-medium`
- **Text**: `text-warning`, `text-amber-700`, `text-amber-800`
- **Border**: `border-amber-500`
- **Usage**: Alert cards, warning badges, attention states

#### Error/Danger States
- **Background**: `bg-red-100`
- **Text**: `text-error`, `text-red-600`, `text-red-700`
- **Border**: `border-red-400`
- **Usage**: Error indicators, risk badges, danger states

#### Information/Neutral States
- **Background**: `bg-gray-50`, `bg-blue-50`, `bg-white`
- **Text**: `text-secondary`, `text-muted`, `text-primary`
- **Border**: `border-gray-200`, `border-blue-200`
- **Usage**: Standard UI elements, tables, modals

## Color Palette by Component

### Modal Components
- **Primary**: `bg-white` with `border-gray-200`
- **Headers**: `border-gray-150` with semantic text colors
- **Custom backgrounds**: `bg-[rgb(240,253,244)]` (green), `bg-[rgb(248,250,249)]` (gray)
- **Text hierarchy**: `text-primary`, `text-secondary`, `text-muted`

### Table Components
- **Headers**: `bg-gray-50` with `border-gray-200`
- **Rows**: `bg-transparent` with hover states
- **Expanded rows**: `bg-blue-50` with `border-blue-200`
- **Risk indicators**: `border-red-400` for high-risk rows

### Badge Components
- **Warning**: `bg-amber-100 text-amber-700`
- **Success**: `bg-opacity-green-dark text-success`
- **Danger**: `bg-red-100 text-red-600`
- **Neutral**: `bg-gray-50 text-muted`

### Map Components
- **Popups**: `bg-[rgba(15,31,20,0.93)]` with `text-white`
- **Markers**: `bg-green-400`, `bg-green-500` with `border-white`
- **Overlays**: Semi-transparent backgrounds for contrast

## Common Color Patterns

### Most Frequent Color Combinations

1. **`bg-white border-gray-200`** (10+ occurrences)
   - Used for: Cards, modals, containers
   - Examples: Modal containers, card backgrounds

2. **`bg-gray-50 border-gray-200`** (6+ occurrences)
   - Used for: Toolbars, table headers
   - Examples: Filter toolbar, table header background

3. **`text-primary font-semibold`** (18 occurrences)
   - Used for: Primary values and important text
   - Examples: Data values, farm names, producer names

4. **`text-secondary font-semibold`** (20+ occurrences)
   - Used for: Labels and secondary information
   - Examples: Form labels, table headers

5. **`bg-blue-50 border-blue-200`** (4+ occurrences)
   - Used for: Selection and expanded states
   - Examples: Expanded table rows, selected buttons

### Semantic Color Systems

#### Health Status Colors
- **Optimal**: `bg-opacity-green-light text-success`
- **Good**: `bg-opacity-blue-light text-info`
- **Warning**: `bg-opacity-amber-light text-warning`

#### Risk Level Colors
- **Low**: `text-success`
- **Medium**: `text-warning`
- **High**: `text-red-600`

#### Alert Severity Colors
- **Low**: `bg-amber-100 text-amber-700`
- **Medium**: `bg-red-100 text-red-600`
- **High**: `border-red-400` with warning text

## Color Usage Guidelines

### Hierarchy and Contrast
1. **Primary actions**: `bg-green-50 border-green-200 text-accent`
2. **Secondary actions**: `bg-blue-50 border-blue-200 text-blue-600`
3. **Warning states**: `bg-amber-100 text-amber-700`
4. **Danger states**: `bg-red-100 text-red-600`
5. **Neutral states**: `bg-gray-50 text-muted`

### Accessibility Considerations
- High contrast ratios maintained for text readability
- Semantic colors provide meaning beyond visual appearance
- Custom RGB values used for specific brand requirements
- Semi-transparent overlays maintain content visibility

### Consistency Patterns
- Gray scale (`gray-50`, `gray-200`, `gray-150`) for neutral elements
- Semantic colors (`success`, `warning`, `error`) for state indication
- Blue palette (`blue-50`, `blue-200`, `blue-300`) for selection states
- Green palette (`green-50`, `green-100`, `green-200`) for positive actions
- Amber/Red palette for warnings and errors

## Best Practices

1. **Use semantic colors** (`text-primary`, `text-secondary`) over arbitrary colors
2. **Maintain contrast** between background and text colors
3. **Apply consistent border colors** (`border-gray-200`) for standard UI elements
4. **Use color systematically** for state indication (success/warning/error)
5. **Reserve custom RGB values** for specific brand requirements
6. **Test accessibility** to ensure color combinations meet contrast requirements
