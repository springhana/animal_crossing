'use client';

import { Fragment } from 'react';

import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import FurnitureOption from '@/components/furniture/FurnitureOption';
import useGetFurniture from '@/hooks/animalCrossing/useGetFurniture';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Furniture() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { furnitureList, isLoading } = useGetFurniture();

  return (
    <CompoundList>
      <CompoundList.CompoundFilterButton onShow={show} />

      <CompoundList.CompoundGridContainer
        isLoading={isLoading}
        isSuccess={furnitureList.length > 0}>
        {furnitureList.map((item, index) => {
          if (index <= page - 1) {
            if (index === page - 1) {
              return (
                <div key={index} ref={observerRef}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="furniture"
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
                    pathname="furniture"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <FurnitureOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
