import { clsx } from 'clsx'

interface CardButtonProps {
    className?: string;
    onClick?: () => void;
    rightValue?: string;
    leftValue?: string;
    colorEmphasis?: string;
    children: React.ReactNode;
}

const CardButton = ({ children, onClick, className, leftValue, rightValue, colorEmphasis }: CardButtonProps) => {
    return (
        <button onClick={onClick} className={clsx("cursor-pointer w-full bg-[#fef2f2] hover:bg-[#fee2e2] border border-[#fecaca] rounded-lg py-1.25 font-semibold text-[10px] leading-normal color-[#dc2626] flex items-center justify-center gap-1.25", className, colorEmphasis)}>
            {leftValue && <span className="text-[11px]">⚠</span>}
            {children}
            {rightValue && <span className={clsx("text-white rounded-xl px-1.5 py-0.5 text-10 font-bold", colorEmphasis)}>{rightValue}</span>}
        </button>
    )
}

export default CardButton
