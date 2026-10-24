import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Users, Shield, Activity, AlertCircle, CheckCircle, XCircle, DollarSign, TrendingUp } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const platformData = [
    { day: 'Mon', users: 1240, courses: 42 },
    { day: 'Tue', users: 1380, courses: 45 },
    { day: 'Wed', users: 1520, courses: 48 },
    { day: 'Thu', users: 1690, courses: 52 },
    { day: 'Fri', users: 1850, courses: 55 },
    { day: 'Sat', users: 2100, courses: 58 },
    { day: 'Sun', users: 1950, courses: 57 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900">
      <div className="hidden lg:block">
        <Sidebar role="admin" />
      </div>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setMobileMenuOpen(true)} userName="Admin" userRole="Administrator" />
        
        <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h1 className="text-slate-900 dark:text-white mb-2">Admin Control Panel</h1>
            <p className="text-slate-600 dark:text-slate-400">Monitor platform health, manage users and moderate content</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">+12.5%</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Total Users</p>
              <p className="text-slate-900 dark:text-white">24,589</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">+8.2%</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Active Sessions</p>
              <p className="text-slate-900 dark:text-white">2,156</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">+22%</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Platform Revenue</p>
              <p className="text-slate-900 dark:text-white">$142,580</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-600 text-sm">Urgent</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Pending Reviews</p>
              <p className="text-slate-900 dark:text-white">14 Items</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Platform Activity */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-1">Platform Activity</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Daily active users and new courses</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={platformData}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorCourses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#6366f1" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={2} />
                    <Area type="monotone" dataKey="courses" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorCourses)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* System Health */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-slate-900 dark:text-white mb-4">System Health</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'API Uptime', value: '99.9%', status: 'good', color: 'from-green-500 to-green-600' },
                    { label: 'Avg Response Time', value: '124ms', status: 'good', color: 'from-blue-500 to-blue-600' },
                    { label: 'Database Load', value: '42%', status: 'good', color: 'from-purple-500 to-purple-600' },
                    { label: 'Storage Usage', value: '67%', status: 'warning', color: 'from-orange-500 to-orange-600' },
                  ].map((metric, i) => (
                    <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</span>
                        {metric.status === 'good' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                      <p className="text-slate-900 dark:text-white mb-2">{metric.value}</p>
                      <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                        <div className={`bg-gradient-to-r ${metric.color} rounded-full h-1.5`} style={{ width: metric.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Log */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900 dark:text-white">Audit Log</h3>
                  <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                    View Full Log
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { action: 'User banned', user: 'spam_user_42', time: '2 min ago', type: 'security' },
                    { action: 'Course approved', user: 'Instructor Sarah Chen', time: '15 min ago', type: 'content' },
                    { action: 'Payment processed', user: 'System', time: '23 min ago', type: 'billing' },
                    { action: 'Admin access granted', user: 'John Administrator', time: '1h ago', type: 'security' },
                    { action: 'Content flagged', user: 'Auto-moderation', time: '2h ago', type: 'content' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${
                        log.type === 'security' ? 'bg-red-500' :
                        log.type === 'content' ? 'bg-blue-500' :
                        'bg-green-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 dark:text-white truncate">{log.action}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 truncate">{log.user}</p>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-500 whitespace-nowrap">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-slate-900 dark:text-white mb-4">Admin Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" />
                    Manage Users
                  </button>
                  <button className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Approve Courses
                  </button>
                  <button className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                    <Activity className="w-5 h-5" />
                    View System Logs
                  </button>
                </div>
              </div>

              {/* Pending Reviews */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900 dark:text-white">Pending Reviews</h3>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full">14</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'New course: "Blockchain Fundamentals"', type: 'Course', urgent: true },
                    { title: 'User report: Inappropriate content', type: 'Moderation', urgent: true },
                    { title: 'Instructor verification request', type: 'Access', urgent: false },
                    { title: 'Payment dispute claim', type: 'Billing', urgent: false },
                  ].map((item, i) => (
                    <div key={i} className={`p-3 rounded-xl cursor-pointer transition-colors ${
                      item.urgent 
                        ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' 
                        : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}>
                      <div className="flex items-start gap-2">
                        {item.urgent && <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-900 dark:text-white mb-1">{item.title}</p>
                          <span className="text-xs text-slate-600 dark:text-slate-400">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-colors">
                  Review All Items
                </button>
              </div>

              {/* Security Alert */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg shadow-red-500/25">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="mb-2">Security Status</h3>
                <p className="text-red-100 text-sm mb-4">All systems operational. Last security scan: 2 hours ago. No threats detected.</p>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Run Security Scan
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
