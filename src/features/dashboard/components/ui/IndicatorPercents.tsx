import clsx from "clsx"

interface Props {
    label: string
    dotColor: string
}
const IndicatorPercentBase = ({ label, dotColor }: Props) => {
    return (
        <div className="flex items-center gap-0.75">
            <div className={clsx("w-2 h-0.75 rounded-xs", dotColor)}></div>
            <p className="text-[#7a9e8e] text-10">{label}</p>
        </div>
    )
}
export default IndicatorPercentBase