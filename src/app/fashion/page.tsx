'use client';

import { Fragment } from 'react';

import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import FashionOption from '@/components/fashion/FashionOption';
import useGetFashion from '@/hooks/animalCrossing/useGetFashion';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Fashion() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { fashionList, isLoading } = useGetFashion();

  return (
    <CompoundList>
      <CompoundList.CompoundFlexContainer>
        <CompoundList.CompoundFilterButton onShow={show} />
        <CompoundList.CompoundSettingButton />
      </CompoundList.CompoundFlexContainer>

      <CompoundList.CompoundGridContainer
        isLoading={isLoading}
        isSuccess={fashionList.length > 0}>
        {fashionList.map((item, index) => {
          if (index <= page - 1) {
            if (index === page - 1) {
              return (
                <div key={index} ref={observerRef}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="fashion"
                  />
                </div>
              );
            } else {
              return (
                <Fragment key={index}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="fashion"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <FashionOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
