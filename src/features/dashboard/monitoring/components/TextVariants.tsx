import { Text, type TextProps } from '@/shared/components/ui/Text';

// Specialized components
export const Heading = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text size="2xl" weight="extrabold" className={className} {...props}>
		{children}
	</Text>
);

export const Label = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="label" className={className} {...props}>
		{children}
	</Text>
);

export const Value = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="value" className={className} {...props}>
		{children}
	</Text>
);

export const Caption = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="caption" className={className} {...props}>
		{children}
	</Text>
);

export const TableHeader = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="tableHeader" as="th" className={className} {...props}>
		{children}
	</Text>
);

export const CardTitle = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="cardTitle" className={className} {...props}>
		{children}
	</Text>
);

export const AlertText = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="alertText" className={className} {...props}>
		{children}
	</Text>
);

export const SectionTitle = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="sectionTitle" className={className} {...props}>
		{children}
	</Text>
);

export const ModalTitle = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="modalTitle" className={className} {...props}>
		{children}
	</Text>
);

export const ModalSubtitle = ({
	children,
	className,
	...props
}: Omit<TextProps, 'size'>) => (
	<Text preset="modalSubtitle" className={className} {...props}>
		{children}
	</Text>
);
