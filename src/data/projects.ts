import projectData from "./projects.json";
import type { Project } from "./types";

export const projects = projectData as Project[];

/** 회고 섹션의 앵커·목차 주소에 쓰는 식별자. 사례 id 와 같은 자리에 온다. */
export const RETROSPECT_ID = "retrospect";

/** 문자열이면 내용이 있을 때, 배열이면 내용 있는 항목이 하나라도 있을 때 참. */
export function hasText(value: string | string[]) {
  return Array.isArray(value) ? value.some(Boolean) : Boolean(value);
}

/** 직접 쓴 회고가 하나도 없으면 회고 섹션과 목차 항목을 모두 숨긴다. */
export function hasRetrospect(project: Project) {
  return project.personal.some((note) => hasText(note.value));
}
