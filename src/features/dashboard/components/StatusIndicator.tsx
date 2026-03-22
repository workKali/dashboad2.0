'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const statusIndicatorVariants = cva(
    // Base styles
    'inline-flex items-center font-semibold font-[Poppins] gap-1.25',
    {
        variants: {
            variant: {
                live: 'bg-[rgb(240,253,244)] border-[rgb(187,247,208)] border rounded-lg text-[rgb(21,128,61)]',
                approved: 'bg-[rgb(254,243,199)] border-[rgb(253,230,138)] border rounded-3xl text-[rgb(146,64,14)] '
            },
            size: {
                sm: 'px-2 py-0.5 text-xs',
                md: 'px-2.5 py-1 text-xs'
            }
        },
        defaultVariants: {
            variant: 'live',
            size: 'md'
        }
    }
);

const statusDotVariants = cva(
    // Base styles
    'rounded-full shrink-0',
    {
        variants: {
            variant: {
                live: 'bg-[rgb(22,163,74)]',
                approved: 'bg-[rgb(217,119,6)]'
            },
            size: {
                sm: 'w-1.25 h-1.25',
                md: 'w-1.5 h-1.5'
            }
        },
        defaultVariants: {
            variant: 'live',
            size: 'sm'
        }
    }
);

export type StatusIndicatorProps = VariantProps<typeof statusIndicatorVariants> & {
    children: React.ReactNode;
    className?: string;
};

const StatusIndicator = ({
    variant,
    size,
    children,
    className
}: StatusIndicatorProps) => {
    return (
        <div className={clsx(statusIndicatorVariants({ variant, size }), className)}>
            <span className={statusDotVariants({ variant, size })} />
            <span className="whitespace-nowrap">
                {children}
            </span>
        </div>
    );
};

export default StatusIndicator;