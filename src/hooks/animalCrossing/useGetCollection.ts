'use client';

import { creatures, ICreature } from 'animal-crossing';
import { Color } from 'animal-crossing/lib/types/Creature';
import { useEffect, useMemo, useState } from 'react';

import useParameter from '../useParameter';

type TCatalogFilter = 'sourceSheet';

const useGetCollection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalogFilter, setCatalogFilter] = useState<ICreature[]>(creatures);

  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = creatures.filter((f) => {
        return newQueryParams.every((i) => {
          if (i[0] === 'colors') {
            return f.colors?.includes(i[1] as Color);
          } else {
            return (
              String(f[String(i[0]) as TCatalogFilter]).toLocaleLowerCase() ===
              i[1].toLocaleLowerCase()
            );
          }
        });
      });

      setCatalogFilter(filter);
    } else {
      setCatalogFilter(creatures);
    }
    setIsLoading(false);
  }, [searchParams]);

  const catalogList = useMemo(
    () =>
      catalogFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: item.iconImage,
        id: item.uniqueEntryId,
      })),
    [catalogFilter, searchParams]
  );

  return { catalogList, isLoading };
};

export default useGetCollection;
