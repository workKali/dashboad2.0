import defaultTheme from "tailwindcss/defaultTheme";

const config = {
    content: [
        "./src/**/*.{html,js}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Color System
            colors: {
                // Green Scale (Primary theme color)
                green: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                // Gray Scale (Neutrals)
                gray: {
                    50: '#f8faf9',
                    100: '#f1f5f2',
                    200: '#e2e8e0',
                    300: '#c8d7cc',
                    400: '#9ca8a2',
                    500: '#7a9e8e',
                    600: '#5a7966',
                    700: '#3a5244',
                    800: '#2c3e33',
                    900: '#1a2e24',
                    950: '#0f1f14',
                },
                // Amber/Orange Scale (Warnings)
                amber: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03',
                },
                // Red Scale (Errors/Danger)
                red: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
                // Blue Scale (Info/Secondary)
                blue: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                
                // Semantic Colors
                primary: '#0f1f14',      // gray950
                secondary: '#7a9e8e',    // gray500
                muted: '#3a5244',        // gray700
                success: '#22c55e',      // green500
                warning: '#d97706',      // amber600
                error: '#ef4444',        // red500
                info: '#3b82f6',         // blue500
                accent: '#15803d',       // green700
                inverse: '#ffffff',
                
                // Opacity Variants
                'opacity-green-light': 'rgba(34,197,94,0.133)',
                'opacity-green-medium': 'rgba(34,197,94,0.094)',
                'opacity-green-dark': 'rgba(239,68,68,0.07)',
                'opacity-blue-light': 'rgba(59,130,246,0.133)',
                'opacity-amber-light': 'rgba(217,119,6,0.133)',
                'opacity-amber-medium': 'rgba(217,119,6,0.094)',
                'opacity-black-light': 'rgba(0,0,0,0.05)',
                'opacity-black-medium': 'rgba(0,0,0,0.45)',
                'opacity-black-overlay': 'rgba(0,0,0,0.25)',
            },
            
            // Typography System
            fontSize: {
                xs: ['8px', { lineHeight: '10px' }],
                sm: ['9.5px', { lineHeight: '12px' }],
                base: ['10px', { lineHeight: '13px' }],
                lg: ['10.5px', { lineHeight: '14px' }],
                xl: ['11px', { lineHeight: '15px' }],
                '2xl': ['18px', { lineHeight: '22px' }],
                '3xl': ['22px', { lineHeight: '24px' }],
                // Custom sizes for special cases
                '7px': ['7px', { lineHeight: '9px' }],
                '7.5px': ['7.5px', { lineHeight: '9px' }],
                '8.5px': ['8.5px', { lineHeight: '11px' }],
                '9px': ['9px', { lineHeight: '11px' }],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            letterSpacing: {
                tight: '-0.025em',
                normal: '0em',
                wide: '0.05em',
                wider: '0.1em',
                widest: '0.15em',
                // Custom tracking values
                '0.06em': '0.06em',
                '0.07em': '0.07em',
                '0.08em': '0.08em',
                '0.1em': '0.1em',
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            
            // Gradients
            backgroundImage: {
                'gradient-primary': 'linear-gradient(90deg, rgb(22,163,74), rgba(22,163,74,0.267))',
                'gradient-success': 'linear-gradient(90deg, rgb(34,197,94), rgba(34,197,94,0.267))',
            },
            
            // Shadows
            boxShadow: {
                'card': '0px 1px 4px rgba(15,31,20,0.04)',
                'modal': '0px 24px 80px rgba(0,0,0,0.25)',
                'default': 'rgba(15,31,20,0.04)',
            },
            
            // Spacing for custom needs
            spacing: {
                '0.5': '2px',
                '1.5': '6px',
                '2.5': '10px',
            },
        },
    },
    plugins: [],
};

export default config;