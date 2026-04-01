import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const textVariants = cva('font-sans', {
	variants: {
		size: {
			xs: 'text-xs leading-tight',
			sm: 'text-sm leading-tight',
			base: 'text-base leading-normal',
			lg: 'text-lg leading-normal',
			xl: 'text-xl leading-normal',
			'2xl': 'text-2xl leading-normal',
			'3xl': 'text-3xl leading-normal',
		},
		weight: {
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			extrabold: 'font-extrabold',
		},
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			muted: 'text-muted',
			success: 'text-success',
			warning: 'text-warning',
			error: 'text-error',
			info: 'text-info',
			accent: 'text-accent',
			inverse: 'text-inverse',
		},
		transform: {
			none: 'normal-case',
			uppercase: 'uppercase',
		},
		tracking: {
			tight: 'tracking-tight',
			normal: 'tracking-normal',
			wide: 'tracking-wide',
			wider: 'tracking-wider',
		},
		leading: {
			tight: 'leading-tight',
			normal: 'leading-normal',
			relaxed: 'leading-relaxed',
		},
	},
	defaultVariants: {
		size: 'base',
		weight: 'normal',
		color: 'primary',
		transform: 'none',
		tracking: 'normal',
		leading: 'normal',
	},
});

// Presets for common usage patterns using Tailwind classes
const presetVariants = {
	// Global presets
	cardTitle: 'text-base font-semibold uppercase tracking-wider text-secondary',
	modalTitle: 'text-2xl font-extrabold text-primary',
	alertText: 'text-base font-bold text-amber-600',
	value: 'text-3xl font-bold text-primary',
	label: 'text-base font-medium text-secondary',
	caption: 'text-sm font-normal text-secondary',
	sectionTitle: 'text-2xs font-semibold uppercase tracking-wide text-secondary',
	modalSubtitle: 'text-xl text-secondary',
};

export interface TextProps extends VariantProps<typeof textVariants> {
	children: React.ReactNode;
	className?: string;
	preset?: keyof typeof presetVariants;
	as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'th';
}

export const Text = ({
	children,
	className,
	preset,
	size,
	weight,
	color,
	transform,
	tracking,
	leading,
	as: Component = 'span',
	...props
}: TextProps) => {
	const presetClasses = preset ? presetVariants[preset] : '';
	const variantClasses = textVariants({
		size,
		weight,
		color,
		transform,
		tracking,
		leading,
	});

	const combinedClasses = clsx(presetClasses, variantClasses, className);

	const Tag = Component;

	return React.createElement(
		Tag,
		{
			className: combinedClasses,
			...props,
		},
		children,
	);
};
