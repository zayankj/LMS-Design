import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  size?: 'small' | 'regular';
}

export function ThemeToggle({ size = 'regular' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemPreference;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // Analytics event (placeholder)
    if (typeof window !== 'undefined') {
      console.log('Analytics: theme_changed', { theme: newTheme });
    }
  };

  const isSmall = size === 'small';

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
        isSmall 
          ? 'bg-slate-200 dark:bg-slate-700 p-1' 
          : 'bg-slate-200 dark:bg-slate-700 px-3 py-2'
      }`}
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
    >
      {!isSmall && (
        <span className="text-sm text-slate-700 dark:text-slate-200 select-none">
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>
      )}
      <div className={`relative ${isSmall ? 'w-10 h-5' : 'w-12 h-6'} bg-white dark:bg-slate-800 rounded-full transition-colors shadow-inner`}>
        <div
          className={`absolute top-0.5 ${theme === 'dark' ? (isSmall ? 'left-5' : 'left-6') : 'left-0.5'} ${
            isSmall ? 'w-4 h-4' : 'w-5 h-5'
          } bg-gradient-to-br from-purple-500 to-blue-500 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg`}
        >
          {theme === 'light' ? (
            <Sun className={`${isSmall ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-white`} />
          ) : (
            <Moon className={`${isSmall ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-white`} />
          )}
        </div>
      </div>
    </button>
  );
}
