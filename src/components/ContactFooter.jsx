import React from 'react';

function ContactFooter() {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-blue-400">PCB<span className="text-white">Elmech</span></a>
            <p className="mt-4 text-gray-400">
              Solusi cetak PCB termurah untuk kebutuhan prototipe dan profesional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#layanan-detail" className="hover:text-blue-400 transition duration-300">Detail Produk</a></li>
              <li><a href="#ketentuan" className="hover:text-blue-400 transition duration-300">Kententuan</a></li>
              <li><a href="#layanan-grid" className="hover:text-blue-400 transition duration-300">Pemesanan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ion-icon name="location-outline" className="w-5 h-5 mr-3 flex-shrink-0"></ion-icon>
                <span>Jl. Raya Putra Bangsa III No.2-A Blok A, Medokan Ayu, Rungkut, Surabaya, Jawa Timur 60295</span>
              </li>
              <li className="flex items-center">
                <ion-icon name="mail-outline" className="w-5 h-5 mr-3 flex-shrink-0"></ion-icon>
                <span>elmechcore@gmail.com</span>
              </li>
              <li className="flex items-center">
                <ion-icon name="call-outline" className="w-5 h-5 mr-3 flex-shrink-0"></ion-icon>
                <span>+62 895-2613-2900</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@elmech.technology" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <span className="sr-only">Youtube</span>
                <ion-icon name="logo-youtube" className="w-6 h-6"></ion-icon>
              </a>
              <a href="https://www.instagram.com/elmech.technology/" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <span className="sr-only">Instagram</span>
                  <ion-icon name="logo-instagram" className="w-6 h-6"></ion-icon>
              </a>
              <a href="https.tiktok.com/@elmech.technology" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <span className="sr-only">Tiktok</span>
                  <ion-icon name="logo-tiktok" className="w-6 h-6"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;