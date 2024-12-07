import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useModal from '../hooks/useModal';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  modalId: string;
  children: ReactNode;
}

const Modal = ({ modalId, children }: ModalProps) => {
  const { isOpen, closeModal } = useModal(modalId);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px]'>
      <div
        className='fixed inset-0 bg-black opacity-30'
        onClick={closeModal}
      ></div>
      <div className='relative z-10 w-[90%] p-6 bg-white rounded-lg xl:w-[60%]'>
        <button className='absolute top-2 right-2' onClick={closeModal}>
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
