import { motion } from 'framer-motion';

const IntroSlide = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen px-6 text-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='w-24 h-24 mb-8 overflow-hidden border rounded-full border-border lg:w-28 lg:h-28'
      >
        <img
          src='/src/assets/ehh.jpg'
          alt='프로필'
          className='object-cover w-full h-full'
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='mb-4 font-mono text-sm text-accent'
      >
        안녕하세요, 신입 프론트엔드 개발자입니다.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl'
      >
        엄현호
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-xl mt-6 text-base leading-8 text-muted-foreground lg:text-lg'
      >
        {/* TODO(Phase 2): 실제 한 줄 소개 문구로 교체 */}
        사용자 경험을 고민하며 꾸준히 배우고 성장하는 개발자입니다.
      </motion.p>

      <motion.a
        href='https://github.com/devHyeon99'
        target='_blank'
        rel='noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='px-6 py-3 mt-10 text-sm font-medium transition-colors border rounded-full border-border text-foreground hover:bg-muted'
      >
        GitHub
      </motion.a>
    </div>
  );
};

export default IntroSlide;
