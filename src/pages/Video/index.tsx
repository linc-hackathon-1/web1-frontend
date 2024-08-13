import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorSuspenseBoundary from '@components/molecules/ErrorSuspenseBoundary';
import VideoView from '@components/organisms/video/VideoView';
import VideoNavigator from '@components/organisms/video/VideoNavigator';
import Container from '@components/atoms/Container';
import VideoViewSkeleton from '@components/organisms/video/VideoViewSkeleton';
import Page from '@/components/templates/Page';
import { RouterPath } from '@/routes/path';

function VideoPage() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!videoId) {
      navigate(RouterPath.root);
    }
  }, [navigate, videoId]);

  if (!videoId) {
    return null;
  }

  return (
    <Page pageName="영상" hideFooter hideNavigation>
      <Container direction="flex-col" classes="relative">
        <ErrorSuspenseBoundary suspenseFallback={<VideoViewSkeleton />}>
          <VideoView videoId={videoId} />
        </ErrorSuspenseBoundary>
      </Container>
      <VideoNavigator />
    </Page>
  );
}

export default VideoPage;
