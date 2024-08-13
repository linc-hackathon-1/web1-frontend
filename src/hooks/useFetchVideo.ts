import { useSuspenseQuery } from '@tanstack/react-query';
import QueryKeys from '@utils/network/queryKeys';
import axiosInstance from '@utils/network';
import endpoints from '@utils/network/endpoints';
import { VideoDetailResponse } from '@/types/network/response';

interface UseFetchVideoProps {
  videoId: string;
}

function useFetchVideo({ videoId }: UseFetchVideoProps) {
  const { data: videoDetail } = useSuspenseQuery({
    queryKey: [QueryKeys.QUERY_KEY_VIDEO, videoId],
    queryFn: async () => {
      const res = await axiosInstance.get<VideoDetailResponse>(endpoints.GET_VIDEO(videoId));

      return res.data;
    },
  });

  return { videoDetail };
}

export default useFetchVideo;
