import clsx from 'clsx';
import React from 'react';

export const SatelliteImg = ({
	imageUrl,
	date,
	classNameContainer,
}: {
	imageUrl?: string;
	date?: string;
	classNameContainer?: string;
}) => {
	return (
		<div
			className={clsx(
				'relative w-[140px] h-[110px] rounded-[6px] overflow-hidden bg-[rgb(239,246,255)] border border-[rgb(191,219,254)]',
				classNameContainer,
			)}
		>
			<img
				alt="NDVI"
				srcSet={imageUrl}
				className="w-full h-full object-cover object-center"
			/>
			<div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.45)] p-[2px_5px] flex justify-between items-center">
				<span className="text-[7.5px] text-white font-poppins font-semibold">
					NDVI
				</span>
				<span className="text-[7.5px] text-[rgb(170,238,255)] font-poppins">
					{date}
				</span>
			</div>
		</div>
	);
};

interface SatelliteLegendProps {
	values: string[];
}
export const SatelliteLegend = ({ values }: SatelliteLegendProps) => {
	const indexColor = [
		'bg-[rgb(200,230,201)]',
		'bg-[rgb(129,199,132)]',
		'bg-[rgb(46,125,50)]',
		'bg-[rgb(27,94,32)]',
	];

	return (
		<div className="flex items-center gap-0.5">
			{values.map((value, index) => (
				<React.Fragment key={index}>
					<div className={clsx('w-2 h-2', indexColor[index])}></div>
					<span className="text-[7px] text-[rgb(122,158,142)] font-poppins">
						{value}
					</span>
				</React.Fragment>
			))}
		</div>
	);
};
