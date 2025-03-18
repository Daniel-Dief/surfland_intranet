import { create } from 'zustand';

type modalTypes = null | "login";

interface ModalActive {
    isOpen: modalTypes;
    open: (modal : modalTypes) => void;
    close: () => void;
}

export const useModalActive = create<ModalActive>((set) => ({
    isOpen: null,
    open: ( modal ) => set({ isOpen: modal }),
    close: () => set({ isOpen: null }),
}));