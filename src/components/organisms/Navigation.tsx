import { Link } from 'react-router-dom';
import Container from '../atoms/Container';

function Navigation() {
  return (
    <Container
      size="full-width"
      direction="flex-row"
      alignItems="items-center"
      justifyContents="justify-around"
      classes="bg-white p-4 border-t"
    >
      <Link to="/ranking" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 17l4-4 4 4m0 0l4-4 4 4m-4 0v6"
          />
        </svg>
        <div>랭킹</div>
      </Link>

      <Link to="/" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7m-9 14v-5m0-5h8m-8 0v5m0 5v5m8-5v5m0-5v-5m0-5v-5m-8 5V5m0 5V5m-8 0V5m8 0v5m0 0v5m0 5v5"
          />
        </svg>
        <div>홈</div>
      </Link>

      <Link to="/upload" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.5 4.5L15 19m0-9v12m-4-5l-4.5 4.5L15 19m0-9V4m0 0V4m0 0v9m0 9v9m0-9v9"
          />
        </svg>
        <div>업로드</div>
      </Link>
    </Container>
  );
}

export default Navigation;
