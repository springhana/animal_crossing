import { styles } from '@/types/styles';
import { themes } from '@/types/themes';

export const SOURCESHEETS = [
  {
    title: '전체',
    sourceSheet: '',
  },
  {
    title: '상의',
    sourceSheet: 'Tops',
  },
  {
    title: '하의',
    sourceSheet: 'Bottoms',
  },
  {
    title: '한벌',
    sourceSheet: 'Dress-Up',
  },
  {
    title: '모자',
    sourceSheet: 'Headwear',
  },
  {
    title: '장식품',
    sourceSheet: 'Accessories',
  },
  {
    title: '양말',
    sourceSheet: 'Socks',
  },
  {
    title: '신발',
    sourceSheet: 'Shoes',
  },
  {
    title: '가방',
    sourceSheet: 'Bags',
  },
  {
    title: '우산',
    sourceSheet: 'Umbrellas',
  },
  {
    title: '잠수복',
    sourceSheet: 'Clothing Other',
  },
];

interface IThemes {
  title: string;
  theme: themes;
}

export const THEMES: IThemes[] = [
  {
    title: '전체',
    theme: '',
  },
  {
    title: '릴랙스',
    theme: 'Comfy',
  },
  {
    title: '데일리',
    theme: 'Everyday',
  },
  {
    title: '메르헨',
    theme: 'Fairy tale',
  },
  {
    title: '포멀',
    theme: 'Formal',
  },
  {
    title: '호러',
    theme: 'Goth',
  },
  {
    title: '아웃도어',
    theme: 'Outdoorsy',
  },
  {
    title: '파티',
    theme: 'Party',
  },
  {
    title: '스포츠',
    theme: 'Sporty',
  },
  {
    title: '스테이지',
    theme: 'Theatrical',
  },
  {
    title: '바캉스',
    theme: 'Vacation',
  },
  {
    title: '비즈니스',
    theme: 'Work',
  },
];

interface IStyles {
  title: string;
  styles: styles;
}

export const STYLES: IStyles[] = [
  { title: '전체', styles: '' },
  { title: '활동적인', styles: 'Active' },
  { title: '멋진', styles: 'Cool' },
  { title: '귀여운', styles: 'Cute' },
  { title: '우아한', styles: 'Elegant' },
  { title: '화려한', styles: 'Gorgeous' },
  { title: '단순한', styles: 'Simple' },
];
