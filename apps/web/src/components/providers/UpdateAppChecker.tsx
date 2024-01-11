import { useNotificationDispatch } from './NotificationProvider';
import { useEffect } from 'react';

export function UpdateAppChecker() {
  const notificationDispatch = useNotificationDispatch();

  useEffect(() => {
    if (localStorage.getItem('updateReady') === 'true') {
      localStorage.setItem('updateReady', 'false');
      const timeout = setTimeout(() => {
        notificationDispatch({
          message: `Mere is ready to update! Restart the app to see the latest version.`,
          variant: 'info',
          type: 'set_notification',
          button: {
            action: () => {
              localStorage.removeItem('updateReady');
              window.location.replace(window.location.href);
            },
            text: 'Click to Restart',
          },
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }

    return () => undefined;
  }, [notificationDispatch]);

  return null;
}
