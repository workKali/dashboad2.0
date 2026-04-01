// type TooltipData = {
// 	finca: string;
// 	productor: string;
// 	actividad?: string;
// 	subActividad?: string;
// 	monto: number;
// 	estadoSalud?: string;
// 	alertaTeledeteccion?: string;
// };

import { Popup } from '@vis.gl/react-maplibre';
import { FarmData } from '../../types/tableMonitoring.types';

interface PopupMapProps {
	data: FarmData;
	longitude: number;
	latitude: number;
}

const PopupMap = ({ data, longitude, latitude }: PopupMapProps) => {
	const saludClass =
		data.healthStatus === 'Óptimo'
			? 'text-green-500'
			: data.healthStatus === 'Bueno'
				? 'text-green-400'
				: data.healthStatus?.includes('Requiere')
					? 'text-amber-400'
					: 'text-red-500';

	const tieneAlerta = !!data.detectedArea;

	return (
		<Popup longitude={longitude} latitude={latitude} closeButton={false}>
			<div className="text-white text-[11px] bg-[rgba(15,31,20,0.93)] absolute bottom-5 rounded-lg px-3 py-2 min-w-[200px] shadow-md">
				<div className="font-bold text-[12px] mb-[2px]">{data.farm}</div>
				<div className="text-[#b0c8bf] text-[10px] mb-[7px] pb-[6px] border-b border-white/10">{data.producer}</div>

				<div className="flex flex-col gap-1">
					<Row label="Actividad" value={data.activity || data.activity || '—'} />
					<Row label="Monto" value={`$${(data.amount / 1e6).toFixed(1)}M`} valueClass="text-green-400" />
					<Row label="Estado salud" value={data.healthStatus || 'Sin datos'} valueClass={'Bueno'} />

					{tieneAlerta && (
						<div className="mt-[3px] pt-[4px] border-t border-white/10 text-amber-300 text-[10px]">⚠ {data.detectedArea}</div>
					)}
				</div>
			</div>
		</Popup>
	);
};

export default PopupMap;

function Row({ label, value, valueClass = '' }: { label: string; value: string; valueClass?: string }) {
	return (
		<div className="flex justify-between gap-5">
			<span className="text-[#b0c8bf] text-[10px]">{label}</span>
			<span className={`font-semibold ${valueClass}`}>{value}</span>
		</div>
	);
}
