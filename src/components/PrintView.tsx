import { PROJECTS } from '../data';
import type { CaseStudy } from '../data';

const CASE_STUDY_SECTIONS: { label: string; key: keyof CaseStudy }[] = [
  { label: '문제 원인', key: 'cause' },
  { label: '해결 방안', key: 'solution' },
  { label: '결과', key: 'result' },
];

// 화면에서는 숨겨지고 인쇄(PDF 저장) 시에만 전체 내용이 한 흐름으로 펼쳐지는 뷰.
// 데크는 슬라이드를 하나씩만 렌더링하므로, PDF 제출용으로 모든 프로젝트를 담기 위해 별도로 구성한다.
const PrintView = () => {
  return (
    <div className='print-root hidden text-foreground'>
      {/* 표지 / 자기소개 */}
      <section className='print-cover'>
        <img
          src='/images/ehh.jpg'
          alt='프로필'
          className='mb-6 rounded-full w-28 h-28 object-cover'
        />
        <p className='mb-3 font-mono text-sm text-accent'>
          안녕하세요, 신입 프론트엔드 개발자입니다.
        </p>
        <h1 className='text-5xl font-bold'>엄현호</h1>
        <p className='max-w-xl mt-5 text-base leading-8 text-muted-foreground'>
          사용자 경험을 중요시하며 문제 해결을 좋아하는 개발자입니다.
        </p>
        <p className='mt-6 font-mono text-sm text-muted-foreground'>
          GitHub ·{' '}
          <a href='https://github.com/devHyeon99' className='text-accent'>
            https://github.com/devHyeon99
          </a>
        </p>
        <p className='mt-1 font-mono text-sm text-muted-foreground'>
          Web Portfolio ·{' '}
          <a href='https://eomhyeonho.netlify.app/' className='text-accent'>
            https://eomhyeonho.netlify.app
          </a>
        </p>
      </section>

      {/* 프로젝트 */}
      {PROJECTS.map((project) => (
        <section key={project.name} className='print-project'>
          <header className='mb-8'>
            <p className='mb-2 font-mono text-xs tracking-widest uppercase text-accent'>
              PROJECT
            </p>
            <h2 className='text-3xl font-semibold'>{project.name}</h2>
            <p className='mt-2 text-base text-muted-foreground'>
              {project.description}
            </p>

            <div className='flex flex-wrap items-center gap-2 mt-3'>
              <span className='px-2.5 py-1 text-xs rounded-full border border-border text-muted-foreground'>
                {project.period}
              </span>
              <span className='px-2.5 py-1 text-xs rounded-full border border-border text-muted-foreground'>
                {project.teamType}
              </span>
            </div>

            <div className='flex flex-wrap gap-2 mt-3'>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 font-mono text-xs rounded text-accent bg-accent-foreground'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='mt-3 font-mono text-xs text-muted-foreground'>
              <p>
                Demo ·{' '}
                <a href={project.demo_url} className='text-accent'>
                  {project.demo_url}
                </a>
              </p>
              <p>
                Repo ·{' '}
                <a href={project.repo_url} className='text-accent'>
                  {project.repo_url}
                </a>
              </p>
            </div>
          </header>

          {project.cases.map((caseStudy, i) => (
            <article key={i} className='print-case'>
              <p className='mb-1 font-mono text-sm text-accent'>
                문제 해결
                {project.cases.length > 1 &&
                  ` · ${i + 1}/${project.cases.length}`}
              </p>
              <h3 className='text-xl font-semibold'>{caseStudy.title}</h3>

              {caseStudy.hasImage && caseStudy.image && (
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className='object-contain w-full mt-4 border rounded-xl border-border print-case-img'
                />
              )}

              <div className='mt-4 space-y-4'>
                {CASE_STUDY_SECTIONS.map(({ label, key }) => (
                  <div key={key}>
                    <h4 className='mb-1 font-mono text-xs tracking-wide uppercase text-accent'>
                      {label}
                    </h4>
                    <p className='text-sm leading-7 text-muted-foreground'>
                      {caseStudy[key]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
};

export default PrintView;
