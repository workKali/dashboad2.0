import React from 'react';
import { monitoringPresets, type MonitoringPreset } from './TextPresets';
import clsx from 'clsx';

// Base monitoring text component that handles presets directly
interface MonitoringTextProps {
	children: React.ReactNode;
	className?: string;
	preset?: MonitoringPreset;
	as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'th';
}

export const MonitoringText = ({
	children,
	className,
	preset,
	as: Component = 'span',
	...props
}: MonitoringTextProps) => {
	const presetClasses = preset ? monitoringPresets[preset] : '';
	const combinedClasses = clsx(presetClasses, className);

	return React.createElement(Component, {
		className: combinedClasses,
		...props
	}, children);
};
