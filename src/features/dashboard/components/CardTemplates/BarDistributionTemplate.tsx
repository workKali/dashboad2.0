import { Badge } from "@/shared/components/ui/Badge";
import { Dot } from "@/shared/components/ui/Dot";
import clsx from "clsx"

interface RiskBarProps {
    data: Array<{
        label: string;
        value: string;
        percentage: number;
        color: string;
    }>;
    className?: string;
}

export const RiskDistributionBar = ({ data, className }: RiskBarProps) => {
    return (
        <div className={`flex h-1.25 rounded-[3px] overflow-hidden gap-0.5 ${className || ''}`}>
            {data.map((item, index) => (
                <div
                    key={index}
                    title={`${item.label}: ${item.value} (${item.percentage}%)`}
                    className={clsx(item.color, 'transition-all duration-300')}
                    style={{ flex: `${item.percentage} 1 0%` }}
                />
            ))}
        </div>
    );
};

interface DefailtDetailBarProps {
    label: string;
    money?: string;
    percentage: number;

    dotVariant?: 'full' | 'xs';

    dotClassName?: string;
    labelClassName?: string;
    badgeClassNames?: string;

    containerClassName?: string;

    variantBadge: 'low' | 'medium' | 'high' | 'crop';
}

export const DefaultDetailBar = ({ label, percentage, variantBadge, money, badgeClassNames, containerClassName, labelClassName, dotVariant = 'xs', dotClassName }: DefailtDetailBarProps) => {
    return (
        <div className={clsx("flex items-center gap-1", containerClassName)}>
            <Dot className={dotClassName} rounded={dotVariant} />
            <span className={clsx(labelClassName)}>{label}</span>
            <Badge variant={variantBadge as any} className={badgeClassNames}>{percentage}%</Badge>
            {money &&
                <span className="text-11 text-[#4b504e]">{money}</span>
            }
        </div>
    );
}

const riskLevelColor = {
    low: 'bg-[#22c55e]',
    medium: 'bg-[#f59e0b]',
    high: 'bg-[#ef4444]'
}
export const DetailBarRiskScore = ({ size, riskLevel, label, money, percentage }: {
    size?: 'sm' | 'md',
    riskLevel: 'low' | 'medium' | 'high'
    label: string,
    money?: string,
    percentage: number,
}) => <DefaultDetailBar label={label} percentage={percentage} variantBadge="low" money={money} labelClassName={`text-[#3a5244] font-semibold ${size === 'sm' ? 'text-10' : 'text-11'}`} dotClassName={riskLevelColor[riskLevel]} />

export const DetailBarSecondary = ({ size, label, percentage }: {
    size: 'sm' | 'md',
    label: string,
    percentage: number,
}) => <DefaultDetailBar label={label} percentage={percentage} variantBadge="medium" labelClassName={`text-[#3a5244] font-normal ${size === 'sm' ? 'text-9' : 'text-10'}`} />