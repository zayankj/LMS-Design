import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { StudentDashboard } from './components/StudentDashboard';
import { InstructorDashboard } from './components/InstructorDashboard';
import { AdminDashboard } from './components/AdminDashboard';

type UserRole = 'student' | 'instructor' | 'admin' | null;
type AuthView = 'login' | 'signup';

// Mock user database
const mockUsers = {
  'student@lumalearn.com': { password: 'Student@2024', role: 'student' as const, name: 'Alex Morgan' },
  'instructor@lumalearn.com': { password: 'Instructor@2024', role: 'instructor' as const, name: 'Dr. Sarah Chen' },
  'admin@lumalearn.com': { password: 'Admin@2024', role: 'admin' as const, name: 'Admin User' },
};

export default function App() {
  const [currentUser, setCurrentUser] = useState<{ role: UserRole; name: string } | null>(null);
  const [authView, setAuthView] = useState<AuthView>('login');

  const handleLogin = (email: string, password: string) => {
    // Auto-identify role based on credentials
    const user = mockUsers[email as keyof typeof mockUsers];
    if (user && user.password === password) {
      setCurrentUser({ role: user.role, name: user.name });
      return { success: true, role: user.role };
    }
    return { success: false, role: null };
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // In real app, create account and determine role
    // For demo, default to student
    setCurrentUser({ role: 'student', name });
    return { success: true };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthView('login');
  };

  // Show auth pages if not logged in
  if (!currentUser || !currentUser.role) {
    if (authView === 'signup') {
      return (
        <SignupPage 
          onSignup={handleSignup} 
          onSwitchToLogin={() => setAuthView('login')} 
        />
      );
    }
    return (
      <LoginPage 
        onLogin={handleLogin} 
        onSwitchToSignup={() => setAuthView('signup')} 
      />
    );
  }

  // Show role-specific dashboard
  switch (currentUser.role) {
    case 'student':
      return <StudentDashboard userName={currentUser.name} onLogout={handleLogout} />;
    case 'instructor':
      return <InstructorDashboard userName={currentUser.name} onLogout={handleLogout} />;
    case 'admin':
      return <AdminDashboard userName={currentUser.name} onLogout={handleLogout} />;
    default:
      return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setAuthView('signup')} />;
  }
}
