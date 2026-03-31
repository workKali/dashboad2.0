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
				warning: 'bg-[rgba(217,119,6,0.133)] text-[rgb(217,119,6)]',

				harvest: 'bg-[rgb(254,243,199)] text-[rgb(180,83,9)]',

				neutral:
					'bg-[rgb(248,250,249)] text-[rgb(58,82,68)] font-semibold',

				danger: 'bg-[rgb(254,226,226)] text-[rgb(220,38,38)]',

				attention: 'text-[rgb(217,119,6)] bg-[rgba(217,119,6,0.094)]',

				optimum: 'text-[#16a34a] bg-[rgba(22,163,74,0.094)]',

				good: 'text-[rgb(34,197,94)] bg-[rgba(220,38,38,0.094)]',
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
