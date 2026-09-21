import { projects } from "../../data/projects";
import type { Project } from "../../data/types";
import { container } from "../../lib/styles";
import { CaseNav } from "../project/CaseNav";
import { ProjectContent } from "../project/ProjectContent";
import { ProjectHero } from "../project/ProjectHero";
import { ProjectPager } from "../project/ProjectPager";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  const current = projects.findIndex((item) => item.id === project.id);
  const prev = current > 0 ? projects[current - 1] : null;
  const next = current < projects.length - 1 ? projects[current + 1] : null;
  return (
    <>
      <ProjectHero project={project} />
      <div
        className={`${container} items-start md:grid md:grid-cols-[170px_minmax(0,1fr)] md:gap-[30px] lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-[62px]`}
      >
        <CaseNav project={project} />
        <div className='min-w-0'>
          <ProjectContent project={project} />
        </div>
      </div>
      <ProjectPager next={next} prev={prev} />
    </>
  );
}
