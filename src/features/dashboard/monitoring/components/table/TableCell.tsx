import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

const tableCellVariants = cva('', {
	variants: {
		isCompact: {
			true: 'px-2 py-1',
			false: 'px-2.5 py-2',
		},
		isCenter: {
			true: 'text-center',
			false: '',
		},
		fontSize: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
		},
		textColor: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			muted: 'text-muted',
			accent: 'text-accent',
			warning: 'text-warning',
			error: 'text-error',
			success: 'text-success',
		},
	},
	defaultVariants: {
		fontSize: 'base',
		textColor: 'primary',
		isCompact: false,
		isCenter: false,
	},
});

interface TableCellProps {
	children: React.ReactNode;
	className?: string;
	isCenter?: boolean;
	isCompact?: boolean;
	fontSize?: 'xs' | 'sm' | 'base';
	textColor?: 'primary' | 'secondary' | 'muted' | 'accent' | 'warning' | 'error' | 'success';
}

const TableCell = ({ children, className, isCenter, isCompact, fontSize, textColor }: TableCellProps) => {
	return <td className={clsx(tableCellVariants({ isCompact, isCenter, fontSize, textColor }), className)}>{children}</td>;
};

export default TableCell;
