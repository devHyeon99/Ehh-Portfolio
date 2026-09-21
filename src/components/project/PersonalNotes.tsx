import { hasRetrospect, hasText, RETROSPECT_ID } from "../../data/projects";
import type { Project } from "../../data/types";
import { eyebrowMuted } from "../../lib/styles";
import { Paragraphs } from "../ui/Paragraphs";

interface PersonalNotesProps {
  project: Project;
  print?: boolean;
}

export function PersonalNotes({ project, print = false }: PersonalNotesProps) {
  if (!hasRetrospect(project)) return null;

  return (
    <section
      className='mb-[50px] scroll-mt-[86px] border-t border-line pt-[30px] md:scroll-mt-[110px]'
      id={`${print ? "print-" : ""}${project.id}-${RETROSPECT_ID}`}
    >
      <p className={eyebrowMuted}>PROJECT STORY</p>
      <h2 className='mt-2.5 text-[1.5rem]'>프로젝트를 돌아보며</h2>
      <div className='mt-5 grid grid-cols-1 gap-3'>
        {project.personal.map((note) =>
          hasText(note.value) ? (
            <section
              className='border-b border-line py-[22px]'
              key={note.label}
            >
              <h3 className='mb-2.5 text-[1rem]'>{note.label}</h3>
              <Paragraphs
                className='whitespace-pre-line text-[0.95rem] text-copy-soft'
                text={note.value}
              />
            </section>
          ) : null,
        )}
      </div>
    </section>
  );
}
