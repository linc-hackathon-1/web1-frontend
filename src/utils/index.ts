import { ContainerSize } from '@/types';

// eslint-disable-next-line import/prefer-default-export
export function convertSizeToClass(size: ContainerSize) {
  if (size === 'match-parent') {
    return 'w-full h-full';
  }

  if (size === 'full-width') {
    return 'w-full';
  }

  return '';
}
