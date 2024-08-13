import { useSuspenseQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/network';
import endpoints from '@utils/network/endpoints';
import { NextVideoResponse } from '@/types/network/response';

function useFetchNextVideo() {
  const { data: nextVideoDetail } = useSuspenseQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosInstance.get<NextVideoResponse>(endpoints.GET_NEXT_VIDEO);

      return res.data;
    },
    gcTime: 0,
  });

  return { nextVideoDetail };
}

export default useFetchNextVideo;
