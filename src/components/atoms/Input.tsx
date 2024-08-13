import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classes?: string;
}

function Input({
  classes,
  ...rest
}: InputProps) {
  const merged = twMerge(classes, 'border border-lightGrey p-2 h-[26px] text-[10px] w-full rounded-md focus:border-primary focus:outline-none');

  return (
    <input
      className={merged}
      {...rest}
    />
  );
}

export default Input;
