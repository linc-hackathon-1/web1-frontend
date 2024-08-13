import Container from '@components/atoms/Container';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Like from '@components/molecules/Like';
import { VideoDetailResponse } from '@/types/network/response';
import { RouterPath } from '@/routes/path';

interface VideoDescriptionAreaProps {
  videoDetail: VideoDetailResponse;
  nextVideoDetail: string;
}

function VideoDescriptionArea({ videoDetail, nextVideoDetail }: VideoDescriptionAreaProps) {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClickNext = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    location.href = RouterPath.video(nextVideoDetail as string);
  }, [navigate, nextVideoDetail]);

  return (
    <Container
      size="full-width"
      direction="flex-col"
      classes="absolute bottom-0 left-0"
      ref={containerRef}
    >
      <Container
        size="full-width"
        classes="bg-[rgba(0,0,0,.4)]"
      >
        <Container size="full-width" classes="px-5 py-6">
          <img
            src={videoDetail.province?.image}
            alt="alt"
            className="w-16 h-16 rounded-full"
          />
          <Container
            classes="px-5 h-full"
            direction="flex-col"
            justifyContents="justify-center"
          >
            <p
              className="text-white font-bold text-2xl"
            >
              {videoDetail.province?.name}
            </p>
            <p className="text-lightGrey text-base">{videoDetail.description}</p>
          </Container>
          <Container classes="grow" justifyContents="justify-end">
            <Like LikeNum={videoDetail.likesCount as number} size="w-[20px] h-[30px]" captionColor="text-white" />
          </Container>
        </Container>
      </Container>
      <Container
        size="full-width"
        justifyContents="justify-center"
        classes="bg-[rgba(0,0,0,.4)] cursor-pointer"
        onClick={handleClickNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#e8eaed"
        >
          <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
      </Container>
    </Container>

  );
}

export default VideoDescriptionArea;
