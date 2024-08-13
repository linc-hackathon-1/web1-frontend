import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import HomePage from '@/pages/Home';
import DetailPage from '@/pages/Detail';
import RankingPage from '@/pages/Ranking';
import UploadPage from '@/pages/Upload';
import VideoPage from '@/pages/Video';

function createRouter() {
  return createBrowserRouter([
    {
      path: RouterPath.root,
      element: <HomePage />,
    },
    {
      path: RouterPath.home,
      element: <HomePage />,
    },
    {
      path: RouterPath.province(':provinceId'),
      element: <DetailPage />,
    },
    {
      path: RouterPath.ranking(':rankingID'),
      element: <RankingPage />,
    },
    {
      path: RouterPath.upload,
      element: <UploadPage />,
    },
    {
      path: RouterPath.video(':videoID'),
      element: <VideoPage />,
    },
  ]);
}

// eslint-disable-next-line import/prefer-default-export
export function Routes() {
  return <RouterProvider router={createRouter()} />;
}
