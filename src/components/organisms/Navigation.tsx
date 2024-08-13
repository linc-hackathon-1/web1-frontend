import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faRankingStar, faVideo, faFileVideo,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from '@/components/atoms/Container';
import { RouterPath } from '@/routes/path';

function Navigation() {
  const DEFAULT_VIDEO_ID = 'H92RadYNIOw';

  return (
    <Container
      size="full-width"
      direction="flex-row"
      alignItems="items-center"
      justifyContents="justify-around"
      classes="fixed bottom-0 left-0 bg-white p-3 "
    >
      <Link to={RouterPath.root} className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faHome} />
        <div className="text-[8px]">홈</div>
      </Link>

      <Link to={RouterPath.ranking} className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faRankingStar} />
        <div className="text-[8px]">랭킹</div>
      </Link>

      <Link to={RouterPath.video(DEFAULT_VIDEO_ID)} className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faVideo} />
        <div className="text-[8px]">영상</div>
      </Link>

      <Link to={RouterPath.upload} className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faFileVideo} />
        <div className="text-[8px]">업로드</div>
      </Link>
    </Container>
  );
}

export default Navigation;
