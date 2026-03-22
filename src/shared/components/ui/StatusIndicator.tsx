import { cva, VariantProps } from "class-variance-authority"

const containerVariant = cva(
    "flex items-center gap-1 font-semibold border ",
    {
        variants: {
            variant: {
                live: 'text-[#15803d] bg-[#f0fdf4] border-[#bbf7d0] rounded-md',
                approved: 'text-[#92400e] bg-[#fef3c7] border-[#fde68a] rounded-2xl'
            },
            size: {
                sm: 'text-xs py-0.5 px-2',
                md: 'text-xs py-0.5 px-2'
            }
        },
        defaultVariants: {
            variant: 'approved',
            size: 'md'
        }
    }
)

const dotVariant = cva(
    "w-1 h-1 rounded-full",
    {
        variants: {
            variant: {
                live: 'bg-[#16a34a]',
                approved: 'bg-[#d97706]'
            }
        }
    }
)

export type StatusIndicatorProps = VariantProps<typeof containerVariant> & {
    children: React.ReactNode;
};

const StatusIndicator = ({ children, variant, size }: StatusIndicatorProps) => {
    return (
        <span className={containerVariant({ variant, size })}>
            <span className={dotVariant({ variant })}></span>
            {children}
        </span>
    )
}

export default StatusIndicator