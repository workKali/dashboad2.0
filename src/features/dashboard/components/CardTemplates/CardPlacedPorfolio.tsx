import CardInfo from "../ui/CardInfo"
import Divider from "../ui/Divider"
import IndicatorPercentBase from "../ui/IndicatorPercents"
import { TrackingPercentage } from "./CardHighRisk"

const CardPlacedPorfolio = () => {
  return (
    <CardInfo topBorder="bg-[#16a34a]" className="flex flex-col gap-2">
      <p className="text-10 font-semibold uppercase tracking-wider text-[#7a9e8e]">cartera colocada</p>
      <div className="flex-1 flex gap-3 items-stretch min-h-45 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2 min-w-32.5">
          <div>
            <div className="flex items-center">
              <p className="text-26 font-bold">$889.9M</p>
            </div>
            <p className="text-s-9/5"></p>
            <p className="text-10 text-[#7a9e8e]">47 fincas aprobadas</p>
            <TrackingPercentage color="text-[#16884a]" />
          </div>
          <Divider />
          <div>
            <p className="mb-1 font-semibold text-10 text-[#7a9e8e] uppercase">Promedio por Finca</p>
            <p className="text-17 font-bold text-[#3a5244]">$18.9M</p>
            <TrackingPercentage color="text-[#16884a]" />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="mb-1.5 uppercase text-middle9 font-semibold tracking-wider text-[#7a9e8e]">Colocaciones por nivel de riesgo</p>
          <div className="flex gap-2.5 mt-1 justify-center">
            <IndicatorPercentBase dotColor="bg-[#22c55e]" label="Bajo" />
            <IndicatorPercentBase dotColor="bg-[#f59e0b]" label="Medio" />
            <IndicatorPercentBase dotColor="bg-[#ef4444]" label="Alto" />
          </div>
        </div>
      </div>
    </CardInfo>
  )
}

export default CardPlacedPorfolio
