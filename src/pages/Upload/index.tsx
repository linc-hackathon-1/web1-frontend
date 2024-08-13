import Page from '@components/templates/Page';
import Input from '@components/atoms/Input';
import Textarea from '@components/atoms/Textarea';
import Container from '@components/atoms/Container';

function UploadPage() {
  return (
    <Page pageName="영상 업로드" hideNavigation hideFooter>
      <Container size="full-width">
        <Container size="full-width" classes="px-3 gap-3" direction="flex-col">
          <p>upload</p>
          <Input
            placeholder="30자 이내의 제목을 입력해 주세요."
            maxLength={30}
            type="text"
          />
          <Textarea
            placeholder="100자 이내의 설명을 입력해 주세요."
            maxLength={100}
            rows={4}
          />
        </Container>
      </Container>
    </Page>
  );
}

export default UploadPage;
