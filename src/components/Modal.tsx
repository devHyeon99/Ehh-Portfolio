import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import useModal from '../hooks/useModal';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  modalId: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalId, children }) => {
  const { isOpen, closeModal } = useModal(modalId);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='fixed inset-0 bg-black opacity-50'
        onClick={closeModal}
      ></div>
      <div className='relative z-10 p-6 bg-white rounded-lg'>
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
