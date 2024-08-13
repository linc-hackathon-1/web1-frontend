import Container from '@components/atoms/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RouterPath } from '@/routes/path';
import { VideoItemProps } from '@/types';

function VideoItem({
  id, name, likes,
}: VideoItemProps) {
  const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <Container
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      direction="flex-col"
      classes="w-full h-[230px] rounded-lg"
      justifyContents="justify-end"
    >
      <Link to={RouterPath.video(id)}>
        <Container classes="w-full px-3 bg-[rgba(0,0,0,0.3)] py-1" direction="flex-col">
          <Container alignItems="items-center" classes="gap-2">
            <FontAwesomeIcon icon={faHeart} style={{ color: 'white' }} className="w-5 h-5" />
            <p className="text-white ">{likes}</p>
          </Container>
          <p className="text-white">
            {name}
          </p>
          <p className="text-lightGrey">
            조회수
            {Math.floor(Math.random() * 10) + 1}
            만회
          </p>
        </Container>
      </Link>
    </Container>
  );
}

export default VideoItem;
