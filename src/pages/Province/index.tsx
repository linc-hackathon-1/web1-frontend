import Page from '@components/templates/Page';
import Profile from '@/components/organisms/Profile';

function ProvincePage() {
  return (
    <Page pageName="지자체 상세보기" hideNavigation hideFooter>
      <Profile bgImg="https://picsum.photos/200" profileImg="https://picsum.photos/200" title="title" description="tjfaud" totalView={123} likeNum={1200} />
    </Page>
  );
}

export default ProvincePage;
