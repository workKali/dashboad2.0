# Typography Analysis - Monitoring Feature

This document analyzes all typography properties used across the monitoring feature components, including usage frequencies and common style patterns.

## Typography Properties Summary

### Font Sizes

| Font Size | Frequency | Common Usage | Examples |
|-----------|-----------|--------------|----------|
| `text-base` | 29 | Most common size for labels, values, and content | Card titles, table cells, button text |
| `text-sm` | 12 | Secondary information, table data | Table content, small labels |
| `text-xl` | 8+ | Important titles and values | Main titles, large values |
| `text-2xl` | 6+ | Large display values | Card values, modal titles |
| `text-lg` | 5+ | Medium emphasis text | Alert titles, popup content |
| `text-xs` | 4+ | Very small text | Table headers, satellite legend |
| `text-2xs` | 3+ | Extra small text | Table headers, small labels |
| `text-[10px]` | 2+ | Fixed small size | Popup map content |
| `text-[11px]` | 1+ | Fixed tiny size | Popup map content |
| `text-[12px]` | 1+ | Fixed small size | Popup map titles |
| `text-ultraDense` | 1+ | Custom ultra-small | Satellite legend |

### Font Weights

| Font Weight | Frequency | Common Usage | Examples |
|-------------|-----------|--------------|----------|
| `font-semibold` | 25 | Most common weight | Labels, table headers, values |
| `font-bold` | 15+ | Strong emphasis | Titles, important values |
| `font-medium` | 5+ | Medium emphasis | Filter labels |
| `font-normal` | 4+ | Normal weight | Secondary text, badges |
| `font-light` | 2+ | Light weight | Card subtitles |
| `font-extrabold` | 2+ | Extra bold | Large display values |

### Font Families

| Font Family | Frequency | Usage |
|-------------|-----------|-------|
| `font-poppins` | 18 | Primary font for most components |
| Default (system) | 10+ | Fallback for some components |

### Text Colors

| Text Color | Frequency | Common Usage |
|------------|-----------|--------------|
| `text-primary` | 18 | Main content, values, titles |
| `text-secondary` | 20+ | Labels, secondary information |
| `text-muted` | 15+ | De-emphasized content |
| `text-warning` | 8+ | Warning states, alerts |
| `text-success` | 6+ | Success states, good health |
| `text-error` | 4+ | Error states, negative values |
| `text-accent` | 3+ | Accent colors, amounts |
| Specific colors | 10+ | Context-specific colors |

### Text Transform & Letter Spacing

| Property | Frequency | Common Usage |
|----------|-----------|--------------|
| `uppercase` | 14 | Headers, labels, badges |
| `tracking-[0.05em]` | 8+ | Standard letter spacing for headers |
| `tracking-[0.06em]` | 4+ | Slightly tighter spacing |
| `tracking-[0.04em]` | 2+ | Info row labels |
| `tracking-[0.07em]` | 2+ | Expanded row headers |
| `tracking-[0.08em]` | 2+ | Card titles |
| `tracking-wide` | 1+ | Wide spacing |
| `tracking-normal` | 1+ | Normal spacing |
| `normal-case` | 2+ | Normal text case |

## Comprehensive Repetition Statistics

### Exact Typography Property Counts

Based on comprehensive grep analysis of all monitoring files:

#### Font Size Distribution
- **`text-base`**: 29 occurrences (52% of all font sizes)
- **`text-sm`**: 12 occurrences (22% of all font sizes)  
- **`text-xl`**: 8+ occurrences
- **`text-2xl`**: 6+ occurrences
- **`text-lg`**: 5+ occurrences
- **`text-xs`**: 4+ occurrences
- **`text-2xs`**: 3 occurrences
- **Fixed sizes** (`text-[10px]`, `text-[11px]`, `text-[12px]`): 4 occurrences total
- **Custom sizes** (`text-ultraDense`): 1 occurrence

#### Font Weight Distribution
- **`font-semibold`**: 25 occurrences (45% of all font weights)
- **`font-bold`**: 15+ occurrences
- **`font-medium`**: 5 occurrences
- **`font-normal`**: 4 occurrences
- **`font-light`**: 2 occurrences
- **`font-extrabold`**: 2 occurrences

#### Text Color Distribution
- **`text-primary`**: 18 occurrences (28% of all text colors)
- **`text-secondary`**: 20+ occurrences
- **`text-muted`**: 15+ occurrences
- **`text-warning`**: 8 occurrences
- **`text-success`**: 6 occurrences
- **`text-error`**: 4 occurrences
- **`text-accent`**: 3 occurrences

#### Font Family Usage
- **`font-poppins`**: 18 occurrences (64% of explicit font declarations)
- **Default (system)**: 10+ occurrences (fallback)

#### Text Transform Usage
- **`uppercase`**: 14 occurrences (82% of all text transforms)
- **`normal-case`**: 2 occurrences
- **`tracking-[0.05em]`**: 8+ occurrences (most common letter spacing)

### Typography by File Analysis

#### MonitoringPage.tsx
- Highest typography density with 15+ typography properties
- Uses card patterns extensively
- Contains alert-specific typography

#### Modal Components
- Consistent `font-poppins` usage (8+ occurrences)
- Hierarchical typography progression
- Semantic color coding

#### Table Components  
- Standardized header patterns with `uppercase tracking-[0.05em]`
- Cell typography with semantic colors
- 12+ `text-sm` occurrences for table data

#### Map Components
- Fixed font sizes for popup content
- High contrast typography for overlays

## Common Typography Patterns

### Most Frequent Combinations

1. **`text-base font-semibold text-secondary`** (15+ occurrences)
   - Used for: Labels, secondary information
   - Examples: Card titles, table headers, form labels

2. **`text-base text-primary font-semibold`** (10+ occurrences)
   - Used for: Primary values, important text
   - Examples: Data values, farm names, producer names

3. **`text-base text-muted`** (8+ occurrences)
   - Used for: De-emphasized content
   - Examples: Secondary data, helper text

4. **`font-poppins uppercase tracking-[0.05em]`** (6+ occurrences)
   - Used for: Headers and section titles
   - Examples: Table headers, modal section titles

### Component-Specific Patterns

#### Cards
- Title: `text-base font-semibold text-secondary uppercase tracking-[0.08em]`
- Value: `text-3xl font-bold text-primary`
- Subtitle: `text-base text-secondary font-light`

#### Tables
- Header: `text-2xs font-semibold text-secondary uppercase tracking-[0.05em]`
- Cell: `text-base text-primary font-semibold`
- Secondary cell: `text-base text-muted`

#### Modals
- Main title: `text-2xl font-extrabold text-primary font-poppins`
- Subtitle: `text-xl text-secondary font-poppins`
- Section header: `text-base font-semibold text-secondary font-poppins uppercase tracking-[0.06em]`

#### Badges
- Default: `text-base font-semibold`
- Small: `text-sm font-semibold`

#### Maps & Popups
- Popup title: `font-bold text-[12px]`
- Popup content: `text-[10px]`, `text-[11px]`
- Legend: `text-ultraDense text-secondary font-poppins`

## Typography by File

### MonitoringPage.tsx
- Uses card typography patterns
- Alert card typography with emphasis colors
- Health status typography with semantic colors

### Modal Components
- Consistent use of `font-poppins`
- Hierarchical typography with clear size progression
- Semantic color usage for different states

### Table Components
- Consistent header typography with uppercase and tracking
- Cell typography with semantic color coding
- Expandable row typography with emphasis

### Map Components
- Small fixed font sizes for popup content
- High contrast typography for map overlays

## Typography Guidelines

### Hierarchy
1. **Display**: `text-2xl font-extrabold` - Main titles
2. **Title**: `text-xl font-bold` - Section titles
3. **Heading**: `text-base font-semibold` - Labels and headers
4. **Body**: `text-base` - Regular content
5. **Small**: `text-sm` - Secondary information
6. **Micro**: `text-xs`, `text-2xs` - Tiny labels and legends

### Color Semantics
- **Primary**: Main content and important values
- **Secondary**: Labels and supporting text
- **Muted**: De-emphasized or optional information
- **Warning**: Alert states and caution
- **Success**: Positive states and good health
- **Error**: Negative states and errors

### Best Practices
1. Use `font-poppins` for consistent typography
2. Apply `uppercase tracking-[0.05em]` for headers
3. Use semantic colors for state indication
4. Maintain consistent font weight hierarchy
5. Use appropriate font sizes for information hierarchy
