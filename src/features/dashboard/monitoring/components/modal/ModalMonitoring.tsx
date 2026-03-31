'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import { useModalStore } from '../../store/modalStore';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const ModalMonitoring: React.FC = () => {
	const { isOpen, type, data, closeModal } = useModalStore();

	return (
		<Modal open={isOpen} onClose={closeModal} closeAfterTransition>
			<div className="flex items-center justify-center min-h-screen p-4">
				<div className="bg-white rounded-2xl w-170 max-h-[88vh] overflow-auto shadow-modal border border-gray-200">
					<ModalHeader />
					<ModalBody />
				</div>  
			</div>
		</Modal>
	);
};

export default ModalMonitoring;
