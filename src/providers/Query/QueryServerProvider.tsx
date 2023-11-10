'use server';

import { HydrationBoundary, QueryClient, dehydrate, QueryFunction, QueryKey } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const serverQueryClient = new QueryClient();

export const queryServerData = async <DataType = unknown, Keys extends QueryKey = QueryKey>(
  keys: Keys,
  fn: QueryFunction<DataType, Keys>,
) => {
  await serverQueryClient.prefetchQuery({
    queryKey: keys,
    queryFn: fn,
  });
  const response = serverQueryClient.getQueryData<DataType>(keys);
  return response;
};

export async function QueryServerProvider({ children }: PropsWithChildren) {
  return <HydrationBoundary state={dehydrate(serverQueryClient)}>{children}</HydrationBoundary>;
}
