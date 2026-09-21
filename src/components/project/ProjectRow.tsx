import { FiArrowRight } from "react-icons/fi";
import type { Project } from "../../data/types";
import { TagList } from "../ui/TagList";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <a
      className='group grid grid-cols-[24px_1fr] gap-x-3 gap-y-2 border-b border-line py-[27px] transition-[background,padding] duration-200 md:grid-cols-[30px_1fr] md:gap-[18px] md:py-[38px] md:pr-6 md:hover:bg-brand-tint lg:grid-cols-[55px_1fr] lg:gap-6'
      href={`/project/${project.id}`}
    >
      <span className='pt-1 font-mono text-[0.75rem] text-muted md:text-[0.875rem] text-center'>
        {project.number}
      </span>
      <div>
        <p className='mb-2 text-[0.7rem] text-muted md:text-[0.8rem]'>
          {project.category}
        </p>
        <h3 className='flex flex-wrap items-baseline gap-x-3 gap-y-1.5 text-[1.55rem] font-bold tracking-[-0.045em] md:gap-[14px] md:text-[1.9rem]'>
          {project.name}
          <span className='font-mono text-[0.75rem] font-normal tracking-[-0.025em] text-muted md:text-[0.85rem]'>
            {project.english}
          </span>
        </h3>
        <p className='mt-3 max-w-[560px] text-[0.875rem] text-copy-soft md:text-[0.925rem]'>
          {project.description}
        </p>
        <div className='mt-[15px] flex flex-wrap items-center justify-between gap-x-4 gap-y-3 md:mt-5'>
          <TagList className='' items={project.stack.slice(0, 4)} />
          <div className='ml-auto flex shrink-0 items-center gap-2 text-brand md:gap-2.5 md:group-hover:animate-float'>
            <span className='text-[0.75rem] md:text-[0.85rem]'>
              프로젝트 보기
            </span>
            <span className='flex h-7 w-7 items-center justify-center rounded-full border border-brand-edge bg-brand-tint md:h-8 md:w-8'>
              <FiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
