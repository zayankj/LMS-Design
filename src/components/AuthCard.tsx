import { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
  role: 'student' | 'instructor' | 'admin';
  title: string;
  subtitle?: string;
}

export function AuthCard({ children, role, title, subtitle }: AuthCardProps) {
  const roleColors = {
    student: 'from-blue-500 to-cyan-500',
    instructor: 'from-purple-500 to-purple-600',
    admin: 'from-indigo-600 to-purple-600'
  };

  return (
    <div className="relative">
      {/* Role accent top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${roleColors[role]} rounded-t-2xl`}></div>
      
      {/* Glass card */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white mb-2">{title}</h1>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
          )}
        </div>
        
        {children}
      </div>
    </div>
  );
}
