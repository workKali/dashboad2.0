import CardInfo from "./ui/CardInfo"
import Divider from "./ui/Divider"

const CardPlacedPorfolio = () => {
  return (
    <CardInfo topBorder="bg-[#16a34a]" className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-wider m-0 text-[#7a9e8e] font-poppins">cartera colocada</p>

      <div className="flex-1 flex gap-3 items-stretch min-h-45">
        <div className="flex flex-col gap-2 min-w-32.5">
          <div>
            <div className="flex items-center">
              <span className="text-[26px] leading-6.5 font-bold text-[#0f1f14]">$889.9M</span>
            </div>
            <p className="text-[10px] leading-2.5 text-[#7a9e8e] mt-0.5 mb-1 ">47 fincas aprobadas</p>
            <div className="flex items-center">
              <span className="text-[11px] leading-2.75 text-[#16884a]">↑</span>
              <span className="text-[13px] leading-3.25 font-bold text-[#16884a]">11.2%</span>
              <span className="text-[10px] leading-2.5 text-[#7a9e8e]">vs mes ant.</span>
            </div>
          </div>
          <Divider />
          <div>
            <p className="text-[10px] leading-2.5 font-semibold text-[#7a9e8e] mb-1">Promedio por Finca</p>
            <div className="flex items-center">
              <span className="text-[17px] leading-4.25 font-bold text-[#3a523a]">$18.9M</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-[11px] leading-2.75 text-[#16884a]">↑</span>
              <span className="text-[13px] leading-3.25 font-bold text-[#16884a]">2.8%</span>
              <span className="text-[10px] leading-2.5 text-[#7a9e8e]">vs mes ant.</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-[9.5px] leading-2.5 font-semibold text-[#7a9e8e] uppercase tracking-wider text-center">Colocaciones por nivel de riesgo</p>
        </div>
      </div>
    </CardInfo>
  )
}

export default CardPlacedPorfolio