import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { MyCoursesPage } from './pages/MyCoursesPage';
import { InstructorsPage } from './pages/InstructorsPage';
import { DashboardHome } from './pages/DashboardHome';

interface StudentDashboardProps {
  userName: string;
  onLogout: () => void;
}

export function StudentDashboard({ userName, onLogout }: StudentDashboardProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardHome />;
      case 'courses':
        return <MyCoursesPage />;
      case 'instructors':
        return <InstructorsPage />;
      case 'progress':
        return <ComingSoonPage title="Progress & Analytics" />;
      case 'schedule':
        return <ComingSoonPage title="My Schedule" />;
      case 'messages':
        return <ComingSoonPage title="Messages" />;
      case 'community':
        return <ComingSoonPage title="Community" />;
      case 'achievements':
        return <ComingSoonPage title="Achievements & Certificates" />;
      case 'settings':
        return <ComingSoonPage title="Settings" />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          role="student"
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        role="student"
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          setMobileMenuOpen(false);
        }}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'}`}>
        <Header
          onMenuClick={() => setMobileMenuOpen(true)}
          userName={userName}
          userRole="Student"
          onLogout={onLogout}
          sidebarCollapsed={sidebarCollapsed}
        />

        <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      <h2 className="text-slate-900 dark:text-white mb-3">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-6">
        This feature is currently under development. Check back soon for updates!
      </p>
      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all">
        Back to Dashboard
      </button>
    </div>
  );
}
