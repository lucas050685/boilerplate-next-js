import { Notification, NotificationType, useNotifications, NotificationActionVariant } from '@/providers';
import { XMark, ErrorIcon, WarnIcon } from '../ui/icons';
import classnames from 'classnames';

export function NotificationCard({ notification }: { notification: Notification }) {
  const { removeNotification } = useNotifications();
  const selectedType: NotificationType = notification.type ?? 'log';
  const classes: Record<NotificationType, string> = {
    log: 'border-neutral-500 bg-neutral-100 text-neutral-800',
    error: 'border-red-400 bg-red-100 text-red-900',
    warn: 'border-amber-500 bg-amber-100 text-amber-700',
  };

  const variantClasses: Record<NotificationActionVariant, string> = {
    none: classes[selectedType],
    primary: classes.log,
    secondary: classes.warn,
  };

  const icons: Record<NotificationType, any> = {
    log: null,
    error: <ErrorIcon />,
    warn: <WarnIcon />,
  };

  const defaultClassName = 'border p-5 rounded w-full flex items-start gap-2';
  const selectedClassName = classnames(defaultClassName, classes[selectedType]);
  const defaultActionClass =
    'whitespace-nowrap opacity-50 hover:opacity-100 border p-2 rounded cursor-pointer min-w-[30px] h-[30px] flex justify-center items-center';
  const actionClassName = classnames(defaultActionClass, classes[selectedType]);

  const handleClose = () => {
    if (!notification.id) return;
    removeNotification(notification.id);
    if (notification.onClose) notification.onClose(notification.id);
  };

  const renderActions = () => {
    return notification.actions?.map((action) => {
      if (!notification.id) return null;
      const classNames = classnames(defaultActionClass, variantClasses[action.variant ?? 'none']);
      return (
        <div className={classNames} key={action.label} onClick={() => action.callback(notification.id ?? '')}>
          {action.label}
        </div>
      );
    });
  };

  return (
    <div className={selectedClassName}>
      {icons[selectedType] && <div className="text-lg">{icons[selectedType]}</div>}
      <div className="flex-grow">{notification.message}</div>
      <div className="flex gap-2">
        {renderActions()}
        <div className={actionClassName} onClick={handleClose}>
          <XMark />
        </div>
      </div>
    </div>
  );
}
