import { useModalStore } from '../store/modalStore';
import { SatelliteImg, SatelliteLegend } from './SatelliteImage';
import SatelliteHistoryTable from './table/SatelliteHistoryTable';

interface ExpandedRowProps {
	producer: string;
	farm: string;
}

const ExpandedRow = ({ producer, farm }: ExpandedRowProps) => {
	const { openModal } = useModalStore();

	return (
		<tr className="bg-blue-50 animate-in slide-in-from-top-2 duration-300">
			<td colSpan={20} className="p-0">
				<div className="py-3 px-4 border-y border-blue-200">
					<div className="flex items-center gap-2.5 mb-2.5">
						<span className="text-base font-bold text-blue-600 font-poppins uppercase tracking-[0.07em]">
							📡 Historial Satelital — {producer} · {farm}
						</span>
						<span className="text-base text-secondary font-poppins">2 revisiones</span>
						<button
							className="ml-auto bg-blue-50 border border-blue-300 rounded-[7px] px-2.5 py-0.5 text-sm font-semibold text-blue-600 font-poppins cursor-pointer flex items-center gap-1.5 hover:bg-blue-100 transition-colors"
							onClick={() => openModal('farmDetail', { producer, farm })}
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

export default ExpandedRow;

interface SatelliteImageProps {
	imageUrl?: string;
	date?: string;
}

const SatelliteImage = ({ imageUrl = undefined, date = '2024-05-15' }: SatelliteImageProps) => {
	return (
		<div className="shrink-0 flex flex-col gap-1">
			<p className="m-0 text-2xs font-semibold text-secondary font-poppins uppercase tracking-[0.05em]">Imagen Satelital NDVI</p>
			<SatelliteImg date={date} imageUrl={imageUrl} />
			<div className="flex gap-1 items-center justify-center">
				<SatelliteLegend values={['0', '0.3', '0.6', '0.9+']} />
			</div>
		</div>
	);
};

interface NDVIEvolutionProps {}

const NDVIEvolution = ({}: NDVIEvolutionProps) => {
	return (
		<div className="shrink-0">
			<p className="m-0 mb-1 text-2xs font-semibold text-secondary font-poppins uppercase tracking-[0.05em]">Evolución NDVI</p>
		</div>
	);
};
