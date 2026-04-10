import { cva } from 'class-variance-authority';

const textVariants = cva(
    "font-poppins transition-colors", // Base: Poppins es el estándar
    {
        variants: {
            variant: {
                display: 'text-3xl',
                h1: "text-2xl font-extrabold",
                h2: "text-xl font-bold",
                h3: "text-lg font-bold",
                subtitle1: "text-base font-semibold",
                subtitle2: "text-base font-medium",
                body1: "text-base font-normal",
                body2: "text-sm font-normal",
                caption: "text-xs font-normal",
                overline: "text-2xs font-semibold uppercase tracking-[0.05em]",
            },
            intent: {
                primary: "text-primary",     // 28% de los colores usados
                secondary: "text-secondary", // Etiquetas y soporte
                muted: "text-muted",         // Información opcional
                success: "text-success",     // Estados positivos
                warning: "text-warning",     // Alertas y precaución
                error: "text-error",         // Errores y valores negativos
            },
            weight: {
                light: "font-light",
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
                extrabold: "font-extrabold",
            },
            transform: {
                uppercase: "uppercase",
                none: "normal-case",
            },
            tracking: {
                normal: "tracking-normal",
                tight: "tracking-[0.04em]",      // Info rows 
                header: "tracking-[0.05em]",     // Table headers (más común)
                medium: "tracking-[0.06em]",     // Modal headers
                wide: "tracking-[0.08em]",       // Card titles
            },
        },
        defaultVariants: {
            variant: 'body1'
        },
    }
);

export default textVariants;