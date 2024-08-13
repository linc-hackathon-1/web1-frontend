const endpoints = {
  UPLOAD_VIDEO: (provinceId: string) => `/api/video/${provinceId}`,
  GET_VIDEO: (videoId: string) => `/api/video/${videoId}`,
};

export default endpoints;
