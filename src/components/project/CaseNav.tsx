import { useEffect, useRef } from "react";
import { hasRetrospect, RETROSPECT_ID } from "../../data/projects";
import type { Project } from "../../data/types";
import { useActiveCase } from "../../hooks/useActiveCase";
import { eyebrowMuted } from "../../lib/styles";

const navLink =
  "whitespace-nowrap rounded border border-line bg-surface px-2.5 py-2 text-[0.7rem] leading-[1.7] text-muted hover:border-brand hover:text-brand hover:bg-brand-tint [&[aria-current]]:border-brand-edge [&[aria-current]]:bg-brand-tint [&[aria-current]]:text-brand md:whitespace-normal md:rounded-none md:border-0 md:border-l-2 md:border-transparent md:bg-transparent md:py-[9px] md:text-[0.8rem] md:[&[aria-current]]:border-brand";

interface CaseNavProps {
  project: Project;
}

export function CaseNav({ project }: CaseNavProps) {
  const activeCase = useActiveCase(project);
  const navRef = useRef<HTMLElement>(null);

  // 모바일에서는 목차가 가로 스크롤 줄이라, 활성 항목이 화면 밖이면 보이지 않는다.
  // 목차 안에서만 스크롤하므로 페이지 스크롤에는 영향이 없다.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || nav.scrollWidth <= nav.clientWidth) return;
    const current = nav.querySelector<HTMLElement>("[aria-current]");
    if (!current) return;
    // offsetLeft 는 목차가 아니라 offsetParent 기준이라 어긋난다. 실제 위치 차이로 계산한다.
    const navBox = nav.getBoundingClientRect();
    const chipBox = current.getBoundingClientRect();
    const delta =
      chipBox.left - navBox.left - (nav.clientWidth - chipBox.width) / 2;
    nav.scrollTo({ left: nav.scrollLeft + delta, behavior: "smooth" });
  }, [activeCase]);

  return (
    <aside className='mb-8 md:sticky md:top-[115px] md:mb-0'>
      <p className={`${eyebrowMuted} hidden md:block`}>IN THIS PROJECT</p>
      <nav
        className='flex gap-[7px] overflow-x-auto px-0.5 pb-[14px] pt-2 md:mt-[22px] md:flex-col md:gap-2 md:overflow-visible md:p-0'
        aria-label={`${project.name} 사례 목차`}
        ref={navRef}
      >
        <a
          className={navLink}
          href={`/project/${project.id}`}
          aria-current={!activeCase ? "location" : undefined}
        >
          프로젝트 개요
        </a>
        {project.cases.map((item, i) => (
          <a
            className={navLink}
            key={item.id}
            href={`/project/${project.id}/${item.id}`}
            aria-current={activeCase === item.id ? "location" : undefined}
          >
            <span className='mr-1.5 font-mono text-[0.6rem] text-faint md:mr-2.5 md:text-[0.7rem]'>
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.category}
          </a>
        ))}
        {hasRetrospect(project) && (
          <a
            className={navLink}
            href={`/project/${project.id}/${RETROSPECT_ID}`}
            aria-current={activeCase === RETROSPECT_ID ? "location" : undefined}
          >
            프로젝트 회고
          </a>
        )}
      </nav>
    </aside>
  );
}
