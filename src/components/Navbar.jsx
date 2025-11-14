import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">PCB<span className="text-gray-800">Elmech</span></a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="font-medium text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#layanan-detail" className="font-medium text-gray-600 hover:text-blue-600 transition duration-300">Detail Produk</a>
            <a href="#ketentuan" className="font-medium text-gray-600 hover:text-blue-600 transition duration-300">Ketentuan</a>
            <a href="#layanan-grid" className="font-medium text-gray-600 hover:text-blue-600 transition duration-300">Pemesanan</a>
            <a href="#kontak" className="font-medium text-gray-600 hover:text-blue-600 transition duration-300">Kontak</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-button" 
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        id="mobile-menu" 
        className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-white shadow-lg`}
      >
        <a href="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">Home</a>
        <a href="#layanan-detail" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">Detail Produk</a>
        <a href="#ketentuan" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">Ketentuan</a>
        <a href="#layanan-grid" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">Pemesanan</a>
        <a href="#kontak" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">Kontak</a>
      </div>
    </nav>
  );
}

export default Navbar;