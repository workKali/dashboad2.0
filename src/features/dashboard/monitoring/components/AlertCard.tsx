const AlertCard = ({
	title,
	subtitle,
	farm,
	crop,
	area,
}: {
	title: string;
	subtitle: string;
	farm: string;
	crop: string;
	area: string;
}) => {
	return (
		<div className="shrink-0 border border-amber-500 bg-amber-100 rounded-lg py-2 px-3 cursor-pointer shadow-none transition-shadow hover:shadow-md">
			<p className="text-lg font-bold text-amber-800">{title}</p>
			<p className="text-sm text-amber-700 mt-0.5">{subtitle}</p>
			<p className="text-secondary text-sm mt-1">
				{farm} · {crop} · {area}
			</p>
		</div>
	);
};

export default AlertCard;