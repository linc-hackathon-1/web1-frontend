import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  bgColor: ButtonBackground;
  classes?: string;
}

function Button({
  children,
  bgColor,
  classes,
  ...rest
}: ButtonProps) {
  const borderClass = bgColor === 'bg-white' ? 'border border-black' : '';
  const colorClass = bgColor === 'bg-white' ? 'text-black' : 'text-white';
  const merged = twMerge(classes, bgColor, 'py-2 px-5 rounded-md', borderClass, getHoverClass(bgColor), colorClass);

  return (
    <button type="button" className={merged} {...rest}>
      {children}
    </button>
  );
}

export default Button;

function getHoverClass(bgColor: ButtonBackground) {
  if (bgColor === 'bg-primary') {
    return 'hover:bg-primaryDark';
  }

  if (bgColor === 'bg-black') {
    return 'hover:bg-darkGrey';
  }

  return 'hover:bg-grey';
}

type ButtonBackground = 'bg-primary' | 'bg-black' | 'bg-white';
