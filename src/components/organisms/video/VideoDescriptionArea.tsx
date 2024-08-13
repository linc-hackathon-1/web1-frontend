import Container from '@components/atoms/Container';
import { VideoDetailResponse } from '@/types/network/response';

interface VideoDescriptionAreaProps {
  videoDetail: VideoDetailResponse;
}

function VideoDescriptionArea({ videoDetail }: VideoDescriptionAreaProps) {
  return (
    <Container size="full-width" classes="absolute bottom-0 left-0 bg-[rgba(0,0,0,.4)]">
      <Container size="full-width" classes="px-5 py-6 pb-10">
        <img src={videoDetail.province?.image} alt="alt" className="w-16 h-16 rounded-full" />
        <Container classes="px-5 h-full" direction="flex-col" justifyContents="justify-center">
          <p className="text-white font-bold text-2xl">{videoDetail.province?.name}</p>
          <p className="text-lightGrey text-base">{videoDetail.description}</p>
        </Container>
      </Container>
    </Container>
  );
}

export default VideoDescriptionArea;
