import React from 'react';
import AnimatedSection from './AnimatedSection';

function Header() {
  return (
    // <header className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16 bg-[url('/assest/pcb/all_pcb.png')]">
    <header className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16 bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80')]">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-section is-visible">Jasa Cetak PCB Murah</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto animate-section is-visible" style={{ transitionDelay: '200ms' }}>
          Solusi manufaktur PCB berkualitas tinggi untuk prototipe dan produksi massal Anda.
        </p>
        <a 
          href="#layanan-grid" 
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate-section is-visible" 
          style={{ transitionDelay: '400ms' }}
        >
          Pesan Sekarang
        </a>
      </div>
    </header>
  );
}

export default Header;