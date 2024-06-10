'use client';

import { Fragment } from 'react';

import CatalogOption from '@/components/catalog/CatalogOption';
import Card from '@/components/common/Card';
import { CompoundList } from '@/components/common/CompoundList';
import useGetCatalog from '@/hooks/animalCrossing/useGetCatalog';
import useModal from '@/hooks/useModal';
import useObserver from '@/hooks/useObserver';
import usePage from '@/hooks/usePage';

export default function Catalog() {
  const { isVisible, show, hide } = useModal();
  const { page, isFetching, handleNextPage } = usePage();
  const { observerRef } = useObserver(isFetching, handleNextPage);

  const { catalogList, isLoading } = useGetCatalog();

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
                    pathname="catalog"
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
                    pathname="catalog"
                  />
                </Fragment>
              );
            }
          }
        })}
      </CompoundList.CompoundGridContainer>

      <CatalogOption isVisible={isVisible} hideOption={hide} />
    </CompoundList>
  );
}
