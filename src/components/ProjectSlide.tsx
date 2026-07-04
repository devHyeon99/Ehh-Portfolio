import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CaseStudy, Project } from '../data';

const CASE_STUDY_SECTIONS: { label: string; key: keyof CaseStudy }[] = [
  { label: '문제 원인', key: 'cause' },
  { label: '해결 방안', key: 'solution' },
  { label: '결과', key: 'result' },
];

interface ProjectSlideProps {
  project: Project;
  caseStudy: CaseStudy;
  partIndex: number;
  partTotal: number;
}

const ProjectSlide = ({
  project,
  caseStudy,
  partIndex,
  partTotal,
}: ProjectSlideProps) => {
  const { name, description, stack, period, teamType, demo_url, repo_url } =
    project;
  const showHeader = partIndex === 1;
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <div className='w-full p-6 mx-auto my-auto md:px-20 md:py-16 max-w-7xl'>
        {showHeader ? (
          <div className='mb-10'>
            <p className='mb-2 font-mono text-xs tracking-widest uppercase text-accent'>
              PROJECT
            </p>
            <h2 className='text-4xl font-semibold text-foreground'>{name}</h2>
            <p className='mt-3 text-base text-muted-foreground'>
              {description}
            </p>

            <div className='flex flex-wrap items-center gap-2 mt-4'>
              <span className='px-2.5 py-1 text-xs rounded-full border border-border text-muted-foreground'>
                {period}
              </span>
              <span className='px-2.5 py-1 text-xs rounded-full border border-border text-muted-foreground'>
                {teamType}
              </span>

              <div className='flex items-center gap-2 ml-auto'>
                <a
                  href={demo_url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='배포 페이지 이동'
                  className='px-4 py-1.5 text-xs font-medium transition-opacity rounded-full bg-accent text-background hover:opacity-90'
                >
                  Demo
                </a>
                <a
                  href={repo_url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='깃허브 저장소 이동'
                  className='px-4 py-1.5 text-xs font-medium transition-colors border rounded-full border-accent text-accent hover:bg-accent-foreground'
                >
                  Repo
                </a>
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-3'>
              {stack.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 font-mono text-xs rounded text-accent bg-accent-foreground'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className='mb-4 font-mono text-xs text-muted-foreground'>
            {name}
            {partTotal > 1 && ` · ${partIndex}/${partTotal}`}
          </p>
        )}

        {/* 문제 해결 */}
        <p className='mb-1 font-mono text-sm text-accent'>문제 해결</p>
        <h3 className='text-2xl font-semibold text-foreground'>
          {caseStudy.title}
        </h3>

        {/* 이미지 (선택) */}
        {caseStudy.hasImage &&
          (caseStudy.image ? (
            <button
              type='button'
              onClick={() => setIsZoomed(true)}
              aria-label='이미지 크게 보기'
              className='relative block w-full mt-8 overflow-hidden text-left cursor-zoom-in aspect-[16/9] max-h-[26vh]'
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className='object-contain w-full h-full border border-border rounded-xl'
              />
              <span className='absolute px-2 py-1 text-xs text-white rounded-full top-3 right-3 bg-black/60'>
                🔍 클릭하여 확대
              </span>
            </button>
          ) : (
            <div className='flex items-center justify-center w-full mt-8 text-sm border aspect-[16/9] max-h-[26vh] rounded-xl bg-muted text-muted-foreground border-border'>
              스크린샷 준비 중
            </div>
          ))}

        {isZoomed &&
          caseStudy.image &&
          createPortal(
            <div
              role='dialog'
              aria-modal='true'
              onClick={() => setIsZoomed(false)}
              className='fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80'
            >
              <button
                type='button'
                onClick={() => setIsZoomed(false)}
                aria-label='닫기'
                className='absolute text-sm text-white top-6 right-6 hover:opacity-70'
              >
                닫기 ✕
              </button>
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className='max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-out rounded-xl'
              />
            </div>,
            document.body,
          )}

        {/* 설명 */}
        <div className='grid gap-8 mt-8 md:grid-cols-1'>
          {CASE_STUDY_SECTIONS.map(({ label, key }) => (
            <div key={key}>
              <h4 className='mb-2 font-mono text-xs tracking-wide uppercase text-accent'>
                {label}
              </h4>
              <p className='text-base leading-8 text-muted-foreground'>
                {caseStudy[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
