import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
const useParameter = () => {
  const searchParams = useSearchParams();

  const queryParams = useMemo(() => {
    return String(searchParams)
      .split('&')
      .map((i) => i.split('='))
      .filter((f) => f[1] !== '');
  }, [searchParams]);

  const handleSpecialPlus = (array: string[][], spectial: string) => {
    return array.map((i) =>
      i.map((j) => {
        if (j.includes('%2F')) {
          return j.replace('%2F', '/');
        } else if (j.includes(spectial)) {
          return j.replace(spectial, ' ');
        } else {
          return j;
        }
      })
    );
  };

  return { searchParams, queryParams, handleSpecialPlus };
};

export default useParameter;
