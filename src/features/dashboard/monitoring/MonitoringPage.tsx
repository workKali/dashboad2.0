import { Dot } from '@/shared/components/ui/Dot';
import CardInfo from '../components/ui/CardInfo';
import { Badge } from '@/shared/components/ui/Badge';
import ModalMonitoring from './components/modal/ModalMonitoring';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const TableMonitoringContainer = dynamic(
	() => import('./components/table/TableMonitoringContainer').then((mod) => mod.TableMonitoringContainer),
	{
		ssr: true,
	},
);

const MapMonitoringContainer = dynamic(() => import('./components/map/MapMonitoringContainer').then((mod) => mod.default), {
	ssr: true,
});

const MonitoringPage = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="grid grid-cols-4 gap-2.5">
				<CardUI title="Fincas con Monitoreo Activo" value="23" subtitle="49% de la cartera" />
				<UIStateHealth />
				<CardUI title="Prob. Cosecha Exitosa" value="85%" subtitle="Promedio de cosecha" />
				<CardUI title="Alertas Teledetección Activas" value="7" subtitle="23 fincas revisadas" />
			</div>

			<div className="flex gap-3 items-stretch">
				<MapCard />
				<AlertsCard />
			</div>

			<MonitoringContainer />
			<ModalMonitoring />
		</div>
	);
};

export default MonitoringPage;

const MonitoringContainer = () => {
	const totalFarms = 23;
	const reviewedFarms = 23;

	return (
		<CardInfo className="bg-white shadow-card">
			<div className="mb-2.5">
				<p className="text-muted text-base font-semibold tracking-wide uppercase">
					Monitoreo Satelital — Últimas Revisiones por Finca{' '}
					<span className="text-secondary text-2sm font-normal normal-case tracking-normal">
						{reviewedFarms} de {totalFarms} fincas · Haz clic en una fila para expandir el historial
					</span>
				</p>
			</div>

			<Suspense>
				<TableMonitoringContainer />
			</Suspense>
		</CardInfo>
	);
};

const MapCard = () => {
	return (
		<div className="flex-1 rounded-xl overflow-hidden">
			<Suspense fallback={<div>Cargando mapa...</div>}>
				<MapMonitoringContainer />
			</Suspense>
		</div>
	);
};

const CardUI = ({ title, value, subtitle }: { title: string; value: string; subtitle: string }) => {
	return (
		<CardInfo topBorder="bg-gradient-primary gap-2">
			<div className="mt-1">
				<p className="text-secondary text-base font-medium tracking-[0.08em] uppercase mb-[4px]">{title}</p>
				<span className="text-primary text-3xl font-bold">{value}</span>
				<p className="text-secondary text-base mt-[3px] font-light m-0">{subtitle}</p>
			</div>
		</CardInfo>
	);
};

const UIStateHealth = () => {
	return (
		<CardInfo topBorder="bg-green-600" className="gap-1">
			<p className="text-base font-semibold text-secondary uppercase tracking-[0.06em] m-0">Estado de Salud</p>

			<div className="flex items-center justify-between">
				<DotText label="Optimo" color="optimum" />
				<Badge variant="optimum" size="sm">
					43%
				</Badge>
			</div>
			<div className="flex items-center justify-between">
				<DotText label="Bueno" color="low" />
				<Badge variant="low" size="sm">
					39%
				</Badge>
			</div>
			<div className="flex items-center justify-between">
				<DotText label="Requiere atención" color="medium" />
				<Badge variant="medium" size="sm">
					17%
				</Badge>
			</div>
		</CardInfo>
	);
};

const DotText = ({ label, color }: { label: string; color: string }) => {
	return (
		<div className="flex items-center gap-1">
			<Dot rounded="xs" color={color as any} />
			<span className="text-lg text-muted">{label}</span>
		</div>
	);
};

const AlertsCard = () => {
	return (
		<CardInfo className="gap-0.5 shadow-card min-w-[280px]">
			<div className="flex-1">
				<p className="text-primary text-xl mb-0.5 font-bold">Alertas por Teledetección</p>
				<p className="text-secondary text-base mb-2.5">7 fincas con alerta activa</p>
				<div className="gap-1.5 flex flex-col max-h-[360px] overflow-y-auto">
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
					<AlertCard
						title="Finca Arrocera Trujillo"
						subtitle="Déficit hídrico severo"
						farm="La Libertad"
						crop="Arroz"
						area="620 ha"
					/>
				</div>
				<p className="text-secondary text-sm mt-2.5 text-center shrink-0">↕ 2 alertas más</p>
			</div>
		</CardInfo>
	);
};

const AlertCard = ({
	title,
	subtitle,
	farm,
	crop,
	area,
}: {
	title: string;
	subtitle: string;
	farm: string;
	crop: string;
	area: string;
}) => {
	return (
		<div className="shrink-0 border border-amber-500 bg-amber-100 rounded-lg py-2 px-3 cursor-pointer shadow-none transition-shadow hover:shadow-md">
			<p className="text-lg font-bold text-amber-800">{title}</p>
			<p className="text-sm text-amber-700 mt-0.5">{subtitle}</p>
			<p className="text-secondary text-sm mt-1">
				{farm} · {crop} · {area}
			</p>
		</div>
	);
};
