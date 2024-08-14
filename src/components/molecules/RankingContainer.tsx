import { Link } from 'react-router-dom';
import Container from '@/components/atoms/Container';
import Like from '@/components/molecules/Like';
import { RouterPath } from '@/routes/path';

type RankingProps = {
  Ranking: number;
  Img: string;
  Title: string;
  View: number;
  LikeNum: number;
  ProvinceId: number;
};

function RankingContainer({
  Ranking, Img, Title, View, LikeNum, ProvinceId,
}: RankingProps) {
  return (
    <Link to={RouterPath.province(ProvinceId.toString())}>
      <Container alignItems="items-center">
        <p className="ml-[21px] text-[14px] text-black ">
          {Ranking}
        </p>
        <img src={Img} alt="thumbnail" className="ml-[21px] mr-[12px] h-[50px] w-[50px] rounded-full border" />
        <Container alignItems="items-center" justifyContents="justify-between" classes="grow">
          <div>
            <p className="text-[16px] text-black font-bold">
              {Title}
            </p>
            <div className="text-[14px] text-black ">
              조회수
              {' '}
              {View}
              회
            </div>
          </div>
          <div className="w-[50px]">
            <Like LikeNum={LikeNum} />
          </div>
        </Container>

      </Container>
    </Link>
  );
}

export default RankingContainer;
