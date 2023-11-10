'use client'

import { useNotifications } from "@/providers";
import { NotificationCard } from "./NotificationCard";

export function NotificationContainer(){
  const { notifications } = useNotifications();

  const renderNotifications = () => {
    return notifications.map((notificaiton, index) => {
      return <NotificationCard notification = {notificaiton} key={notificaiton.id ?? index} />
    });
  }

  return (
    <div className="flex flex-col gap-2 fixed top-[10px] left-0 right-0 mx-auto w-[650px] justify-center">
      {renderNotifications()}
    </div>
  );
}
