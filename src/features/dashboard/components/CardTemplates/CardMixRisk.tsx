import CardInfo from "../ui/CardInfo"
import Divider from "../ui/Divider"
import { RiskDistributionBar, DefaultDetailBar, DetailBarRiskScore } from "./BarDistributionTemplate"

const CardMixRisk = () => {
    return (
        <CardInfo>
            <p className="text-10 font-semibold text-[#7a9e8e] uppercase tracking-wider">Mix de Riesgo</p>
            <RiskDistributionBar data={[{ label: "Bajo", value: "$236.2M", percentage: 20, color: "bg-[#22c55e]" }, { label: "Medio", value: "$446.9M", percentage: 30, color: "bg-amber-500" }, { label: "Alto", value: "$206.8M", percentage: 50, color: "bg-red-500" }]} />
            <div className="flex flex-wrap gap-2">
                <DetailBarRiskScore riskLevel="low" label="Bajo" percentage={20} money="$236.2M" />
                <DetailBarRiskScore riskLevel="medium" label="Medio" percentage={30} money="$446.9M" />
                <DetailBarRiskScore riskLevel="high" label="Alto" percentage={50} money="$206.8M" />
            </div>
            <div className="flex justify-between">
                <span className="text-10 text-[#7a9e8e]">Total cartera</span>
                <span className="text-13 font-bold text-[#3a5244]">$889.9M</span>
            </div>
            <Divider />

            <RiskDistributionBar data={[{ label: "Bajo", value: "$236.2M", percentage: 20, color: "bg-[#16a34a]" }, { label: "Medio", value: "$446.9M", percentage: 30, color: "bg-amber-500" }, { label: "Alto", value: "$206.8M", percentage: 50, color: "bg-red-500" }]} />
            <div className="flex items-start justify-between gap-2">
                <DefaultDetailBar label="Ganadería" percentage={58} variantBadge="low" money="$236.2M" dotClassName="bg-[#d97706]" labelClassName="text-11 font-bold" />
                <div className="flex flex-wrap gap-2 justify-end">
                    <DetailBarRiskScore riskLevel="low" label="Bajo" percentage={20} money="$236.2M" />
                    <DetailBarRiskScore riskLevel="medium" label="Medio" percentage={30} money="$446.9M" />
                    <DetailBarRiskScore riskLevel="high" label="Alto" percentage={50} money="$206.8M" />
                </div>
            </div>

            <Divider />

            <RiskDistributionBar data={[{ label: "Bajo", value: "$236.2M", percentage: 20, color: "bg-[#16a34a]" }, { label: "Medio", value: "$446.9M", percentage: 30, color: "bg-amber-500" }, { label: "Alto", value: "$206.8M", percentage: 50, color: "bg-red-500" }]} />
            <div className="flex items-start justify-between gap-2">
                <DefaultDetailBar label="Cultivos" percentage={58} variantBadge="crop" money="$236.2M" badgeClassNames="bg-[#3b82f618] text-[#3b82f6]" dotClassName="bg-[#d97706]" labelClassName="text-11 font-bold" />
                <div className="flex flex-wrap gap-2 justify-end">
                    <DetailBarRiskScore riskLevel="low" label="Bajo" percentage={20} money="$236.2M" />
                    <DetailBarRiskScore riskLevel="medium" label="Medio" percentage={30} money="$446.9M" />
                    <DetailBarRiskScore riskLevel="high" label="Alto" percentage={50} money="$206.8M" />
                </div>
            </div>
        </CardInfo>
    )
}

export default CardMixRisk