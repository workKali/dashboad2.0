import CardInfo from "../ui/CardInfo"
import Divider from "../ui/Divider"
import IndicatorPercentBase from "../ui/IndicatorPercents"
import { TrackingPercentage } from "./CardHighRisk"

const CardPlacedPorfolio = () => {
  return (
    <CardInfo topBorder="bg-green-600" className="flex flex-col gap-2">
      <p className="text-10 font-semibold uppercase tracking-wider text-secondary">cartera colocada</p>
      <div className="flex-1 flex gap-3 items-stretch min-h-45 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2 min-w-32.5">
          <div>
            <div className="flex items-center">
              <p className="text-26 font-bold">$889.9M</p>
            </div>
            <p className="text-s-9/5"></p>
            <p className="text-10 text-secondary">47 fincas aprobadas</p>
            <TrackingPercentage color="text-green-700" />
          </div>
          <Divider />
          <div>
            <p className="mb-1 font-semibold text-10 text-secondary uppercase">Promedio por Finca</p>
            <p className="text-17 font-bold text-muted">$18.9M</p>
            <TrackingPercentage color="text-green-700" />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="mb-1.5 uppercase text-middle9 font-semibold tracking-wider text-secondary">Colocaciones por nivel de riesgo</p>
          <div className="flex gap-2.5 mt-1 justify-center">
            <IndicatorPercentBase dotColor="bg-success" label="Bajo" />
            <IndicatorPercentBase dotColor="bg-warning" label="Medio" />
            <IndicatorPercentBase dotColor="bg-error" label="Alto" />
          </div>
        </div>
      </div>
    </CardInfo>
  )
}

export default CardPlacedPorfolio
