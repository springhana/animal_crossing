'use client';

import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';

import { CompoundDetail } from '@/components/common/CompoundDetail';
import SkeletonSeeMore from '@/components/skeleton/SkeletonSeeMore';
import { numbers } from '@/constants';
import useGetConstructionDetail from '@/hooks/animalCrossing/detail/useGetConstructionDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import { parseCategory } from '@/utils/translation';

export default function ConstructionDeatil() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);
  const {
    constructionFilter,
    constructionMore,
    translationsConstruction,
    isLoading,
  } = useGetConstructionDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/${title}/${id}`);
  };

  if (!constructionFilter) {
    return notFound();
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>

      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection title={translationsConstruction?.name}>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {!isLoading && constructionFilter.image ? (
                <Image src={constructionFilter.image} alt="기타 이미지" fill />
              ) : (
                <SkeletonSeeMore />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px]">
              <CompoundDetail.CompoundContent
                leftText={'구매💰'}
                rightText={
                  constructionFilter?.buy && constructionFilter.buy > 0
                    ? `${constructionFilter?.buy}벨`
                    : '비매품'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'종류🏠'}
                rightText={parseCategory(constructionFilter.category)}
              />
            </div>
          </CompoundDetail.CompoundFlexContainer>
        </CompoundDetail.CompoundSection>
      </CompoundDetail.CompoundGridContainer>

      <CompoundDetail.CompoundRightAside>
        {isLoading
          ? Array.from(
              { length: numbers.SEE_MORE },
              (_, index) => index + 1
            ).map((index) => <SkeletonSeeMore key={index} />)
          : constructionMore.map((item, index) => (
              <div
                className="w-full mb-20 text-center cursor-pointer"
                key={index}
                onClick={() => handleOnClickRouter(item.uniqueEntryId)}>
                <h1 className="text-bs_24">
                  {item.translations ? item.translations['kRko'] : item.name}
                </h1>
                <p className="relative w-[100px] h-[100px] m-auto">
                  {!isLoading && item.image && (
                    <Image src={item.image} alt="가구 이미지" fill />
                  )}
                </p>
              </div>
            ))}
      </CompoundDetail.CompoundRightAside>
    </CompoundDetail>
  );
}
