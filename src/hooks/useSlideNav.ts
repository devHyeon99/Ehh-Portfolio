import { useCallback, useEffect, useState } from 'react';

const useSlideNav = (slideCount: number) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (targetIndex: number) => {
      setIndex((current) => {
        if (targetIndex < 0 || targetIndex >= slideCount) return current;
        setDirection(targetIndex > current ? 1 : -1);
        return targetIndex;
      });
    },
    [slideCount]
  );

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => {
        const next = current + delta;
        if (next < 0 || next >= slideCount) return current;
        setDirection(delta > 0 ? 1 : -1);
        return next;
      });
    },
    [slideCount]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step]);

  return { index, direction, goTo, step };
};

export default useSlideNav;
