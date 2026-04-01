import CardInfo from "../ui/CardInfo"
import { TrackingPercentage } from "./CardHighRisk"
import { Dot } from "@/shared/components/ui/Dot"
import { DefaultDetailBar, DetailBarSecondary, RiskDistributionBar } from "./BarDistributionTemplate"
import Divider from "../ui/Divider"
import CardButton from "../ui/CardButton"

const CardLatePayment = () => {
    return (
        <CardInfo topBorder="bg-red-200">
            <p className="text-base text-[#7a9e8e] font-semibold uppercase tracking-wider">Cartera en Mora</p>

            <div className="flex gap-1.5 items-baseline">
                <p className="text-red-600 text-3xl font-bold leading-none">$206.8M</p>
                <TrackingPercentage color="text-red-600" />
            </div>

            <div className="flex gap-1 flex-col">
                <RiskDistributionBar data={[{ label: "Mora", value: "7", percentage: 7, color: "bg-success" }, { label: "Sana", value: "93", percentage: 93, color: "bg-error" }]} />
                <div className="flex items-center justify-between gap-0.5 flex-wrap">
                    <span className="text-muted text-base font-normal"><Dot className="bg-success mr-1" />Mora <strong className="font-bold">7%</strong> · $63.0M</span>
                    <span className="text-muted text-base font-normal"><Dot className="bg-success mr-1" /> Sana <strong className="font-bold">7%</strong> · $63.0M</span>
                </div>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
                <p className="text-base text-secondary">Días mora pond. por saldo</p>
                <div className="flex gap-0.5 items-baseline">
                    <span className="text-sm font-bold text-red-600">32</span>
                    <span className="text-sm text-red-400">días</span>
                </div>
            </div>
            <Divider />

            <div className="flex flex-col gap-1.25">
                <p className="text-base font-semibold text-secondary uppercase tracking-wider">Tramos de mora</p>
                <RiskDistributionBar data={[{ label: "Mora", value: "7", percentage: 7, color: "bg-success" }, { label: "Sana", value: "93", percentage: 93, color: "bg-error" }, { label: "Sana", value: "93", percentage: 93, color: "bg-error" }]} />
                <div className="flex flex-wrap gap-2">
                    <DefaultDetailBar label={"1-30 Dias"} percentage={7} variantBadge={"low"} dotClassName="bg-error" labelClassName="text-xl" />
                    <DefaultDetailBar label={"31-60 Dias"} percentage={93} variantBadge={"high"} dotClassName="bg-error" labelClassName="text-xl" />
                    <DefaultDetailBar label={">60 Dias"} percentage={93} variantBadge={"medium"} dotClassName="bg-error" labelClassName="text-xl" />
                </div>
            </div>

            <CardButton className="mt-2 bg-red-50 hover:bg-red-100 border-red-200 text-red-600" colorEmphasis="bg-red-600" rightValue="23" leftValue="⚠">
                Ver fincas en mora
            </CardButton>
        </CardInfo>
    )
}

export default CardLatePayment
