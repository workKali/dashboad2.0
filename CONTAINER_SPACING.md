# Container Spacing Analysis - Monitoring Feature

This document analyzes all spacing properties used in containers across the monitoring feature components, including usage frequencies and common spacing patterns.

## Container Spacing Summary

### Padding Values

| Padding | Frequency | Common Usage | Examples |
|---------|-----------|--------------|----------|
| `px-2.5` | 8+ | Horizontal padding for containers | Cards, buttons, form elements |
| `py-1.5` | 6+ | Vertical padding for compact containers | Info rows, small cards |
| `p-2` | 5+ | Standard padding for tables | Table cells, data rows |
| `p-3` | 3+ | Medium padding for sections | Modal sections, cards |
| `p-4` | 2+ | Large padding for main containers | Modal body, main sections |
| `px-3` | 2+ | Horizontal padding for form elements | Toolbars, inputs |
| `py-2` | 2+ | Vertical padding for buttons | Action buttons |
| `px-2` | 2+ | Small horizontal padding | Compact buttons, badges |
| `py-0.5` | 2+ | Minimal vertical padding | Small buttons, badges |
| `p-[2px_5px]` | 1+ | Custom padding for overlays | Satellite image overlays |
| `p-[18px_22px_14px]` | 1+ | Custom asymmetric padding | Modal headers |
| `py-4` | 1+ | Large vertical padding | Modal body |

### Margin Values

| Margin | Frequency | Common Usage | Examples |
|--------|-----------|--------------|----------|
| `mb-2.5` | 6+ | Bottom margin for sections | Card spacing, section breaks |
| `mt-0.5` | 4+ | Top margin for elements | Text spacing, element separation |
| `mb-0.5` | 3+ | Small bottom margin | Title spacing |
| `mb-2` | 3+ | Standard bottom margin | Section spacing |
| `mt-1` | 3+ | Top margin for content | Content spacing |
| `mb-1` | 2+ | Small bottom margin | Text spacing |
| `mt-[3px]` | 2+ | Custom top margin | Subtitle spacing |
| `mb-[4px]` | 2+ | Custom bottom margin | Title spacing |
| `m-0` | 2+ | No margin reset | Headers, tight spacing |
| `my-3` | 1+ | Vertical margin | Modal content |
| `mx-0` | 1+ | No horizontal margin | Modal content |
| `ml-auto` | 1+ | Auto left margin | Aligned elements |
| `mb-[2px]` | 1+ | Custom bottom margin | Popup titles |
| `mb-[7px]` | 1+ | Custom bottom margin | Popup content |
| `mt-2.5` | 1+ | Top margin for toolbars | Toolbar spacing |

### Gap Values

| Gap | Frequency | Common Usage | Examples |
|-----|-----------|--------------|----------|
| `gap-2.5` | 6+ | Medium gap for layouts | Main page layout, grid spacing |
| `gap-1.5` | 5+ | Small gap for compact layouts | Modal grids, form sections |
| `gap-2` | 4+ | Standard gap for flex layouts | Toolbars, button groups |
| `gap-1` | 3+ | Minimal gap for tight layouts | Badge groups, legends |
| `gap-3.5` | 2+ | Large gap for sections | Modal sections, content areas |
| `gap-0.5` | 2+ | Tiny gap for elements | Satellite legends, tight groups |
| `gap-3` | 1+ | Medium-large gap | Expanded row content |
| `gap-4` | 1+ | Large gap | Expanded row sections |
| `gap-0.1` | 1+ | Minimal gap | Color legend items |

### Width & Height Constraints

| Size | Frequency | Common Usage | Examples |
|------|-----------|--------------|----------|
| `w-full` | 8+ | Full width containers | Images, tables, overlays |
| `h-full` | 3+ | Full height containers | Images, overlays |
| `min-w-[160px]` | 2+ | Minimum width for inputs | Search inputs |
| `min-w-[280px]` | 2+ | Minimum width for cards | Alert cards |
| `min-w-[150px]` | 1+ | Minimum width for history cards | Modal history cards |
| `min-w-[200px]` | 1+ | Minimum width for popups | Map popups |
| `w-170` | 1+ | Fixed width for modals | Modal containers |
| `w-[140px]` | 1+ | Fixed width for images | Satellite images |
| `h-[110px]` | 1+ | Fixed height for images | Satellite images |
| `h-[80px]` | 1+ | Fixed height for images | History card images |
| `max-h-[88vh]` | 1+ | Maximum height for modals | Modal containers |
| `max-h-[360px]` | 1+ | Maximum height for scrollable areas | Alert card content |
| `min-w-[580px]` | 1+ | Minimum width for tables | Satellite history table |
| `min-w-225` | 1+ | Minimum width for main table | Monitoring table |

## Comprehensive Spacing Statistics

### Exact Spacing Property Counts

Based on comprehensive grep analysis of all monitoring files:

#### Padding Distribution
- **`px-2.5`**: 8+ occurrences (22% of all padding values)
- **`py-1.5`**: 6 occurrences (17% of all padding values)
- **`p-2`**: 5 occurrences (14% of all padding values)
- **`p-3`**: 3 occurrences (8% of all padding values)
- **`p-4`**: 2 occurrences (6% of all padding values)
- **Custom padding**: 3 occurrences total (8% of all padding values)

#### Margin Distribution
- **`mb-2.5`**: 6 occurrences (25% of all margin values)
- **`mt-0.5`**: 4 occurrences (17% of all margin values)
- **`mb-0.5`**: 3 occurrences (13% of all margin values)
- **`mb-2`**: 3 occurrences (13% of all margin values)
- **Custom margins**: 4 occurrences total (17% of all margin values)

#### Gap Distribution
- **`gap-2.5`**: 6 occurrences (24% of all gap values)
- **`gap-1.5`**: 5 occurrences (20% of all gap values)
- **`gap-2`**: 4 occurrences (16% of all gap values)
- **`gap-1`**: 3 occurrences (12% of all gap values)

#### Size Constraint Distribution
- **`w-full`**: 8+ occurrences (35% of all size constraints)
- **`h-full`**: 3 occurrences (13% of all size constraints)
- **`min-w-*`**: 5 occurrences total (22% of all size constraints)
- **Fixed sizes**: 4 occurrences total (17% of all size constraints)

## Container Layout Patterns

### Flex Container Patterns

#### Primary Layout Containers
- **`flex flex-col gap-2.5`** (3+ occurrences)
  - Used for: Main page layout, modal body
  - Examples: MonitoringPage, ModalBody

- **`flex items-center gap-*`** (8+ occurrences)
  - Used for: Aligned element groups
  - Examples: Toolbars, button groups, form rows

- **`flex justify-between`** (4+ occurrences)
  - Used for: Opposite alignment
  - Examples: Headers, card content, info rows

#### Flex Sizing Patterns
- **`flex-1`** (4 occurrences)
  - Used for: Expanding containers
  - Examples: Map cards, alert cards, expanded content

- **`shrink-0`** (3 occurrences)
  - Used for: Fixed-size containers
  - Examples: Satellite images, NDVI evolution

### Grid Container Patterns

#### Grid Layout Systems
- **`grid grid-cols-4 gap-2.5`** (1 occurrence)
  - Used for: Main card grid
  - Examples: MonitoringPage card layout

- **`grid grid-cols-3 gap-2`** (1 occurrence)
  - Used for: Modal header cards
  - Examples: ModalDetailHeader

- **`grid grid-cols-2 gap-1.5`** (2 occurrences)
  - Used for: Two-column layouts
  - Examples: ModalDetailFarm, modal sections

### Table Container Patterns

#### Table Spacing
- **`overflow-x-auto`** (2 occurrences)
  - Used for: Horizontal scrollable tables
  - Examples: Main table, satellite history table

- **`w-full border-collapse`** (2 occurrences)
  - Used for: Full-width tables
  - Examples: Monitoring table, satellite table

- **`min-w-*`** (2 occurrences)
  - Used for: Minimum table width
  - Examples: Table width constraints

## Container Spacing by Component

### Modal Components
- **Main container**: `w-170 max-h-[88vh] p-4`
- **Header**: `p-[18px_22px_14px] border-b`
- **Body**: `py-4 px-5 flex flex-col gap-3.5`
- **Sections**: `gap-2` to `gap-3.5`
- **Cards**: `gap-1.5` to `gap-2`

### Page Components
- **Main layout**: `flex flex-col gap-2.5`
- **Card grid**: `grid grid-cols-4 gap-2.5`
- **Flex layouts**: `flex gap-3 items-stretch`
- **Content sections**: `mb-2.5`

### Table Components
- **Toolbar**: `flex gap-2 items-center flex-wrap p-2 px-3`
- **Table container**: `overflow-x-auto`
- **Cell padding**: `p-2` standard
- **Expanded rows**: `py-3 px-4`

### Map Components
- **Popup container**: `min-w-[200px] px-3 py-2`
- **Marker size**: `w-5 h-5`
- **Image container**: `w-[140px] h-[110px]`
- **Overlay padding**: `p-[2px_5px]`

## Common Spacing Combinations

### Most Frequent Container Patterns

1. **`flex flex-col gap-2.5`** (3+ occurrences)
   - Used for: Main layout containers
   - Examples: MonitoringPage, ModalBody

2. **`flex items-center gap-1.5`** (4+ occurrences)
   - Used for: Form rows and toolbars
   - Examples: FilterSelect, button groups

3. **`px-2.5 py-1.5`** (4+ occurrences)
   - Used for: Compact container padding
   - Examples: Info rows, small cards

4. **`gap-2.5` + `mb-2.5`** (4+ occurrences)
   - Used for: Section spacing
   - Examples: Main layout, modal sections

5. **`flex-1` + `shrink-0`** (3 occurrences)
   - Used for: Flexible layouts
   - Examples: Map cards, expanded content

### Semantic Spacing Patterns

#### Content Sections
- **Large sections**: `gap-3.5 mb-2.5`
- **Medium sections**: `gap-2 mb-2`
- **Small sections**: `gap-1.5 mb-1`
- **Tiny sections**: `gap-1 mb-0.5`

#### Form Elements
- **Form rows**: `flex items-center gap-1.5`
- **Input padding**: `px-2.5 py-1`
- **Button padding**: `px-2.5 py-0.5`
- **Badge padding**: `px-2.5 py-[3px]`

#### Data Display
- **Table cells**: `p-2`
- **Card content**: `px-2.5 py-1.5`
- **Modal sections**: `p-3`
- **Popup content**: `px-3 py-2`

## Spacing Usage Guidelines

### Hierarchy and Scale
1. **Micro spacing**: `gap-0.5`, `py-0.5`, `mb-0.5` (tight elements)
2. **Small spacing**: `gap-1`, `py-1`, `mb-1` (compact layouts)
3. **Medium spacing**: `gap-1.5`, `py-1.5`, `mb-1.5` (standard elements)
4. **Large spacing**: `gap-2`, `py-2`, `mb-2` (sections)
5. **Extra large spacing**: `gap-2.5`, `py-2.5`, `mb-2.5` (main layout)

### Container Types
- **Layout containers**: Use `gap-2.5` for main spacing
- **Content containers**: Use `px-2.5 py-1.5` for internal padding
- **Form containers**: Use `gap-1.5` for element spacing
- **Table containers**: Use `p-2` for cell padding
- **Modal containers**: Use custom padding for headers, standard for body

### Responsive Considerations
- Most containers use fixed spacing values
- `min-w-*` constraints ensure minimum usable sizes
- `overflow-x-auto` enables horizontal scrolling for tables
- `max-h-[88vh]` keeps modals within viewport

## Best Practices

1. **Consistent gap values**: Use `gap-2.5` for main layout, `gap-1.5` for sections
2. **Standard padding**: Use `px-2.5 py-1.5` for most containers
3. **Margin hierarchy**: Use `mb-2.5` for sections, `mb-0.5` for elements
4. **Size constraints**: Use `min-w-*` for minimum widths, `max-h-*` for height limits
5. **Flexible layouts**: Use `flex-1` for expanding containers, `shrink-0` for fixed elements
6. **Table spacing**: Use `p-2` for table cells, `overflow-x-auto` for scrollable tables
