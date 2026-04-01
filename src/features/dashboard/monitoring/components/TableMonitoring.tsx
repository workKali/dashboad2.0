'use client';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { cva } from 'class-variance-authority';
import { useModalStore } from '../store/modalStore';
import TableCell from './TableCell';
import { mockData } from '../data/temp';
import ExpandedRow from './ExpandedRowContent';

export const tableRowStyles = cva('border-b border-gray-200 cursor-pointer border-l-[3px] transition-colors', {
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
			class: '!bg-blue-50 !hover:bg-blue-100',
		},
	],

	defaultVariants: {
		level: 'low',
		expanded: false,
	},
});
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
											expandedRow === row.id && 'rotate-90',
										)}
									>
										▶
									</span>
								</td>
								<td className="px-2.5 py-2 text-base text-primary font-semibold whitespace-nowrap">{row.producer}</td>
								<td className="px-2.5 py-2 text-base text-secondary">{row.phone}</td>
								<td className="px-2.5 py-2 text-base text-primary font-semibold">{row.farm}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.region}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.activity}</td>
								<td className="px-2.5 py-2 text-xl text-primary font-bold">{row.hectares}</td>
								<td className="px-2.5 py-2 text-xl text-accent font-bold">{row.amount}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.phenologicalPhase}</td>
								<td className="px-2.5 py-2">{getHealthStatusBadge(row.healthStatus, row.healthStatusColor)}</td>
								<td className="px-2.5 py-2 text-base text-warning font-bold">{row.ndvi}</td>
								<td className="px-2.5 py-2 text-base text-error font-semibold">{row.ndviChange}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.detectedArea}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.estimatedYield}</td>
								<td className="px-2.5 py-2">
									<span className="bg-green-100 text-green-700 rounded-md px-2 py-0.5 text-base font-bold">
										{row.harvestProbability}
									</span>
								</td>
								<td className="px-2.5 py-2 text-base text-amber-700">{row.alert}</td>
								<td className="px-2.5 py-2">{getRiskBadge(row.risk, row.riskColor)}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.cycleStart}</td>
								<td className="px-2.5 py-2 text-base text-muted">{row.cycleEnd}</td>
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
								<ExpandedRow producer={row.producer} farm={row.farm} onFarmDetailClick={handleFarmDetailClick} />
							)}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default TableMonitoring;

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
