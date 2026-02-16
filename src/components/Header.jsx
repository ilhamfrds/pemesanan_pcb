import React from 'react';
import AnimatedSection from './AnimatedSection';

function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-hidden">
  
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-cyan-50/60 rounded-full blur-[120px] pointer-events-none"></div>

      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" xmlns="http://www.w3.org/2000/svg">

        <path d="M0 100 Q 250 50 400 200 T 800 150 T 1200 300 T 1600 150" stroke="#2563eb" strokeWidth="2" fill="none" className="animate-[pulse_4s_infinite]" />
        <path d="M-100 400 Q 300 350 500 550 T 1000 450 T 1500 600" stroke="#0ea5e9" strokeWidth="1" fill="none" strokeDasharray="10 10" />
        
        <circle cx="400" cy="200" r="4" fill="#2563eb" />
        <circle cx="800" cy="150" r="4" fill="#2563eb" />
        <circle cx="500" cy="550" r="3" fill="#0ea5e9" />
        <circle cx="1000" cy="450" r="3" fill="#0ea5e9" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute top-[15%] left-[10%] animate-[bounce_5s_infinite] opacity-40">
          <div className="w-12 h-4 bg-orange-200 border border-orange-400 rounded-full flex items-center justify-around px-1 shadow-sm">
            <div className="w-1 h-full bg-red-500/50"></div><div className="w-1 h-full bg-yellow-500/50"></div>
          </div>
        </div>

        <div className="absolute top-[20%] right-[12%] animate-pulse opacity-30">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1">
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 15h4M1 9h4M1 15h4" />
          </svg>
        </div>

        <div className="absolute top-[45%] left-[5%] animate-[bounce_7s_infinite] opacity-40">
          <div className="w-8 h-12 bg-blue-100 border-2 border-blue-200 rounded-sm relative">
            <div className="absolute top-1 left-0 right-0 h-2 bg-blue-600/20"></div>
            <div className="absolute -bottom-4 left-1 w-0.5 h-4 bg-slate-300"></div>
            <div className="absolute -bottom-4 right-1 w-0.5 h-4 bg-slate-300"></div>
          </div>
        </div>

        <div className="absolute top-[40%] right-[8%] animate-pulse opacity-40">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
            <path d="M5 3v18M19 3v18M5 12h14M12 12v9" />
          </svg>
        </div>

        <div className="absolute top-[8%] left-[45%] animate-pulse opacity-20">
          <svg width="120" height="40" viewBox="0 0 100 24" fill="none" stroke="#3b82f6" strokeWidth="1">
            <path d="M0 12h10l5-10 10 20 10-20 10 20 5-10h50" />
          </svg>
        </div>

        <div className="absolute bottom-[15%] left-[15%] animate-ping opacity-20">
          <div className="w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
        </div>

        <div className="absolute bottom-[20%] right-[15%] animate-[bounce_6s_infinite] opacity-30 rotate-45">
          <div className="w-10 h-3 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-around px-1">
            <div className="w-1 h-full bg-blue-500/40"></div><div className="w-1 h-full bg-cyan-500/40"></div>
          </div>
        </div>

        <div className="absolute top-[30%] right-[25%] animate-[bounce_8s_infinite] opacity-30">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#0ea5e9" strokeWidth="2">
            <path d="M2 10 C 2 5, 8 5, 8 10 C 8 15, 14 15, 14 10 C 14 5, 20 5, 20 10 C 20 15, 26 15, 26 10 C 26 5, 32 5, 32 10 C 32 15, 38 15, 38 10" />
          </svg>
        </div>

        <div className="absolute bottom-[10%] left-[35%] animate-pulse opacity-25">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
            <rect x="4" y="7" width="16" height="10" rx="1" />
            <path d="M4 9h-2M4 12h-2M4 15h-2M20 9h2M20 12h2M20 15h2" />
          </svg>
        </div>

        <div className="absolute top-[55%] left-[15%] animate-pulse opacity-40 rotate-90">
          <div className="w-6 h-3 bg-slate-200 border border-slate-300 rounded-sm"></div>
        </div>

        <div className="absolute top-[12%] left-[60%] animate-ping opacity-25">
          <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
        </div>

        <div className="absolute bottom-[25%] right-[30%] animate-[bounce_9s_infinite] opacity-30">
          <div className="flex gap-1">
            <div className="w-2 h-2 border border-slate-400 rounded-sm"></div>
            <div className="w-2 h-2 border border-slate-400 rounded-sm"></div>
            <div className="w-2 h-2 border border-slate-400 rounded-sm"></div>
            <div className="w-2 h-2 border border-slate-400 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-[50%] right-[10%] animate-pulse opacity-35 rotate-45">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
            <path d="M18 12H6 M18 7v10 M6 7l12 5-12 5V7z" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] left-[5%] p-5 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl border border-white/60 animate-[bounce_6s_infinite] hidden lg:block">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Estimasi Waktu Pengerjaan</p>
          <p className="text-xl font-black text-blue-600">2 - 3 <span className="text-sm font-medium text-slate-400">Hari</span></p>
        </div>

        <div className="absolute top-[40%] right-[5%] p-5 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl border border-white/60 animate-[bounce_4s_infinite] hidden md:block">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p className="text-sm font-bold text-slate-700 tracking-tight">100% Kualitas Teruji</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-8">
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 tracking-tighter leading-[0.9] animate-section is-visible">
          Cetak <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">PCB</span> <br className="hidden md:block" /> Profesional
        </h1>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-500 leading-relaxed font-medium animate-section is-visible" style={{ transitionDelay: '200ms' }}>
          Solusi manufaktur sirkuit dengan kualitas industri untuk para engineer, dan perusahaan teknologi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-section is-visible" style={{ transitionDelay: '400ms' }}>
          <a 
            href="#layanan-grid" 
            className="group w-full sm:w-72 px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            Mulai Order Sekarang
          </a>

          <button 
            onClick={() => {
              const message = "Halo Admin PCB Elmech, saya tertarik dengan jasa cetak PCB Anda. Bisa bantu saya untuk konsultasi mengenai desain dan biayanya?";
              const phoneNumber = "6289526132900";
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="w-full sm:w-72 px-12 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm flex items-center justify-center text-center focus:outline-none"
          >
            Konsultasi Gratis
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-400 animate-section is-visible" style={{ transitionDelay: '600ms' }}>
          {['FR-4 Material', 'Presisi Akurasi Tinggi', 'Standar Mutu Industri'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
              <span className="text-blue-500">✓</span> {text}
            </div>
          ))}
        </div>
      </div>

    </header>
  );
}

export default Header;