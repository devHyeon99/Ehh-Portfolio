import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import useSlideNav from '../hooks/useSlideNav';
import usePreloadImages from '../hooks/usePreloadImages';
import IntroSlide from './IntroSlide';
import ProjectGroup from './ProjectGroup';
import { PROJECTS } from '../data';

// 데크에서 사용하는 모든 이미지 경로. 마운트 시 미리 받아둬 슬라이드 이동을 매끄럽게 한다.
const PRELOAD_IMAGES = [
  '/images/ehh.jpg',
  ...PROJECTS.flatMap((project) =>
    project.cases
      .filter((c) => c.hasImage && c.image)
      .map((c) => c.image as string)
  ),
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const SLIDE_COUNT = PROJECTS.length + 1;

const Deck = () => {
  const { index, direction, goTo, step } = useSlideNav(SLIDE_COUNT);
  usePreloadImages(PRELOAD_IMAGES);
  const [caseState, setCaseState] = useState({
    active: 0,
    total: 1,
    canScrollMore: false,
  });
  const scrollNextRef = useRef<(() => void) | null>(null);

  const canScrollMore = index > 0 && caseState.canScrollMore;

  return (
    <div className='relative w-screen h-screen overflow-hidden bg-background'>
      <AnimatePresence mode='wait' custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.25 }}
        >
          {index === 0 ? (
            <IntroSlide />
          ) : (
            <ProjectGroup
              project={PROJECTS[index - 1]}
              onCaseChange={setCaseState}
              scrollNextRef={scrollNextRef}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className='fixed flex flex-col items-center gap-3 -translate-x-1/2 bottom-6 left-1/2'>
        <AnimatePresence>
          {index === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
              transition={{
                opacity: { duration: 0.2 },
                y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              className='relative px-3 py-1.5 text-xs whitespace-nowrap rounded-lg shadow-sm bg-foreground text-background'
            >
              ← → 방향키로 슬라이드 이동
              <div className='absolute w-2 h-2 -translate-x-1/2 rotate-45 -bottom-1 left-1/2 bg-foreground' />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollMore && (
            <motion.button
              type='button'
              aria-label='다음 케이스로 스크롤'
              onClick={() => scrollNextRef.current?.()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
              transition={{
                opacity: { duration: 0.2 },
                y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              className='flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full text-muted-foreground bg-muted hover:text-foreground'
            >
              스크롤해서 더 보기
              <HiChevronDown size={14} />
            </motion.button>
          )}
        </AnimatePresence>

        <div className='flex items-center gap-4'>
          <button
            type='button'
            aria-label='이전 슬라이드'
            onClick={() => step(-1)}
            disabled={index === 0}
            className='p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-0'
          >
            <HiChevronLeft size={22} />
          </button>

          <div className='flex gap-2'>
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <button
                key={i}
                type='button'
                aria-label={`${i + 1}번 슬라이드로 이동`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-accent' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            type='button'
            aria-label='다음 슬라이드'
            onClick={() => step(1)}
            disabled={index === SLIDE_COUNT - 1}
            className='p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-0'
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
