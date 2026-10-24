import { Search, Mail, Star, Award, BookOpen, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function InstructorsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Web Development & React",
      rating: 4.9,
      students: 12543,
      courses: 8,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "10+ years of experience in web development. Passionate about teaching React and modern JavaScript.",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "UI/UX Design",
      rating: 4.8,
      students: 9876,
      courses: 6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Award-winning designer with experience at top tech companies. Love creating intuitive user experiences.",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Data Science & ML",
      rating: 4.9,
      students: 15230,
      courses: 12,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "PhD in Machine Learning. Research scientist turned educator helping students break into data science.",
      verified: true
    },
    {
      id: 4,
      name: "James Wilson",
      specialty: "Digital Marketing",
      rating: 4.7,
      students: 8432,
      courses: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Marketing strategist with 15 years experience. Helped 100+ businesses grow their online presence.",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Anderson",
      specialty: "Python Programming",
      rating: 4.8,
      students: 11200,
      courses: 7,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      bio: "Software engineer and educator. Making programming accessible to everyone.",
      verified: true
    },
    {
      id: 6,
      name: "David Martinez",
      specialty: "Photography & Visual Arts",
      rating: 4.9,
      students: 7654,
      courses: 4,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Professional photographer for 20+ years. Teaching the art and technique of visual storytelling.",
      verified: false
    }
  ];

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-slate-900 dark:text-white mb-2">Our Instructors</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Connect with expert instructors and get personalized guidance
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search instructors by name or specialty..."
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all"
          >
            {/* Instructor Info */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {instructor.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-slate-900 dark:text-white mb-1">{instructor.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{instructor.specialty}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{instructor.rating}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
              {instructor.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Students</p>
                <p className="text-sm text-slate-900 dark:text-white">{instructor.students.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Courses</p>
                <p className="text-sm text-slate-900 dark:text-white">{instructor.courses}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedInstructor(instructor.id)}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Message
              </button>
              <button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center text-sm">
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message Modal */}
      {selectedInstructor && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setSelectedInstructor(null)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl z-50">
            <h3 className="text-slate-900 dark:text-white mb-4">
              Message {instructors.find(i => i.id === selectedInstructor)?.name}
            </h3>
            <textarea
              placeholder="Type your message or question..."
              className="w-full h-32 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setSelectedInstructor(null)}
                className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all">
                Send Message
              </button>
            </div>
          </div>
        </>
      )}

      {/* Empty State */}
      {filteredInstructors.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-slate-900 dark:text-white mb-2">No instructors found</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
}
