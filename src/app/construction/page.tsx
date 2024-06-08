'use client';

import { Fragment } from 'react';

import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import ConstructionOption from '@/components/construction/ConstructionOption';
import useGetConstruction from '@/hooks/animalCrossing/useGetConstruction';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Construction() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { constructionList, isLoading } = useGetConstruction();

  return (
    <CompoundList>
      <CompoundList.CompoundFilterButton onShow={show} />

      <CompoundList.CompoundGridContainer
        isLoading={isLoading}
        isSuccess={constructionList.length > 0}>
        {constructionList.map((item, index) => {
          if (index <= page - 1) {
            if (index === page - 1) {
              return (
                <div key={index} ref={observerRef}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="construction"
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
                    pathname="construction"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <ConstructionOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
