import { construction, IConstruction } from 'animal-crossing';
import { useEffect, useMemo, useState } from 'react';

import useParameter from '../useParameter';

type TConstructionFilter = 'category';

const useGetConstruction = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [constructionFilter, setConstructionFilter] =
    useState<IConstruction[]>(construction);
  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = construction.filter((f) => {
        return newQueryParams.every(
          (i) =>
            String(
              f[String(i[0]) as TConstructionFilter]
            ).toLocaleLowerCase() === i[1].toLocaleLowerCase()
        );
      });
      setConstructionFilter(filter);
    } else {
      setConstructionFilter(construction);
    }
    setIsLoading(false);
  }, [searchParams]);

  const constructionList = useMemo(
    () =>
      constructionFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: item.image,
        id: item.uniqueEntryId,
      })),
    [constructionFilter]
  );

  return { constructionList, isLoading };
};

export default useGetConstruction;
