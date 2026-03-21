# 🏗️ Arquitectura del Proyecto

## Estructura Scream Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Rutas de dashboard
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página principal
├── features/              # Lógica de negocio por feature
│   └── dashboard/
│       ├── components/    # Componentes específicos del dashboard
│       ├── hooks/         # Hooks personalizados del dashboard
│       ├── services/      # Llamadas API del dashboard
│       ├── types/         # Tipos/interfaces del dashboard
│       ├── utils/         # Utilidades del dashboard
│       └── index.ts       # API pública del feature
├── shared/                # Componentes y lógica reutilizable
│   ├── components/        # Componentes UI genéricos
│   ├── hooks/            # Hooks compartidos
│   ├── utils/            # Utilidades genéricas
│   └── index.ts          # API pública de shared
└── core/                  # Configuraciones globales
    ├── EmotionCache.tsx  # Configuración de caché de Emotion
    ├── ThemeRegistry.tsx # Registro de tema MUI
    └── index.ts          # API pública de core
```

## 🎯 Principios Clave

### 1. Organización por Features
- Cada feature es autocontenida e independiente
- La lógica de negocio vive dentro de su feature
- Solo se importa desde el `index.ts` de cada feature

### 2. Encapsulación Estricta
- ✅ `import { useAuth } from '@/features/auth'`
- ❌ `import { useAuth } from '@/features/auth/hooks/useAuth'`

### 3. Separación de Responsabilidades
- **features/**: Lógica de negocio específica
- **shared/**: Componentes y utilidades genéricas reutilizables
- **core/**: Configuraciones globales (tema, API, etc.)
- **app/**: Rutas y layouts de Next.js

### 4. Reglas de Styling
- **Tailwind CSS** para layout y diseño visual
- **MUI** para componentes interactivos complejos
- Sin estilos hardcodeados, usar tema compartido

## 🔄 Flujo de Trabajo

1. **Crear nuevo feature**: Añadir carpeta en `features/`
2. **Añadir componente**: Colocar en `feature/components/`
3. **Exportar**: Actualizar `index.ts` del feature
4. **Importar**: Usar `@/features/feature-name`

## 📦 Tecnologías

- **Next.js 16** con App Router
- **React 19** con TypeScript
- **Tailwind CSS v4** para styling
- **Material UI v7** para componentes
- **Emotion** para gestión de temas
