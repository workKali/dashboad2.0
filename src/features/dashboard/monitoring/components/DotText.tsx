import { Dot } from "@/shared/components/ui/Dot";
import { Text } from "@/shared/components/ui/Text/Text";

const DotText = ({ label, color }: { label: string; color: string }) => {
	return (
		<div className="flex items-center gap-1">
			<Dot rounded="xs" color={color as any} />
			<Text variant='h3' intent='muted' weight='normal'>{label}</Text>
			{/* <span className="text-lg text-muted">{label}</span> */}
		</div>
	);
};

export default DotText;
