import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X, BookOpen, Trophy, Users, Rocket, Check, Star, PlayCircle, ArrowRight, Clock, Award, Target } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pricingPlans = [
    {
      name: 'Gratis',
      price: 'Rp 0',
      period: '/bulan',
      description: 'Sempurna untuk pemula yang memulai perjalanan mereka',
      features: [
        'Akses ke 5 kursus pemula',
        'Tutorial dasar HTML & CSS',
        'Akses forum komunitas',
        'Buletin bulanan',
        'Sertifikat penyelesaian kursus',
      ],
      notIncluded: [
        'Kursus tingkat lanjut',
        'Bimbingan langsung',
        'Ulasan proyek',
        'Dukungan prioritas'
      ],
      buttonText: 'Mulai Gratis',
      popular: false,
    },
    {
      name: 'Pro',
      price: 'Rp 299rb',
      period: '/bulan',
      description: 'Untuk pembelajar serius yang siap untuk maju',
      features: [
        'Akses SEMUA kursus',
        'Sesi koding langsung',
        'Ulasan kode & masukan',
        'Proyek dunia nyata',
        'Panduan karir',
        'Dukungan prioritas',
        'Sumber daya yang dapat diunduh',
        'Akses konten seumur hidup',
      ],
      notIncluded: [],
      buttonText: 'Mulai Uji Coba Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Rp 999rb',
      period: '/bulan',
      description: 'Untuk tim dan organisasi',
      features: [
        'Semua yang ada di Pro',
        'Dasbor manajemen tim',
        'Jalur belajar khusus',
        'Sesi bimbingan 1-on-1',
        'Bantuan penempatan kerja',
        'Proyek & penilaian khusus',
        'Akses API',
        'Manajer akun khusus',
      ],
      notIncluded: [],
      buttonText: 'Hubungi Penjualan',
      popular: false,
    },
  ];

  const categories = [
    { name: 'HTML & CSS', icon: '🎨', courses: 15, level: 'Pemula' },
    { name: 'JavaScript', icon: '⚡', courses: 28, level: 'Semua Level' },
    { name: 'React & Vue', icon: '⚛️', courses: 22, level: 'Menengah' },
    { name: 'Pengembangan Backend', icon: '🔧', courses: 18, level: 'Mahir' },
    { name: 'Full Stack', icon: '🚀', courses: 12, level: 'Mahir' },
    { name: 'Desain UI/UX', icon: '✨', courses: 16, level: 'Semua Level' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Akademi WebDev
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-slate-600 hover:text-slate-900 transition">Kursus</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Harga</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Fitur</a>
              <Link 
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                Buka Dasbor
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#courses" className="block text-slate-600 hover:text-slate-900">Kursus</a>
              <a href="#pricing" className="block text-slate-600 hover:text-slate-900">Harga</a>
              <a href="#features" className="block text-slate-600 hover:text-slate-900">Fitur</a>
              <Link 
                to="/dashboard"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-center"
              >
                Buka Dasbor
              </Link>
            </div>
          )}
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Dipercaya oleh 50.000+ siswa di seluruh dunia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Kuasai Pengembangan Web dari{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nol hingga Mahir
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              Pelajari HTML, CSS, JavaScript, React, dan bangun proyek dunia nyata. Siap kerja dengan kursus komprehensif dan bimbingan ahli kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition group"
              >
                Mulai Belajar Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-lg font-semibold hover:border-slate-300 transition">
                <PlayCircle className="w-5 h-5" />
                Tonton Demo
              </button>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-slate-900">111+</div>
                <div className="text-slate-600 text-sm">Kursus</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-bold text-slate-900">50rb+</div>
                <div className="text-slate-600 text-sm">Siswa</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-bold text-slate-900">4.9/5</div>
                <div className="text-slate-600 text-sm">Peringkat</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Dasar HTML & CSS</h3>
                    <p className="text-sm text-slate-500">Pemula • 12 pelajaran</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-sm text-slate-600">75% Selesai</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/90 rounded-lg p-4">
                  <Clock className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="font-semibold text-slate-900">Akses 24/7</div>
                  <p className="text-xs text-slate-600">Belajar sesuai kecepatanmu</p>
                </div>
                <div className="bg-white/90 rounded-lg p-4">
                  <Award className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="font-semibold text-slate-900">Sertifikat</div>
                  <p className="text-xs text-slate-600">Tingkatkan resume Anda</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Memilih Akademi WebDev?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk menjadi pengembang web profesional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Jalur Belajar Terstruktur</h3>
              <p className="text-slate-600">Ikuti kurikulum teruji dari pemula hingga mahir, yang dirancang oleh para ahli industri.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Proyek Dunia Nyata</h3>
              <p className="text-slate-600">Bangun proyek yang layak untuk portofolio yang menunjukkan keahlian Anda kepada perusahaan.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Bimbingan Ahli</h3>
              <p className="text-slate-600">Dapatkan bimbingan dari pengembang berpengalaman dan terima ulasan kode.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dukungan Karir</h3>
              <p className="text-slate-600">Termasuk bantuan pembuatan resume, persiapan wawancara, dan penempatan kerja.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Akses Seumur Hidup</h3>
              <p className="text-slate-600">Akses semua materi kursus selamanya, termasuk pembaruan di masa mendatang.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sertifikat</h3>
              <p className="text-slate-600">Dapatkan sertifikat terverifikasi untuk dipamerkan di LinkedIn dan resume Anda.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Jelajahi Kursus berdasarkan Kategori
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pilih dari pustaka kursus kami yang luas di berbagai teknologi
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-slate-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>{category.courses} kursus</span>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {category.level}
                  </span>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Jelajahi
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pilih Paket Belajar Anda
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mulai gratis, tingkatkan saat Anda siap. Semua paket termasuk akses seumur hidup.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-2 border-blue-500 shadow-xl scale-105 relative' 
                    : 'border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 opacity-40">
                      <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ribuan siswa yang belajar pengembangan web dan membangun proyek luar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
            >
              Mulai Belajar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Lihat Semua Kursus
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Akademi WebDev</span>
              </div>
              <p className="text-sm text-slate-400">
                Kuasai pengembangan web dari awal dan bangun karir impian Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kursus</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">HTML & CSS</a></li>
                <li><a href="#" className="hover:text-white transition">JavaScript</a></li>
                <li><a href="#" className="hover:text-white transition">React</a></li>
                <li><a href="#" className="hover:text-white transition">Full Stack</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Karir</a></li>
                <li><a href="#" className="hover:text-white transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Dukungan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition">Ketentuan Layanan</a></li>
                <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition">Kebijakan Cookie</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Akademi WebDev. Hak cipta dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
