import { flexRender, Table } from '@tanstack/react-table';
import TableCell from './TableCell';
import React from 'react';
import { tableRowStyles } from '../shared/monitoringTableRowVariants';
// import ExpandedRow from '../ExpandedRowContent';
import { FarmData } from '../../types/tableMonitoring.types';
import ExpandedRow from './ExpandedRowContent';

interface TableMonitoringProps {
	table: Table<FarmData>;
}

const TableMonitoring = ({ table }: TableMonitoringProps) => {
	return (
		<div className="overflow-x-auto">
			<table className="w-full border-collapse font-poppins min-w-225">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableCell
									key={header.id}
									className="text-left text-2xs font-semibold text-secondary uppercase tracking-[0.05em] border-b border-gray-200 bg-gray-50 whitespace-nowrap"
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</TableCell>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<React.Fragment key={row.id}>
							<tr
								key={row.id}
								className={tableRowStyles({
									level: 'high',
									expanded: row.getIsExpanded(),
								})}
								onClick={row.getToggleExpandedHandler()}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</tr>
							{row.getIsExpanded() && <ExpandedRow producer={row.original.producer} farm={row.original.farm} />}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableMonitoring;
