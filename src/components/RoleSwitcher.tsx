import { GraduationCap, Briefcase, Shield } from 'lucide-react';

interface RoleSwitcherProps {
  selectedRole: 'student' | 'instructor' | 'admin';
  onRoleChange: (role: 'student' | 'instructor' | 'admin') => void;
}

export function RoleSwitcher({ selectedRole, onRoleChange }: RoleSwitcherProps) {
  const roles = [
    { value: 'student' as const, label: 'Student', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
    { value: 'instructor' as const, label: 'Instructor', icon: Briefcase, color: 'from-purple-500 to-purple-600' },
    { value: 'admin' as const, label: 'Admin', icon: Shield, color: 'from-indigo-600 to-purple-600' }
  ];

  return (
    <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
      {roles.map((role) => (
        <button
          key={role.value}
          onClick={() => onRoleChange(role.value)}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
            selectedRole === role.value
              ? `bg-gradient-to-r ${role.color} text-white shadow-lg`
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <role.icon className="w-4 h-4" />
          <span className="text-sm">{role.label}</span>
        </button>
      ))}
    </div>
  );
}
