import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants';

import useAxiosInstance from '../useAxiosInstance';

const useGetVillagerDetailsNH = (value: string | undefined | null) => {
  const axiosInstance = useAxiosInstance();

  return useQuery({
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/villagers?name=${value}&nhdetails=true`
      );

      return data;
    },
    queryKey: [queryKeys.VILLAGERS, value],
    enabled: Boolean(value),
    select: (response) => {
      if (!response) return;

      return response[0].nh_details;
    },
  });
};

export default useGetVillagerDetailsNH;
