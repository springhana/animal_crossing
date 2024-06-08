import { translations } from 'animal-crossing';
import { useEffect, useState } from 'react';

const useTranslations = (
  array: (string | undefined | null)[],
  language: 'kRko' = 'kRko'
) => {
  const [translation, setTranslation] = useState<(string | undefined | null)[]>(
    []
  );

  useEffect(() => {
    if (array) {
      const newArray = array.map((i) => {
        if (i) {
          const translation = translations.find((f) => f.uSen === i);

          if (translation) {
            return translation[language];
          } else {
            return i;
          }
        }
      });
      setTranslation(newArray);
    }
  }, []);

  return { translation };
};

export default useTranslations;
