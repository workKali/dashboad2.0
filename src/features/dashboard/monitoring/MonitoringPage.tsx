import { Dot } from "@/shared/components/ui/Dot"
import CardInfo from "../components/ui/CardInfo"
import { Badge } from "@/shared/components/ui/Badge"

const MonitoringPage = () => {
    return (
        <div className="flex flex-col gap-2.5">
            <h1>Monitoring Page</h1>
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
        </div>
    )
}

export default MonitoringPage

const MonitoringContainer = () => {
    return (
        <CardInfo className="bg-white shadow-[0px_1px_4px_rgba(15,31,20,0.04)]">
            <div className="flex items-baseline gap-1.5">

            </div>
        </CardInfo>
    )
}

const MapCard = () => {
    return (
        <CardInfo className="bg-red-50 h-[440px] flex-1">
            <div className="flex-1 ">

            </div>
        </CardInfo>
    )
}

const CardUI = ({ title, value, subtitle }: { title: string, value: string, subtitle: string }) => {
    return (
        <CardInfo topBorder="bg-[linear-gradient(90deg,_rgb(22,163,74),_rgba(22,163,74,0.267))] gap-2">
            <div className="mt-1">
                <p className="text-[rgb(122,158,142)] text-10 font-medium tracking-[0.08em] uppercase mb-[4px]">{title}</p>
                <span className="text-[rgb(15,31,20)] text-[22px] font-bold leading-[1.1]">{value}</span>
                <p className="text-[rgb(122,158,142)] text-10 mt-[3px] font-light m-0">{subtitle}</p>
            </div>
        </CardInfo>
    )
}

const UIStateHealth = () => {
    return (
        <CardInfo topBorder="bg-[#16a34a]" className="gap-2" >
            <p className="text-10 font-semibold text-[rgb(122,158,142)] uppercase tracking-[0.06em] m-0">Estado de Salud</p>

            <div className="flex items-center justify-between">
                <DotText label="Optimo" color="optimum" />
                <Badge variant='optimum' size='sm'>43%</Badge>
            </div>
            <div className="flex items-center justify-between">
                <DotText label="Bueno" color="low" />
                <Badge variant='low' size='sm'>39%</Badge>
            </div>
            <div className="flex items-center justify-between">
                <DotText label="Requiere atencion" color="medium" />
                <Badge variant='medium' size='sm'>17%</Badge>
            </div>
        </CardInfo>
    )
}

const DotText = ({ label, color }: { label: string, color: string }) => {
    return <div className="flex items-center gap-1">
        <Dot rounded='xs' color={color as any} />
        <span className="text-10 font-medium text-[#3a5244]">{label}</span>
    </div>
}

const AlertsCard = () => {
    return (
        <CardInfo className="gap-0.5 shadow-[0px_1px_4px_rgba(15,31,20,0.04)] min-w-[280px]">
            <div className="flex-1">
                <p className="text-[#0f1f14] text-11 mb-0.5 font-bold">Alertas por Teledetección</p>
                <p className="text-[#7a9e8e] text-10 mb-2.5">7 fincas con alerta activa</p>
                <div className="gap-1.5 flex flex-col max-h-[360px] overflow-y-auto">
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                    <AlertCard title="Finca Arrocera Trujillo" subtitle="Déficit hídrico severo" farm="La Libertad" crop="Arroz" area="620 ha" />
                </div>
                <p className="text-[#7a9e8e] text-10 mt-2 text-center shrink-0">↕ 2 alertas más</p>
            </div>
        </CardInfo>
    )
}

const AlertCard = ({ title, subtitle, farm, crop, area }: { title: string, subtitle: string, farm: string, crop: string, area: string }) => {
    return (
        <div className="shrink-0 border border-[#f59e0b] bg-[#fef3c7] rounded-lg py-3 px-2 cursor-pointer shadow-none transition-shadow hover:shadow-md">
            <p className="text-10 font-bold text-[#92400e]">{title}</p>
            <p className="text-middle9 text-[#b45309]">{subtitle}</p>
            <p className="text-[#7a9e8e] text-middle9">{farm} · {crop} · {area}</p>
        </div>
    )
}
