import { useState } from 'react';

import { numbers } from '@/constants';

const usePage = () => {
  const [page, setPage] = useState<number>(numbers.PAGE_SIZE);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleNextPage = () => {
    setPage((prev) => prev + numbers.PAGE_SIZE);
    setIsFetching((prev) => !prev);
  };

  return { page, isFetching, handleNextPage };
};

export default usePage;
