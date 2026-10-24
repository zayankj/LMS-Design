import { Calendar, Clock, Video } from 'lucide-react';

export function UpcomingLessons() {
  const lessons = [
    {
      id: 1,
      title: "Advanced React Hooks",
      course: "Advanced React & TypeScript",
      date: "Today",
      time: "2:00 PM",
      duration: "45 min",
      type: "Live Session",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Design Systems Fundamentals",
      course: "UI/UX Design Masterclass",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "1 hour",
      type: "Video",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Neural Networks Basics",
      course: "Data Science & ML",
      date: "Nov 21",
      time: "3:30 PM",
      duration: "1.5 hours",
      type: "Live Session",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 4,
      title: "SEO Best Practices",
      course: "Digital Marketing",
      date: "Nov 22",
      time: "11:00 AM",
      duration: "40 min",
      type: "Video",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg shadow-purple-500/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 dark:text-white">Upcoming Lessons</h3>
        <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">View All</button>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="group p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl hover:shadow-md hover:border-purple-200 dark:hover:border-purple-700 transition-all cursor-pointer"
          >
            <div className="flex gap-3">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lesson.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                {lesson.type === "Live Session" ? (
                  <Video className="w-6 h-6 text-white" />
                ) : (
                  <Calendar className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm text-slate-900 dark:text-white mb-1 truncate">{lesson.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 truncate">{lesson.course}</p>
                
                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{lesson.date}, {lesson.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>

              {/* Type Badge */}
              <div className="flex-shrink-0">
                {lesson.type === "Live Session" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    Live
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add to Calendar Button */}
      <button className="w-full mt-4 px-4 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm flex items-center justify-center gap-2">
        <Calendar className="w-4 h-4" />
        Sync with Calendar
      </button>
    </div>
  );
}