import clsx from 'clsx';
import { colorPresets } from '../shared/styles';

type InfoRowProps = {
	label: string;
	value: string;
	variant?: 'default' | 'subtle';
	className?: string;
	case?: 'upper' | 'normal';
};

export const InfoRow = ({
	label,
	value,
	variant = 'subtle',
	className,
	case: caseType = 'upper',
}: InfoRowProps) => {
	return (
		<div
			className={clsx(
				'rounded-lg px-2.5 py-1.5 flex justify-between',
				colorPresets.background[variant],
				className,
			)}
		>
			<span
				className={clsx(
					'text-base text-secondary',
					// infoRowPresets.label.base,
					infoRowPresets.label.cases[caseType],
				)}
			>
				{label}
			</span>
			<span className="text-base font-semibold text-primary">
				{value}
			</span>
		</div>
	);
};

// Info Row Presets
export const infoRowPresets = {
	label: {
		cases: {
			upper: 'uppercase tracking-[0.04em]',
			normal: 'normal-case',
		},
	},
};
