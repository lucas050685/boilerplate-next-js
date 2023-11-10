import { AddNotificationButton } from '@/components/Notification';
import { queryServerData, QueryServerProvider } from '@/providers/Query';

const fetchDummyData = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Anna' });
    }, 500);
  });
};

export default async function Home() {
  const client = await queryServerData(['dummy-data'], fetchDummyData);

  return (
    <QueryServerProvider>
      <div>
        <AddNotificationButton />
      </div>
    </QueryServerProvider>
  );
}
