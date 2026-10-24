import { Clock, BookOpen, Play } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  thumbnail: string;
  duration: string;
  lessonsCompleted: number;
  totalLessons: number;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/20 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-slate-900">
            {course.category}
          </span>
        </div>

        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-xl">
          <Play className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/30">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-slate-900 dark:text-white mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{course.instructor}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Progress</span>
            <span className="text-purple-600 dark:text-purple-400">{course.progress}%</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full h-2 transition-all"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Continue Button */}
        <button className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm">
          Continue Learning
        </button>
      </div>
    </div>
  );
}