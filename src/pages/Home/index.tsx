import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Profile from '@/components/organisms/Profile';
import Page from '@/components/templates/Page';

function HomePage() {
  return (
    <Page pageName="Home" hideFooter>
      <Profile bgImg="https://picsum.photos/200" profileImg="https://picsum.photos/200" title="title" description="tjfaud" totalView={123} likeNum={1200} />
      <Container
        style={{ background: 'linear-gradient(120deg, #F7A6A6, #FD7070, #F29539, #FAC60E)' }}
        direction="flex-col"
        classes="h-95px pt-[16px] mx-[25px] mt-[13px] rounded-lg"
      >
        <div className="ml-[18px] text-white font-bold">
          <p>우리 지역을</p>
          <p>가장 쉽게 알리는 방법은?</p>
        </div>
        <div className="flex justify-end mt-[13px] shadow-lg">
          <Button bgColor="bg-black" classes="mx-[14px] mb-[8px] w-[125px] h-[25px] text-[10px] flex items-center justify-center">비용 없이 홍보하기 &gt;</Button>
        </div>
      </Container>
    </Page>
  );
}

export default HomePage;
