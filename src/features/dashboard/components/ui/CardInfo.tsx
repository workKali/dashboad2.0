import clsx from 'clsx';

interface Props {
	className?: string;
	topBorder?: string;
	leftBorder?: string;
	children?: React.ReactNode;
}
const CardInfo = ({ className, topBorder, leftBorder, children }: Props) => {
	return (
		<div className={clsx('border rounded-xl px-4 py-3.5 relative overflow-hidden border-gray-150 flex flex-col bg-white', className)}>
			{topBorder && <div className={clsx('absolute top-0 left-0 right-0 h-[3px]', topBorder)} />}
			{leftBorder && <div className={clsx('absolute top-0 bottom-0 left-0 w-1', leftBorder)} />}
			{children}
		</div>
	);
};

export default CardInfo;
