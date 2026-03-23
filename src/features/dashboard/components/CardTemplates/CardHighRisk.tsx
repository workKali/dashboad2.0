import CardButton from "../ui/CardButton"
import clsx from "clsx"
import CardInfo from "../ui/CardInfo"

const CardHighRisk = () => {
    return (
        <CardInfo topBorder="bg-[#ef4444]" className="border-[#fecaca] flex flex-col gap-2">
            <p className="text-[#ef4444] text-10 font-semibold uppercase tracking-wider">En alto riesgo</p>
            <div className="flex gap-1.5 items-baseline">
                <p className="text-[#dc2626] text-[26px] font-bold leading-none">$206.8M</p>
                <TrackingPercentage color="text-[#dc2626]" />
            </div>

            <div className="flex flex-col mt-1.5 gap-0.75">
                <p className="text-[#f87171] font-bold text-10 uppercase tracking-wider">Mayor riesgo por monto</p>
                <ItemList />
                <ItemList />
                <ItemList />

            </div>

            <CardButton className="mt-2 bg-[#fef2f2] hover:bg-[#fee2e2] border-[#fecaca] text-[#dc2626]" colorEmphasis="bg-[#dc2626]" rightValue="7" leftValue="⚠">
                Ver fincas de alto riesgo
            </CardButton>
        </CardInfo>
    )
}

export default CardHighRisk

const ItemList = () => {
    return (
        <div className="flex items-center justify-between bg-[#fef2f2] border border-[#fee2e2] rounded-md py-1 px-2 flex-wrap">
            <div className="flex items-center gap-1.25 min-w-0">
                <p className="text-[#f87171] text-10 font-extrabold shrink-0">#1</p>
                <p className="text-[#3a5244] text-10 font-semibold truncate max-w-25">Isabel Peralta</p>
                <p className="text-[#7a9e8e] text-10 truncate shrink-0">La Libertad</p>
            </div>

            <div className="flex items-center gap-1.25 shrink-0">
                <p className="text-[#dc2626] text-10 font-bold rounded-sm py-px px-1.25 bg-[#fee2e2]">$42.0M</p>
                <p className="text-[#f87171] text-10 font-semibold bg-[#fef2f2] border border-[#fecaca] rounded-sm py-px px-1.25">mora</p>
            </div>
        </div>
    )
}


export const TrackingPercentage = ({ color }: { color: string }) => {
    return (
        <div className="flex items-center gap-1.25">
            <p className={clsx("text-11 font-normal", color)}>↑</p>
            <p className={clsx(" text-13 font-extrabold", color)}>3.2%</p>
            <p className="text-[#7a9e8e] text-10">vs. mes ant.</p>
        </div>
    )
}
