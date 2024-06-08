import { IItem } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';
import { fashion } from '../useGetFashion';

interface ITranslationsFashion {
  name: string | null;
}

const useGetFashionDetail = (value: string) => {
  const [fashionFilter] = useState<IItem | undefined>(
    fashion.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [fashionMore, setFashionMore] = useState<IItem[]>([]);
  const [translationsFashion, setTranslationsFashion] =
    useState<ITranslationsFashion | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([fashionFilter?.name]);

  useEffect(() => {
    if (translation && fashionFilter && fashionFilter.translations) {
      const TranslationsVillager: ITranslationsFashion = {
        name: fashionFilter.translations['kRko'],
      };
      setTranslationsFashion(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (fashion) {
      const currentIndex = fashion.findIndex((f) => {
        if (f.uniqueEntryId === value) {
          return f.uniqueEntryId === value;
        } else if (f.translations) {
          return f.translations.kRko === decodeURIComponent(value);
        }
      });

      const newFashionMore: IItem[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (fashion[currentIndex + index])
          newFashionMore.push(fashion[currentIndex + index]);
        else if (fashion[currentIndex - index])
          newFashionMore.push(fashion[currentIndex - index]);
      });

      if (newFashionMore.length > 0) {
        setFashionMore(newFashionMore);
      }
    }
    setIsLoading(false);
  }, []);

  return { fashionFilter, fashionMore, translationsFashion, isLoading };
};

export default useGetFashionDetail;
