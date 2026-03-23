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

interface RiskDetailBarProps {
    label: string;
    money?: string;
    percentage: number;
    labelClassName?: string;
    badgeClassNames?: string;
    containerClassName?: string;
    variant: 'low' | 'medium' | 'high' | 'crop';
}

export const RiskDetailBar = ({ label, percentage, variant, money, badgeClassNames, containerClassName, labelClassName }: RiskDetailBarProps) => {
    let dotColor: string;
    if (variant === 'low')
        dotColor = 'bg-[#22c55e]';
    else if (variant === 'medium')
        dotColor = 'bg-[#f59e0b]';
    else if (variant === 'crop')
        dotColor = 'bg-[#3b82f6]';
    else
        dotColor = 'bg-[#ef4444]';

    return (
        <div className={clsx("flex items-center gap-1 flex-wrap", containerClassName)}>
            <div className="flex items-center gap-1">
                <Dot className={dotColor} />
                <span className={clsx("text-11 text-[#3a5244] font-semibold", labelClassName)}>{label}</span>
            </div>
            <Badge variant={variant as any} className={badgeClassNames}>{percentage}%</Badge>
            {money &&
                <span className="text-11 text-[#7a9e8e]">{money}</span>
            }
        </div>
    );
}
