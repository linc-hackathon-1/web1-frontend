import useFetchVideo from '@hooks/useFetchVideo';
import Container from '@components/atoms/Container';
import VideoDescriptionArea
  from '@components/organisms/video/VideoDescriptionArea';
import YouTube from 'react-youtube';
import useFetchNextVideo from '@hooks/useFetchNextVideo';

interface VideoViewProps {
  videoId: string;
}

function VideoView({ videoId }: VideoViewProps) {
  const { videoDetail } = useFetchVideo({ videoId });
  const { nextVideoDetail } = useFetchNextVideo();

  return (
    <Container classes="h-[calc(100dvh-104px)] relative">
      <YouTube
        videoId={videoId}
        opts={{
          height: '100%',
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 0,
          },
        }}
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        }}
      />
      <VideoDescriptionArea videoDetail={videoDetail} nextVideoDetail={nextVideoDetail} />
    </Container>
  );
}

export default VideoView;
