import { IItem } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';
import { furniture } from '../useGetFurniture';

interface ITranslationsFurniture {
  name: string | null;
  series: string | null | undefined;
}

const useGetFurnitureDetail = (value: string) => {
  const [furnitureFilter] = useState<IItem | undefined>(
    furniture.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [furnitureMore, setFurnitureMore] = useState<IItem[]>([]);
  const [translationsFurniture, setTranslationsFurniture] =
    useState<ITranslationsFurniture | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([furnitureFilter?.series]);

  useEffect(() => {
    if (translation && furnitureFilter && furnitureFilter.translations) {
      const TranslationsVillager: ITranslationsFurniture = {
        name: furnitureFilter.translations['kRko'],
        series: translation[0],
      };
      setTranslationsFurniture(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (furniture) {
      const currentIndex = furniture.findIndex((f) => {
        if (f.uniqueEntryId === value) {
          return f.uniqueEntryId === value;
        } else if (f.translations) {
          return f.translations.kRko === decodeURIComponent(value);
        }
      });

      const newFurnitureMore: IItem[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (furniture[currentIndex + index])
          newFurnitureMore.push(furniture[currentIndex + index]);
        else if (furniture[currentIndex - index])
          newFurnitureMore.push(furniture[currentIndex - index]);
      });

      if (newFurnitureMore.length > 0) {
        setFurnitureMore(newFurnitureMore);
      }
    }
    setIsLoading(false);
  }, []);

  return { furnitureFilter, furnitureMore, translationsFurniture, isLoading };
};

export default useGetFurnitureDetail;
