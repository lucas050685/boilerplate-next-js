'use client';

import { useNotifications, NotificationAction, getQueryData } from '@/providers';

export function AddNotificationButton() {
  const { pushNotification } = useNotifications();
  const client = getQueryData<any>(['dummy-data']);

  const handleClick = () => {
    const action1: NotificationAction = {
      label: 'By now',
      callback: () => console.log('Bying it'),
      variant: 'none',
    };

    const action2: NotificationAction = {
      label: 'Leve it',
      callback: () => console.log('Leving it'),
      variant: 'secondary',
    };

    pushNotification({
      message: 'New Message long and tedious message that I can put in here',
      type: 'error',
      actions: [action1, action2],
    });
  };

  return (
    <button className="p-4 bg-neutral-400 text-sm text-white rounded-full" onClick={handleClick}>
      {client?.name ?? 'Add Notification'}
    </button>
  );
}
