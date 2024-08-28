import Page from '@components/templates/Page';
import Input from '@components/atoms/Input';
import Textarea from '@components/atoms/Textarea';
<<<<<<< HEAD
import Button from '@components/atoms/Button';
=======
import Container from '@components/atoms/Container';
>>>>>>> 3301fd72c77f665ee8633944eceae10b7d074594

function UploadPage() {
  return (
    <Page pageName="영상 업로드" hideNavigation hideFooter>
<<<<<<< HEAD
      <div className="flex flex-col gap-3 px-[28px] py-[20px]">
        <div className="flex flex-col gap-1">
          <div className="text-[13px] font-bold">영상 제목</div>
=======
      <Container size="full-width">
        <Container size="full-width" classes="px-3 gap-3" direction="flex-col">
          <p>upload</p>
>>>>>>> 3301fd72c77f665ee8633944eceae10b7d074594
          <Input
            placeholder="30자 이내의 제목을 입력해 주세요."
            maxLength={30}
            type="text"
          />
<<<<<<< HEAD
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[13px] font-bold">영상 설명</div>
          <Textarea
            placeholder="100자 이내의 설명을 입력해주세요."
            maxLength={100}
            rows={4}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[13px] font-bold">URL 링크</div>
          <Input
            placeholder="유튜브 URL 링크를 입력해주세요."
            maxLength={30}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[13px] font-bold">썸네일</div>
          <div className="w-full h-[450px] rounded-[10px] bg-lightGrey" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <div className="text-[13px] font-bold">해시태그</div>
            <div className="text-[9px] text-lightGrey">중복 선택이 가능해요</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Button bgColor="bg-black" classes="w-full ">취소</Button>
          </div>
          <div className="w-full">
            <Button bgColor="bg-primary" classes="w-full">등록</Button>
          </div>
        </div>

      </div>

=======
          <Textarea
            placeholder="100자 이내의 설명을 입력해 주세요."
            maxLength={100}
            rows={4}
          />
        </Container>
      </Container>
>>>>>>> 3301fd72c77f665ee8633944eceae10b7d074594
    </Page>
  );
}

export default UploadPage;
