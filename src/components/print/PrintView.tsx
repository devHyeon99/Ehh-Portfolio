import { projects } from "../../data/projects";
import { GITHUB_URL } from "../../lib/constants";
import { ProjectContent } from "../project/ProjectContent";

export function PrintView() {
  return (
    <div className='hidden print:block print:text-[10pt]'>
      <header className='min-h-[245mm] break-after-page pt-[50mm]'>
        <p>FRONTEND DEVELOPER</p>
        <h1 className='my-5 text-[40pt]'>엄현호</h1>
        <h2 className='mb-5 text-[20pt]'>프로젝트 포트폴리오</h2>
        <p>문제를 좁히고, 코드로 증명합니다.</p>
        <a className='mt-[30px] block' href={GITHUB_URL}>
          {GITHUB_URL}
        </a>
      </header>
      {projects.map((project) => (
        <section className='break-before-page' key={project.id}>
          <header className='mb-[25px] border-b border-[#bbb] pb-5'>
            <p className='my-[5px] text-[10pt]'>PROJECT {project.number}</p>
            <h1 className='my-2.5 text-[26pt]'>{project.name}</h1>
            <p className='my-[5px] text-[10pt]'>{project.description}</p>
            <p className='my-[5px] text-[10pt]'>
              {project.period} · {project.team}
            </p>
            <p className='my-[5px] text-[10pt]'>{project.stack.join(" · ")}</p>
            <a href={project.repo}>{project.repo}</a>
          </header>
          <ProjectContent project={project} print />
        </section>
      ))}
    </div>
  );
}
