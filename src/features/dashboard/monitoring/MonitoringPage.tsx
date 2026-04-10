import CardInfo from '../components/ui/CardInfo';
import ModalMonitoring from './components/modal/ModalMonitoring';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import CardKPI from './components/CardKPI';
import CardStateHealth from './components/CardStateHealth';
import AlertCardContainer from './components/AlertCardContainer';

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
				<CardKPI title="Fincas con Monitoreo Activo" value="23" subtitle="49% de la cartera" />
				<CardStateHealth />
				<CardKPI title="Prob. Cosecha Exitosa" value="85%" subtitle="Promedio de cosecha" />
				<CardKPI title="Alertas Teledetección Activas" value="7" subtitle="23 fincas revisadas" />
			</div>

			<div className="flex gap-3 items-stretch">
				<MapCard />
				<AlertCardContainer />
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

