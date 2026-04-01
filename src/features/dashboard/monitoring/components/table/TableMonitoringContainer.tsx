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
import { useModalStore } from '../../store/modalStore';

export const TableMonitoringContainer = () => {
	const data = useMemo(() => mockData, []);
	const [isMounted, setIsMounted] = useState(false);
	const [expanded, setExpanded] = useState<ExpandedState>({});
	const openModal = useModalStore((s) => s.openModal);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const table = useReactTable<FarmData>({
		data,
		columns: columnsMonitoring,
		getRowCanExpand: () => true,
		onExpandedChange: setExpanded,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		meta: {
			openModal,
		},
		state: {
			expanded: isMounted ? expanded : {},
		},
	});

	if (!isMounted) return null;

	return (
		<>
			<ToolbarMonitoring table={table} />
			<TableMonitoring table={table} />
		</>
	);
};
