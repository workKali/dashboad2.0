export const typography = {
	// Font Sizes with proportional line heights
	fontSize: {
		xs: { size: '8px', lineHeight: '10px' },
		sm: { size: '9.5px', lineHeight: '12px' },
		base: { size: '10px', lineHeight: '13px' },
		lg: { size: '10.5px', lineHeight: '14px' },
		xl: { size: '11px', lineHeight: '15px' },
		'2xl': { size: '18px', lineHeight: '22px' },
		'3xl': { size: '22px', lineHeight: '24px' },
	},

	// Font Weights
	fontWeight: {
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
	},

	// Letter Spacing (Tracking)
	letterSpacing: {
		tight: '-0.025em',
		normal: '0em',
		wide: '0.05em',
		wider: '0.1em',
		widest: '0.15em',
	},

	// Font Families
	fontFamily: {
		sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
		mono: ['JetBrains Mono', 'Consolas', 'monospace'],
	},

	// Global Typography Presets (used across the app)
	presets: {
		// Card and UI Elements
		cardTitle: {
			fontSize: '10px',
			fontWeight: '600',
			lineHeight: '13px',
			letterSpacing: '0.1em',
			textTransform: 'uppercase',
		},
		cardValue: {
			fontSize: '22px',
			fontWeight: '700',
			lineHeight: '24px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		cardSubtitle: {
			fontSize: '10px',
			fontWeight: '300',
			lineHeight: '13px',
			letterSpacing: '0.08em',
			textTransform: 'uppercase',
		},

		// Modal Elements
		modalTitle: {
			fontSize: '18px',
			fontWeight: '800',
			lineHeight: '22px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		modalSubtitle: {
			fontSize: '11px',
			fontWeight: '400',
			lineHeight: '15px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Form Elements
		label: {
			fontSize: '10px',
			fontWeight: '500',
			lineHeight: '13px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		input: {
			fontSize: '10.5px',
			fontWeight: '400',
			lineHeight: '14px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Alert and Status Elements
		alertText: {
			fontSize: '10px',
			fontWeight: '700',
			lineHeight: '13px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		badgeText: {
			fontSize: '9px',
			fontWeight: '600',
			lineHeight: '11px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Section Headers
		sectionTitle: {
			fontSize: '8.5px',
			fontWeight: '600',
			lineHeight: '11px',
			letterSpacing: '0.05em',
			textTransform: 'uppercase',
		},

		// Navigation and Interactive Elements
		navText: {
			fontSize: '9.5px',
			fontWeight: '600',
			lineHeight: '12px',
			letterSpacing: '0.07em',
			textTransform: 'uppercase',
		},
		buttonText: {
			fontSize: '9.5px',
			fontWeight: '600',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Utility presets
		caption: {
			fontSize: '9.5px',
			fontWeight: '400',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		overline: {
			fontSize: '10px',
			fontWeight: '600',
			lineHeight: '13px',
			letterSpacing: '0.1em',
			textTransform: 'uppercase',
		},
	},

	// Monitoring Page Specific Presets
	monitoring: {
		// Table Elements (Monitoring specific)
		tableHeader: {
			fontSize: '8px',
			fontWeight: '700',
			lineHeight: '10px',
			letterSpacing: '0.05em',
			textTransform: 'uppercase',
		},
		tableData: {
			fontSize: '9.5px',
			fontWeight: '400',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		tableDataBold: {
			fontSize: '9.5px',
			fontWeight: '600',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Satellite and Data Visualization (Monitoring specific)
		satelliteDate: {
			fontSize: '7.5px',
			fontWeight: '600',
			lineHeight: '9px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		satelliteLegend: {
			fontSize: '7px',
			fontWeight: '400',
			lineHeight: '9px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Monitoring specific headers
		monitoringTitle: {
			fontSize: '10px',
			fontWeight: '600',
			lineHeight: '13px',
			letterSpacing: '0.1em',
			textTransform: 'uppercase',
		},
		monitoringSubtitle: {
			fontSize: '9.5px',
			fontWeight: '400',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Alert card specific
		alertCardTitle: {
			fontSize: '10px',
			fontWeight: '700',
			lineHeight: '13px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
		alertCardSubtitle: {
			fontSize: '9.5px',
			fontWeight: '400',
			lineHeight: '12px',
			letterSpacing: '0em',
			textTransform: 'none',
		},

		// Health status specific
		healthStatusText: {
			fontSize: '10px',
			fontWeight: '600',
			lineHeight: '13px',
			letterSpacing: '0.06em',
			textTransform: 'uppercase',
		},
		dotLabelText: {
			fontSize: '10px',
			fontWeight: '500',
			lineHeight: '13px',
			letterSpacing: '0em',
			textTransform: 'none',
		},
	},
} as const;

// Helper functions for CSS generation
export const getFontSize = (size: keyof typeof typography.fontSize) => typography.fontSize[size];
export const getFontWeight = (weight: keyof typeof typography.fontWeight) => typography.fontWeight[weight];
export const getLetterSpacing = (spacing: keyof typeof typography.letterSpacing) => typography.letterSpacing[spacing];
export const getPreset = (preset: keyof typeof typography.presets) => typography.presets[preset];
export const getMonitoringPreset = (preset: keyof typeof typography.monitoring) => typography.monitoring[preset];