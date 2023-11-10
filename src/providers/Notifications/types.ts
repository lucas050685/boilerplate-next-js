export type NotificationCallback = (id: string) => void | Promise<void>;

export type NotificationActionVariant = "primary" | "secondary" | "none"

export type NotificationAction = {
  label: string | any;
  callback: NotificationCallback;
  variant?: NotificationActionVariant;
}

export type NotificationType = "log" | "error" | "warn";

export type Notification = {
  message: string;
  id?: string;
  title?: string;
  type?: NotificationType;
  actions?: NotificationAction[];
  onClose?: NotificationCallback;
  fadeOutTimer?: number;
}

export type NotificationClient = {
  pushNotification: (notification: Notification, persistent?: boolean) => string;
  removeNotification: (id?: string) => void;
  getNotifications: () => Notification[];
};
