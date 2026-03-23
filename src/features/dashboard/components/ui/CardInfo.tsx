import clsx from "clsx"

interface Props {
    className?: string,
    topBorder?: string,
    leftBorder?: string,
    children?: React.ReactNode
}
const CardInfo = ({ className, topBorder, leftBorder, children }: Props) => {
    return (
        <div className={clsx("border rounded-xl px-4 py-3.5 relative overflow-hidden border-[#e1e8e7] flex flex-col gap-2 bg-white", className,)}>
            {topBorder && <div className={clsx("absolute top-0 left-0 right-0 h-0.75", topBorder)} />}
            {leftBorder && <div className={clsx("absolute top-0 bottom-0 left-0 w-0.75", leftBorder)} />}
            {children}
        </div>
    )
}

export default CardInfo