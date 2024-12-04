import useModalStore from '../stores/modalStore';

const useModal = (modalId: string) => {
  const isOpen = useModalStore((state) => state.modals[modalId]);
  const openModal = () => useModalStore.getState().openModal(modalId);
  const closeModal = () => useModalStore.getState().closeModal(modalId);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
