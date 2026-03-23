'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonInfoVariants = cva(
    'w-full flex gap-1 items-center justify-center py-1 px-0 rounded-lg cursor-pointer text-xs border transition-colors duration-200 font-semibold',
    {
        variants: {
            variant: {
                'high-risk': 'bg-[rgb(254,242,242)] border-[rgb(254,202,202)] text-[rgb(220,38,38)]',
                'high-emission': 'bg-[rgb(248,250,252)] border-[rgb(203,213,225)] text-[rgb(100,116,139)]',
                'water-deficit': 'bg-[rgb(240,249,255)] border-[rgb(186,230,253)] text-[rgb(14,165,233)]',
                'deforestation': 'bg-[rgb(255,241,241)] border-[rgb(254,202,202)] text-[rgb(248,113,113)]'
            }
        },
        defaultVariants: {
            variant: 'high-emission'
        }
    }
);

const badgeColorMap = {
    'high-risk': 'bg-[rgb(239,68,68)] text-white',
    'high-emission': 'bg-[rgb(100,116,139)] text-white',
    'water-deficit': 'bg-[rgb(14,165,233)] text-white',
    'deforestation': 'bg-[rgb(239,68,68)] text-white'
} as const;

export type ButtonInfoProps = VariantProps<typeof buttonInfoVariants> & {
    children: React.ReactNode;
    badge?: string | number;
    icon?: React.ReactNode;
    onClick?: () => void;
    badgeColor?: string;
    className?: string;
    disabled?: boolean;
};

const ButtonInfo = ({
    icon,
    badge,
    variant,
    onClick,
    children,
    className,
    badgeColor: customBadgeColor,
    disabled = false
}: ButtonInfoProps) => {
    const badgeColor = (customBadgeColor ? badgeColorMap[customBadgeColor as keyof typeof badgeColorMap] : badgeColorMap['high-emission']);

    return (
        <button
            className={clsx(
                buttonInfoVariants({ variant }),
                disabled && 'opacity-50 cursor-not-allowed',
                !disabled && 'hover:opacity-80 active:scale-[0.98]',
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="text-[11px]">{icon}</span>}
            <span className=" text-center">{children}</span>
        </button>
    );
};

export default ButtonInfo;