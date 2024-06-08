'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { COLORS } from '@/constants/parameters/commonParameters';
import {
  SOURCESHEETS,
  STYLES,
  THEMES,
} from '@/constants/parameters/fashionParameters';
import useParameter from '@/hooks/useParameter';
import { colors } from '@/types/colors';
import { styles } from '@/types/styles';
import { themes } from '@/types/themes';

import { CompoundOption } from '../common/CompoundOption';

interface IFashionOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

export default function FashionOption({
  isVisible,
  hideOption,
}: IFashionOptionProps) {
  const router = useRouter();
  const { queryParams, handleSpecialPlus } = useParameter();
  const [sourceSheet, setSourceSheet] = useState<string>('');
  const [color, setColor] = useState<colors>('');
  const [themes, setThemes] = useState<themes>('');
  const [styles, setStyles] = useState<styles>('');

  useEffect(() => {
    const newQueryParams = handleSpecialPlus(queryParams, '+');

    newQueryParams.map((i) => {
      if (i[0] === 'sourceSheet') {
        setSourceSheet(i[1]);
      } else if (i[0] === 'colors') {
        setColor(i[1] as colors);
      } else if (i[0] === 'thmems') {
        setThemes(i[1] as themes);
      } else if (i[0] === 'styles') {
        setStyles(i[1] as styles);
      }
    });
  }, []);

  const handleOnClick = () => {
    router.push(
      `?sourceSheet=${sourceSheet}&colors=${color}&themes=${themes}&styles=${styles}`
    );
    hideOption();
  };

  const handleOnChangeSourceSheet = (currentSourceSheet: string) => {
    setSourceSheet(currentSourceSheet);
  };

  const handleOnChangeColor = (currentColor: colors) => {
    setColor(currentColor);
  };

  const handleOnChangeThemes = (currentThemes: themes) => {
    setThemes(currentThemes);
  };

  const handleOnChangeStyles = (currentStyles: styles) => {
    setStyles(currentStyles);
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

      <CompoundOption.Title>테마</CompoundOption.Title>
      <CompoundOption.Container>
        {THEMES.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="theme"
              checked={item.theme === themes}
              onChange={() => handleOnChangeThemes(item.theme)}
            />
          </Fragment>
        ))}
      </CompoundOption.Container>

      <CompoundOption.Title>스타일</CompoundOption.Title>
      <CompoundOption.Container>
        {STYLES.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="style"
              checked={item.styles === styles}
              onChange={() => handleOnChangeStyles(item.styles)}
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
