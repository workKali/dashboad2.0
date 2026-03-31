import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  type: string | null;
  data: any;
  openModal: (type: string, data?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  openModal: (type, data = null) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: null, data: null }),
}));
