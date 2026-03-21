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

## 🚫 Anti-patterns

- Global `components/` folder with mixed responsibilities
- Cross-feature imports
- Business logic inside shared/
- Direct API calls in UI components