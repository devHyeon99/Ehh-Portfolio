import Modal from './Modal';
import useModal from '../hooks/useModal';

interface SkillProps {
  name: string;
  modalId: string;
}
const Skill = ({ name, modalId }: SkillProps) => {
  const { openModal } = useModal(modalId);

  return (
    <>
      <button
        type='button'
        className='block px-2 py-1 text-black transition-transform duration-300 transform bg-gray-200 rounded-lg shadow-md w-fit hover:-translate-y-0.5'
        onClick={openModal}
      >
        {name}
      </button>
      <Modal modalId={modalId}>
        <h2 className='mb-4 text-xl'>{name}</h2>
        <p>This is the first modal {name}</p>
      </Modal>
    </>
  );
};

export default Skill;