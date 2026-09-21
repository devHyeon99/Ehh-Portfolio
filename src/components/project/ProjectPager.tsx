import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { Project } from "../../data/types";
import { container } from "../../lib/styles";

interface ProjectPagerProps {
  prev: Project | null;
  next: Project | null;
}

const labelStyle = "text-[0.8rem] text-muted md:text-[0.85rem]";

const titleStyle =
  "mt-2 flex items-center gap-2 text-[1rem] font-semibold tracking-[-0.03em] group-hover:text-brand md:mt-[10px]";

interface PagerLinkProps {
  direction: "prev" | "next";
  project: Project | null;
}

function PagerLink({ direction, project }: PagerLinkProps) {
  const isPrev = direction === "prev";
  // 목록의 처음·끝에서는 번호를 순환시키지 않고 목록으로 돌려보낸다.
  // PROJECT 01 이라고 표시해 둔 화면에서 01 의 이전이 03 이 되면 안내와 어긋난다.
  const label = project
    ? isPrev
      ? "이전 프로젝트"
      : "다음 프로젝트"
    : "목록으로";
  const name = project ? project.name : "전체 프로젝트";
  const href = project ? `/project/${project.id}` : "/#projects";
  const Arrow = isPrev ? FiArrowLeft : FiArrowRight;

  return (
    <a className={`group min-w-0 ${isPrev ? "" : "text-right"}`} href={href}>
      <span className={labelStyle}>{label}</span>
      <span className={`${titleStyle} ${isPrev ? "" : "justify-end"}`}>
        {isPrev && <Arrow className='shrink-0' />}
        <span className='truncate'>{name}</span>
        {!isPrev && <Arrow className='shrink-0' />}
      </span>
    </a>
  );
}

export function ProjectPager({ prev, next }: ProjectPagerProps) {
  return (
    <nav
      aria-label='프로젝트 이동'
      className={`${container} mt-[30px] flex items-start justify-between gap-6 border-t border-line pb-[35px] pt-[25px] md:pb-[54px] md:pt-9`}
    >
      <PagerLink direction='prev' project={prev} />
      <PagerLink direction='next' project={next} />
    </nav>
  );
}
