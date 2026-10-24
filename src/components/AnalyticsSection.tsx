import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Target } from 'lucide-react';

export function AnalyticsSection() {
  const learningData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.2 },
    { name: 'Wed', hours: 2.8 },
    { name: 'Thu', hours: 4.1 },
    { name: 'Fri', hours: 3.5 },
    { name: 'Sat', hours: 5.2 },
    { name: 'Sun', hours: 4.8 },
  ];

  const categoryData = [
    { name: 'Development', value: 45 },
    { name: 'Design', value: 28 },
    { name: 'Data Science', value: 35 },
    { name: 'Marketing', value: 18 },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-slate-900 dark:text-white mb-1">Learning Analytics</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Track your progress and performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Learning Hours */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg shadow-purple-500/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-slate-900 dark:text-white mb-1">Weekly Activity</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learning hours this week</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-slate-900 dark:text-white">26.1 hours</span>
              <span className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +15%
              </span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={learningData}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="hours"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorHours)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Performance */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg shadow-purple-500/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-slate-900 dark:text-white mb-1">Category Progress</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hours by category</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {categoryData.map((entry, index) => (
                  <Bar
                    key={`cell-${index}`}
                    dataKey="value"
                    fill={
                      index === 0 ? '#3b82f6' :
                      index === 1 ? '#8b5cf6' :
                      index === 2 ? '#14b8a6' :
                      '#f97316'
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Progress */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg shadow-purple-500/5 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-slate-900 dark:text-white mb-1">Skills Development</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your top skills and progress</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { skill: 'React Development', level: 85, color: 'from-blue-500 to-blue-600' },
              { skill: 'UI/UX Design', level: 72, color: 'from-purple-500 to-purple-600' },
              { skill: 'Machine Learning', level: 68, color: 'from-teal-500 to-teal-600' },
              { skill: 'Digital Marketing', level: 45, color: 'from-orange-500 to-orange-600' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">{item.skill}</span>
                  <span className="text-slate-600 dark:text-slate-400">{item.level}%</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className={`bg-gradient-to-r ${item.color} rounded-full h-2.5 transition-all`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}