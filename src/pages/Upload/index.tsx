import Page from '@components/templates/Page';
import Input from '@components/atoms/Input';
import Textarea from '@components/atoms/Textarea';

function UploadPage() {
  return (
    <Page pageName="영상 업로드" hideNavigation hideFooter>
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
    </Page>
  );
}

export default UploadPage;
