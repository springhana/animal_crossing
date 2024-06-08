import { useCallback, useRef } from 'react';

const useObserver = (isFetching: boolean, onNextPage: () => void) => {
  const observer: React.MutableRefObject<IntersectionObserver | null> =
    useRef(null);
  const observerRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onNextPage();
          }
        },
        { threshold: 0.7 }
      );
      if (node) observer.current.observe(node);
    },
    [isFetching]
  );

  return { observerRef };
};

export default useObserver;
