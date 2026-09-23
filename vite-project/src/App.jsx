import React from 'react'

export default function App() {
  return (
    <div className="bg-[#0f172a] text-slate-300 font-sans min-h-screen selection:bg-indigo-500 selection:text-white antialiased">
      
      {/* 1. NAVBAR */}
      <nav className="bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
            YUDHA<span className="text-indigo-400">.</span>
          </span>
          <div className="flex gap-8 font-medium text-sm text-slate-400">
            <a href="#tentang" className="hover:text-white transition duration-200">Tentang</a>
            <a href="#projek" className="hover:text-white transition duration-200">Projek</a>
            <a href="#keahlian" className="hover:text-white transition duration-200">Keahlian</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO & BIODATA SECTION */}
      <header id="tentang" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Deskripsi */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Tersedia untuk Kolaborasi & Riset
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Membentuk Data <br />
            Menjadi <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solusi Digital</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
            Saya <strong className="text-slate-200 font-semibold">Yudha Khoirul Anam</strong>, mahasiswa <span className="text-indigo-400 font-medium">Sistem Informasi</span> yang berfokus menjembatani analisis data bisnis dengan pengembangan teknologi web yang estetik dan fungsional.
          </p>
        </div>

        {/* Kolom Kanan: Dribbble Profile Card */}
        <div className="md:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
                  YK
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/20">
                  Mahasiswa Aktif
                </span>
              </div>
              
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Nama Lengkap</p>
                  <p className="text-lg font-bold text-white mt-0.5">Yudha Khoirul Anam</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">NIM</p>
                    <p className="text-base font-bold text-indigo-300 mt-0.5 font-mono">2504140008</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Program Studi</p>
                    <p className="text-base font-bold text-slate-200 mt-0.5">Sistem Informasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* 3. KEAHLIAN / SKILLS */}
      <section id="keahlian" className="bg-[#0b1224] py-20 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
              <div className="text-2xl mb-2">💻</div>
              <h4 className="font-bold text-white text-sm">Frontend Dev</h4>
              <p className="text-xs text-slate-500 mt-1">React, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-bold text-white text-sm">Business Analytics</h4>
              <p className="text-xs text-slate-500 mt-1">Proses Bisnis</p>
            </div>
            <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
              <div className="text-2xl mb-2">🗄️</div>
              <h4 className="font-bold text-white text-sm">Database</h4>
              <p className="text-xs text-slate-500 mt-1">SQL, Analisis Sistem</p>
            </div>
            <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-bold text-white text-sm">UI/UX Design</h4>
              <p className="text-xs text-slate-500 mt-1">Figma Prototyping</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SHOWCASE */}
      <section id="projek" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Projek Studi Kasus</h2>
            <p className="text-slate-500 mt-2 text-sm">Eksplorasi arsitektur sistem informasi dan antarmuka web.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300">
              <div className="h-56 bg-gradient-to-br from-indigo-900/60 to-slate-900 flex items-center justify-center border-b border-slate-800">
                <span className="text-2xl font-bold opacity-30 tracking-widest text-white">SYSTEM INTEGRATION</span>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Web Application</span>
                <h4 className="text-lg font-bold text-white mt-1">Dashboard Monitoring Eksekutif</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">Perancangan sistem dasbor interaktif untuk memetakan metrik performa perguruan tinggi.</p>
              </div>
            </div>

            <div className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300">
              <div className="h-56 bg-gradient-to-br from-purple-900/60 to-slate-900 flex items-center justify-center border-b border-slate-800">
                <span className="text-2xl font-bold opacity-30 tracking-widest text-white">UI/UX EXPLORATION</span>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Interface Design</span>
                <h4 className="text-lg font-bold text-white mt-1">Redesain E-Commerce Platform</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">Studi kasus UI/UX untuk meningkatkan kenyamanan alur transaksi pengguna.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#0b1224] border-t border-slate-900 py-16 text-center">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="text-xs tracking-widest text-slate-500 font-mono">
            YUDHA KHOIRUL ANAM • 2504140008
          </div>
        </div>
      </footer>

    </div>
  )
}
