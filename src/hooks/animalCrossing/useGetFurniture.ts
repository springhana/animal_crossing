'use client';

import { IItem, items } from 'animal-crossing';
import { Color } from 'animal-crossing/lib/types/Item';
import { useEffect, useMemo, useState } from 'react';

import { image } from '@/utils/image';

import useParameter from '../useParameter';

type TFurnitureFilter = 'sourceSheet' | 'colors';

export const furniture = items.filter(
  (f) =>
    f.sourceSheet === 'Miscellaneous' ||
    f.sourceSheet === 'Housewares' ||
    f.sourceSheet === 'Wallpaper' ||
    f.sourceSheet === 'Floors' ||
    f.sourceSheet === 'Rugs' ||
    f.sourceSheet === 'Photos' ||
    f.sourceSheet === 'Posters' ||
    f.sourceSheet === 'Wall-mounted' ||
    f.sourceSheet === 'Ceiling Decor'
);

const useGetFurniture = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [furnitureFilter, setFurnitureFilter] = useState<IItem[]>(furniture);

  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = furniture.filter((f) => {
        return newQueryParams.every((i) => {
          if (i[0] === 'colors') {
            return f.colors?.includes(i[1] as Color);
          } else {
            return (
              String(
                f[String(i[0]) as TFurnitureFilter]
              ).toLocaleLowerCase() === i[1].toLocaleLowerCase()
            );
          }
        });
      });

      setFurnitureFilter(filter);
    } else {
      setFurnitureFilter(furniture);
    }
    setIsLoading(false);
  }, [searchParams]);

  const furnitureList = useMemo(
    () =>
      furnitureFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: image(item),
        id: item.uniqueEntryId,
      })),
    [furnitureFilter, searchParams]
  );

  return { furnitureList, isLoading };
};

export default useGetFurniture;
