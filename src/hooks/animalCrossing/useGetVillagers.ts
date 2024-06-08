import { IVillager, villagers } from 'animal-crossing';
import { useEffect, useMemo, useState } from 'react';

import useParameter from '../useParameter';

type TVillagersFilter = 'species' | 'personality' | 'birthday';

const useGetVillagers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [villagersFilter, setVillagersFilter] =
    useState<IVillager[]>(villagers);
  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = villagers.filter((f) => {
        return newQueryParams.every(
          (i) =>
            String(f[String(i[0]) as TVillagersFilter]).toLocaleLowerCase() ===
            i[1].toLocaleLowerCase()
        );
      });
      setVillagersFilter(filter);
    } else {
      setVillagersFilter(villagers);
    }
    setIsLoading(false);
  }, [searchParams]);

  const villagersList = useMemo(
    () =>
      villagersFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: item.photoImage,
        id: item.uniqueEntryId,
      })),
    [villagersFilter]
  );

  return { villagersList, isLoading };
};

export default useGetVillagers;
