'use client'

import { createContext, useContext } from "react";
import { NotificationClient } from "./types";

export const NotificationContext = createContext<NotificationClient | undefined>(undefined);

export function useNotifications(){
  const client = useContext(NotificationContext);
  if (!client) throw new Error(`Notification client is not defined!`);

  const notifications = client.getNotifications();

  return {
    ...client,
    notifications,
  };
}
