import { useState } from 'react';
import { X, Bell, BellOff, CheckCheck, Trash2 } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [dndMode, setDndMode] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New lesson available',
      message: 'Advanced React Hooks - Chapter 5 is now available',
      time: '5 min ago',
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: 'Assignment graded',
      message: 'Your React Final Project received 95/100',
      time: '1 hour ago',
      read: false,
      type: 'success'
    },
    {
      id: 3,
      title: 'Upcoming deadline',
      message: 'Machine Learning Quiz due in 2 days',
      time: '3 hours ago',
      read: true,
      type: 'warning'
    },
    {
      id: 4,
      title: 'New message',
      message: 'Dr. Sarah Chen replied to your question',
      time: '5 hours ago',
      read: true,
      type: 'info'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h3 className="text-slate-900 dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {unreadCount} unread
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* DND Toggle */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setDndMode(!dndMode)}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
              dndMode
                ? 'bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700'
                : 'bg-slate-100 dark:bg-slate-800 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              {dndMode ? (
                <BellOff className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
              <div className="text-left">
                <p className="text-sm text-slate-900 dark:text-white">
                  Do Not Disturb
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {dndMode ? 'Notifications muted' : 'Get all notifications'}
                </p>
              </div>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-all ${
                dndMode ? 'bg-purple-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-all ${
                  dndMode ? 'ml-5' : 'ml-0.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Actions */}
        {!dndMode && unreadCount > 0 && (
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <button
              onClick={markAllAsRead}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
            >
              <CheckCheck className="w-4 h-4" />
              Mark all as read
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {dndMode ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <BellOff className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-slate-900 dark:text-white mb-2">Do Not Disturb is on</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You won't receive notification alerts. Turn it off to stay updated.
              </p>
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-slate-400" />
              </div>
              <h4 className="text-slate-900 dark:text-white mb-2">All caught up!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No new notifications at the moment.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group ${
                    !notification.read ? 'bg-purple-50/50 dark:bg-purple-900/10' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        notification.type === 'success'
                          ? 'bg-green-100 dark:bg-green-900/30'
                          : notification.type === 'warning'
                          ? 'bg-orange-100 dark:bg-orange-900/30'
                          : 'bg-blue-100 dark:bg-blue-900/30'
                      }`}
                    >
                      <Bell
                        className={`w-5 h-5 ${
                          notification.type === 'success'
                            ? 'text-green-600 dark:text-green-400'
                            : notification.type === 'warning'
                            ? 'text-orange-600 dark:text-orange-400'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm text-slate-900 dark:text-white">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          {notification.time}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
