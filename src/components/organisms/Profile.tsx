import Container from '../atoms/Container';
import Like from '../molecules/Like';

interface ProfileProps {
  bgImg: string;
  profileImg: string;
  title: string;
  description: string;
  totalView: number;
  likeNum: number;
}

function Profile({
  bgImg, profileImg, title, description, totalView, likeNum,
}: ProfileProps) {
  return (
    <Container direction="flex-col">
      <img src={bgImg} alt="thumbnail" className="h-[150px]" />
      <Container alignItems="items-center" classes="h-[90px] shadow-md">
        <img src={profileImg} alt="thumbnail" className="ml-[38px] h-[60px] w-[60px] rounded-full border-[2px]" />
        <div className="ml-[20px]">
          <p className="text-[16px] text-black font-pretendard">
            {title}
          </p>
          <p className="text-[11px] text-darkGrey font-pretendard">
            {description}
          </p>
          <div className="text-[9px] text-grey font-pretendard">
            총 조회수
            {totalView}
            회
          </div>
        </div>
        <div className="ml-auto mr-[13px]">
          <Like LikeNum={likeNum} />
        </div>
      </Container>

    </Container>
  );
}

export default Profile;
