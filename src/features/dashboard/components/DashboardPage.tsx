import StatusIndicator from "@/shared/components/ui/StatusIndicator";
import CardPlacedPorfolio from "./CardTemplates/CardPlacedPorfolio";
import CardHighRisk from "./CardTemplates/CardHighRisk";
import CardMixRisk from "./CardTemplates/CardMixRisk";
import CardLatePayment from "./CardTemplates/CardLatePayment";
import MonitoringSatellital from "./MonitoringSatellital";

// Dashboard components
export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 flex-wrap px-0.5 py-1">
        <span className="uppercase text-xs font-semibold text-[#7a9e8e] shrink">Vista:</span>
        <StatusIndicator variant="approved">Estado: Aprobado</StatusIndicator>
        <StatusIndicator variant="live">En vivo</StatusIndicator>

        <ClearFilterButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        <CardPlacedPorfolio />
        <CardHighRisk />
        <CardMixRisk />
        <CardLatePayment />
      </div>

      <MonitoringSatellital />
    </div>
  )
};

const ClearFilterButton = () => {
  return <button className="ml-auto bg-none border-0 text-xs text-[#7a9e8e] font-semibold px-1.5 py-0.5 rounded-md underline">Limpiar filtros</button>
}

