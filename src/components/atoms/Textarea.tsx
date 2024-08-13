import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  classes?: string;
}

function Textarea({
  classes,
  ...rest
}: TextareaProps) {
  const merged = twMerge(classes, 'border border-lightGrey p-2 h-[63px] text-[10px] w-full rounded-md focus:border-primary focus:outline-none');

  return (
    <textarea
      className={merged}
      {...rest}
    />
  );
}

export default Textarea;
