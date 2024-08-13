import Profile from '@/components/organisms/Profile';
import Page from '@/components/templates/Page';

function HomePage() {
  return (
    <Page pageName="Home" hideFooter>
      <Profile bgImg="https://picsum.photos/200" profileImg="https://picsum.photos/200" title="title" description="tjfaud" totalView={123} likeNum={1200} />
      <p>test</p>
    </Page>
  );
}

export default HomePage;
