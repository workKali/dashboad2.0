import clsx from "clsx"
import { cva, type VariantProps } from "class-variance-authority"

const dotVariants = cva("w-1.5 h-1.5 shrink-0 inline-block", {
    variants: {
        rounded: {
            full: "rounded-full",
            xs: "rounded-xs"
        },
        color:{
            optimum: 'bg-[#16a34a]',
            low: 'bg-[#22c55e]',
            medium: 'bg-[#f59e0b]',
            high: 'bg-[#ef4444]'
        }
    },
    defaultVariants: {
        rounded: "full",
    }
})

export interface DotProps extends VariantProps<typeof dotVariants> {
    className?: string
}

export const Dot = ({ className, rounded, color }: DotProps) => {
    return <div className={clsx(dotVariants({ rounded, color }), className)} />
}
