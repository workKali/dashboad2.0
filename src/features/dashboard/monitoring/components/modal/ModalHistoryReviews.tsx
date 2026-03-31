import { Badge } from '../Badge';
import { SatelliteImg } from '../SatelliteImage';

const ModalHistoryReviews = () => {
	return (
		<div>
			<p className="text-[10px] font-semibold text-[rgb(122,158,142)] mb-2 uppercase">
				Historial de revisiones
			</p>

			<div className="flex flex-wrap gap-2">
				<ModalHistoryReviewCard
					date="2025-10-15"
					imageUrl="https://via.placeholder.com/150"
					title="Revisión 1"
					badgeVariant="good"
					badgeTitle="Bueno"
					valueNVDI="NDVI 0.500"
				/>
				<ModalHistoryReviewCard
					imageUrl="https://via.placeholder.com/150"
					date="2025-10-15"
					title="Revisión 2"
					badgeTitle="Requiere atención"
					badgeVariant="attention"
					valueNVDI="NDVI 0.450"
					valueAlert="⚠ Estres hidrico"
				/>
			</div>
		</div>
	);
};

export default ModalHistoryReviews;

interface ModalHistoryReviewCardProps {
	badgeVariant?: 'optimum' | 'good' | 'attention';
	valueAlert?: string;
	valueNVDI?: string;
	badgeTitle: string;
	imageUrl: string;
	title: string;
	date: string;
}

export const ModalHistoryReviewCard = ({
	badgeVariant = 'optimum',
	badgeTitle,
	valueAlert,
	valueNVDI,
	imageUrl,
	title,
	date,
}: ModalHistoryReviewCardProps) => {
	return (
		<div className="bg-[rgb(248,250,249)] rounded-lg px-2.5 py-1.5 min-w-[150px] flex flex-col gap-1">
			<SatelliteImg
				date={date}
				imageUrl={imageUrl}
				classNameContainer="!w-full !h-[80px]"
			/>
			<p className="text-[#7a9e8e] text-[10.5px]">{date}</p>
			<p className="mt-0.5 text-[10px] font-bold text-[rgb(15,31,20)]">
				{title}
			</p>
			<Badge variant={badgeVariant}>{badgeTitle}</Badge>
			{valueNVDI && (
				<p className="text-[10px] text-[rgb(58,82,68)] mt-0.75">
					{valueNVDI}
				</p>
			)}
			{valueAlert && (
				<p className="text-[10px] text-[rgb(220,38,38)] text-[10.5px] mt-0.5">
					{valueAlert}
				</p>
			)}
		</div>
	);
};
