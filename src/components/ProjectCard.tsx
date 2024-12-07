import useModal from '../hooks/useModal';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  name: string;
  modalId: string;
  content: string;
  demo_url: string;
  repo_url: string;
}

const ProjectCard = ({
  name,
  modalId,
  content,
  demo_url,
  repo_url,
}: ProjectCardProps) => {
  const { openModal } = useModal(modalId);
  return (
    <section className='flex flex-col min-w-[49.3%] justify-between p-5 border-[1px] rounded-lg border-gray-300 shadow-custom transform transition-transform duration-300 hover:-translate-y-1'>
      <div>
        <h2 className='mb-1 text-xl font-semibold text-black'>{name}</h2>
        <p className='font-light text-gray-custom'>{content}</p>
      </div>
      <div className='flex justify-end gap-4 mt-4'>
        <a
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          href={demo_url}
          aria-label='배포 페이지 이동'
          target='blank'
        >
          Demo
        </a>
        <a
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          href={repo_url}
          aria-label='깃허브 저장소 이동'
          target='blank'
        >
          Repo
        </a>
        <button
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          type='button'
          onClick={openModal}
        >
          more
        </button>
        <ProjectModal name={name} modalId={modalId} />
      </div>
    </section>
  );
};

export default ProjectCard;
