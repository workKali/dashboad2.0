import { cva, VariantProps } from "class-variance-authority"

const containerVariant = cva(
    "flex items-center gap-1 font-semibold border ",
    {
        variants: {
            variant: {
                live: 'text-accent bg-green-50 border-green-200 rounded-md',
                approved: 'text-amber-800 bg-amber-100 border-amber-200 rounded-2xl'
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
                live: 'bg-green-600',
                approved: 'bg-warning'
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