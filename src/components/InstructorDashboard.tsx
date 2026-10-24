import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Users, DollarSign, BookOpen, TrendingUp, FileText, Clock, Award, CheckCircle } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function InstructorDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const revenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 5100 },
    { month: 'Mar', revenue: 6800 },
    { month: 'Apr', revenue: 7300 },
    { month: 'May', revenue: 8900 },
    { month: 'Jun', revenue: 9500 },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 245 },
    { month: 'Feb', students: 298 },
    { month: 'Mar', students: 356 },
    { month: 'Apr', students: 412 },
    { month: 'May', students: 478 },
    { month: 'Jun', students: 542 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
      <div className="hidden lg:block">
        <Sidebar role="instructor" />
      </div>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setMobileMenuOpen(true)} userName="Dr. Sarah Chen" userRole="Instructor" />
        
        <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h1 className="text-slate-900 dark:text-white mb-2">Instructor Console</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your courses, students, and earnings</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">+18%</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Total Revenue</p>
              <p className="text-slate-900 dark:text-white">$9,542</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">+64</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Total Students</p>
              <p className="text-slate-900 dark:text-white">542</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 text-sm">Active</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Published Courses</p>
              <p className="text-slate-900 dark:text-white">8 Courses</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-600 text-sm">Pending</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Awaiting Grading</p>
              <p className="text-slate-900 dark:text-white">23 Submissions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Revenue Chart */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-1">Revenue Overview</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Monthly earnings from courses</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Student Enrollment */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-1">Student Enrollment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">New students per month</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      }}
                    />
                    <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Course Performance */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-slate-900 dark:text-white mb-4">Course Performance</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Advanced React & TypeScript', students: 156, rating: 4.8, revenue: 3120 },
                    { title: 'Python for Data Science', students: 203, rating: 4.9, revenue: 4060 },
                    { title: 'Web Design Fundamentals', students: 98, rating: 4.7, revenue: 1960 },
                    { title: 'Machine Learning Basics', students: 85, rating: 4.6, revenue: 1700 },
                  ].map((course, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-sm text-slate-900 dark:text-white mb-1">{course.title}</h4>
                        <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" /> {course.students} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-3 h-3" /> {course.rating} rating
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 dark:text-green-400">${course.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-slate-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Create New Lesson
                  </button>
                  <button className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    Grade Submissions
                  </button>
                  <button className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Export Gradebook
                  </button>
                </div>
              </div>

              {/* Pending Submissions */}
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900 dark:text-white">Pending Reviews</h3>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full">23</span>
                </div>
                <div className="space-y-3">
                  {[
                    { student: 'John Smith', assignment: 'React Hooks Quiz', time: '2h ago' },
                    { student: 'Emma Wilson', assignment: 'Final Project', time: '5h ago' },
                    { student: 'Michael Brown', assignment: 'Mid-term Exam', time: '1d ago' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                      <p className="text-sm text-slate-900 dark:text-white mb-1">{item.student}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{item.assignment}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-colors">
                  View All Submissions
                </button>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-500/25">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="mb-2">Top Instructor 🏆</h3>
                <p className="text-purple-100 text-sm mb-4">You're in the top 5% of instructors this quarter with a 4.8 average rating!</p>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  View Achievements
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
