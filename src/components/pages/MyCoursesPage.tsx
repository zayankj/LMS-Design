import { Search, Filter, Grid, List } from 'lucide-react';
import { CourseCard } from '../CourseCard';
import { useState } from 'react';

export function MyCoursesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Advanced React & TypeScript",
      instructor: "Sarah Johnson",
      progress: 68,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      duration: "12 weeks",
      lessonsCompleted: 24,
      totalLessons: 35,
      category: "Development"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      progress: 42,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      duration: "8 weeks",
      lessonsCompleted: 14,
      totalLessons: 28,
      category: "Design"
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      instructor: "Dr. Emily Rodriguez",
      progress: 85,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      duration: "16 weeks",
      lessonsCompleted: 42,
      totalLessons: 50,
      category: "Data Science"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      duration: "6 weeks",
      lessonsCompleted: 8,
      totalLessons: 24,
      category: "Marketing"
    },
    {
      id: 5,
      title: "Python for Beginners",
      instructor: "Lisa Anderson",
      progress: 15,
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
      duration: "10 weeks",
      lessonsCompleted: 5,
      totalLessons: 32,
      category: "Development"
    },
    {
      id: 6,
      title: "Photography Fundamentals",
      instructor: "David Martinez",
      progress: 55,
      thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      duration: "6 weeks",
      lessonsCompleted: 11,
      totalLessons: 20,
      category: "Creative"
    }
  ];

  const categories = ['all', 'Development', 'Design', 'Data Science', 'Marketing', 'Creative'];

  const filteredCourses = filterCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === filterCategory);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-slate-900 dark:text-white mb-2">My Courses</h1>
          <p className="text-slate-600 dark:text-slate-400">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} in progress
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-700 text-purple-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-white dark:bg-slate-700 text-purple-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${
                filterCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600'
              }`}
            >
              {category === 'all' ? 'All Courses' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid/List */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
          : 'space-y-4'
      }`}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-slate-900 dark:text-white mb-2">No courses found</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Try adjusting your filters or search terms
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all">
            Browse All Courses
          </button>
        </div>
      )}
    </div>
  );
}
