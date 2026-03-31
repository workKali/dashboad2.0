import clsx from 'clsx';
import { cardStyles, valueStyles } from '../shared/styles';

type Props = {
	title: string;
	value: string;
	unit?: string;
	variant?: 'default' | 'high' | 'medium' | 'low';
	textVariant?: 'default' | 'high' | 'medium' | 'low' | 'amount';
	className?: string;
};

export const CardInfo = ({
	title,
	value,
	unit,
	variant = 'default',
	textVariant = 'default',
	className,
}: Props) => {
	return (
		<div className={clsx(cardStyles({ variant }), className)}>
			<p className="text-[10px] text-[rgb(122,158,142)] uppercase tracking-wide">
				{title}
			</p>

			<p className={valueStyles({ textVariant })}>
				{value}
				{unit && (
					<span
						className={clsx(
							'ml-1 text-[11px] font-normal',
							valueStyles({ textVariant: 'default' }),
						)}
					>
						{unit}
					</span>
				)}
			</p>
		</div>
	);
};
