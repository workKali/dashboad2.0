import CardButton from "../ui/CardButton"
import clsx from "clsx"
import CardInfo from "../ui/CardInfo"

const CardHighRisk = () => {
    return (
        <CardInfo topBorder="bg-error" className="border-red-200 flex flex-col gap-2">
            <p className="text-error text-base font-semibold uppercase tracking-wider">En alto riesgo</p>
            <div className="flex gap-1.5 items-baseline">
                <p className="text-red-600 text-3xl font-bold leading-none">$206.8M</p>
                <TrackingPercentage color="text-red-600" />
            </div>

            <div className="flex flex-col mt-1.5 gap-0.5">
                <p className="text-red-400 font-bold text-base uppercase tracking-wider">Mayor riesgo por monto</p>
                <ItemList />
                <ItemList />
                <ItemList />

            </div>

            <CardButton className="mt-2 bg-red-50 hover:bg-red-100 border-red-200 text-red-600" colorEmphasis="bg-red-600" rightValue="7" leftValue="⚠">
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
                <p className="text-[#f87171] text-base font-extrabold shrink-0">#1</p>
                <p className="text-[#3a5244] text-base font-semibold truncate max-w-25">Isabel Peralta</p>
                <p className="text-[#7a9e8e] text-base truncate shrink-0">La Libertad</p>
            </div>

            <div className="flex items-center gap-1.25 shrink-0">
                <p className="text-[#dc2626] text-base font-bold rounded-sm py-px px-1.25 bg-[#fee2e2]">$42.0M</p>
                <p className="text-[#f87171] text-base font-semibold bg-[#fef2f2] border border-[#fecaca] rounded-sm py-px px-1.25">mora</p>
            </div>
        </div>
    )
}


export const TrackingPercentage = ({ color }: { color: string }) => {
    return (
        <div className="flex items-center gap-1.25">
            <p className={clsx("text-xl font-normal", color)}>↑</p>
            <p className={clsx(" text-sm font-extrabold", color)}>3.2%</p>
            <p className="text-[#7a9e8e] text-base">vs. mes ant.</p>
        </div>
    )
}
