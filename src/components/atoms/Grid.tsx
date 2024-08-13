import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface GridProps {
  rows?: string;
  columns?: string;
  gap?: string;
  classes?: string;
  children?: ReactNode;
}

function Grid({
  rows, columns, gap, classes, children,
}: GridProps) {
  const merged = twMerge('grid', rows, columns, gap, classes);

  return (
    <div className={merged}>
      {children}
    </div>
  );
}

export default Grid;
