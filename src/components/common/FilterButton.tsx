import FilterIcon from '@/assets/icon/filter.svg';

import CustomButton from './CustomButton';

interface IFilterButtonProps {
  show: () => void;
}

export default function FilterButton({ show }: IFilterButtonProps) {
  return (
    <CustomButton onClick={show}>
      <FilterIcon />
      필터
    </CustomButton>
  );
}
