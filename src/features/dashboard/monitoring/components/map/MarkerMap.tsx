import { cva, VariantProps } from 'class-variance-authority';
import { Marker } from '@vis.gl/react-maplibre';

const marketVariants = cva(
	'w-5 h-5 rounded-full border-2 border-white shadow-marker cursor-pointer opacity-90 transition-transform duration-150 scale-100 hover:scale-125',
	{
		variants: {
			color: {
				success: 'bg-success',
				blue: 'bg-green-400',
				green: 'bg-green-500',
			},
		},
	},
);

interface MarkerMapProps extends VariantProps<typeof marketVariants> {
	longitude: number;
	latitude: number;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onClick?: () => void;
}

const MarkerMap = ({ longitude, latitude, color, onMouseEnter, onMouseLeave, onClick }: MarkerMapProps) => {
	return (
		<Marker longitude={longitude} latitude={latitude} anchor="center">
			<div className={marketVariants({ color })} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} />
		</Marker>
	);
};

export default MarkerMap;
