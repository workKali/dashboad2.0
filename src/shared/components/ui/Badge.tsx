'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
    "text-11 font-bold rounded-[5px] px-1.5 py-px",
    {
        variants: {
            variant: {
                high: "text-error bg-error/10",
                medium: "text-warning bg-warning/10",
                low: "text-success bg-success/10",
                optimum: 'text-green-600 bg-green-600/10'
            },
            rounded: {
                md: "rounded-[20px]",
            },
            size: {
                sm: "text-10",
                md: "text-11",
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