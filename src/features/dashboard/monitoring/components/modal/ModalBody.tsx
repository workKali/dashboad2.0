import { farmData } from '../../data/temp';
import { CardInfo } from './CardInfo';
import { InfoRow } from './InfoRow';
import ModalDetailLastRevision from './ModalDetailLastRevision';
import ModalHistoryReviews from './ModalHistoryReviews';

const ModalBody = () => {
	return (
		<div className="py-4 px-5.5 flex flex-col gap-3.5">
			<ModalDetailHeader />
			<ModalDetailFarm />
			<ModalDetailLastRevision />
			<ModalHistoryReviews />
		</div>
	);
};

export default ModalBody;

const ModalDetailHeader = () => {
	return (
		<div className="grid grid-cols-3 gap-2">
			<CardInfo
				title="Hectáreas"
				value="620"
				unit="ha"
				variant="default"
				textVariant="default"
			/>

			<CardInfo
				title="Monto"
				value="$26.5M"
				variant="default"
				textVariant="amount"
			/>

			<CardInfo
				title="Riesgo"
				value="Medio"
				variant="medium"
				textVariant="medium"
			/>
		</div>
	);
};

const ModalDetailFarm = () => {
	return (
		<div className="grid grid-cols-2 gap-1.5">
			{farmData.map((item, index) => (
				<InfoRow key={index} label={item.label} value={item.value} />
			))}
		</div>
	);
};
