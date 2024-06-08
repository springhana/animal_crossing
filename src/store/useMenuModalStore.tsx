import { create } from 'zustand';

interface IModalStoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMenuModalStore = create<IModalStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMenuModalStore;
