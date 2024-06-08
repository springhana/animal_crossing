'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import {
  PERSONALITY,
  SPECIES,
} from '@/constants/parameters/villagersParameters';
import useParameter from '@/hooks/useParameter';

import { CompoundOption } from '../common/CompoundOption';

interface IVillagersOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

const DateBox = dynamic(
  () => import('../common/DateBox').then((mod) => mod.default),
  { ssr: false }
);

export default function VillagersOption({
  isVisible,
  hideOption,
}: IVillagersOptionProps) {
  const router = useRouter();
  const { queryParams, handleSpecialPlus } = useParameter();
  const [species, setSpecies] = useState<string>('');
  const [personality, setPersonality] = useState<string>('');
  const [birthday, setBirtday] = useState<string>('');

  useEffect(() => {
    const newQueryParams = handleSpecialPlus(queryParams, '+');

    newQueryParams.map((i) => {
      if (i[0] === 'species') {
        setSpecies(i[1]);
      } else if (i[0] === 'personality') {
        setPersonality(i[1]);
      } else if (i[0] === 'birthday') {
        setBirtday(i[1]);
      }
    });
  }, []);

  const handleOnClick = () => {
    router.push(
      `?species=${species}&personality=${personality}&birthmonth=${birthday}`
    );
    hideOption();
  };

  const handleOnChangeSpecies = (currentSpecies: string) => {
    setSpecies(currentSpecies);
  };

  const handleOnChangePersonality = (currentPersonality: string) => {
    setPersonality(currentPersonality);
  };

  const handleOnChangeBirthday = (currentBirthday: string) => {
    setBirtday(currentBirthday);
  };

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.CloseButton hideOption={hideOption} />

      <CompoundOption.Title>종류</CompoundOption.Title>
      <CompoundOption.Container>
        {SPECIES.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="species"
              checked={item.species === species}
              onChange={() => handleOnChangeSpecies(item.species)}
            />
          </Fragment>
        ))}
      </CompoundOption.Container>

      <CompoundOption.Title>성격</CompoundOption.Title>
      <CompoundOption.Container>
        {PERSONALITY.map((item, index) => (
          <Fragment key={index}>
            <CompoundOption.RadioBox
              title={item.title}
              name="personality"
              checked={item.personality === personality}
              onChange={() => handleOnChangePersonality(item.personality)}
            />
          </Fragment>
        ))}
      </CompoundOption.Container>

      <CompoundOption.Title>생일</CompoundOption.Title>

      <CompoundOption.Container>
        <DateBox onChangeDate={handleOnChangeBirthday} />
      </CompoundOption.Container>

      <CompoundOption.Container>
        <CompoundOption.Button onClick={handleOnClick}>
          저장
        </CompoundOption.Button>
      </CompoundOption.Container>
    </CompoundOption>
  );
}
