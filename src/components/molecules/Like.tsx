import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/atoms/Container';

type LikeProps = {
  LikeNum: number;
};

function Like({ LikeNum }: LikeProps) {
  return (
    <Container direction="flex-col" alignItems="items-center" justifyContents="justify-center">
      <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} className="size-[14px]" />
      <p className="text-[12px] text-grey">
        {LikeNum}
      </p>
    </Container>

  );
}

export default Like;
