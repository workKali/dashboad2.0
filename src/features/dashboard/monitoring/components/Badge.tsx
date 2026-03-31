import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

export const badgeStyles = cva(
	[
		'inline-flex items-center gap-1',
		'rounded-[7px]',
		'px-[10px] py-[3px]',
		'text-[10px]',
		'font-poppins font-bold',
		'whitespace-nowrap',
	],
	{
		variants: {
			variant: {
				warning: 'bg-opacity-amber-light text-warning',

				harvest: 'bg-amber-50 text-amber-700',

				neutral:
					'bg-gray-50 text-muted font-semibold',

				danger: 'bg-red-100 text-red-600',

				attention: 'text-warning bg-opacity-amber-medium',

				optimum: 'text-green-600 bg-opacity-green-medium',

				good: 'text-success bg-opacity-green-dark',
			},
			weight: {
				normal: 'font-semibold',
				bold: 'font-bold',
			},
		},
		defaultVariants: {
			variant: 'neutral',
			weight: 'bold',
		},
	},
);

type BadgeProps = {
	children: React.ReactNode;
	className?: string;
} & VariantProps<typeof badgeStyles>;

export const Badge = ({ children, variant, weight, className }: BadgeProps) => {
	return (
		<span className={clsx(badgeStyles({ variant, weight }), className)}>
			{children}
		</span>
	);
};
