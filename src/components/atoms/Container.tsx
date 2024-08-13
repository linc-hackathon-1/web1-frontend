import {
  ComponentProps, forwardRef, HTMLAttributes, ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { convertSizeToClass } from '@/utils';
import { ContainerSize } from '@/types';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: ContainerSize;
  classes?: ComponentProps<'div'>['className'];
  direction?: 'flex-col' | 'flex-row' | 'flex-row-reverse';
  alignItems?: 'items-center' | 'items-start' | 'items-end';
  justifyContents?: 'justify-between' | 'justify-around' | 'justify-center' | 'justify-start' | 'justify-end';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  size = 'auto',
  classes,
  direction = 'flex-row',
  alignItems,
  justifyContents,
  ...rest
}, ref) => {
  const sizeClass = convertSizeToClass(size);
  const merged = twMerge('flex', sizeClass, classes, direction, alignItems, justifyContents);

  return (
    <div className={merged} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Container;
