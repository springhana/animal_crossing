'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import { CompoundDetail } from '@/components/common/CompoundDetail';
import SkeletonSeeMore from '@/components/skeleton/SkeletonSeeMore';
import { numbers } from '@/constants';
import useGetVillagerDetail from '@/hooks/animalCrossing/detail/useGetVillagerDetail';
import usePathnameSplit from '@/hooks/usePathnameSplit';
import { MonthDay } from '@/utils/date';
import {
  parseGender,
  parsePersonality,
  parseSpecies,
  parseStyle,
} from '@/utils/translation';

const VillagersConstruction = dynamic(
  () =>
    import('@/components/villagers/VillagersConstruction').then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

export default function VillagersDetail() {
  const router = useRouter();
  const title = usePathnameSplit('/', 1);
  const pathname = usePathnameSplit('/', 2);

  const { villagerFilter, villagerMore, translationsVillager, isLoading } =
    useGetVillagerDetail(pathname);

  const handleOnClickRouter = (id: string) => {
    router.push(`/villagers/${id}`);
  };

  if (!villagerFilter) {
    return notFound();
  }

  return (
    <CompoundDetail>
      <CompoundDetail.CompoundLeftAside title={title}>
        <></>
      </CompoundDetail.CompoundLeftAside>
      <CompoundDetail.CompoundGridContainer>
        <CompoundDetail.CompoundSection
          title={translationsVillager?.name}
          sectionImage={
            villagerFilter?.iconImage && (
              <Image src={villagerFilter?.iconImage} alt="아이콘" fill />
            )
          }>
          <CompoundDetail.CompoundFlexContainer>
            <div className="relative max-w-[200px] h-[200px] w-full mx-auto">
              {villagerFilter?.photoImage ? (
                <Image src={villagerFilter.photoImage} alt="주민 포스터" fill />
              ) : (
                <SkeletonSeeMore />
              )}
            </div>
            <div className="flex flex-col m-auto px-10 w-full h-[200px]">
              <CompoundDetail.CompoundContent
                leftText={'생일🎂'}
                rightText={MonthDay(villagerFilter?.birthday, '/')}
              />
              <CompoundDetail.CompoundContent
                leftText={'성격🙂'}
                rightText={parsePersonality(villagerFilter?.personality)}
              />
              <CompoundDetail.CompoundContent
                leftText={'종류😻'}
                rightText={parseSpecies(villagerFilter?.species)}
              />
            </div>
          </CompoundDetail.CompoundFlexContainer>

          <CompoundDetail.CompoundFlexColContainer>
            <CompoundDetail.CompoundContent
              leftText={'대화 타입🗣️'}
              rightText={villagerFilter?.subtype}
            />
            <CompoundDetail.CompoundContent
              leftText={'스타일✨'}
              rightText={String(
                villagerFilter?.styles.map((style, i) => {
                  if (i === villagerFilter.styles.length - 1) {
                    return parseStyle(style);
                  } else {
                    return parseStyle(style) + ' ';
                  }
                })
              )}
            />
            <CompoundDetail.CompoundContent
              leftText={'성별👭'}
              rightText={parseGender(villagerFilter?.gender)}
            />
          </CompoundDetail.CompoundFlexColContainer>
        </CompoundDetail.CompoundSection>

        <CompoundDetail.CompoundSection title={'집 & 외형'}>
          <Suspense fallback={<Loading />}>
            <VillagersConstruction name={villagerFilter?.name} />
          </Suspense>

          <CompoundDetail.CompoundFlexColContainer>
            <CompoundDetail.CompoundContent
              leftText={'벽지'}
              rightText={translationsVillager?.wallpaper}
            />
            <CompoundDetail.CompoundContent
              leftText={'바닥'}
              rightText={translationsVillager?.flooring}
            />
            <CompoundDetail.CompoundContent
              leftText={'옷'}
              rightText={translationsVillager?.defaultClothing}
            />
            <CompoundDetail.CompoundContent
              leftText={'우산'}
              rightText={translationsVillager?.defaultUmbrella}
            />
            <CompoundDetail.CompoundContent
              leftText={'좋아하는 노래'}
              rightText={translationsVillager?.favoriteSong}
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
          : villagerMore.map((item, index) => (
              <div
                className="w-full mb-20 text-center cursor-pointer"
                key={index}
                onClick={() => handleOnClickRouter(item.uniqueEntryId)}>
                <h1 className="text-bs_24">{item.translations['kRko']}</h1>
                <p className="relative w-[100px] h-[100px] m-auto">
                  {item.photoImage && (
                    <Image src={item.photoImage} alt="주민 사진" fill />
                  )}
                </p>
              </div>
            ))}
      </CompoundDetail.CompoundRightAside>
    </CompoundDetail>
  );
}
