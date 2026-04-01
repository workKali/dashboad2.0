'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import { useModalStore } from '../../store/modalStore';
import ModalBody from './ModalBody';
import { Fade } from '@mui/material';

const ModalMonitoring: React.FC = () => {
	const { isOpen, closeModal } = useModalStore();

	return (
		<Modal open={isOpen} onClose={closeModal} closeAfterTransition>
			<Fade in={isOpen}>
				<div className="flex items-center justify-center min-h-screen p-4">
					<div className="bg-white rounded-2xl w-170 max-h-[88vh] overflow-auto shadow-modal border border-gray-200">
						<ModalHeader />
						<ModalBody />
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default ModalMonitoring;

const ModalHeader = () => {
	const closeModal = useModalStore((s) => s.closeModal);

	return (
		<div className="p-[18px_22px_14px] border-b border-gray-150 flex items-start justify-between">
			<div className="space-y-1">
				<p className="text-base font-semibold text-secondary font-poppins uppercase tracking-[0.06em] m-0 mb-1">
					Ficha de Finca · Monitoreo Activo
				</p>
				<p className="text-2xl font-extrabold text-primary font-poppins m-0">Finca Arrocera Trujillo</p>
				<p className="text-xl text-secondary font-poppins my-3 mx-0">Aurelio Cotrina · La Libertad</p>
			</div>
			<button
				className="bg-transparent border-0 text-2xl text-secondary cursor-pointer p-0 pl-1 hover:text-muted"
				onClick={closeModal}
			>
				✕
			</button>
		</div>
	);
};
