import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Home, BookOpen, Award, Settings, LogOut, Menu, X, 
  Search, Filter, Play, Clock, CheckCircle, TrendingUp,
  BarChart3, Users, Target, Star, ArrowRight, Book, Zap
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
  progress: number;
  duration: string;
  lessons: number;
  enrolled: boolean;
  rating: number;
  students: number;
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedLevel, setSelectedLevel] = useState('Semua');

  const categories = [
    { name: 'Semua', icon: '📚', color: 'bg-slate-100 text-slate-700' },
    { name: 'HTML & CSS', icon: '🎨', color: 'bg-pink-100 text-pink-700' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-700' },
    { name: 'Backend', icon: '🔧', color: 'bg-green-100 text-green-700' },
    { name: 'Full Stack', icon: '🚀', color: 'bg-purple-100 text-purple-700' },
    { name: 'UI/UX', icon: '✨', color: 'bg-indigo-100 text-indigo-700' },
  ];

  const levels = ['Semua', 'Pemula', 'Menengah', 'Mahir'];

  const courses: Course[] = [
    {
      id: 1,
      title: 'Dasar-dasar HTML & CSS',
      category: 'HTML & CSS',
      level: 'Pemula',
      progress: 75,
      duration: '8 jam',
      lessons: 24,
      enrolled: true,
      rating: 4.8,
      students: 12450
    },
    {
      id: 2,
      title: 'Mahir JavaScript: Dari Nol hingga Pahlawan',
      category: 'JavaScript',
      level: 'Pemula',
      progress: 45,
      duration: '32 jam',
      lessons: 95,
      enrolled: true,
      rating: 4.9,
      students: 18320
    },
    {
      id: 3,
      title: 'Pola & Praktik Terbaik React Tingkat Lanjut',
      category: 'React',
      level: 'Mahir',
      progress: 20,
      duration: '28 jam',
      lessons: 72,
      enrolled: true,
      rating: 4.9,
      students: 9876
    },
    {
      id: 4,
      title: 'Pengembangan Backend Node.js & Express',
      category: 'Backend',
      level: 'Menengah',
      progress: 0,
      duration: '24 jam',
      lessons: 68,
      enrolled: false,
      rating: 4.7,
      students: 7654
    },
    {
      id: 5,
      title: 'Bootcamp Pengembangan Web Full Stack',
      category: 'Full Stack',
      level: 'Mahir',
      progress: 0,
      duration: '120 jam',
      lessons: 280,
      enrolled: false,
      rating: 4.9,
      students: 15432
    },
    {
      id: 6,
      title: 'Desain Web Responsif dengan Tailwind CSS',
      category: 'HTML & CSS',
      level: 'Menengah',
      progress: 60,
      duration: '12 jam',
      lessons: 36,
      enrolled: true,
      rating: 4.8,
      students: 11234
    },
    {
      id: 7,
      title: 'Prinsip Desain UI/UX untuk Pengembang',
      category: 'UI/UX',
      level: 'Pemula',
      progress: 0,
      duration: '16 jam',
      lessons: 48,
      enrolled: false,
      rating: 4.7,
      students: 8765
    },
    {
      id: 8,
      title: 'Fitur Modern JavaScript ES6+',
      category: 'JavaScript',
      level: 'Menengah',
      progress: 30,
      duration: '18 jam',
      lessons: 52,
      enrolled: true,
      rating: 4.8,
      students: 13456
    },
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'Semua' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'Semua' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const stats = [
    { label: 'Kursus Diikuti', value: '4', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { label: 'Jam Belajar', value: '127', icon: Clock, color: 'bg-green-100 text-green-600' },
    { label: 'Sertifikat Diperoleh', value: '2', icon: Award, color: 'bg-purple-100 text-purple-600' },
    { label: 'Runtutan Belajar', value: '12 hari', icon: TrendingUp, color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">Akademi WebDev</span>
          </div>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
            <Home className="w-5 h-5" />
            Dasbor
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition">
            <BookOpen className="w-5 h-5" />
            Kursus Saya
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition">
            <Award className="w-5 h-5" />
            Sertifikat
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition">
            <BarChart3 className="w-5 h-5" />
            Progres
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition">
            <Settings className="w-5 h-5" />
            Pengaturan
          </a>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-200">
          <Link 
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Cari kursus..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                BS
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-slate-900">Budi Santoso</div>
                <div className="text-xs text-slate-500">Anggota Pro</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Selamat datang kembali, Budi! 👋</h1>
              <p className="text-slate-600">Lanjutkan perjalanan belajarmu dan capai tujuanmu</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 mb-8 text-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-3">
                    <Zap className="w-4 h-4" />
                    Lanjutkan Belajar
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Mahir JavaScript: Dari Nol hingga Pahlawan</h2>
                  <p className="text-blue-100 mb-4">Pelajaran 43: Async/Await dan Promises</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 bg-white/20 rounded-full h-2 max-w-xs">
                      <div className="bg-white h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2 whitespace-nowrap">
                  <Play className="w-5 h-5" />
                  Lanjutkan Kursus
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Jelajahi Kursus</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition text-sm">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="mb-6 overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition whitespace-nowrap ${
                        selectedCategory === category.name
                          ? category.color
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition whitespace-nowrap ${
                      selectedLevel === level
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Book className="w-16 h-16 text-white opacity-20" />
                      </div>
                      {course.enrolled && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Terdaftar
                        </div>
                      )}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                        course.level === 'Pemula' ? 'bg-green-100 text-green-700' :
                        course.level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.level}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-slate-500 mb-2">{course.category}</div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">{course.title}</h3>
                      
                      {course.enrolled && course.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-600">Progres</span>
                            <span className="font-semibold text-slate-900">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                              style={{width: `${course.progress}%`}}
                            ></div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {course.lessons} pelajaran
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-slate-900">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500">
                          <Users className="w-4 h-4" />
                          {course.students.toLocaleString('id-ID')} siswa
                        </div>
                      </div>

                      <button className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                        course.enrolled
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}>
                        {course.enrolled ? (
                          <>
                            <Play className="w-4 h-4" />
                            Lanjutkan Belajar
                          </>
                        ) : (
                          <>
                            Daftar Sekarang
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
