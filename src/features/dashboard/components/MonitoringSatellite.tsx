'use client';
import CollapseContainer from './ui/CollapseContainer';
import { Dot } from '@/shared/components/ui/Dot';
import Divider from './ui/Divider';
import { Badge } from '@/shared/components/ui/Badge';

const MonitoringSatellite = () => {
	return (
		<div className="">
			<CollapseContainer
				className="rounded-xl overflow-hidden w-full box-border bg-white"
				headerComponent={<HeaderCollapse />}
			>
				<div>
					<h2>Monitoring Satellital</h2>
				</div>
			</CollapseContainer>
		</div>
	);
};

export default MonitoringSatellite;

const HeaderCollapse = () => {
	return (
		<button className="flex items-center gap-4 relative cursor-pointer py-2.5 px-4.5">
			<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-[#d97706]" />

			<div className="flex items-center gap-2">
				<Dot
					className="bg-[#d97706] shadow-[0_0_6px_rgb(217,119,6)] w-1.5 h-1.5"
					rounded="full"
				/>
				<span className="text-[#3a5244] text-xl font-semibold">
					Monitoreo Satelital
				</span>
				<Divider className="w-2" />
				<span className="text-[#7a9e8e] text-base font-light">
					Resumen de Alertas Activas
				</span>
			</div>

			<div className="flex flex-wrap gap-2 items-center">
				<Badge rounded={'md'} variant="high">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="high">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="medium">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="medium">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="low">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="low">
					7 fincas con alerta
				</Badge>
				<Badge rounded={'md'} variant="low">
					7 fincas con alerta
				</Badge>
			</div>

			<ExpandedIndicator isVisible={false} />
		</button>
	);
};

export const ExpandedIndicator = ({ isVisible }: { isVisible: boolean }) => {
	return (
		<div className="flex items-center gap-1 cursor-pointer select-none">
			<span
				className={`inline-block transition-transform duration-300 ease-in-out ${
					isVisible ? 'rotate-180' : 'rotate-0'
				}`}
			>
				▼
			</span>
			<span className="text-sm font-medium">
				{isVisible ? 'Cerrar' : 'Ver detalle'}
			</span>
		</div>
	);
};
