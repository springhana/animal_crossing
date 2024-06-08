'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CompoundDetail } from '@/components/common/CompoundDetail';
import SizeIcon from '@/components/common/SizeIcon';
import useGetFashionDetail from '@/hooks/animalCrossing/detail/useGetFashionDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import { image } from '@/utils/image';
import {
  parseColor,
  parseFashionSourceSheet,
  parseFashionThemes,
  parseStyle,
} from '@/utils/translation';

export default function FashionDeatil() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);
  const { fashionFilter, fashionMore, translationsFashion, isLoading } =
    useGetFashionDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/${title}/${id}`);
  };

  if (!fashionFilter) {
    return <></>;
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>

      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection title={translationsFashion?.name}>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {!isLoading && image(fashionFilter) && (
                <Image
                  src={image(fashionFilter) as string | StaticImport}
                  alt="가구 이미지"
                  fill
                />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px]">
              <CompoundDetail.CompoundContent
                leftText={'구매💰'}
                rightText={
                  fashionFilter?.buy && fashionFilter.buy > 0
                    ? `${fashionFilter?.buy}벨`
                    : '비매품'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'판매💰'}
                rightText={
                  fashionFilter?.sell ? `${fashionFilter?.sell}벨` : '판매불가'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'레시피'}
                rightText={`${fashionFilter?.diy ? '⭕' : '❌'}`}
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
                  {fashionFilter.size}
                  <SizeIcon iconName={fashionFilter.size} />
                </span>
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'스타일'}
              rightText={
                fashionFilter.styles &&
                String(fashionFilter?.styles.map((style) => parseStyle(style)))
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'종류'}
              rightText={parseFashionSourceSheet(fashionFilter.sourceSheet)}
            />
            <CompoundDetail.CompoundContent
              leftText={'테마'}
              rightText={
                fashionFilter?.themes &&
                String(
                  fashionFilter?.themes.map((theme, i) => {
                    if (
                      fashionFilter?.themes &&
                      i === fashionFilter.themes.length - 1
                    ) {
                      return parseFashionThemes(theme);
                    } else {
                      return parseFashionThemes(theme) + ' ';
                    }
                  })
                )
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'색상'}
              rightText={
                fashionFilter?.colors &&
                String(
                  fashionFilter?.colors.map((theme, i) => {
                    if (
                      fashionFilter?.colors &&
                      i === fashionFilter.colors.length - 1
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

        {fashionFilter.variations && (
          <CompoundDetail.CompoundSection title={'색상'}>
            <CompoundDetail.CompoundFlexColContainer>
              <div className="flex items-center gap-10 overflow-x-auto">
                {fashionFilter.variations.map((item, index) => (
                  <div className="text-center mb-3 mx-auto" key={index}>
                    <div className="relative w-[200px] h-[200px] bg-white rounded-full">
                      {item.storageImage && (
                        <Image src={item.storageImage} alt="리폼 이미지" fill />
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
        {fashionMore.map((item, index) => (
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
