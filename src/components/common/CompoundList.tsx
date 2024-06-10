import { ReactNode } from 'react';

import { numbers } from '@/constants';

import SkeletonCard from '../skeleton/SkeletonCard';
import FilterButton from './FilterButton';
import NotResultText from './NotResultText';
import SettingButton from './SettingButton';

interface ICompoundContainerProps {
  children: ReactNode;
}

function CompoundContainer({ children }: ICompoundContainerProps) {
  return (
    <main className="flex justify-center relative h-full overflow-auto">
      <div className="max-w-max_w min-w-min_w w-full mx-auto px-10">
        {children}
      </div>
    </main>
  );
}

interface ICompoundGridContainerProps {
  children: ReactNode;
  isLoading: boolean;
  isSuccess: boolean;
}

function CompoundGridContainer({
  children,
  isLoading,
  isSuccess,
}: ICompoundGridContainerProps) {
  return (
    <article className="grid grid-cols-4 tablet_1:grid-cols-3 tablet:grid-cols-2 mobile_1:grid-cols-1 mobile:grid-cols-1 gap-10 py-8">
      {isLoading ? (
        Array.from({ length: numbers.PAGE_SIZE }, (_, index) => index + 1).map(
          (index) => <SkeletonCard size="large" key={index} />
        )
      ) : isSuccess ? (
        children
      ) : (
        <NotResultText />
      )}
    </article>
  );
}

interface ICompoundFilterButtonProps {
  onShow: () => void;
}

function CompoundFilterButton({ onShow }: ICompoundFilterButtonProps) {
  return <FilterButton show={onShow} />;
}

function CompoundSettingButton() {
  return <SettingButton />;
}

function CompoundFlexContainer({ children }: ICompoundContainerProps) {
  return <div className="w-full flex justify-between">{children}</div>;
}

export const CompoundList = Object.assign(CompoundContainer, {
  CompoundGridContainer,
  CompoundFilterButton,
  CompoundFlexContainer,
  CompoundSettingButton,
});
