import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';

function Banner() {
  return (
    <Container
      style={{ background: 'linear-gradient(120deg, #F7A6A6, #FD7070, #F29539, #FAC60E)' }}
      direction="flex-col"
      classes="h-95px pt-[16px] rounded-lg"
    >
      <div className="ml-[18px] text-white font-bold">
        <p>우리 지역을</p>
        <p>가장 쉽게 알리는 방법은?</p>
      </div>
      <div className="flex justify-end mt-[13px] shadow-lg">
        <Button bgColor="bg-black" classes="mx-[14px] mb-[8px] h-[25px] text-[10px] flex items-center justify-center">비용 없이 홍보하기 &gt;</Button>
      </div>
    </Container>
  );
}

export default Banner;
