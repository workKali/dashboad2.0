import clsx from "clsx"
import { cva, type VariantProps } from "class-variance-authority"

const dotVariants = cva("w-1.5 h-1.5 shrink-0 inline-block", {
    variants: {
        rounded: {
            full: "rounded-full",
            xs: "rounded-xs"
        },
    },
    defaultVariants: {
        rounded: "full"
    }
})

export interface DotProps extends VariantProps<typeof dotVariants> {
    className?: string
}

export const Dot = ({ className, rounded }: DotProps) => {
    return <div className={clsx(dotVariants({ rounded }), className)} />
}
