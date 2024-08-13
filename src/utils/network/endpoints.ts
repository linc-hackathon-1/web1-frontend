const endpoints = {
  UPLOAD_VIDEO: (provinceId: string) => `/api/video/${provinceId}`,
  GET_VIDEO: (videoId: string) => `/api/video/${videoId}`,
  GET_PROVINCE: (provinceId: string) => `/api/province/${provinceId}`,
  GET_NEXT_VIDEO: '/api/video/next-video',
};

export default endpoints;
