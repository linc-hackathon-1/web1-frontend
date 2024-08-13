type HeaderProps = {
  pageName: string;
};

const Header = ({ pageName }: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center w-full h-14 bg-white shadow-md border-b border-gray-200">
        <button className="text-gray-700 pl-4">
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
        <div className="flex justify-center items-center flex-grow text-sm">
          <div>{pageName}</div>
        </div>
        <div className="w-10"></div> {/* 오른쪽 빈 공간 */}
      </div>
    </>
  );
};

export default Header;
