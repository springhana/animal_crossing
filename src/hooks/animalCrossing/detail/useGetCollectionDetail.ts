import { creatures, ICreature } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';

interface ITranslationsCollectionFilter {
  name: string | null;
}

const useGetCollectionDetail = (value: string) => {
  const [collectionFilter] = useState<ICreature | undefined>(
    creatures.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [collectionMore, setCollectionMore] = useState<ICreature[]>([]);
  const [translationsCollectionFilter, setTranslationsCollectionFilter] =
    useState<ITranslationsCollectionFilter | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([]);

  useEffect(() => {
    if (translation && collectionFilter && collectionFilter.translations) {
      const TranslationsVillager: ITranslationsCollectionFilter = {
        name: collectionFilter.translations['kRko'],
      };
      setTranslationsCollectionFilter(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (creatures) {
      const currentIndex = creatures.findIndex((f) => {
        if (f.uniqueEntryId === value) {
          return f.uniqueEntryId === value;
        } else if (f.translations) {
          return f.translations.kRko === decodeURIComponent(value);
        }
      });

      const newCollectionMore: ICreature[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (creatures[currentIndex + index])
          newCollectionMore.push(creatures[currentIndex + index]);
        else if (creatures[currentIndex - index])
          newCollectionMore.push(creatures[currentIndex - index]);
      });

      if (newCollectionMore.length > 0) {
        setCollectionMore(newCollectionMore);
      }
    }
    setIsLoading(false);
  }, []);

  return {
    collectionFilter,
    collectionMore,
    translationsCollectionFilter,
    isLoading,
  };
};

export default useGetCollectionDetail;
