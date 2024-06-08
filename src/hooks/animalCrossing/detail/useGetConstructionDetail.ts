import { construction, IConstruction } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';

interface ITranslationsCatalogFilter {
  name: string | null;
}

const useGetConstructionDetail = (value: string) => {
  const [constructionFilter] = useState<IConstruction | undefined>(
    construction.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [constructionMore, setConstructionMore] = useState<IConstruction[]>([]);
  const [translationsConstruction, setTranslationsConstruction] =
    useState<ITranslationsCatalogFilter | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([]);

  useEffect(() => {
    if (translation && constructionFilter && constructionFilter.translations) {
      const TranslationsVillager: ITranslationsCatalogFilter = {
        name: constructionFilter.translations['kRko'],
      };
      setTranslationsConstruction(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (construction) {
      const currentIndex = construction.findIndex((f) => {
        if (f.uniqueEntryId === value) {
          return f.uniqueEntryId === value;
        } else if (f.translations) {
          return f.translations.kRko === decodeURIComponent(value);
        }
      });

      const newConstructionMore: IConstruction[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (construction[currentIndex + index])
          newConstructionMore.push(construction[currentIndex + index]);
        else if (construction[currentIndex - index])
          newConstructionMore.push(construction[currentIndex - index]);
      });

      if (newConstructionMore.length > 0) {
        setConstructionMore(newConstructionMore);
      }
    }
    setIsLoading(false);
  }, []);

  return {
    constructionFilter,
    constructionMore,
    translationsConstruction,
    isLoading,
  };
};

export default useGetConstructionDetail;
