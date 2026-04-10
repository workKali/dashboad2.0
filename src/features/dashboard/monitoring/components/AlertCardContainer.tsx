import CardInfo from '@/features/dashboard/components/ui/CardInfo';
import AlertCard from './AlertCard';

const alerts = [
    {
        title: "Finca Arrocera Trujillo",
        subtitle: "Déficit hídrico severo",
        farm: "La Libertad",
        crop: "Arroz",
        area: "620 ha"
    },
    {
        title: "Finca Arrocera Trujillo",
        subtitle: "Déficit hídrico severo",
        farm: "La Libertad",
        crop: "Arroz",
        area: "620 ha"
    },
    {
        title: "Finca Arrocera Trujillo",
        subtitle: "Déficit hídrico severo",
        farm: "La Libertad",
        crop: "Arroz",
        area: "620 ha"
    }
];

const AlertCardContainer = () => {
    return (
        <CardInfo className="gap-0.5 shadow-card min-w-[280px]">
            <div className="flex-1">
                <p className="text-primary text-xl mb-0.5 font-bold">Alertas por Teledetección</p>
                <p className="text-secondary text-base mb-2.5">7 fincas con alerta activa</p>
                <div className="gap-1.5 flex flex-col max-h-[360px] overflow-y-auto">
                    {alerts.map((alert, index) => (
                        <AlertCard
                            key={index}
                            title={alert.title}
                            subtitle={alert.subtitle}
                            farm={alert.farm}
                            crop={alert.crop}
                            area={alert.area}
                        />
                    ))}
                </div>
                <p className="text-secondary text-sm mt-2.5 text-center shrink-0">↕ 2 alertas más</p>
            </div>
        </CardInfo>
    );
};

export default AlertCardContainer;