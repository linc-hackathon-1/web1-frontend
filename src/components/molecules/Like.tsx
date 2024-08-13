import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';
import Container from '@/components/atoms/Container';

type LikeProps = {
  LikeNum: number;
  size?: string;
  captionColor?: 'text-white' | 'text-grey';
};

function Like({ LikeNum, size, captionColor }: LikeProps) {
  let sizeClass = 'size-[14px]';
  const mergedTextClass = twMerge('text-12px', captionColor);

  if (size) {
    sizeClass = size;
  }

  return (
    <Container direction="flex-col" alignItems="items-center" justifyContents="justify-center">
      <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} className={sizeClass} />
      <p className={mergedTextClass}>
        {LikeNum}
      </p>
    </Container>

  );
}

export default Like;
