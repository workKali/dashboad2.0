import { ColumnDef } from '@tanstack/react-table';
import { FarmData } from '../../types/tableMonitoring.types';
import { clsx } from 'clsx';

const getHealthStatusBadge = (status: string, color: string) => {
	const colorClasses = {
		optimal: 'bg-opacity-green-light text-success',
		good: 'bg-opacity-blue-light text-info',
		warning: 'bg-opacity-amber-light text-warning',
	};
	return (
		<span className={`${colorClasses[color as keyof typeof colorClasses]} rounded-md px-2 py-0.5 text-base font-semibold`}>
			{status}
		</span>
	);
};

const getRiskBadge = (risk: string, color: string) => {
	const colorClasses = {
		low: 'text-success',
		medium: 'text-warning',
		high: 'text-red-600',
	};
	return <span className={`${colorClasses[color as keyof typeof colorClasses]} text-base font-poppins font-semibold`}>{risk}</span>;
};

export const columnsMonitoring: ColumnDef<FarmData>[] = [
	{
		id: 'expand',
		header: () => null,
		cell: ({ row }) => (
			<span
				className={clsx(
					'inline-block text-secondary text-base px-1 font-poppins select-none transition-transform duration-200 ease-in-out cursor-pointer',
					row.getIsExpanded() && 'rotate-90',
				)}
				onClick={() => row.toggleExpanded()}
			>
				▶
			</span>
		),
		enableSorting: false,
		enableColumnFilter: false,
	},
	{
		accessorKey: 'producer',
		header: 'Productor',
		cell: ({ row }) => <span className="text-base text-primary font-semibold whitespace-nowrap">{row.getValue('producer')}</span>,
	},
	{
		accessorKey: 'phone',
		header: 'Teléfono',
		cell: ({ row }) => <span className="text-base text-secondary">{row.getValue('phone')}</span>,
	},
	{
		accessorKey: 'farm',
		header: 'Finca',
		cell: ({ row }) => <span className="text-base text-primary font-semibold">{row.getValue('farm')}</span>,
	},
	{
		accessorKey: 'region',
		header: 'Región',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('region')}</span>,
	},
	{
		accessorKey: 'activity',
		header: 'Actividad',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('activity')}</span>,
	},
	{
		accessorKey: 'hectares',
		header: 'Hectáreas',
		cell: ({ row }) => <span className="text-xl text-primary font-bold">{row.getValue('hectares')}</span>,
	},
	{
		accessorKey: 'amount',
		header: 'Monto',
		cell: ({ row }) => <span className="text-xl text-accent font-bold">{row.getValue('amount')}</span>,
	},
	{
		accessorKey: 'phenologicalPhase',
		header: 'Fase Fenológica',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('phenologicalPhase')}</span>,
	},
	{
		accessorKey: 'healthStatus',
		header: 'Estado Salud',
		cell: ({ row }) => {
			const healthStatus = row.getValue('healthStatus') as string;
			const healthStatusColor = row.original.healthStatusColor;
			return getHealthStatusBadge(healthStatus, healthStatusColor);
		},
	},
	{
		accessorKey: 'ndvi',
		header: 'NDVI',
		cell: ({ row }) => <span className="text-base text-warning font-bold">{row.getValue('ndvi')}</span>,
	},
	{
		accessorKey: 'ndviChange',
		header: 'Δ NDVI',
		cell: ({ row }) => <span className="text-base text-error font-semibold">{row.getValue('ndviChange')}</span>,
	},
	{
		accessorKey: 'detectedArea',
		header: 'Área Detectada',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('detectedArea')}</span>,
	},
	{
		accessorKey: 'estimatedYield',
		header: 'Rend. Est.',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('estimatedYield')}</span>,
	},
	{
		accessorKey: 'harvestProbability',
		header: 'P. Cosecha',
		cell: ({ row }) => (
			<span className="bg-green-100 text-green-700 rounded-md px-2 py-0.5 text-base font-bold">
				{row.getValue('harvestProbability')}
			</span>
		),
	},
	{
		accessorKey: 'alert',
		header: 'Alerta',
		cell: ({ row }) => <span className="text-base text-amber-700">{row.getValue('alert')}</span>,
	},
	{
		accessorKey: 'risk',
		header: 'Riesgo',
		cell: ({ row }) => {
			const risk = row.getValue('risk') as string;
			const riskColor = row.original.riskColor;
			return getRiskBadge(risk, riskColor);
		},
	},
	{
		accessorKey: 'cycleStart',
		header: 'Inicio Ciclo',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('cycleStart')}</span>,
	},
	{
		accessorKey: 'cycleEnd',
		header: 'Fin Ciclo',
		cell: ({ row }) => <span className="text-base text-muted">{row.getValue('cycleEnd')}</span>,
	},
	{
		id: 'actions',
		header: 'Acciones',
		cell: ({ row }) => (
			<button
				title="Ver ficha completa"
				className="bg-green-50 border border-green-200 rounded-md px-1.5 py-0.5 text-sm font-semibold text-accent font-poppins cursor-pointer whitespace-nowrap hover:bg-green-100 transition-colors"
				onClick={(e) => {
					e.stopPropagation();
					console.log('Farm detail clicked:', row.original);
				}}
			>
				↗ Ficha
			</button>
		),
		enableSorting: false,
		enableColumnFilter: false,
	},
];
