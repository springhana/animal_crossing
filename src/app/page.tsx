'use client';

import { Fragment } from 'react';

import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import VillagersOption from '@/components/villagers/VillagersOption';
import useGetVillagers from '@/hooks/animalCrossing/useGetVillagers';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Home() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { villagersList, isLoading } = useGetVillagers();

  return (
    <CompoundList>
      <CompoundList.CompoundFlexContainer>
        <CompoundList.CompoundFilterButton onShow={show} />
        <CompoundList.CompoundSettingButton />
      </CompoundList.CompoundFlexContainer>

      <CompoundList.CompoundGridContainer
        isLoading={isLoading}
        isSuccess={villagersList.length > 0}>
        {villagersList.map((item, index) => {
          if (index <= page - 1) {
            if (index === page - 1) {
              return (
                <div key={index} ref={observerRef}>
                  <Card
                    image={item.imageUrl}
                    title={item.title}
                    id={item.id}
                    pathname="villagers"
                    size="medium"
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
                    pathname="villagers"
                    size="medium"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <VillagersOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
