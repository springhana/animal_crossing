import Image from 'next/image';

interface IImageDynamicProps {
  src: string;
  alt: string;
  size: number;
}

export default function ImageDynamic({ src, alt, size }: IImageDynamicProps) {
  return (
    <div className={`relative w-[${size}px] h-[${size}px]`}>
      {src && <Image src={src} alt={alt} fill />}
    </div>
  );
}
