import { useSuspenseQuery } from '@tanstack/react-query';
import QueryKeys from '@utils/network/queryKeys';
import axiosInstance from '@utils/network';
import endpoints from '@utils/network/endpoints';
import { ProvinceResponse } from '@/types/network/response';

interface UseFetchProvinceDataProps {
  provinceId: string;
}

function useFetchProvinceData({ provinceId }: UseFetchProvinceDataProps) {
  const { data: provinceData } = useSuspenseQuery({
    queryKey: [QueryKeys.QUERY_KEY_PROVINCE, provinceId],
    queryFn: async () => {
      const res = await axiosInstance.get<ProvinceResponse>(endpoints.GET_PROVINCE(provinceId));

      return res.data;
    },
  });

  return { provinceData };
}

export default useFetchProvinceData;
