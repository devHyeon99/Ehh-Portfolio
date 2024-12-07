import Modal from './Modal';

interface ProjectModalProps {
  modalId: string;
  name: string;
}

const ProjectModal = ({ modalId, name }: ProjectModalProps) => {
  return <Modal modalId={modalId}>{name}</Modal>;
};

export default ProjectModal;
