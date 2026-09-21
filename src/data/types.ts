export interface CodeSample {
  file: string;
  code: string;
  line: number;
  url: string;
}
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  /** 아래 본문 필드는 배열이면 항목마다 문단을 나눠 보여준다. */
  problem: string | string[];
  solution: string | string[];
  result: string | string[];
  /** 배열이면 발췌를 순서대로 여러 블록으로 보여준다. */
  code: CodeSample | CodeSample[];
  image: string | null;
  caption: string;
  missing?: string;
}
export interface Project {
  id: string;
  number: string;
  name: string;
  english: string;
  category: string;
  description: string;
  period: string;
  team: string;
  role: string;
  repo: string;
  demo: string;
  stack: string[];
  scope: string;
  contributions: string[];
  cases: CaseStudy[];
  /** value가 배열이면 항목마다 문단을 나눠 보여준다. */
  personal: { label: string; hint: string; value: string | string[] }[];
  coverImage: string;
  coverCaption: string;
  revision: string;
}
