import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/Home';
import ProvincePage from 'pages/Province';
import RankingPage from '@pages/Ranking';
import UploadPage from '@pages/Upload';
import VideoPage from '@pages/Video';
import { RouterPath } from '@/routes/path';

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
      element: <ProvincePage />,
    },
    {
      path: RouterPath.ranking,
      element: <RankingPage />,
    },
    {
      path: RouterPath.upload,
      element: <UploadPage />,
    },
    {
      path: RouterPath.video(':videoId'),
      element: <VideoPage />,
    },
  ]);
}

// eslint-disable-next-line import/prefer-default-export
export function Routes() {
  return <RouterProvider router={createRouter()} />;
}
