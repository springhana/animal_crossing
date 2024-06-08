'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { SOURCESHEETS } from '@/constants/parameters/catalogParameters';
import useParameter from '@/hooks/useParameter';

import { CompoundOption } from '../common/CompoundOption';

interface ICatalogOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

export default function CatalogOption({
  isVisible,
  hideOption,
}: ICatalogOptionProps) {
  const router = useRouter();
  const { queryParams, handleSpecialPlus } = useParameter();
  const [sourceSheet, setSourceSheet] = useState<string>('');

  useEffect(() => {
    const newQueryParams = handleSpecialPlus(queryParams, '+');

    newQueryParams.map((i) => {
      if (i[0] === 'sourceSheet') {
        setSourceSheet(i[1]);
      }
    });
  }, []);

  const handleOnClick = () => {
    router.push(`?sourceSheet=${sourceSheet}`);
    hideOption();
  };

  const handleOnChangeSourceSheet = (currentSourceSheet: string) => {
    setSourceSheet(currentSourceSheet);
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
              name="sourceSheet"
              checked={item.sourceSheet === sourceSheet}
              onChange={() => handleOnChangeSourceSheet(item.sourceSheet)}
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
