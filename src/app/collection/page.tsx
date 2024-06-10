'use client';

import { Fragment } from 'react';

import CollectionOption from '@/components/collection/CollectionOption';
import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import useGetCollection from '@/hooks/animalCrossing/useGetCollection';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Collection() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { catalogList, isLoading } = useGetCollection();

  return (
    <CompoundList>
      <CompoundList.CompoundFlexContainer>
        <CompoundList.CompoundFilterButton onShow={show} />
        <CompoundList.CompoundSettingButton />
      </CompoundList.CompoundFlexContainer>

      <CompoundList.CompoundGridContainer
        isLoading={isLoading}
        isSuccess={catalogList.length > 0}>
        {catalogList.map((item, index) => {
          if (index <= page - 1) {
            if (index === page - 1) {
              return (
                <div key={index} ref={observerRef}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="collection"
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
                    pathname="collection"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <CollectionOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
