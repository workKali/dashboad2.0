import TableCell from './TableCell';

interface SatelliteHistoryTableProps {}

const SatelliteHistoryTable = ({}: SatelliteHistoryTableProps) => {
	const satelliteHeaders = ['Fecha', 'Fase Fenológica', 'Estado Salud', 'NDVI', 'Δ NDVI', 'Rend. Est.', 'P. Cosecha', 'Alerta'];

	return (
		<table className="w-full border-collapse min-w-[580px]">
			<thead>
				<tr>
					{satelliteHeaders.map((header) => (
						<TableCell
							key={header}
							className="text-left text-xs font-bold text-secondary font-poppins uppercase tracking-[0.05em] p-2 border-b border-blue-200 whitespace-nowrap"
						>
							{header}
						</TableCell>
					))}
				</tr>
			</thead>
			<tbody>
				<tr className="bg-transparent border-l-2 border-red-400">
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap font-semibold">2024-09-15</td>
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap">Desarrollo</td>
					<td className="p-2">
						<span className="bg-opacity-amber-light text-warning rounded px-1.5 py-0.5 text-2sm font-poppins font-semibold whitespace-nowrap">
							Requiere atención
						</span>
					</td>
					<td className="p-2 text-sm font-poppins text-muted font-bold">0.540</td>
					<td className="p-2 text-sm font-poppins text-red-600 font-bold">-16</td>
					<td className="p-2 text-sm font-poppins text-muted">5.8 t/ha</td>
					<td className="p-2">
						<span className="bg-amber-50 text-amber-700 rounded px-1.5 py-0.5 text-2sm font-poppins font-bold">64%</span>
					</td>
					<td className="p-2">
						<span className="bg-red-100 text-red-600 rounded px-1.5 py-0.5 text-2sm font-poppins font-semibold whitespace-nowrap">
							⚠ Déficit hídrico severo
						</span>
					</td>
				</tr>
				<tr className="bg-opacity-blue-light border-l-2 border-red-400">
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap font-semibold">2024-09-01</td>
					<td className="p-2 text-sm font-poppins text-muted whitespace-nowrap">Establecimiento</td>
					<td className="p-2">
						<span className="bg-opacity-green-light text-success rounded px-1.5 py-0.5 text-2sm font-poppins font-semibold whitespace-nowrap">
							Bueno
						</span>
					</td>
					<td className="p-2 text-sm font-poppins text-muted font-bold">0.620</td>
					<td className="p-2 text-sm font-poppins text-red-600 font-bold">-6</td>
					<td className="p-2 text-sm font-poppins text-muted">6.8 t/ha</td>
					<td className="p-2">
						<span className="bg-amber-50 text-amber-700 rounded px-1.5 py-0.5 text-2sm font-poppins font-bold">78%</span>
					</td>
					<td className="p-2">
						<span className="bg-red-100 text-red-600 rounded px-1.5 py-0.5 text-2sm font-poppins font-semibold whitespace-nowrap">
							⚠ Estrés hídrico leve
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SatelliteHistoryTable;
