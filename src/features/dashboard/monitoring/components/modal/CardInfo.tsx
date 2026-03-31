import clsx from 'clsx';
import { colorPresets } from '../shared/styles';

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
		<div
			className={clsx(
				'rounded-lg px-3.5 py-2.5',
				colorPresets.background[variant],
				className,
			)}
		>
			<p className="text-base text-secondary uppercase tracking-wide">
				{title}
			</p>

			<p
				className={clsx(
					'text-base',
					cardPresets.value.colors[textVariant],
				)}
			>
				{value}
				{unit && (
					<span className="ml-1 text-sm font-normal text-primary">
						{unit}
					</span>
				)}
			</p>
		</div>
	);
};

// Card Presets
export const cardPresets = {
	value: {
		colors: {
			default: colorPresets.text.value,
			high: colorPresets.text.high,
			medium: colorPresets.text.medium,
			low: colorPresets.text.low,
			amount: colorPresets.text.amount,
		},
	},
};
