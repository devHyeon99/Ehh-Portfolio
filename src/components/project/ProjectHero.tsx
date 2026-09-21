import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../../data/types";
import { external } from "../../lib/constants";
import {
  buttonPrimary,
  buttonSecondary,
  container,
  eyebrowMuted,
} from "../../lib/styles";
import { TagList } from "../ui/TagList";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className={`${container} pb-[26px] pt-6 md:pb-[54px] md:pt-9`}>
      <a
        className='mb-[30px] inline-flex items-center gap-2 text-[0.8rem] text-muted hover:text-brand md:mb-12 md:text-[0.85rem]'
        href='/#projects'
      >
        <FiArrowLeft />
        전체 프로젝트
      </a>
      <div className='md:flex md:items-end md:justify-between md:gap-10'>
        <div>
          <p className={eyebrowMuted}>
            PROJECT {project.number} / {project.english.toUpperCase()}
          </p>
          <h1 className='mt-[14px] text-[2.5rem] font-extrabold tracking-[-0.06em] md:text-[3.2rem]'>
            {project.name}
          </h1>
          <p className='mt-5 max-w-[730px] text-[0.925rem] text-muted md:mt-7 md:text-[1rem]'>
            {project.description}
          </p>
        </div>
        <div className='mt-6 flex shrink-0 gap-2 md:mt-0 md:gap-2.5'>
          <a className={buttonPrimary} href={project.demo} {...external}>
            서비스 보기 <FiArrowUpRight />
          </a>
          <a className={buttonSecondary} href={project.repo} {...external}>
            <FiGithub />
            저장소
          </a>
        </div>
      </div>
      <dl className='mt-6 grid grid-cols-2 gap-[18px] border-t border-line pt-5 md:mt-8 md:gap-[26px] md:pt-6 lg:grid-cols-[1fr_1fr_1.4fr]'>
        <div>
          <dt className='mb-2.5 text-[0.7rem] text-muted md:text-[0.75rem]'>
            개발 기간
          </dt>
          <dd className='m-0 text-[0.8rem] leading-[1.7] md:text-[0.875rem]'>
            {project.period}
          </dd>
        </div>
        <div>
          <dt className='mb-2.5 text-[0.7rem] text-muted md:text-[0.75rem]'>
            팀 구성
          </dt>
          <dd className='m-0 text-[0.8rem] leading-[1.7] md:text-[0.875rem]'>
            {project.team}
          </dd>
        </div>
        <div className='col-span-2 lg:col-auto'>
          <dt className='mb-2.5 text-[0.7rem] text-muted md:text-[0.75rem]'>
            담당 영역
          </dt>
          <dd className='m-0 text-[0.8rem] leading-[1.7] md:text-[0.875rem]'>
            {project.role}
          </dd>
        </div>
        <div className='col-span-2 lg:col-span-3'>
          <dt className='mb-2.5 text-[0.7rem] text-muted md:text-[0.75rem]'>
            기술 스택
          </dt>
          <dd className='m-0'>
            <TagList className='' items={project.stack} />
          </dd>
        </div>
      </dl>
    </header>
  );
}
