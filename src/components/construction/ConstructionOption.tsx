'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { CATEGORYS } from '@/constants/parameters/constructionParameters';
import useParameter from '@/hooks/useParameter';

import { CompoundOption } from '../common/CompoundOption';

interface ICollectionOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

export default function ConstructionOption({
  isVisible,
  hideOption,
}: ICollectionOptionProps) {
  const router = useRouter();
  const { queryParams, handleSpecialPlus } = useParameter();
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    const newQueryParams = handleSpecialPlus(queryParams, '+');

    newQueryParams.map((i) => {
      if (i[0] === 'category') {
        setCategory(i[1]);
      }
    });
  }, []);

  const handleOnClick = () => {
    router.push(`?category=${category}`);
    hideOption();
  };

  const handleOnChangeCategory = (currentCategory: string) => {
    setCategory(currentCategory);
  };

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.CloseButton hideOption={hideOption} />

      <CompoundOption.Title>종류</CompoundOption.Title>
      <CompoundOption.Container>
        {CATEGORYS.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="species"
              checked={item.category === category}
              onChange={() => handleOnChangeCategory(item.category)}
            />
          </Fragment>
        ))}
      </CompoundOption.Container>

      <CompoundOption.Container>
        <CompoundOption.Button onClick={handleOnClick}>
          저장
        </CompoundOption.Button>
      </CompoundOption.Container>
    </CompoundOption>
  );
}
