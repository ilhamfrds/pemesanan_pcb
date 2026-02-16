import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


function ContactFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
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
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 mr-3 text-gray-400" />
                <span>
                  Jl. Raya Putra Bangsa III No.2-A Blok A, Medokan Ayu, Rungkut, Surabaya, Jawa Timur 60295
                </span>
              </li>

              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-3 text-gray-400" />
                <span>elmechcore@gmail.com</span>
              </li>

              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3 text-gray-400" />
                <span>+62 895-2613-2900</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@elmech.technology"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <span className="sr-only">Youtube</span>
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/elmech.technology/"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>

              <a
                href="https://www.tiktok.com/@elmech.technology"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <span className="sr-only">Tiktok</span>
                <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;