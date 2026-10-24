import { X, Home, BookOpen, BarChart3, Calendar, MessageSquare, Settings, Trophy, Users, UserCheck, FileText, Shield, Activity } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'student' | 'instructor' | 'admin';
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function MobileNav({ isOpen, onClose, role, currentPage, onNavigate }: MobileNavProps) {
  const studentMenuItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: BookOpen, label: 'My Courses', page: 'courses' },
    { icon: BarChart3, label: 'Progress', page: 'progress' },
    { icon: Calendar, label: 'Schedule', page: 'schedule' },
    { icon: UserCheck, label: 'Instructors', page: 'instructors' },
    { icon: MessageSquare, label: 'Messages', page: 'messages', badge: 3 },
    { icon: Users, label: 'Community', page: 'community' },
    { icon: Trophy, label: 'Achievements', page: 'achievements' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const instructorMenuItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: BookOpen, label: 'My Courses', page: 'courses' },
    { icon: FileText, label: 'Upload Content', page: 'upload' },
    { icon: Users, label: 'Students', page: 'students' },
    { icon: BarChart3, label: 'Analytics', page: 'analytics' },
    { icon: MessageSquare, label: 'Messages', page: 'messages', badge: 5 },
    { icon: Calendar, label: 'Schedule', page: 'schedule' },
    { icon: Trophy, label: 'Achievements', page: 'achievements' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const adminMenuItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: Users, label: 'User Management', page: 'users' },
    { icon: Shield, label: 'Role Assignment', page: 'roles' },
    { icon: BookOpen, label: 'Content Review', page: 'content' },
    { icon: BarChart3, label: 'Analytics', page: 'analytics' },
    { icon: MessageSquare, label: 'Moderation', page: 'moderation', badge: 14 },
    { icon: Activity, label: 'Audit Logs', page: 'audit' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const menuItems = role === 'student' ? studentMenuItems : role === 'instructor' ? instructorMenuItems : adminMenuItems;

  const roleColors = {
    student: 'from-blue-500 to-cyan-500',
    instructor: 'from-purple-500 to-purple-600',
    admin: 'from-indigo-600 to-purple-600'
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/20 p-6 flex flex-col shadow-2xl z-50 lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${roleColors[role]} rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25`}>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-900 dark:text-white">LumaLearn</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{role.charAt(0).toUpperCase() + role.slice(1)} Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentPage === item.page
                  ? `bg-gradient-to-r ${roleColors[role]} text-white shadow-lg shadow-purple-500/25`
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left text-sm">{item.label}</span>
              {item.badge && (
                <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Progress Card */}
        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-teal-100 dark:border-teal-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-900 dark:text-white">Weekly Goal</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">8 of 10 hours</p>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-full h-2">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-full h-2 w-4/5"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
