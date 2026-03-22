'use client';

import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const statusIndicatorVariants = cva(
  // Base styles
  'inline-flex items-center rounded-md border font-semibold text-xs',
  {
    variants: {
      status: {
        live: 'bg-[rgb(240,253,244)] border-[rgb(187,247,208)]',
        offline: 'bg-[rgb(249,250,251)] border-[rgb(229,231,235)]',
        pending: 'bg-[rgb(254,252,232)] border-[rgb(252,211,77)]'
      },
      size: {
        sm: 'gap-1 px-1.5 py-0.5',
        md: 'gap-1.5 px-2.5 py-1'
      }
    },
    defaultVariants: {
      status: 'live',
      size: 'md'
    }
  }
);

const statusDotVariants = cva(
  // Base styles
  'rounded-full shrink-0',
  {
    variants: {
      status: {
        live: 'bg-[rgb(22,163,74)]',
        offline: 'bg-[rgb(107,114,128)]',
        pending: 'bg-[rgb(251,191,36)]'
      },
      size: {
        sm: 'w-1.25 h-1.25',
        md: 'w-1.5 h-1.5'
      }
    },
    defaultVariants: {
      status: 'live',
      size: 'md'
    }
  }
);

const statusTextVariants = cva('whitespace-nowrap', {
  variants: {
    status: {
      live: 'text-[rgb(21,128,61)]',
      offline: 'text-[rgb(75,85,99)]',
      pending: 'text-[rgb(146,64,14)]'
    }
  },
  defaultVariants: {
    status: 'live'
  }
});

export type StatusIndicatorProps = VariantProps<typeof statusIndicatorVariants> & {
  text?: string;
  className?: string;
};

const statusLabels = {
  live: 'EN VIVO',
  offline: 'OFFLINE',
  pending: 'PENDIENTE'
} as const;

const StatusIndicator = ({
  status,
  size,
  text,
  className
}: StatusIndicatorProps) => {
  return (
    <div className={clsx(statusIndicatorVariants({ status, size }), className)}>
      <span
        className={clsx(
          statusDotVariants({ status, size }),
          status === 'live' && 'animate-pulse'
        )}
        aria-hidden="true"
      />
      <span className={statusTextVariants({ status })}>
        {text || statusLabels[status!]}
      </span>
    </div>
  );
};

export default StatusIndicator;
