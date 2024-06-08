import { IItem, items } from 'animal-crossing';
import { Color, Series, Style } from 'animal-crossing/lib/types/Item';
import { useEffect, useMemo, useState } from 'react';

import { image } from '@/utils/image';

import useParameter from '../useParameter';

type TFurnitureFilter = 'sourceSheet' | 'colors' | 'themes';

export const fashion = items.filter(
  (f) =>
    f.sourceSheet === 'Tops' ||
    f.sourceSheet === 'Bottoms' ||
    f.sourceSheet === 'Dress-Up' ||
    f.sourceSheet === 'Headwear' ||
    f.sourceSheet === 'Accessories' ||
    f.sourceSheet === 'Socks' ||
    f.sourceSheet === 'Shoes' ||
    f.sourceSheet === 'Bags' ||
    f.sourceSheet === 'Umbrellas' ||
    f.sourceSheet === 'Clothing Other'
);

const useGetFashion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fashionFilter, setFashionFilter] = useState<IItem[]>(fashion);

  const { searchParams, queryParams, handleSpecialPlus } = useParameter();

  useEffect(() => {
    if (
      queryParams.length > 0 &&
      queryParams[0][0] !== '' &&
      queryParams[0][1] !== ''
    ) {
      setIsLoading(true);
      const newQueryParams = handleSpecialPlus(queryParams, '+');

      const filter = fashion.filter((f) => {
        return newQueryParams.every((i) => {
          if (i[0] === 'colors') {
            return f.colors?.includes(i[1] as Color);
          } else if (i[0] === 'themes') {
            return f.themes?.includes(i[1].toLocaleLowerCase() as Series);
          } else if (i[0] === 'styles') {
            return f.styles?.includes(i[1] as Style);
          } else {
            return (
              String(
                f[String(i[0]) as TFurnitureFilter]
              ).toLocaleLowerCase() === i[1].toLocaleLowerCase()
            );
          }
        });
      });

      setFashionFilter(filter);
    } else {
      setFashionFilter(fashion);
    }
    setIsLoading(false);
  }, [searchParams]);

  const fashionList = useMemo(
    () =>
      fashionFilter.map((item) => ({
        title: item.translations ? item.translations['kRko'] : item.name,
        imageUrl: image(item),
        id: item.uniqueEntryId,
      })),
    [fashionFilter, searchParams]
  );

  return { fashionList, isLoading };
};

export default useGetFashion;
