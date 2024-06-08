import { Size } from 'animal-crossing/lib/types/Item';

import OneToOne from '@/assets/icon/size/1x1-size.svg';
import TwoToOne from '@/assets/icon/size/2x1-size.svg';
import TwoToTwo from '@/assets/icon/size/2x2-size.svg';
import ThreeToOne from '@/assets/icon/size/3x1-size.svg';
import ThreeToTwo from '@/assets/icon/size/3x2-size.svg';
import ThreeToThree from '@/assets/icon/size/3x3-size.svg';
import Other from '@/assets/icon/size/other-size.svg';

interface ISizeIconProps {
  iconName: Size | 'other' | undefined;
}

export default function SizeIcon({ iconName }: ISizeIconProps) {
  switch (iconName) {
    case '1x1':
      return <OneToOne />;
    case '2x1':
      return <TwoToOne />;
    case '2x2':
      return <TwoToTwo />;
    case '3x1':
      return <ThreeToOne />;
    case '3x2':
      return <ThreeToTwo />;
    case '3x3':
      return <ThreeToThree />;
    default:
      return <Other />;
  }
}
