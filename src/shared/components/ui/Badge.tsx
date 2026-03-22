'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
    'inline-flex items-center font-bold font-[Poppins]',
    {
        variants: {
            rounded: {
                sm: 'rounded-sm',
                lg: 'rounded-lg',
                full: 'rounded-2xl',
            },
            size: {
                xs: 'px-px py-1 text-xs',
                sm: 'px-1.5 py-0.5 text-xs'
            },
            color: {
                low: 'bg-[rgba(22,163,74,0.094)] text-[#16a34a]',
                medium: 'bg-[rgba(217,119,6,0.094)] text-[#d97706]',
                high: 'bg-[rgba(239,68,68,0.094)] text-[#ef4444]'
            }
        },
        defaultVariants: {
            // rounded: 'sm',
            // color: 'low',
            // size: 'sm'
        }
    }
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
    className?: string;
};

const Badge = ({
    size,
    color,
    rounded,
    children,
    className
}: BadgeProps) => {
    return (
        <span className={clsx(badgeVariants({ rounded, size, color }), className)}>
            {children}
        </span>
    );
};

export default Badge;