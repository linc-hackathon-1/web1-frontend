import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faRankingStar, faVideo, faFileVideo,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';

function Navigation() {
  return (
    <Container
      size="full-width"
      direction="flex-row"
      alignItems="items-center"
      justifyContents="justify-around"
      classes="fixed bottom-0 left-0 bg-white p-3 "
    >
      <Link to="/" className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faHome} />
        <div className="text-[8px]">홈</div>
      </Link>

      <Link to="/ranking" className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faRankingStar} />
        <div className="text-[8px]">랭킹</div>
      </Link>

      <Link to="/videos" className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faVideo} />
        <div className="text-[8px]">영상</div>
      </Link>

      <Link to="/upload" className="flex flex-col items-center gap-1">
        <FontAwesomeIcon className="text-[20px]" icon={faFileVideo} />
        <div className="text-[8px]">업로드</div>
      </Link>
    </Container>
  );
}

export default Navigation;
