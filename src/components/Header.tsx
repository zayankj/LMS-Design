import { Search, Bell, Menu, LogOut } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NotificationPanel } from './NotificationPanel';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  userName?: string;
  userRole?: string;
  onLogout?: () => void;
  sidebarCollapsed?: boolean;
}

export function Header({ onMenuClick, userName = "Alex Morgan", userRole = "Student", onLogout, sidebarCollapsed = false }: HeaderProps) {
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/20 shadow-sm transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'
      }`}>
        <div className="flex items-center gap-4 px-4 md:px-8 py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, lessons, or topics..."
                className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 transition-all"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - Hidden on mobile */}
            <div className="hidden md:block">
              <ThemeToggle size="small" />
            </div>
            
            {/* Notifications */}
            <button 
              onClick={() => setNotificationOpen(true)}
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Bell className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center gap-3 pl-3 pr-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                  <span>{userName.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm text-slate-900 dark:text-white">{userName}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{userRole}</p>
                </div>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={onLogout}
                  className="w-full px-4 py-3 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Panel */}
      <NotificationPanel 
        isOpen={notificationOpen} 
        onClose={() => setNotificationOpen(false)} 
      />
    </>
  );
}