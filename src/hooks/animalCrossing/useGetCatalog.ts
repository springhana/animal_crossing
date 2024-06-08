'use client';

import { IItem, items } from 'animal-crossing';
import { useEffect, useMemo, useState } from 'react';

import { image } from '@/utils/image';

import useParameter from '../useParameter';

type TCatalogFilter = 'sourceSheet';

export const catalog = items.filter(
  (f) =>
    f.sourceSheet === 'Message Cards' ||
    f.sourceSheet === 'Music' ||
    f.sourceSheet === 'Other' ||
    f.sourceSheet === 'Fossils' ||
    f.sourceSheet === 'Artwork' ||
    f.sourceSheet === 'Gyroids' ||
    f.sourceSheet === 'Tools/Goods'
);

const useGetCatalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalogFilter, setCatalogFilter] = useState<IItem[]>(catalog);

  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = catalog.filter((f) => {
        return newQueryParams.every((i) => {
          return (
            String(f[String(i[0]) as TCatalogFilter]).toLocaleLowerCase() ===
            i[1].toLocaleLowerCase()
          );
        });
      });

      setCatalogFilter(filter);
    } else {
      setCatalogFilter(catalog);
    }
    setIsLoading(false);
  }, [searchParams]);

  const catalogList = useMemo(
    () =>
      catalogFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: image(item),
        id: item.uniqueEntryId,
      })),
    [catalogFilter, searchParams]
  );

  return { catalogList, isLoading };
};

export default useGetCatalog;
