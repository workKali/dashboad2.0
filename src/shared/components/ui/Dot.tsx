import clsx from "clsx"

export const Dot = ({ className }: { className?: string }) => {
    return <div className={clsx("w-1.5 h-1.5 rounded-xs shrink-0 inline-block", className)} />
}
