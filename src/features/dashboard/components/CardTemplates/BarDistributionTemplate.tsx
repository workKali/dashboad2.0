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
        <div className={clsx("flex items-center justify-between gap-1", containerClassName)}>
            <div className="flex items-center gap-1 flex-1">
                <Dot className={dotClassName} rounded={dotVariant} />
                <span className={clsx(labelClassName)}>{label}</span>
            </div>
            <Badge variant={variantBadge as any} className={badgeClassNames}>{percentage}%</Badge>
            {money &&
                <span className="text-xl text-gray-600">{money}</span>
            }
        </div>
    );
}

const riskLevelColor = {
    low: 'bg-green-500',
    medium: 'bg-amber-500',
    high: 'bg-red-500'
}
export const DetailBarRiskScore = ({ size, riskLevel, label, money, percentage }: {
    size?: 'sm' | 'md',
    riskLevel: 'low' | 'medium' | 'high'
    label: string,
    money?: string,
    percentage: number,
}) => <DefaultDetailBar label={label} percentage={percentage} variantBadge="low" money={money} labelClassName={`text-gray-700 font-semibold ${size === 'sm' ? 'text-base' : 'text-xl'}`} dotClassName={riskLevelColor[riskLevel]} />

export const DetailBarSecondary = ({ size, label, percentage }: {
    size: 'sm' | 'md',
    label: string,
    percentage: number,
}) => <DefaultDetailBar label={label} percentage={percentage} variantBadge="medium" labelClassName={`text-gray-700 font-normal ${size === 'sm' ? 'text-2sm' : 'text-base'}`} />