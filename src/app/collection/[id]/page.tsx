'use client';

import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';

import { CompoundDetail } from '@/components/common/CompoundDetail';
import SizeIcon from '@/components/common/SizeIcon';
import SkeletonSeeMore from '@/components/skeleton/SkeletonSeeMore';
import { numbers } from '@/constants';
import useGetCollectionDetail from '@/hooks/animalCrossing/detail/useGetCollectionDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import {
  parseCollectionSourceSheets,
  parseColor,
  parseHemispheres,
  parseMonth,
} from '@/utils/translation';

export default function CollectionDeatil() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);
  const {
    collectionFilter,
    collectionMore,
    translationsCollectionFilter,
    isLoading,
  } = useGetCollectionDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/${title}/${id}`);
  };

  if (!collectionFilter) {
    return notFound();
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>

      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection
          title={translationsCollectionFilter?.name}>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {!isLoading && collectionFilter.iconImage ? (
                <Image
                  src={collectionFilter.iconImage}
                  alt="기타 이미지"
                  fill
                />
              ) : (
                <SkeletonSeeMore />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px]">
              <CompoundDetail.CompoundContent
                leftText={'번호🔢'}
                rightText={`No. ${collectionFilter?.num}`}
              />
              <CompoundDetail.CompoundContent
                leftText={'판매💰'}
                rightText={
                  collectionFilter?.sell
                    ? `${collectionFilter?.sell}벨`
                    : '판매불가'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'종류😻'}
                rightText={parseCollectionSourceSheets(
                  collectionFilter.sourceSheet
                )}
              />
            </div>
          </CompoundDetail.CompoundFlexContainer>

          <CompoundDetail.CompoundFlexColContainer>
            <CompoundDetail.CompoundContent
              leftText={
                <span className="flex items-center justify-center gap-1">
                  사이즈
                  <SizeIcon iconName="other" />
                </span>
              }
              rightText={
                <span className="flex items-center justify-center gap-1">
                  {collectionFilter.size}
                  <SizeIcon iconName={collectionFilter.size} />
                </span>
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'색상'}
              rightText={
                collectionFilter?.colors &&
                String(
                  collectionFilter?.colors.map((theme, i) => {
                    if (
                      collectionFilter?.colors &&
                      i === collectionFilter.colors.length - 1
                    ) {
                      return parseColor(theme);
                    } else {
                      return parseColor(theme) + ' ';
                    }
                  })
                )
              }
            />
          </CompoundDetail.CompoundFlexColContainer>
        </CompoundDetail.CompoundSection>

        <CompoundDetail.CompoundSection title={'실물'}>
          <div className="flex justify-around items-center mobile:flex-col mobile_1:flex-col">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="relative w-[300px] h-[300px] bg-white rounded-full mx-auto">
                {collectionFilter.critterpediaImage && (
                  <Image
                    src={collectionFilter.critterpediaImage}
                    alt="실물"
                    fill
                  />
                )}
              </div>
              <p>실물</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="relative w-[300px] h-[300px] bg-white rounded-full mx-auto">
                {collectionFilter.furnitureImage && (
                  <Image
                    src={collectionFilter.furnitureImage}
                    alt="가구 모습"
                    fill
                  />
                )}
              </div>
              <p>가구 모습</p>
            </div>
          </div>

          <CompoundDetail.CompoundFlexColContainer>
            <CompoundDetail.CompoundContent
              leftText={`${parseHemispheres('north')}-월`}
              rightText={String(
                collectionFilter.hemispheres.north.months.map(
                  (i) =>
                    parseMonth(i.split(' - ')[0]) +
                    `${
                      parseMonth(i.split(' - ')[1]) !== undefined
                        ? ' ~ ' + parseMonth(i.split(' - ')[1])
                        : ''
                    }`
                )
              )}
            />
            <CompoundDetail.CompoundContent
              leftText={`${parseHemispheres('north')}-시간`}
              rightText={
                String(collectionFilter.hemispheres.north.time) === 'All day'
                  ? '매일'
                  : String(collectionFilter.hemispheres.north.time)
              }
            />

            <CompoundDetail.CompoundContent
              leftText={`${parseHemispheres('south')}-월`}
              rightText={String(
                collectionFilter.hemispheres.south.months.map(
                  (i) =>
                    parseMonth(i.split(' - ')[0]) +
                    `${
                      parseMonth(i.split(' - ')[1]) !== undefined
                        ? ' ~ ' + parseMonth(i.split(' - ')[1])
                        : ''
                    }`
                )
              )}
            />
            <CompoundDetail.CompoundContent
              leftText={`${parseHemispheres('south')}-시간`}
              rightText={
                String(collectionFilter.hemispheres.south.time) === 'All day'
                  ? '매일'
                  : String(collectionFilter.hemispheres.south.time)
              }
            />
          </CompoundDetail.CompoundFlexColContainer>
        </CompoundDetail.CompoundSection>
      </CompoundDetail.CompoundGridContainer>

      <CompoundDetail.CompoundRightAside>
        {isLoading
          ? Array.from(
              { length: numbers.SEE_MORE },
              (_, index) => index + 1
            ).map((index) => <SkeletonSeeMore key={index} />)
          : collectionMore.map((item, index) => (
              <div
                className="w-full mb-20 text-center cursor-pointer"
                key={index}
                onClick={() =>
                  handleOnClickRouter(
                    item.uniqueEntryId
                      ? item.uniqueEntryId
                      : item.translations
                        ? item.translations['kRko']
                        : item.name
                  )
                }>
                <h1 className="text-bs_24">
                  {item.translations ? item.translations['kRko'] : item.name}
                </h1>
                <p className="relative w-[100px] h-[100px] m-auto">
                  {!isLoading && item.iconImage && (
                    <Image src={item.iconImage} alt="도감 이미지" fill />
                  )}
                </p>
              </div>
            ))}
      </CompoundDetail.CompoundRightAside>
    </CompoundDetail>
  );
}
