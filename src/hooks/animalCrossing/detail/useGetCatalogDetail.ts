import { IItem } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';
import { catalog } from '../useGetCatalog';

interface ITranslationsCatalogFilter {
  name: string | null;
  series: string | null | undefined;
}

const useGetCatalogDetail = (value: string) => {
  const [catalogFilter] = useState<IItem | undefined>(
    catalog.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [catalogMore, setCatalogMore] = useState<IItem[]>([]);
  const [translationsCatalog, setTranslationsCatalog] =
    useState<ITranslationsCatalogFilter | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([catalogFilter?.series]);

  useEffect(() => {
    if (translation && catalogFilter && catalogFilter.translations) {
      const TranslationsVillager: ITranslationsCatalogFilter = {
        name: catalogFilter.translations['kRko'],
        series: translation[0],
      };
      setTranslationsCatalog(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (catalog) {
      const currentIndex = catalog.findIndex((f) => {
        if (f.uniqueEntryId === value) {
          return f.uniqueEntryId === value;
        } else if (f.translations) {
          return f.translations.kRko === decodeURIComponent(value);
        }
      });

      const newCatalogMore: IItem[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (catalog[currentIndex + index])
          newCatalogMore.push(catalog[currentIndex + index]);
        else if (catalog[currentIndex - index])
          newCatalogMore.push(catalog[currentIndex - index]);
      });

      if (newCatalogMore.length > 0) {
        setCatalogMore(newCatalogMore);
      }
    }
    setIsLoading(false);
  }, []);

  return {
    catalogFilter,
    catalogMore,
    translationsCatalog,
    isLoading,
  };
};

export default useGetCatalogDetail;
