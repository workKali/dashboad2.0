'use client';
import { useEffect, useMemo, useState } from 'react';
import { mockData } from '../../data/temp';
import TableMonitoring from './TableMonitoring';
import { columnsMonitoring } from './columnsMonitoring';
import { ToolbarMonitoring } from './ToolbarMonitoring';
import {
	useReactTable,
	getCoreRowModel,
	getExpandedRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	ExpandedState,
} from '@tanstack/react-table';
import { FarmData } from '../../types/tableMonitoring.types';

export const TableMonitoringContainer = () => {
	const data = useMemo(() => mockData, []);
	const [isMounted, setIsMounted] = useState(false);
	const [expanded, setExpanded] = useState<ExpandedState>({});

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const table = useReactTable<FarmData>({
		data,
		columns: columnsMonitoring,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getRowCanExpand: () => true,
		state: {
			expanded: isMounted ? expanded : {},
		},
		onExpandedChange: setExpanded,
	});

	if (!isMounted) return null;

	return (
		<>
			<ToolbarMonitoring table={table} />
			<TableMonitoring table={table} />
		</>
	);
};
