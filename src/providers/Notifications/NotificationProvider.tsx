'use client';

import { PropsWithChildren, useRef, useState, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { NotificationContainer } from '@/components/Notification';
import { NotificationContext } from './useNotifications';
import { Notification, NotificationClient } from './types';

export function NotificationProvider({ children }: PropsWithChildren) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notificationRef = useRef<Notification[]>(notifications);
  notificationRef.current = notifications;

  const client: NotificationClient = useMemo(() => {
    return {
      pushNotification: (notification: Notification, persist?: boolean): string => {
        const id = notification.id ?? uuid();
        notification.id = id;
        setNotifications([...notificationRef.current, notification]);
        const fadeOutTimer = notification.fadeOutTimer ?? 4000;
        if (fadeOutTimer > 0 && !persist) {
          setTimeout(() => {
            client.removeNotification(id);
          }, fadeOutTimer);
        }
        return id;
      },

      removeNotification: (id?: string) => {
        if (!id) return;
        setNotifications(
          notificationRef.current.filter((notification) => {
            return notification.id !== id;
          }),
        );
      },

      getNotifications: () => {
        return [...notificationRef.current];
      },
    };
  }, []);

  return (
    <NotificationContext.Provider value={client}>
      <NotificationContainer />
      {children}
    </NotificationContext.Provider>
  );
}
