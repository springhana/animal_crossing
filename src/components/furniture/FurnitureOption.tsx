'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { COLORS } from '@/constants/parameters/commonParameters';
import { SOURCESHEETS } from '@/constants/parameters/furnitureParameters';
import useParameter from '@/hooks/useParameter';
import { colors } from '@/types/colors';

import { CompoundOption } from '../common/CompoundOption';

interface IFurnitureOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

export default function FurnitureOption({
  isVisible,
  hideOption,
}: IFurnitureOptionProps) {
  const router = useRouter();
  const { queryParams, handleSpecialPlus } = useParameter();
  const [sourceSheet, setSourceSheet] = useState<string>('');
  const [color, setColor] = useState<colors>('');

  useEffect(() => {
    const newQueryParams = handleSpecialPlus(queryParams, '+');

    newQueryParams.map((i) => {
      if (i[0] === 'sourceSheet') {
        setSourceSheet(i[1]);
      } else if (i[0] === 'colors') {
        setColor(i[1] as colors);
      }
    });
  }, []);

  const handleOnClick = () => {
    router.push(`?sourceSheet=${sourceSheet}&colors=${color}`);
    hideOption();
  };

  const handleOnChangeSourceSheet = (currentSourceSheet: string) => {
    setSourceSheet(currentSourceSheet);
  };

  const handleOnChangeColor = (currentColor: colors) => {
    setColor(currentColor);
  };

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.CloseButton hideOption={hideOption} />

      <CompoundOption.Title>종류</CompoundOption.Title>
      <CompoundOption.Container>
        {SOURCESHEETS.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="species"
              checked={item.sourceSheet === sourceSheet}
              onChange={() => handleOnChangeSourceSheet(item.sourceSheet)}
            />
          </Fragment>
        ))}
      </CompoundOption.Container>

      <CompoundOption.Title>색상</CompoundOption.Title>
      <CompoundOption.Container background="bg-[#838282]">
        {COLORS.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="colors"
              checked={item.color === color}
              onChange={() => handleOnChangeColor(item.color)}
              color={item.color}
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
