'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ICardProps {
  image: string | undefined | null;
  title?: string | null;
  id: string | undefined | null;
  pathname: string;
  size?: 'large' | 'medium';
}

export const sizeStyle = {
  large: 'h-[23rem]',
  medium: 'h-72',
};

export default function Card({
  image,
  title,
  id,
  pathname,
  size = 'medium',
}: ICardProps) {
  const router = useRouter();
  const cardSize = sizeStyle[size];

  const handleOnClickRouter = () => {
    router.push(`/${pathname}/${id || title}`);
  };

  if (!image) {
    return <></>;
  }

  return (
    <div
      className="card relative w-72 m-auto flex flex-col justify-end bg-white shadow-card_shadow cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05]"
      onClick={handleOnClickRouter}>
      <div className="w-3 h-3 absolute -top-[6px] left-[50%] bg-black rounded-full shadow-lg z-10"></div>

      <section className={`relative w-72 ${cardSize}`}>
        {image && (
          <>
            <Image
              src={image}
              alt="이미지"
              sizes="320px"
              fill
              className="object-contain object-center"
            />

            <div
              className={`absolute top-0 opacity-30 bg-black hover:opacity-0 transition-opacity ${cardSize}`}></div>
          </>
        )}
      </section>

      <div className="relative z-1 p-[15px] text-[#828282] bg-white lowercase font-bold w-full">
        {title && title}
      </div>
    </div>
  );
}
