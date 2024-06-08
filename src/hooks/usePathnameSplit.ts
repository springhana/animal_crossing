import { usePathname } from 'next/navigation';

const usePathnameSplit = (value: string, index: number) => {
  const pathname = usePathname();

  return pathname.split(value)[index];
};

export default usePathnameSplit;
