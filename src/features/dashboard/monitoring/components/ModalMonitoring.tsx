'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import { useModalStore } from '../store/modalStore';
import clsx from 'clsx';
import { cva } from 'class-variance-authority';
import { Badge } from './Badge';
import { SatelliteLegend, SatelliteImg } from './SatelliteImage';

const ModalHeader = () => {
	return (
		<div className="p-[18px_22px_14px] border-b border-[rgb(225,232,231)] flex items-start justify-between">
			<div className="space-y-1">
				<p className="text-[10px] font-semibold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.06em] m-0 mb-1">
					Ficha de Finca · Monitoreo Activo
				</p>
				<p className="text-[18px] font-extrabold text-[rgb(15,31,20)] font-poppins m-0">
					Finca Arrocera Trujillo
				</p>
				<p className="text-[11px] text-[rgb(122,158,142)] font-poppins my-3 mx-0">
					Aurelio Cotrina · La Libertad
				</p>
			</div>
			<button className="bg-transparent border-0 text-[18px] text-[rgb(122,158,142)] cursor-pointer p-0 pl-1 leading-[1] hover:text-gray-600">
				X
			</button>
		</div>
	);
};

const ModalBody = () => {
	return (
		<div className="py-4 px-5.5 flex flex-col gap-3.5">
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
			<ModalDetailFarm />
			<ModalDetailLastRevision />

			<ModalHistoryReviews />
		</div>
	);
};

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

interface ModalHistoryReviewCardProps {
	badgeVariant?: 'optimum' | 'good' | 'attention';
	valueAlert?: string;
	valueNVDI?: string;
	badgeTitle: string;
	imageUrl: string;
	title: string;
	date: string;
}
const ModalHistoryReviewCard = ({
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

const ModalDetailLastRevision = () => {
	const farmData = [
		{ label: 'Productor', value: 'Aurelio Cotrina' },
		{ label: 'Región', value: 'La Libertad' },
		{ label: 'Actividad', value: 'Arroz' },
		{ label: 'Ciclo', value: '2024-02-15 al 2024-07-30' },
	];

	return (
		<div className="bg-[rgb(240,253,244)] border border-[rgb(187,247,208)] rounded-xl p-3">
			<p className="text-[10px] font-bold text-[rgb(22,101,52)] font-poppins uppercase tracking-[0.06em] mb-2.5">
				📡 Última Revisión Teledetección
			</p>

			<div className="flex gap-3.5 items-start">
				<div className="flex flex-col gap-1.5 shrink-0">
					<SatelliteImg
						date="2024-02-15"
						imageUrl="https://example.com/image.jpg"
					/>
					<div className="flex justify-center">
						<SatelliteLegend values={['0', '0.3', '0.6', '0.9+']} />
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2">
					<div className="grid grid-cols-2 gap-1.5">
						{farmData.map((item) => (
							<InfoRow
								key={item.label}
								case="normal"
								variant="default"
								label={item.label}
								value={item.value}
							/>
						))}
					</div>

					<div className="flex gap-2 items-center flex-wrap">
						<Badge variant="warning">Requiere atención</Badge>
						<Badge variant="harvest">🌾 61% cosecha</Badge>
						<Badge variant="neutral" weight="normal">
							NDVI 0.500
						</Badge>
						<Badge variant="danger">⚠ Déficit hídrico severo</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

/////////////
export const infoRowStyles = cva(
	'flex justify-between rounded-lg px-2.5 py-1.5',
	{
		variants: {
			variant: {
				default: 'bg-white',
				subtle: 'bg-[rgb(248,250,249)]',
			},
		},
		defaultVariants: {
			variant: 'subtle',
		},
	},
);

export const labelInfoRowStyles = cva(
	'text-[10px] text-[rgb(122,158,142)] font-poppins',
	{
		variants: {
			case: {
				upper: 'uppercase tracking-[0.04em]',
				normal: 'normal-case',
			},
		},
		defaultVariants: {
			case: 'upper',
		},
	},
);

export const valueInfoRowStyles = cva(
	'text-[10px] font-semibold text-[rgb(15,31,20)] font-poppins',
);

type InfoRowProps = {
	label: string;
	value: string;
	variant?: 'default' | 'subtle';
	className?: string;
};

export const InfoRow = ({
	label,
	value,
	variant,
	className,
	case: caseType = 'upper',
}: InfoRowProps & { case?: 'upper' | 'normal' }) => {
	return (
		<div className={clsx(infoRowStyles({ variant }), className)}>
			<span className={labelInfoRowStyles({ case: caseType })}>
				{label}
			</span>
			<span className={valueInfoRowStyles()}>{value}</span>
		</div>
	);
};
///////////////

const ModalDetailFarm = () => {
	const farmData = [
		{ label: 'Productor', value: 'Aurelio Cotrina' },
		{ label: 'Región', value: 'La Libertad' },
		{ label: 'Actividad', value: 'Arroz' },
		{ label: 'Ciclo', value: '2024-02-15 al 2024-07-30' },
	];

	return (
		<div className="grid grid-cols-2 gap-1.5">
			{farmData.map((item, index) => (
				<InfoRow key={index} label={item.label} value={item.value} />
			))}
		</div>
	);
};

const ModalContent = ({
	type,
	data,
	closeModal,
}: {
	type: string | null;
	data: any;
	closeModal: () => void;
}) => {
	return (
		<div className="bg-white rounded-2xl w-170 max-h-[88vh] overflow-auto shadow-[0px_24px_80px_rgba(0,0,0,0.25)] border border-[rgb(225,232,231)]">
			<ModalHeader />

			<ModalBody />
		</div>
	);
};

const ModalMonitoring: React.FC = () => {
	const { isOpen, type, data, closeModal } = useModalStore();

	return (
		<Modal open={true} onClose={closeModal} closeAfterTransition>
			<div className="flex items-center justify-center min-h-screen p-4">
				<ModalContent type={type} data={data} closeModal={closeModal} />
			</div>
		</Modal>
	);
};

export default ModalMonitoring;

//////////////////////////////////////////////

export const cardStyles = cva('rounded-lg px-3.5 py-2.5', {
	variants: {
		variant: {
			default: 'bg-[rgb(248,250,249)]',
			high: 'bg-[rgb(254,226,226)]',
			medium: 'bg-[rgb(254,243,199)]',
			low: 'bg-[rgb(240,253,244)]',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export const valueStyles = cva('text-lg font-extrabold font-poppins', {
	variants: {
		textVariant: {
			default: 'text-[rgb(15,31,20)]',
			high: 'text-[rgb(220,38,38)]',
			medium: 'text-[rgb(217,119,6)]',
			low: 'text-[rgb(22,163,74)]',
			amount: 'text-[rgb(21,128,61)]',
		},
	},
	defaultVariants: {
		textVariant: 'default',
	},
});

type Props = {
	title: string;
	value: string;
	unit?: string;
	variant?: 'default' | 'high' | 'medium' | 'low';
	textVariant?: 'default' | 'high' | 'medium' | 'low' | 'amount';
	className?: string;
};

export const CardInfo = ({
	title,
	value,
	unit,
	variant = 'default',
	textVariant = 'default',
	className,
}: Props) => {
	return (
		<div className={clsx(cardStyles({ variant }), className)}>
			<p className="text-[10px] text-[rgb(122,158,142)] uppercase tracking-wide">
				{title}
			</p>

			<p className={valueStyles({ textVariant })}>
				{value}
				{unit && (
					<span
						className={clsx(
							'ml-1 text-[11px] font-normal',
							valueStyles({ textVariant: 'default' }),
						)}
					>
						{unit}
					</span>
				)}
			</p>
		</div>
	);
};
