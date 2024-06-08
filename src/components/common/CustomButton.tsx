import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'default';
}

const buttonStyle = {
  default: 'bg-[#556B2F] text-white w-24 rounded-[1.25rem]',
};

export default function CustomButton({
  children,
  type = 'button',
  size = 'default',
  ...props
}: ICustomButtonProps) {
  return (
    <button
      type={type}
      className={`p-3 ${buttonStyle[size]} mb-5 flex justify-center items-center gap-2`}
      {...props}>
      {children}
    </button>
  );
}

export type { ICustomButtonProps };
