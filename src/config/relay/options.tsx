import { RelayOptions } from 'relay-nextjs';
import { getClientEnvironment } from './clientEnvironment';

const Loading = () => <>loading...</>

export const options: RelayOptions<any> = {
  fallback: <Loading />,
  fetchPolicy: 'store-and-network',
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import('./serverEnvironment');
    return createServerEnvironment();
  },
};