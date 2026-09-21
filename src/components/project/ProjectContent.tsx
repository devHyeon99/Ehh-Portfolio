import type { Project } from "../../data/types";
import { EvidenceImage } from "../ui/EvidenceImage";
import { CaseArticle } from "./CaseArticle";
import { PersonalNotes } from "./PersonalNotes";
import { ProjectOverview } from "./ProjectOverview";

interface ProjectContentProps {
  project: Project;
  print?: boolean;
}

export function ProjectContent({
  project,
  print = false,
}: ProjectContentProps) {
  return (
    <>
      {project.coverImage && (
        <EvidenceImage
          src={project.coverImage}
          caption={project.coverCaption || `${project.name} 서비스 화면`}
        />
      )}
      <ProjectOverview project={project} />
      {project.cases.map((item, index) => (
        <CaseArticle
          key={item.id}
          item={item}
          index={index}
          print={print}
          projectId={project.id}
        />
      ))}
      <PersonalNotes print={print} project={project} />
    </>
  );
}
