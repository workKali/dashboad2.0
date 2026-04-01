'use client';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { cva } from 'class-variance-authority';
import { useModalStore } from '../store/modalStore';
import { SatelliteImg, SatelliteLegend } from './SatelliteImage';

interface TableCellProps {
	children: React.ReactNode;
	className?: string;
	isCenter?: boolean;
	isCompact?: boolean;
	fontSize?: 'xs' | 'sm' | 'base';
	textColor?:
		| 'primary'
		| 'secondary'
		| 'muted'
		| 'accent'
		| 'warning'
		| 'error'
		| 'success';
}

const tableCellVariants = cva('', {
	variants: {
		isCompact: {
			true: 'px-2 py-1',
			false: 'px-2.5 py-2',
		},
		isCenter: {
			true: 'text-center',
			false: '',
		},
		fontSize: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
		},
		textColor: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			muted: 'text-muted',
			accent: 'text-accent',
			warning: 'text-warning',
			error: 'text-error',
			success: 'text-success',
		},
	},
	defaultVariants: {
		fontSize: 'base',
		textColor: 'primary',
		isCompact: false,
		isCenter: false,
	},
});

const TableCell = ({
	children,
	className,
	isCenter,
	isCompact,
	fontSize,
	textColor,
}: TableCellProps) => {
	return (
		<td
			className={clsx(
				tableCellVariants({ isCompact, isCenter, fontSize, textColor }),
				className,
			)}
		>
			{children}
		</td>
	);
};

interface SatelliteHistoryTableProps {}

const SatelliteHistoryTable = ({}: SatelliteHistoryTableProps) => {
	const satelliteHeaders = [
		'Fecha',
		'Fase Fenológica',
		'Estado Salud',
		'NDVI',
		'Δ NDVI',
		'Rend. Est.',
		'P. Cosecha',
		'Alerta',
	];

	return (
		<table className="w-full border-collapse min-w-[580px]">
			<thead>
				<tr>
					{satelliteHeaders.map((header) => (
						<th
							key={header}
							className="text-left text-xs font-bold text-secondary font-poppins uppercase tracking-[0.05em] p-2 border-b border-blue-200 whitespace-nowrap"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr className="bg-transparent border-l-2 border-red-400">
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap font-semibold">
						2024-09-15
					</td>
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap">
						Desarrollo
					</td>
					<td className="p-2">
						<span className="bg-opacity-amber-light text-warning rounded px-1.5 py-0.5 text-9px font-poppins font-semibold whitespace-nowrap">
							Requiere atención
						</span>
					</td>
					<td className="p-2 text-sm font-poppins text-muted font-bold">
						0.540
					</td>
					<td className="p-2 text-sm font-poppins text-red-600 font-bold">
						-16
					</td>
					<td className="p-2 text-sm font-poppins text-muted">
						5.8 t/ha
					</td>
					<td className="p-2">
						<span className="bg-amber-50 text-amber-700 rounded px-1.5 py-0.5 text-9px font-poppins font-bold">
							64%
						</span>
					</td>
					<td className="p-2">
						<span className="bg-red-100 text-red-600 rounded px-1.5 py-0.5 text-9px font-poppins font-semibold whitespace-nowrap">
							⚠ Déficit hídrico severo
						</span>
					</td>
				</tr>
				<tr className="bg-opacity-blue-light border-l-2 border-red-400">
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap font-semibold">
						2024-09-01
					</td>
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap">
						Establecimiento
					</td>
					<td className="p-2">
						<span className="bg-opacity-green-light text-success rounded px-1.5 py-0.5 text-9px font-poppins font-semibold whitespace-nowrap">
							Bueno
						</span>
					</td>
					<td className="p-2 text-sm font-poppins text-muted font-bold">
						0.620
					</td>
					<td className="p-2 text-sm font-poppins text-red-600 font-bold">
						-6
					</td>
					<td className="p-2 text-sm font-poppins text-muted">
						6.8 t/ha
					</td>
					<td className="p-2">
						<span className="bg-amber-50 text-amber-700 rounded px-1.5 py-0.5 text-9px font-poppins font-bold">
							78%
						</span>
					</td>
					<td className="p-2">
						<span className="bg-red-100 text-red-600 rounded px-1.5 py-0.5 text-9px font-poppins font-semibold whitespace-nowrap">
							⚠ Estrés hídrico leve
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

interface NDVIEvolutionProps {}

const NDVIEvolution = ({}: NDVIEvolutionProps) => {
	return (
		<div className="shrink-0">
			<p className="m-0 mb-1 text-2xs font-semibold text-secondary font-poppins uppercase tracking-[0.05em]">
				Evolución NDVI
			</p>
		</div>
	);
};

interface ExpandedRowProps {
	producer: string;
	farm: string;
	onFarmDetailClick: (farmData: any) => void;
}

const ExpandedRow = ({
	producer,
	farm,
	onFarmDetailClick,
}: ExpandedRowProps) => {
	return (
		<tr className="bg-blue-50 animate-in slide-in-from-top-2 duration-300">
			<td colSpan={20} className="p-0">
				<div className="py-3 px-4 border-y border-blue-200">
					<div className="flex items-center gap-2.5 mb-2.5">
						<span className="text-base font-bold text-blue-600 font-poppins uppercase tracking-[0.07em]">
							📡 Historial Satelital — {producer} · {farm}
						</span>
						<span className="text-base text-secondary font-poppins">
							2 revisiones
						</span>
						<button
							className="ml-auto bg-blue-50 border border-blue-300 rounded-[7px] px-2.5 py-0.5 text-sm font-semibold text-blue-600 font-poppins cursor-pointer flex items-center gap-1.5 hover:bg-blue-100 transition-colors"
							onClick={() =>
								onFarmDetailClick({ producer, farm })
							}
						>
							Ver ficha completa →
						</button>
					</div>

					<div className="flex gap-4 items-start">
						<SatelliteImage />

						<NDVIEvolution />

						<div className="flex-1 overflow-x-auto">
							<SatelliteHistoryTable />
						</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

interface SatelliteImageProps {
	imageUrl?: string;
	date?: string;
}

const SatelliteImage = ({
	imageUrl = undefined,
	date = '2024-05-15',
}: SatelliteImageProps) => {
	return (
		<div className="shrink-0 flex flex-col gap-1">
			<p className="m-0 text-2xs font-semibold text-secondary font-poppins uppercase tracking-[0.05em]">
				Imagen Satelital NDVI
			</p>
			<SatelliteImg date="2024-03-01" />
			<div className="flex gap-1 items-center justify-center">
				<SatelliteLegend values={['0', '0.3', '0.6', '0.9+']} />
			</div>
		</div>
	);
};

export const tableRowStyles = cva(
	'border-b border-gray-200 cursor-pointer border-l-[3px] transition-colors',
	{
		variants: {
			level: {
				low: 'bg-transparent border-l-transparent',
				medium: 'bg-gray-50 border-l-transparent',
				high: 'bg-opacity-green-dark border-l-red-400',
			},
			expanded: {
				true: '',
				false: '',
			},
		},

		compoundVariants: [
			{
				level: 'low',
				expanded: false,
				class: 'hover:bg-black/5',
			},
			{
				level: 'medium',
				expanded: false,
				class: 'hover:bg-amber-100',
			},
			{
				level: 'high',
				expanded: false,
				class: 'hover:bg-black/5',
			},
			{
				expanded: true,
				class: 'bg-blue-50 border-l-blue-400 hover:bg-blue-100',
			},
		],

		defaultVariants: {
			level: 'low',
			expanded: false,
		},
	},
);
const TableMonitoring = () => {
	const [expandedRow, setExpandedRow] = useState<number | null>(null);
	const { openModal } = useModalStore();

	const handleRowClick = (id: number) => {
		if (expandedRow === id) {
			setExpandedRow(null);
		} else {
			setExpandedRow(id);
		}
	};

	const handleFarmDetailClick = (row: any) => {
		openModal('farm-detail', { name: row.farm, ...row });
	};

	const getHealthStatusBadge = (status: string, color: string) => {
		const colorClasses = {
			optimal: 'bg-opacity-green-light text-success',
			good: 'bg-opacity-blue-light text-info',
			warning: 'bg-opacity-amber-light text-warning',
		};
		return (
			<span
				className={`${colorClasses[color as keyof typeof colorClasses]} rounded-md px-2 py-0.5 text-base font-semibold`}
			>
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
		return (
			<span
				className={`${colorClasses[color as keyof typeof colorClasses]} text-base font-poppins font-semibold`}
			>
				{risk}
			</span>
		);
	};

	return (
		<div className="overflow-x-auto">
			<table className="w-full border-collapse font-poppins min-w-225">
				<thead>
					<tr>
						{tableHeaders.map((header, index) => (
							<TableCell
								key={header + index}
								className={
									'text-left text-2xs font-semibold text-secondary uppercase tracking-[0.05em] border-b border-gray-200 bg-gray-50 whitespace-nowrap'
								}
							>
								{header}
							</TableCell>
						))}
					</tr>
				</thead>
				<tbody>
					{mockData.map((row) => (
						<React.Fragment key={row.id}>
							<tr
								key={row.id}
								className={tableRowStyles({
									level: 'high',
									expanded: expandedRow === row.id,
								})}
								onClick={() => handleRowClick(row.id)}
							>
								<td className="px-2 py-1 text-center">
									<span
										className={clsx(
											'inline-block text-secondary text-base px-1 font-poppins select-none transition-transform duration-200 ease-in-out',
											expandedRow === row.id &&
												'rotate-90',
										)}
									>
										▶
									</span>
								</td>
								<td className="px-2.5 py-2 text-base text-primary font-semibold whitespace-nowrap">
									{row.producer}
								</td>
								<td className="px-2.5 py-2 text-base text-secondary">
									{row.phone}
								</td>
								<td className="px-2.5 py-2 text-base text-primary font-semibold">
									{row.farm}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.region}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.activity}
								</td>
								<td className="px-2.5 py-2 text-xl text-primary font-bold">
									{row.hectares}
								</td>
								<td className="px-2.5 py-2 text-xl text-accent font-bold">
									{row.amount}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.phenologicalPhase}
								</td>
								<td className="px-2.5 py-2">
									{getHealthStatusBadge(
										row.healthStatus,
										row.healthStatusColor,
									)}
								</td>
								<td className="px-2.5 py-2 text-base text-warning font-bold">
									{row.ndvi}
								</td>
								<td className="px-2.5 py-2 text-base text-error font-semibold">
									{row.ndviChange}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.detectedArea}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.estimatedYield}
								</td>
								<td className="px-2.5 py-2">
									<span className="bg-green-100 text-green-700 rounded-md px-2 py-0.5 text-base font-bold">
										{row.harvestProbability}
									</span>
								</td>
								<td className="px-2.5 py-2 text-base text-amber-700">
									{row.alert}
								</td>
								<td className="px-2.5 py-2">
									{getRiskBadge(row.risk, row.riskColor)}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.cycleStart}
								</td>
								<td className="px-2.5 py-2 text-base text-muted">
									{row.cycleEnd}
								</td>
								<td className="px-2 py-1 text-center">
									<button
										title="Ver ficha completa"
										className="bg-green-50 border border-green-200 rounded-md px-1.5 py-0.5 text-sm font-semibold text-accent font-poppins cursor-pointer whitespace-nowrap hover:bg-green-100 transition-colors"
										onClick={(e) => {
											e.stopPropagation();
											handleFarmDetailClick(row);
										}}
									>
										↗ Ficha
									</button>
								</td>
							</tr>

							{expandedRow === row.id && (
								<ExpandedRow
									producer={row.producer}
									farm={row.farm}
									onFarmDetailClick={handleFarmDetailClick}
								/>
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default TableMonitoring;

// Mock data array with all table cell values
const mockData = [
	{
		id: 1,
		producer: 'Aurelio Cotrina',
		phone: '967-111-234',
		farm: 'Finca Arrocera Trujillo',
		region: 'La Libertad',
		activity: 'Arroz',
		hectares: '620',
		amount: '$26.5M',
		phenologicalPhase: 'Máximo vigor',
		healthStatus: 'Requiere atención',
		healthStatusColor: 'warning',
		ndvi: '0.500',
		ndviChange: '-22%',
		ndviChangeColor: 'negative',
		detectedArea: '608 ha',
		estimatedYield: '5.2 t/ha',
		harvestProbability: '61%',
		alert: 'Déficit hídrico severo',
		risk: 'Alto',
		riskColor: 'high',
		cycleStart: '2024-02-15',
		cycleEnd: '2024-07-30',
	},
	{
		id: 2,
		producer: 'Carlos Mendoza',
		phone: '987-654-321',
		farm: 'Finca Agrícola Piura',
		region: 'Piura',
		activity: 'Ganadería',
		hectares: '450',
		amount: '$18.2M',
		phenologicalPhase: 'Crecimiento activo',
		healthStatus: 'Óptimo',
		healthStatusColor: 'optimal',
		ndvi: '0.750',
		ndviChange: '+5%',
		ndviChangeColor: 'positive',
		detectedArea: '445 ha',
		estimatedYield: '3.8 t/ha',
		harvestProbability: '78%',
		alert: 'Sin alertas',
		risk: 'Bajo',
		riskColor: 'low',
		cycleStart: '2024-01-10',
		cycleEnd: '2024-06-15',
	},
	{
		id: 3,
		producer: 'María López',
		phone: '945-234-567',
		farm: 'Finca Mixta Lambayeque',
		region: 'Lambayeque',
		activity: 'Cultivos',
		hectares: '320',
		amount: '$12.8M',
		phenologicalPhase: 'Floración',
		healthStatus: 'Bueno',
		healthStatusColor: 'good',
		ndvi: '0.650',
		ndviChange: '-8%',
		ndviChangeColor: 'negative',
		detectedArea: '315 ha',
		estimatedYield: '4.5 t/ha',
		harvestProbability: '72%',
		alert: 'Estrés hídrico moderado',
		risk: 'Medio',
		riskColor: 'medium',
		cycleStart: '2024-03-01',
		cycleEnd: '2024-08-20',
	},
];

const tableHeaders = [
	'',
	'Productor',
	'Teléfono',
	'Finca',
	'Región',
	'Actividad',
	'Ha',
	'Monto',
	'Fase Fenológica',
	'Estado Salud',
	'NDVI',
	'Δ NDVI',
	'Área Det.',
	'Rend. Est.',
	'P. Cosecha',
	'Alerta',
	'Riesgo',
	'Inicio Ciclo',
	'Fin Ciclo',
	'',
];
