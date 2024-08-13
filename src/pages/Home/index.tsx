import RankingContainer from '@/components/molecules/RankingContainer';
import Page from '@/components/templates/Page';

function HomePage() {
  return (
    <Page pageName="Home" hideFooter>
      <RankingContainer Ranking={1} Img="https://picsum.photos/200" Title="title" View={123} LikeNum={1200} />
      <p>test</p>
    </Page>
  );
}

export default HomePage;
