import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import ProjectSlide from './ProjectSlide';
import type { Project } from '../data';

interface ProjectGroupProps {
  project: Project;
  onCaseChange?: (state: {
    active: number;
    total: number;
    canScrollMore: boolean;
  }) => void;
  scrollNextRef?: MutableRefObject<(() => void) | null>;
}

const ProjectGroup = ({
  project,
  onCaseChange,
  scrollNextRef,
}: ProjectGroupProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState(0);
  const { cases } = project;
  const multi = cases.length > 1;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const caseEls = () =>
      Array.from(el.querySelectorAll<HTMLElement>('[data-case]'));

    const report = () => {
      const scrollTop = el.scrollTop;
      let active = 0;
      caseEls().forEach((c, i) => {
        if (c.offsetTop <= scrollTop + 4) active = i;
      });
      const canScrollMore = scrollTop + el.clientHeight < el.scrollHeight - 8;
      setActiveCase(active);
      onCaseChange?.({ active, total: cases.length, canScrollMore });
    };

    report();

    if (scrollNextRef) {
      scrollNextRef.current = () => {
        el.scrollBy({ top: el.clientHeight * 0.9, behavior: 'smooth' });
      };
    }

    const handleScroll = () => report();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      el.scrollBy({ top: delta * el.clientHeight * 0.9, behavior: 'smooth' });
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
      if (scrollNextRef) scrollNextRef.current = null;
    };
  }, [cases.length, onCaseChange, scrollNextRef]);

  const scrollToCase = (i: number) => {
    scrollRef.current
      ?.querySelectorAll<HTMLElement>('[data-case]')
      [i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='relative w-screen h-screen'>
      <div
        ref={scrollRef}
        className='absolute inset-0 overflow-y-auto snap-y snap-proximity [&::-webkit-scrollbar]:hidden'
        style={{ scrollbarWidth: 'none' }}
      >
        {cases.map((caseStudy, i) => (
          <div key={i} data-case={i} className='min-h-screen snap-start'>
            <ProjectSlide
              project={project}
              caseStudy={caseStudy}
              partIndex={i + 1}
              partTotal={cases.length}
            />
          </div>
        ))}
      </div>

      {multi && (
        <div className='absolute z-10 flex flex-col items-center gap-2 -translate-y-1/2 right-8 top-1/2'>
          <button
            type='button'
            aria-label='이전 케이스로 이동'
            onClick={() => scrollToCase(activeCase - 1)}
            disabled={activeCase === 0}
            className='p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-0'
          >
            <HiChevronUp size={18} />
          </button>

          <div className='flex flex-col gap-2'>
            {cases.map((_, i) => (
              <button
                key={i}
                type='button'
                aria-label={`${i + 1}번 케이스로 이동`}
                onClick={() => scrollToCase(i)}
                className={`w-1.5 rounded-full transition-all ${
                  i === activeCase ? 'h-6 bg-accent' : 'h-1.5 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            type='button'
            aria-label='다음 케이스로 이동'
            onClick={() => scrollToCase(activeCase + 1)}
            disabled={activeCase === cases.length - 1}
            className='p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-0'
          >
            <HiChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGroup;
