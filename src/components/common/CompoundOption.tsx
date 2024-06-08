import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

import usePreventScroll from '@/hooks/usePreventsScroll';
import { colors } from '@/types/colors';

import CustomButton, { ICustomButtonProps } from './CustomButton';

interface IOptionModalProps {
  children: ReactNode;
  isVisible: boolean;
  hideOption: () => void;
}

function OptionModal({ children, isVisible, hideOption }: IOptionModalProps) {
  usePreventScroll(isVisible);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-all duration-500 z-[102] ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
      <div
        className="bg-black opacity-60 absolute w-full h-full cursor-pointer"
        onClick={hideOption}></div>
      <div
        className={`custom-scrollbar overflow-auto w-[37.5rem] bg-white z-10 transition-all duration-500 rounded-lg shadow-modal_shadow flex flex-col ${
          isVisible ? 'mt-0 opacity-100' : 'mt-[50%] opacity-0'
        } desktop:max-h-[550px] mobile:w-screen mobile_1:w-screen mobile:h-screen mobile_1:h-screen h-fit default:max-h-[550px] tablet:max-h-[550px] tablet_1:max-h-[550px] mobile:rounded-none mobile_1:rounded-none`}>
        {children}
      </div>
    </div>
  );
}

interface IContainerProps {
  children: ReactNode;
  position?: 'center';
  background?: string;
}

const positionStyle = {
  center: 'm-auto',
};

function Container({
  children,
  position = 'center',
  background,
}: IContainerProps) {
  return (
    <div
      className={`flex flex-wrap items-center px-10 py-3 ${positionStyle[position]} ${background}`}>
      {children}
    </div>
  );
}

interface IOptionCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  hideOption: () => void;
}

function CloseButton({ hideOption, ...props }: IOptionCloseButtonProps) {
  return (
    <button
      className="p-[0.625rem] self-end text-[#838282]"
      onClick={hideOption}
      {...props}>
      ╳
    </button>
  );
}

interface ITitleProps {
  children: ReactNode;
}

function Title({ children }: ITitleProps) {
  return (
    <div className="text-center">
      <h3 className="text-bs_18 text-[#838282]">{children}</h3>
    </div>
  );
}

function Divider() {
  return <div className="m-auto w-[80%] border border-[#838282]"></div>;
}

interface IRadioBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  color?: colors;
}

function RadioBox({ title, name, color = '', ...props }: IRadioBoxProps) {
  return (
    <label className="flex cursor-pointer font-bold relative overflow-hidden mb-2">
      <input
        type="radio"
        name={name}
        className={`custom-radio ${color ? color : 'default'}-radio`}
        {...props}
      />
      <span className={`custom-text ${color ? color : 'default'}-text`}>
        {title}
      </span>
    </label>
  );
}

function Button({
  children,
  type = 'button',
  size = 'default',
  ...props
}: ICustomButtonProps) {
  return (
    <CustomButton type={type} size={size} {...props}>
      {children}
    </CustomButton>
  );
}

export const CompoundOption = Object.assign(OptionModal, {
  CloseButton,
  Container,
  Title,
  Divider,
  RadioBox,
  Button,
});
