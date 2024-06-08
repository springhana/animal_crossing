import { useEffect } from 'react';

import { allowScroll, preventScroll } from '@/utils/scroll';

const usePreventScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    } else {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [open]);
};

export default usePreventScroll;
