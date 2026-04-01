import { cva } from 'class-variance-authority';

export const tableRowStyles = cva('border-b border-gray-200 cursor-pointer border-l-[3px] transition-colors', {
	variants: {
		level: {
			low: 'bg-transparent border-l-transparent',
			medium: 'bg-gray-50 border-l-transparent',
			high: 'bg-opacity-green-dark border-l-red-400',
		},
		expanded: {
			true: '',
			false: '',
		},
	},
	compoundVariants: [
		{
			level: 'low',
			expanded: false,
			class: 'hover:bg-black/5',
		},
		{
			level: 'medium',
			expanded: false,
			class: 'hover:bg-amber-100',
		},
		{
			level: 'high',
			expanded: false,
			class: 'hover:bg-black/5',
		},
		{
			expanded: true,
			class: '!bg-blue-50 !hover:bg-blue-100',
		},
	],

	defaultVariants: {
		level: 'low',
		expanded: false,
	},
});
