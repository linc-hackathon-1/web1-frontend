import Container from '@/components/atoms/Container';
import Like from '@/components/molecules/Like';

type RankingProps = {
  Ranking: number;
  Img: string;
  Title: string;
  View: number;
  LikeNum: number;
};

function RankingContainer({
  Ranking, Img, Title, View, LikeNum,
}: RankingProps) {
  return (
    <Container alignItems="items-center">
      <p className="ml-[21px] text-[14px] text-black font-pretendard">
        {Ranking}
      </p>
      <img src={Img} alt="thumbnail" className="mx-[21px] h-[50px] w-[50px] rounded-full border" />
      <div>
        <p className="text-[16px] text-black font-pretendard">
          {Title}
        </p>
        <div className="text-[16px] text-black font-pretendard">
          조회수
          {View}
          회
        </div>
      </div>
      <div className="ml-auto mr-[13px]">
        <Like LikeNum={LikeNum} />
      </div>

    </Container>
  );
}

export default RankingContainer;
