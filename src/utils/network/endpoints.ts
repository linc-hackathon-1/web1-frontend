const endpoints = {
  UPLOAD_VIDEO: (provinceId: string) => `/api/video/${provinceId}`,
  GET_VIDEO: (videoId: string) => `/api/video/${videoId}`,
  GET_PROVINCE: (provinceId: string) => `/api/province/${provinceId}`,
};

export default endpoints;
