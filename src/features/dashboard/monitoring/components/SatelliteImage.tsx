import clsx from 'clsx';
import React from 'react';

export const SatelliteImg = ({ imageUrl, date, classNameContainer }: { imageUrl?: string; date?: string; classNameContainer?: string }) => {
	return (
		<div
			className={clsx(
				'relative w-[140px] h-[110px] rounded-[6px] overflow-hidden bg-blue-50 border border-blue-200',
				classNameContainer,
			)}
		>
			<img alt="NDVI" srcSet={imageUrl} className="w-full h-full object-cover object-center" />
			<div className="absolute bottom-0 left-0 right-0 bg-opacity-black-medium p-[2px_5px] flex justify-between items-center">
				<span className="text-xs text-white font-poppins font-semibold">NDVI</span>
				<span className="text-xs text-cyan-300 font-poppins">{date}</span>
			</div>
		</div>
	);
};

interface SatelliteLegendProps {
	values: string[];
}
export const SatelliteLegend = ({ values }: SatelliteLegendProps) => {
	const indexColor = ['bg-green-200', 'bg-green-400', 'bg-green-700', 'bg-green-800'];

	return (
		<div className="flex items-center gap-0.5">
			{values.map((value, index) => (
				<React.Fragment key={index}>
					<div className={clsx('w-2 h-2', indexColor[index])}></div>
					<span className="text-ultraDense text-secondary font-poppins">{value}</span>
				</React.Fragment>
			))}
		</div>
	);
};
