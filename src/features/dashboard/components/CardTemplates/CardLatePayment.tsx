import CardInfo from "../ui/CardInfo"
import { TrackingPercentage } from "./CardHighRisk"
import { Dot } from "@/shared/components/ui/Dot"
import { DefaultDetailBar, DetailBarSecondary, RiskDistributionBar } from "./BarDistributionTemplate"
import Divider from "../ui/Divider"
import CardButton from "../ui/CardButton"

const CardLatePayment = () => {
    return (
        <CardInfo topBorder="bg-red-200">
            <p className="text-[#ef4444] text-10 font-semibold uppercase tracking-wider">Cartera en Mora</p>

            <div className="flex gap-1.5 items-baseline">
                <p className="text-[#dc2626] text-[26px] font-bold leading-none">$206.8M</p>
                <TrackingPercentage color="text-[#dc2626]" />
            </div>

            <div className="flex gap-1 flex-col">
                <RiskDistributionBar data={[{ label: "Mora", value: "7", percentage: 7, color: "bg-[#22c55e]" }, { label: "Sana", value: "93", percentage: 93, color: "bg-[#ef4444]" }]} />
                <div className="flex items-center justify-between gap-0.75 flex-wrap">
                    <span className="text-[#3a5244] text-10 font-normal"><Dot className="bg-[#22c55e] mr-1" />Mora <strong className="font-bold">7%</strong> · $63.0M</span>
                    <span className="text-[#3a5244] text-10 font-normal"><Dot className="bg-[#22c55e] mr-1" /> Sana <strong className="font-bold">7%</strong> · $63.0M</span>
                </div>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
                <p className="text-10 text-[#7a9e8e]">Días mora pond. por saldo</p>
                <div className="flex gap-0.75 items-baseline">
                    <span className="text-sm font-bold text-[#dc2626]">32</span>
                    <span className="text-10 text-[#f87171]">días</span>
                </div>
            </div>
            <Divider />

            <div className="flex flex-col gap-1.25">
                <p className="text-10 font-semibold text-[#7a9e8e] uppercase tracking-wider">Tramos de mora</p>
                <RiskDistributionBar data={[{ label: "Mora", value: "7", percentage: 7, color: "bg-[#22c55e]" }, { label: "Sana", value: "93", percentage: 93, color: "bg-[#ef4444]" }, { label: "Sana", value: "93", percentage: 93, color: "bg-[#ef4444]" }]} />
                <div className="flex flex-wrap gap-2">
                    <DefaultDetailBar label={"1-30 Dias"} percentage={7} variantBadge={"low"} dotClassName="bg-[#ef4444]" labelClassName="text-11" />
                    <DefaultDetailBar label={"31-60 Dias"} percentage={93} variantBadge={"high"} dotClassName="bg-[#ef4444]" labelClassName="text-11" />
                    <DefaultDetailBar label={">60 Dias"} percentage={93} variantBadge={"medium"} dotClassName="bg-[#ef4444]" labelClassName="text-11" />
                </div>
            </div>

            <CardButton className="mt-2 bg-[#fef2f2] hover:bg-[#fee2e2] border-[#fecaca] text-[#dc2626]" colorEmphasis="bg-[#dc2626]" rightValue="23" leftValue="⚠">
                Ver fincas en mora
            </CardButton>
        </CardInfo>
    )
}

export default CardLatePayment
