import clsx from "clsx"

interface Props {
    label: string
    dotColor: string
}
const IndicatorPercentBase = ({ label, dotColor }: Props) => {
    return (
        <div className="flex items-center gap-0.5">
            <div className={clsx("w-2 h-0.5 rounded-xs", dotColor)}></div>
            <p className="text-[#7a9e8e] text-base">{label}</p>
        </div>
    )
}
export default IndicatorPercentBase