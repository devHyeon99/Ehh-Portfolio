import { useEffect, useState } from "react";
import { hasRetrospect, RETROSPECT_ID } from "../data/projects";
import type { Project } from "../data/types";

/**
 * 케이스 상단이 이 선을 지나면 활성으로 본다. 화면 높이에 비례시켜 읽는 위치를 따라간다.
 * 하한(220px)은 CaseArticle 의 scroll-mt(86/110px)보다 넉넉히 아래에 두었다.
 * 목차에서 눌러 이동해도 위쪽 이미지가 늦게 로딩되며 대상이 100px 가량 밀려 내려오기 때문에,
 * 그만큼의 여유가 없으면 정작 눌러서 간 케이스가 활성으로 잡히지 않는다.
 */
const activationLine = () => Math.max(220, window.innerHeight * 0.35);

/** 스크롤 위치에 해당하는 목차 항목 id(사례 또는 회고). 개요 영역이면 undefined. */
export function useActiveCase(project: Project) {
  const [activeCase, setActiveCase] = useState<string>();

  useEffect(() => {
    let frame = 0;

    // 목차 순서와 같다. 사례 뒤에 회고가 한 항목 더 붙는다.
    const sections = [
      ...project.cases.map((item) => item.id),
      ...(hasRetrospect(project) ? [RETROSPECT_ID] : []),
    ];

    const compute = () => {
      frame = 0;
      let active: string | undefined;
      const line = activationLine();

      // 활성선을 이미 지난 마지막 항목이 지금 읽고 있는 항목이다.
      for (const id of sections) {
        const el = document.getElementById(`${project.id}-${id}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top > line) break;
        active = id;
      }

      // 마지막 항목 뒤에 남은 내용(페이저·푸터) 때문에 끝까지 내려도
      // 마지막 항목이 활성선에 닿지 않는 경우가 있다.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length > 0) {
        active = sections[sections.length - 1];
      }

      setActiveCase(active);
    };

    const onScroll = () => {
      frame ||= requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [project]);

  return activeCase;
}
