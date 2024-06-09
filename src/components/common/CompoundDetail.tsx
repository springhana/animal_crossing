import { ReactNode } from 'react';

import { parsePage } from '@/utils/translation';

interface ICompoundContainerProps {
  children: ReactNode;
}

function CompoundContainer({ children }: ICompoundContainerProps) {
  return (
    <main className="w-full h-[calc(100vh_-_6.25rem)] min-w-min_w pb-20 px-10 flex justify-center items-center mobile:px-2  mobile_1:px-5 ">
      <div className="p-5 flex justify-center items-center bg-black w-full max-w-max_w h-full rounded-md mobile:p-2 mobile_1:p-3">
        <div className="relative bg-[#e9e6e4] w-full h-full grid grid-cols-blog_columns grid-rows-blog_rows overflow-hidden tablet:grid-cols-tablet_blog_columns tablet_1:grid-cols-tablet_blog_columns mobile:grid-cols-moblie_blog_columns mobile_1:grid-cols-moblie_blog_columns">
          {children}
        </div>
      </div>
    </main>
  );
}

interface ICompoundLeftAsideProps {
  children: ReactNode;
  title: string;
}

function CompoundLeftAside({ children, title }: ICompoundLeftAsideProps) {
  return (
    <aside className="flex flex-col">
      <h1 className="mx-5 mt-3 border-b border-[#94918f] text-right text-bs_60 tablet:text-bs_48 tablet_1:text-bs_48 tablet:mt-5 tablet_1:mt-5 mobile:hidden mobile_1:hidden">
        {parsePage(title)}
      </h1>

      <div className="h-full my-5 flex border-r border-[#94918f]">
        <div className="relative w-[200px] h-[250px] mt-auto mb-20">
          {children}
        </div>
      </div>
    </aside>
  );
}

interface ICompoundRightAsideProps {
  children: ReactNode;
}

function CompoundRightAside({ children }: ICompoundRightAsideProps) {
  return (
    <aside className="mx-5 border-l border-[#94918f]">
      <h1 className="text-bs_43 mx-5 border-b border-[#94918f]">다음</h1>
      <section className="custom-scrollbar h-full flex flex-col overflow-auto mx-5">
        {children}
      </section>
    </aside>
  );
}

interface ICompoundGridContainerProps {
  children: ReactNode;
  isScroll?: boolean;
}

function CompoundGridContainer({
  children,
  isScroll = true,
}: ICompoundGridContainerProps) {
  return (
    <div
      className={`${
        isScroll && 'custom-scrollbar'
      } flex flex-col snap-y snap-mandatory overflow-y-auto overflow-x-hidden mt-3 mb-20 mx-5`}>
      {children}
    </div>
  );
}

interface ICompoundSectionProps {
  children: ReactNode;
  title: string | null | undefined;
  sectionImage?: ReactNode;
}

function CompoundSection({
  children,
  title,
  sectionImage,
}: ICompoundSectionProps) {
  return (
    <section className="flex-shrink-0 h-fit min-h-full ">
      <div className="w-full h-full my-5 grow snap-start">
        <h1
          className={`text-bs_60 mobile:text-bs_34 mobile_1:text-bs_34 tablet:text-bs_48 tablet_1:text-bs_48 border-b border-[#94918f] flex items-center`}>
          {title && title}
          <div className="relative w-[80px] h-[80px]">
            {sectionImage && sectionImage}
          </div>
        </h1>
        <div className="my-5 h-full">{children}</div>
      </div>
    </section>
  );
}

function CompoundFlexContainer({ children }: ICompoundContainerProps) {
  return (
    <div className="flex mt-10 mx-auto mobile:flex-col mobile_1:flex-col">
      {children}
    </div>
  );
}

function CompoundFlexColContainer({ children }: ICompoundContainerProps) {
  return <div className="flex flex-col mt-10 mx-auto">{children}</div>;
}

interface ICompoundContentProps {
  leftText?: string | null | undefined | ReactNode;
  rightText?: string | null | undefined | ReactNode;
}

function CompoundContent({ leftText, rightText }: ICompoundContentProps) {
  return (
    <p className="flex items-center justify-between h-full border-b border-gray-400 p-2">
      <span>{leftText ? leftText : '-'}</span>
      <span>{rightText ? rightText : '-'}</span>
    </p>
  );
}

export const CompoundDetail = Object.assign(CompoundContainer, {
  CompoundLeftAside,
  CompoundRightAside,
  CompoundGridContainer,
  CompoundSection,
  CompoundFlexContainer,
  CompoundFlexColContainer,
  CompoundContent,
});
