import Container from '@components/atoms/Container';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

type HeaderProps = {
  pageName: string;
};

function Header({ pageName }: HeaderProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (pageName === '영상') {
      navigate(RouterPath.home);

      return;
    }

    navigate(-1);
  }, [pageName, navigate]);

  return (
    <header>
      <Container classes="h-[57px]">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className="text-gray-700 pl-4 cursor-pointer" type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <Container
          justifyContents="justify-center"
          alignItems="items-center"
          classes="flex-grow text-sm"
        >
          {pageName}
        </Container>
        <div className="w-10" />
        {/* 오른쪽 빈 공간 */}
      </Container>
    </header>
  );
}

export default Header;
