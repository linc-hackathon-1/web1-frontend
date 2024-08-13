// eslint-disable-next-line import/prefer-default-export
export const RouterPath = {
  root: '/',
  home: '/home',
  province: (provinceId: string) => `/province/${provinceId}`,
  ranking: '/ranking',
  upload: '/upload',
  video: (videoID: string) => `/video/${videoID}`,
};
