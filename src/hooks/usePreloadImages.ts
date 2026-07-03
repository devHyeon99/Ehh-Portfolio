import { useEffect } from 'react';

/**
 * 전달받은 이미지 URL들을 마운트 이후 백그라운드로 미리 받아둔다.
 * 슬라이드 이동 시 이미지가 즉시 표시되도록 브라우저 캐시를 예열하는 용도.
 * urls는 렌더마다 새로 만들지 말고 모듈 스코프의 안정적인 배열을 넘길 것.
 */
const usePreloadImages = (urls: string[]) => {
  useEffect(() => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [urls]);
};

export default usePreloadImages;
