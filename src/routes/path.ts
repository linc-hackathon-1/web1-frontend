// eslint-disable-next-line import/prefer-default-export
export const RouterPath = {
  root: '/',
  home: '/home',
  province: (provinceId: string) => `/province/${provinceId}`,
  ranking: (rankingID: string) => `/ranking/${rankingID}`,
  upload: '/upload',
  video: (videoID: string) => `/video/${videoID}`,
};
