import { IVillager, villagers } from 'animal-crossing';
import { useEffect, useState } from 'react';

import useTranslations from '../../useTranslations';

interface ITranslationsVillager {
  name: string | null;
  wallpaper: string | undefined | null;
  flooring: string | undefined | null;
  defaultClothing: string | undefined | null;
  defaultUmbrella: string | undefined | null;
  favoriteSong: string | undefined | null;
  birthday: string | undefined;
}

const useGetVillagerDetail = (value: string) => {
  const [villagerFilter] = useState<IVillager | undefined>(
    villagers.find((f) => {
      if (f.uniqueEntryId === value) {
        return f.uniqueEntryId === value;
      } else if (f.translations) {
        return f.translations.kRko === decodeURIComponent(value);
      }
    })
  );
  const [villagerMore, setVillagerMore] = useState<IVillager[]>([]);
  const [translationsVillager, setTranslationsVillager] =
    useState<ITranslationsVillager | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { translation } = useTranslations([
    villagerFilter?.wallpaper,
    villagerFilter?.flooring,
    villagerFilter?.defaultClothing,
    villagerFilter?.defaultUmbrella,
    villagerFilter?.favoriteSong,
  ]);

  useEffect(() => {
    if (translation && villagerFilter) {
      const TranslationsVillager: ITranslationsVillager = {
        name: villagerFilter.translations['kRko'],
        wallpaper: translation[0],
        flooring: translation[1],
        defaultClothing: translation[2],
        defaultUmbrella: translation[3],
        favoriteSong: translation[4],
        birthday: villagerFilter?.birthday,
      };
      setTranslationsVillager(TranslationsVillager);
    }
  }, [translation]);

  useEffect(() => {
    if (villagerFilter) {
      const currentIndex = villagers.findIndex(
        (f) => f.uniqueEntryId === value
      );

      const newVillagersMore: IVillager[] = [];
      Array.from({ length: 5 }, (_, index) => index + 1).map((index) => {
        if (villagers[currentIndex + index])
          newVillagersMore.push(villagers[currentIndex + index]);
        else if (villagers[currentIndex - index])
          newVillagersMore.push(villagers[currentIndex - index]);
      });

      if (newVillagersMore.length > 0) {
        setVillagerMore(newVillagersMore);
      }
    }
    setIsLoading(false);
  }, []);

  return { villagerFilter, villagerMore, translationsVillager, isLoading };
};

export default useGetVillagerDetail;
