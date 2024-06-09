import Image from 'next/image';

import useGetVillagerDetailsNH from '@/hooks/queries/useGetVillagerDetailsNH';

interface IVillagersConstructionProps {
  name: string | undefined;
}

export default function VillagersConstruction({
  name,
}: IVillagersConstructionProps) {
  const {
    isLoading: isLoadingNH,
    isError,
    data,
  } = useGetVillagerDetailsNH(name);

  if (!name) {
    return <></>;
  }

  return (
    <div className="flex justify-around items-center mobile:flex-col mobile_1:flex-col">
      {isLoadingNH && isError
        ? '로딩'
        : data && (
            <>
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative w-[300px] h-[300px]">
                  {data.house_exterior_url && (
                    <Image src={data.house_exterior_url} alt="집 외형" fill />
                  )}
                </div>
                <p>집 외형</p>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative w-[300px] h-[300px]">
                  {data.house_interior_url && (
                    <Image src={data.house_interior_url} alt="집 안" fill />
                  )}
                </div>
                <p>집 안</p>
              </div>
            </>
          )}
    </div>
  );
}
