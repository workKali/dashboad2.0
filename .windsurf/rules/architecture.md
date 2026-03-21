---
trigger: always_on
---

## 🏗️ Architecture (Screaming / Feature-based)

- Organize code by feature, not by technical type
- Each feature must be self-contained and independent

## 📁 Folder Structure

- Use the following structure:

  src/
    app/                # Next.js routes
    features/           # main business logic
    shared/             # reusable across features
    core/               # global configs (theme, api, etc)

## 🧩 Feature Structure

- Each feature should follow:

  feature-name/
    components/        # UI specific to feature
    hooks/             # feature hooks
    services/          # API calls
    types/             # types/interfaces
    utils/             # helpers
    store/             # state (optional)
    index.ts           # public API

## 🔒 Encapsulation Rules

- Do NOT import internal files from another feature
- Only import from `index.ts` of that feature

  ✅ GOOD:
  import { useAuth } from '@/features/auth'

  ❌ BAD:
  import { useAuth } from '@/features/auth/hooks/useAuth'

## ♻️ Shared Layer

- shared/ must contain only generic reusable logic:
  - UI components (Button, Input)
  - hooks (useDebounce, useToggle)
  - utils

- shared must NOT contain business logic

## ⚛️ Component Rules

- Components inside features:
  - must be specific to that feature
  - should not be reused globally

- Global reusable components go in:
  shared/components/

## 🔌 Services & API

- API calls must live inside `services/`
- Do NOT call APIs directly inside components

## 🧠 State Management

- State should live inside the feature when possible
- Avoid global state unless truly necessary

## 🎯 Code Generation Rules (IMPORTANT)

- Generated code must be:
  - Clean
  - Production-ready
  - Readable
  - Not over-engineered

- Avoid:
  - unnecessary abstractions
  - excessive comments
  - deeply nested logic

## 📄 File Organization Rules (AI Output)

- By default, follow feature-based multi-file architecture

- HOWEVER:
  - If the task is a **single component, layout, or UI composition**
  - Then keep everything in a **SINGLE FILE**

- In single-file scenarios:
  - You MAY define small internal components inside the same file
    (e.g. Topbar, AsidePanel)
  - Do NOT create additional files or folders
  - Keep logic locally scoped and simple

## ⚖️ Priority Rules

- Feature-based architecture is the default
- Single-file output is allowed ONLY for:
  - layouts
  - UI compositions
  - small scoped components

- Do NOT break architecture for large features

## 🚫 Anti-patterns

- Global `components/` folder with mixed responsibilities
- Cross-feature imports
- Business logic inside shared/
- Direct API calls in UI components
- Creating multiple files when a single-file solution is explicitly required