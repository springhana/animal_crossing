'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CompoundDetail } from '@/components/common/CompoundDetail';
import SizeIcon from '@/components/common/SizeIcon';
import useGetCatalogDetail from '@/hooks/animalCrossing/detail/useGetCatalogDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import { image } from '@/utils/image';
import { parseCatalogSourceSheets, parseColor } from '@/utils/translation';

export default function CatalogDeatil() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);
  const { catalogFilter, catalogMore, translationsCatalog, isLoading } =
    useGetCatalogDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/${title}/${id}`);
  };

  if (!catalogFilter) {
    return <></>;
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>

      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection title={translationsCatalog?.name}>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {!isLoading && image(catalogFilter) && (
                <Image
                  src={image(catalogFilter) as string | StaticImport}
                  alt="기타 이미지"
                  fill
                />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px]">
              <CompoundDetail.CompoundContent
                leftText={'구매💰'}
                rightText={
                  catalogFilter?.buy && catalogFilter.buy > 0
                    ? `${catalogFilter?.buy}벨`
                    : '비매품'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'판매💰'}
                rightText={
                  catalogFilter?.sell ? `${catalogFilter?.sell}벨` : '판매불가'
                }
              />
              <CompoundDetail.CompoundContent
                leftText={'레시피'}
                rightText={`${catalogFilter?.diy ? '⭕' : '❌'}`}
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
                  {catalogFilter.size}
                  <SizeIcon iconName={catalogFilter.size} />
                </span>
              }
            />
            <CompoundDetail.CompoundContent
              leftText={'종류'}
              rightText={parseCatalogSourceSheets(catalogFilter.sourceSheet)}
            />
            <CompoundDetail.CompoundContent
              leftText={'색상'}
              rightText={
                catalogFilter?.colors &&
                String(
                  catalogFilter?.colors.map((theme, i) => {
                    if (
                      catalogFilter?.colors &&
                      i === catalogFilter.colors.length - 1
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

        {catalogFilter.variations && (
          <CompoundDetail.CompoundSection title={'색상'}>
            <CompoundDetail.CompoundFlexColContainer>
              <div className="flex items-center gap-10 overflow-x-auto">
                {catalogFilter.variations.map((item, index) => (
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
        {catalogMore.map((item, index) => (
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
