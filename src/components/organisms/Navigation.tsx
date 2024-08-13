import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Container from "../atoms/Container";

function Navigation() {
  return (
    <Container
      size="full-width"
      direction="flex-row"
      alignItems="items-center"
      justifyContents="justify-around"
      classes="bg-white p-3 "
    >
      <Link to="/" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHome} />
        <div className="text-xs">홈</div>
      </Link>

      <Link to="/ranking" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faRankingStar} />
        <div className="text-xs">랭킹</div>
      </Link>

      <Link to="/videos" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faVideo} />
        <div className="text-xs">영상</div>
      </Link>

      <Link to="/upload" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faFileVideo} />
        <div className="text-xs">업로드</div>
      </Link>
    </Container>
  );
}

export default Navigation;
