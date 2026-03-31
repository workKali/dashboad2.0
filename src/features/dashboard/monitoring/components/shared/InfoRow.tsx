import clsx from 'clsx';
import {
	infoRowStyles,
	labelInfoRowStyles,
	valueInfoRowStyles,
} from './styles';

type InfoRowProps = {
	label: string;
	value: string;
	variant?: 'default' | 'subtle';
	className?: string;
};

export const InfoRow = ({
	label,
	value,
	variant,
	className,
	case: caseType = 'upper',
}: InfoRowProps & { case?: 'upper' | 'normal' }) => {
	return (
		<div className={clsx(infoRowStyles({ variant }), className)}>
			<span className={labelInfoRowStyles({ case: caseType })}>
				{label}
			</span>
			<span className={valueInfoRowStyles()}>{value}</span>
		</div>
	);
};
