// Monitoring Page Specific Text Presets
export const monitoringPresets = {
	// Table Elements (Monitoring specific)
	tableHeader: 'text-xs font-bold uppercase tracking-wide text-secondary',
	tableData: 'text-sm font-normal text-secondary',
	tableDataBold: 'text-sm font-semibold text-secondary',

	// Satellite and Data Visualization (Monitoring specific)
	satelliteDate: 'text-7.5px font-semibold text-blue-100',
	satelliteLegend: 'text-7px font-normal text-secondary',

	// Monitoring specific headers
	monitoringTitle: 'text-base font-semibold uppercase tracking-wider text-secondary',
	monitoringSubtitle: 'text-sm font-normal text-secondary',

	// Alert card specific
	alertCardTitle: 'text-base font-bold text-amber-600',
	alertCardSubtitle: 'text-sm font-normal text-secondary',

	// Health status specific
	healthStatusText: 'text-base font-semibold uppercase tracking-0.06em text-secondary',
	dotLabelText: 'text-base font-medium text-secondary',
};

// Type for monitoring presets
export type MonitoringPreset = keyof typeof monitoringPresets;
