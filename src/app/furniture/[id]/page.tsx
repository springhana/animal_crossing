'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';

import { CompoundDetail } from '@/components/common/CompoundDetail';
import SizeIcon from '@/components/common/SizeIcon';
import SkeletonSeeMore from '@/components/skeleton/SkeletonSeeMore';
import { numbers } from '@/constants';
import useGetFurnitureDetail from '@/hooks/animalCrossing/detail/useGetFurnitureDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import { image } from '@/utils/image';
import {
  parseColor,
  parseFurnitureSourceSheets,
  parseTag,
} from '@/utils/translation';

export default function FurnitureDeatil() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);
  const { furnitureFilter, furnitureMore, translationsFurniture, isLoading } =
    useGetFurnitureDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/${title}/${id}`);
  };

  if (!furnitureFilter) {
    return notFound();
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>

      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection title={translationsFurniture?.name}>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {!isLoading && image(furnitureFilter) ? (
                <Image
                  src={image(furnitureFilter) as string | StaticImport}
                  alt="가구 이미지"
                  fill
                />
              ) : (
                <SkeletonSeeMore />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px] mobile:px-0 mobile_1:px-0">
              <CompoundDetail.CompoundContent
                leftText={'구매💰'}
                rightText={
                  furnitureFilter?.buy && furnitureFilter.buy > 0
                    ? `${furnitureFilter?.buy}벨`
                    : '비매품'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'판매💰'}
                rightText={
                  furnitureFilter?.sell
                    ? `${furnitureFilter?.sell}벨`
                    : '판매불가'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'레시피'}
                rightText={`${furnitureFilter?.diy ? '⭕' : '❌'}`}
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
                  {furnitureFilter.size}
                  <SizeIcon iconName={furnitureFilter.size} />
                </span>
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'종류'}
              rightText={parseFurnitureSourceSheets(
                furnitureFilter.sourceSheet
              )}
            />
            <CompoundDetail.CompoundContent
              leftText={'시리즈'}
              rightText={
                translationsFurniture?.series
                  ? translationsFurniture?.series
                  : parseTag(furnitureFilter.tag)
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'색상'}
              rightText={
                furnitureFilter?.colors &&
                String(
                  furnitureFilter?.colors.map((theme, i) => {
                    if (
                      furnitureFilter?.colors &&
                      i === furnitureFilter.colors.length - 1
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

        {furnitureFilter.variations && (
          <CompoundDetail.CompoundSection title={'색상'}>
            <CompoundDetail.CompoundFlexColContainer>
              <div className="flex items-center gap-10 overflow-x-auto">
                {furnitureFilter.variations.map((item, index) => (
                  <div className="text-center mb-3 mx-auto" key={index}>
                    <div className="relative w-[200px] h-[200px] bg-white rounded-full">
                      {item.storageImage ? (
                        <Image src={item.storageImage} alt="리폼 이미지" fill />
                      ) : (
                        item.image && (
                          <Image src={item.image} alt="리폼 이미지" fill />
                        )
                      )}
                    </div>
                    <p className="mt-2">
                      {parseColor(item.colors && item.colors[0])}
                    </p>
                  </div>
                ))}
              </div>
            </CompoundDetail.CompoundFlexColContainer>
          </CompoundDetail.CompoundSection>
        )}
      </CompoundDetail.CompoundGridContainer>

      <CompoundDetail.CompoundRightAside>
        {isLoading
          ? Array.from(
              { length: numbers.SEE_MORE },
              (_, index) => index + 1
            ).map((index) => <SkeletonSeeMore key={index} />)
          : furnitureMore.map((item, index) => (
              <div
                className="w-full mb-20 text-center cursor-pointer"
                key={index}
                onClick={() =>
                  handleOnClickRouter(
                    item.translations ? item.translations['kRko'] : item.name
                  )
                }>
                <h1 className="text-bs_24">
                  {item.translations ? item.translations['kRko'] : item.name}
                </h1>
                <p className="relative w-[100px] h-[100px] m-auto">
                  {!isLoading && image(item) && (
                    <Image
                      src={image(item) as string | StaticImport}
                      alt="가구 이미지"
                      fill
                    />
                  )}
                </p>
              </div>
            ))}
      </CompoundDetail.CompoundRightAside>
    </CompoundDetail>
  );
}
