import { cva } from 'class-variance-authority';

// Info Row Styles
export const infoRowStyles = cva(
	'flex justify-between rounded-lg px-2.5 py-1.5',
	{
		variants: {
			variant: {
				default: 'bg-white',
				subtle: 'bg-[rgb(248,250,249)]',
			},
		},
		defaultVariants: {
			variant: 'subtle',
		},
	},
);

export const labelInfoRowStyles = cva(
	'text-[10px] text-[rgb(122,158,142)] font-poppins',
	{
		variants: {
			case: {
				upper: 'uppercase tracking-[0.04em]',
				normal: 'normal-case',
			},
		},
		defaultVariants: {
			case: 'upper',
		},
	},
);

export const valueInfoRowStyles = cva(
	'text-[10px] font-semibold text-[rgb(15,31,20)] font-poppins',
);

// Card Info Styles
export const cardStyles = cva('rounded-lg px-3.5 py-2.5', {
	variants: {
		variant: {
			default: 'bg-[rgb(248,250,249)]',
			high: 'bg-[rgb(254,226,226)]',
			medium: 'bg-[rgb(254,243,199)]',
			low: 'bg-[rgb(240,253,244)]',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export const valueStyles = cva('text-lg font-extrabold font-poppins', {
	variants: {
		textVariant: {
			default: 'text-[rgb(15,31,20)]',
			high: 'text-[rgb(220,38,38)]',
			medium: 'text-[rgb(217,119,6)]',
			low: 'text-[rgb(22,163,74)]',
			amount: 'text-[rgb(21,128,61)]',
		},
	},
	defaultVariants: {
		textVariant: 'default',
	},
});
