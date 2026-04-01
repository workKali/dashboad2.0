'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonInfoVariants = cva(
    'w-full flex gap-1 items-center justify-center py-1 px-0 rounded-lg cursor-pointer text-xs border transition-colors duration-200 font-semibold',
    {
        variants: {
            variant: {
                'high-risk': 'bg-red-50 border-red-200 text-red-600',
                'high-emission': 'bg-slate-50 border-slate-300 text-slate-500',
                'water-deficit': 'bg-blue-50 border-blue-200 text-sky-500',
                'deforestation': 'bg-red-50 border-red-200 text-red-400'
            }
        },
        defaultVariants: {
            variant: 'high-emission'
        }
    }
);

const badgeColorMap = {
    'high-risk': 'bg-red-600 text-white',
    'high-emission': 'bg-slate-500 text-white',
    'water-deficit': 'bg-sky-500 text-white',
    'deforestation': 'bg-red-600 text-white'
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
            {icon && <span className="text-xl">{icon}</span>}
            <span className=" text-center">{children}</span>
        </button>
    );
};

export default ButtonInfo;