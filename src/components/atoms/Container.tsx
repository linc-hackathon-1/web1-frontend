import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { convertSizeToClass } from '@/utils';
import { ContainerSize } from '@/types';

interface ContainerProps {
  children?: ReactNode;
  size?: ContainerSize;
  classes?: ComponentProps<'div'>['className'];
  direction?: 'flex-col' | 'flex-row' | 'flex-row-reverse';
  alignItems?: 'items-center' | 'items-start' | 'items-end';
  justifyContents?: 'justify-between' | 'justify-around' | 'justify-center' | 'justify-start' | 'justify-end';
}

function Container({
  children, size = 'auto', classes, direction = 'flex-row', alignItems, justifyContents,
}: ContainerProps) {
  const sizeClass = convertSizeToClass(size);
  const merged = twMerge('flex', sizeClass, classes, direction, alignItems, justifyContents);

  return (
    <div className={merged}>
      {children}
    </div>
  );
}

export default Container;
