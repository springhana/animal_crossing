import { ccolor, colors } from '@/types/colors';

interface IColors {
  title: string;
  color: colors;
}

export const COLORS: IColors[] = [
  { title: '전체', color: '' },
  { title: '아쿠아', color: 'Aqua' },
  { title: '베이지', color: 'Beige' },
  { title: '블랙', color: 'Black' },
  { title: '블루', color: 'Blue' },
  { title: '브라운', color: 'Brown' },
  { title: '화려한', color: 'Colorful' },
  { title: '그레이', color: 'Gray' },
  { title: '그린', color: 'Green' },
  { title: '오렌지', color: 'Orange' },
  { title: '핑크', color: 'Pink' },
  { title: '레드', color: 'Red' },
  { title: '화이트', color: 'White' },
  { title: '옐로', color: 'Yellow' },
];

interface ICColors {
  title: string;
  color: ccolor;
}

export const CCOLORS: ICColors[] = [
  { title: '전체', color: '' },
  { title: '아쿠아', color: 'Aqua' },
  { title: '베이지', color: 'Beige' },
  { title: '블랙', color: 'Black' },
  { title: '블루', color: 'Blue' },
  { title: '브라운', color: 'Brown' },
  { title: '그레이', color: 'Gray' },
  { title: '그린', color: 'Green' },
  { title: '오렌지', color: 'Orange' },
  { title: '핑크', color: 'Pink' },
  { title: '퍼플', color: 'Purple' },
  { title: '레드', color: 'Red' },
  { title: '화이트', color: 'White' },
  { title: '옐로', color: 'Yellow' },
];
