import bell from '@assets/bell.svg';
import search from '@assets/search.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RankingContainer from '@components/molecules/RankingContainer';
import Banner from '@components/organisms/Banner';
import Grid from '@components/atoms/Grid';
import VideoItem from '@components/molecules/VideoItem';
import Container from '@/components/atoms/Container';
import Page from '@/components/templates/Page';
import { VideoItemProps } from '@/types';

type RankingProps = {
  name: string;
  image: string;
  likesCount: number;
  provinceId: number;
};

const tags = ['B급', '행사', '정책', '관광', '이슈'];
type Tag = typeof tags[number];

function HomePage() {
  const [rankingData, setRankingData] = useState<RankingProps[]>([]);
  const [tag, setTag] = useState<Tag>('B급');
  const [videoData, setVideoData] = useState<VideoItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-dream-hackertone-lzqmsbqmec4d2284.sel4.cloudtype.app/api/province/ranking-list', {
          params: {
            sort: 'total',
          },
        });
        const videoResponse = await axios.get(`https://port-0-dream-hackertone-lzqmsbqmec4d2284.sel4.cloudtype.app/api/video/list/${tag}?page=0`);

        setRankingData(response.data.provinces);
        setVideoData(videoResponse.data.videos);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [tag]);

  const itemClass = 'px-3 py-2 rounded-full border cursor-pointer border-lightGrey';
  const selectedItemClass = 'px-3 py-2 rounded-full border bg-primary border-lightGrey text-white';

  return (
    <Page pageName="Home" hideFooter hideHeader>
      <Container size="full-width">
        <Container size="full-width" classes="px-6 pt-16" direction="flex-col">
          <Container
            size="full-width"
            alignItems="items-center"
            justifyContents="justify-between"
            classes="pb-6"
          >
            <p className="text-2xl font-bold text-black">지역감성</p>
            <Container classes="gap-4">
              <img src={search} alt="" className="w-4 h-4" />
              <img src={bell} alt="" className="w-4 h-4" />
            </Container>
          </Container>

          <Container
            direction="flex-col"
            classes="gap-3 py-4 rounded-lg shadow-lg mb-3"
          >
            {rankingData.map((item, index) => (
              <RankingContainer
                key={`rank-index-${index + 1}`}
                Ranking={index + 1} // 순위는 index를 기반으로 계산
                Img={item.image}
                Title={item.name}
                View={item.likesCount + Math.floor(Math.random() * 10)
                  + 1} // likesCount를 View로 사용
                LikeNum={item.likesCount}
                ProvinceId={item.provinceId}
              />
            ))}
          </Container>
          <Banner />
          <p className="text-2xl font-bold text-black mt-12">주간 인기영상</p>
          <Container size="full-width" classes="gap-2 py-3">
            {
              tags.map((item) => (
                <Container
                  justifyContents="justify-center"
                  alignItems="items-center"
                  key={item}
                  classes={item === tag ? selectedItemClass : itemClass}
                  onClick={() => setTag(item)}
                >
                  {item}
                </Container>
              ))
            }
          </Container>
          <Grid columns="grid-cols-2" classes="gap-3">
            {videoData.map((item) => (
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

          <Container classes="h-[100px] " />
        </Container>
      </Container>
    </Page>
  );
}

export default HomePage;
