'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
    "text-11 font-bold rounded-[5px] px-1.5 py-px",
    {
        variants: {
            variant: {
                high: "text-[#ef4444] bg-[#ef444418]",
                medium: "text-[#f59e0b] bg-[#f59e0b18]",
                low: "text-[#22c55e] bg-[#22c55e18]"
            },
            rounded: {
                md: "rounded-[20px]",
            }
        },
    }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    className?: string;
}

export const Badge = ({ children, className, variant, rounded }: BadgeProps) => {
    return <span className={clsx(badgeVariants({ variant, rounded }), className)}>
        {children}
    </span>
}