
import Text from "@/shared/components/ui/Text/Text";
import CardInfo from "../../components/ui/CardInfo";

const CardKPI = ({ title, value, subtitle }: { title: string; value: string; subtitle: string }) => {
	return (
		<CardInfo topBorder="bg-gradient-primary gap-2">
			<div className="mt-1">
				<Text as="p" variant='subtitle2' intent='secondary' tracking='wide' transform='uppercase' className='mb-1'>{title}</Text>
				<Text weight='bold' intent='primary' className='text-3xl'>{value}</Text>
				<Text as='p' intent='secondary' weight='light' className='mt-1'>{subtitle}</Text>
			</div>
		</CardInfo>
	);
};

export default CardKPI;