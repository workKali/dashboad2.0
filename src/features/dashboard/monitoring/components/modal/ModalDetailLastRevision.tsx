import { farmData } from '../../data/temp';
import { Badge } from '../Badge';
import { SatelliteImg, SatelliteLegend } from '../SatelliteImage';
import { InfoRow } from '../shared';

const ModalDetailLastRevision = () => {
	return (
		<div className="bg-[rgb(240,253,244)] border border-[rgb(187,247,208)] rounded-xl p-3">
			<p className="text-[10px] font-bold text-[rgb(22,101,52)] font-poppins uppercase tracking-[0.06em] mb-2.5">
				📡 Última Revisión Teledetección
			</p>

			<div className="flex gap-3.5 items-start">
				<div className="flex flex-col gap-1.5 shrink-0">
					<SatelliteImg
						date="2024-02-15"
						imageUrl="https://example.com/image.jpg"
					/>
					<div className="flex justify-center">
						<SatelliteLegend values={['0', '0.3', '0.6', '0.9+']} />
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2">
					<div className="grid grid-cols-2 gap-1.5">
						{farmData.map((item) => (
							<InfoRow
								key={item.label}
								case="normal"
								variant="default"
								label={item.label}
								value={item.value}
							/>
						))}
					</div>

					<div className="flex gap-2 items-center flex-wrap">
						<Badge variant="warning">Requiere atención</Badge>
						<Badge variant="harvest">🌾 61% cosecha</Badge>
						<Badge variant="neutral" weight="normal">
							NDVI 0.500
						</Badge>
						<Badge variant="danger">⚠ Déficit hídrico severo</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ModalDetailLastRevision;
