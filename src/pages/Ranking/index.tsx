import { useState, useEffect } from 'react';
import axios from 'axios';
import Page from '@components/templates/Page';
import RankingContainer from '@/components/molecules/RankingContainer';

type RankingProps = {
  name: string;
  image: string;
  likesCount: number;
};

function RankingPage() {
  const [selectedTab, setSelectedTab] = useState('week'); // 'week' or 'total'
  const [rankingData, setRankingData] = useState<RankingProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-dream-hackertone-lzqmsbqmec4d2284.sel4.cloudtype.app/api/province/ranking-list', {
          params: {
            sort: selectedTab,
          },
        });
        setRankingData(response.data.provinces);
        console.log(response.data.provinces);
      } catch (error) {
        console.error('Error fetching ranking data', error);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <Page pageName="순위 상세보기" hideNavigation hideFooter>
      <div>
        <div className="flex justify-center bg-lightGrey px-1 py-1 m-5 rounded-[8px]">
          <button
            className={`text-xs px-7 py-2 rounded-[8px] ${selectedTab === 'week' && 'bg-white'}`}
            onClick={() => setSelectedTab('week')}
            type="button"
          >
            주간 조회수 순위
          </button>
          <button
            className={`text-xs px-7 py-2 rounded-[8px] ${selectedTab === 'total' && 'bg-white'}`}
            onClick={() => setSelectedTab('total')}
            type="button"
          >
            누적 조회수 순위
          </button>
        </div>

        <div className="mt-[20px] flex flex-col gap-4">
          {rankingData.map((item, index) => (
            <RankingContainer
              key={`rank-index-${index + 1}`}
              Ranking={index + 1} // 순위는 index를 기반으로 계산
              Img={item.image}
              Title={item.name}
              View={item.likesCount} // likesCount를 View로 사용
              LikeNum={item.likesCount}
            />
          ))}

        </div>
      </div>
    </Page>
  );
}

export default RankingPage;
