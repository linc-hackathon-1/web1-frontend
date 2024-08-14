import Page from '@components/templates/Page';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@components/atoms/Grid';
import VideoItem from '@components/molecules/VideoItem';
import Container from '@components/atoms/Container';
import Profile from '@/components/organisms/Profile';

interface VideoData {
  id: string;
  provinceName: string;
  videoName: string;
  url: string;
  likes: number;
}

function ProvincePage() {
  const { provinceId } = useParams<{ provinceId: string }>();
  const [videos, setVideos] = useState<VideoData[]>([]);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          'https://port-0-dream-hackertone-lzqmsbqmec4d2284.sel4.cloudtype.app/api/video/province',
          {
            params: {
              provinceId,
              page: 0,
            },
          },
        );
        setVideos(response.data.videos as VideoData[]);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, [provinceId]);

  if (!provinceId) return null;

  return (
    <Page pageName="지자체 상세보기" hideNavigation hideFooter>
      <Profile provinceId={parseInt(provinceId, 10)} />
      <Container classes="px-3 py-4">
        <Grid columns="grid-cols-2" classes="gap-3">
          {videos.map((item) => (
            <VideoItem
              id={item.id}
              videoName={item.videoName}
              url={item.url}
              likes={item.likes}
              key={`video-key-${item.id}`}
              provinceName={item.provinceName}
            />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}

export default ProvincePage;
