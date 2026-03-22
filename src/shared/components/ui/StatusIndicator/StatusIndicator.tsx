'use client';

import { clsx } from 'clsx';

export type StatusType = 'live' | 'offline' | 'pending';

interface StatusIndicatorProps {
  status: StatusType;
  text?: string;
  className?: string;
  size?: 'sm' | 'md';
}

const statusStyles = {
  live: {
    container: 'bg-[rgb(240,253,244)] border-[rgb(187,247,208)]',
    dot: 'bg-[rgb(22,163,74)]',
    text: 'text-[rgb(21,128,61)]',
    label: 'EN VIVO'
  },
  offline: {
    container: 'bg-[rgb(249,250,251)] border-[rgb(229,231,235)]',
    dot: 'bg-[rgb(107,114,128)]',
    text: 'text-[rgb(75,85,99)]',
    label: 'OFFLINE'
  },
  pending: {
    container: 'bg-[rgb(254,252,232)] border-[rgb(252,211,77)]',
    dot: 'bg-[rgb(251,191,36)]',
    text: 'text-[rgb(146,64,14)]',
    label: 'PENDIENTE'
  }
} as const;

const sizeStyles = {
  sm: {
    container: 'gap-1 px-1.5 py-0.5',
    dot: 'w-1.25 h-1.25'
  },
  md: {
    container: 'gap-1.5 px-2.5 py-1',
    dot: 'w-1.5 h-1.5'
  }
} as const;

const StatusIndicator = ({
  status,
  text,
  className,
  size = 'md',
}: StatusIndicatorProps) => {
  const statusConfig = statusStyles[status];
  const sizeConfig = sizeStyles[size];

  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-md border font-semibold text-xs',
        sizeConfig.container,
        statusConfig.container,
        className
      )}
    >
      <span
        className={clsx(
          'rounded-full shrink-0',
          sizeConfig.dot,
          statusConfig.dot,
          status === 'live' && 'animate-pulse'
        )}
        aria-hidden="true"
      />
      <span className={clsx('whitespace-nowrap', statusConfig.text)}>
        {text || statusConfig.label}
      </span>
    </div>
  );
};

export default StatusIndicator;
