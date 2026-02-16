import React from 'react';
import AnimatedSection from './AnimatedSection';
import { IoEyeOutline } from 'react-icons/io5';

function Terms() {
  return (
    <section id="ketentuan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ketentuan, Contoh & Harga</h2>
          <p className="mt-4 text-lg text-gray-600">Info penting sebelum memesan: spesifikasi desain, contoh format file, dan daftar harga.</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <AnimatedSection delay={100}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ketentuan Desain (WAJIB)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                  <ion-icon name="checkmark-circle-outline" className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"></ion-icon>
                  <span><strong>Lebar Jalur:</strong> Minimal 0,5 mm</span>
              </li>
              <li className="flex items-center">
                  <ion-icon name="checkmark-circle-outline" className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"></ion-icon>
                  <span><strong>Pad / Vias:</strong> Ukuran Hole minimal 0,6 mm</span>
              </li>
              <li className="flex items-center">
                  <ion-icon name="checkmark-circle-outline" className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"></ion-icon>
                  <span><strong>Jarak Antar Jalur:</strong> Space trace minimal 0,35 mm</span>
              </li>
              <li className="flex items-center">
                  <ion-icon name="checkmark-circle-outline" className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"></ion-icon>
                  <span><strong>Polygon:</strong> Space polygon minimal 0,8 mm</span>
              </li>
              <li className="flex items-center">
                  <ion-icon name="checkmark-circle-outline" className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"></ion-icon>
                  <span><strong>File PDF:</strong> Ekspor asli (hitam-putih), jangan di-mirror</span>
              </li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Catatan Penting</h3>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ion-icon name="warning-sharp" className="w-6 h-6 text-yellow-600"></ion-icon>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-yellow-800">Harap Diperhatikan</h4>
                  <ul className="mt-2 space-y-2 list-disc list-inside text-yellow-700">
                    <li>Saat ini kami belum bisa memproses Plated Through-Hole (PTH).</li>
                    <li>Jika desain tidak mengikuti ketentuan, resiko hasil cetak kurang maksimal (rawan short / jalur putus) ditanggung pemesan.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mb-16">
          <AnimatedSection delay={250} className="flex justify-center">
            <button 
              onClick={() => {
                window.open("/assest/files/Contoh File PDF.pdf", "_blank");
              }}
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200 focus:outline-none"
            >
              <IoEyeOutline className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
              Lihat Contoh File PDF
            </button>
          </AnimatedSection>
        </div>

        <div className="mb-16">
          <AnimatedSection className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 pb-4 border-b border-gray-200">Contoh Desain</h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">
            <AnimatedSection delay={300}>
              <h4 className="text-xl font-semibold text-center mb-4">Single Layer</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <img src="/assest/pcb/single_silk.png" alt="Contoh Silk Single Layer" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Silk Layer (TOP)</p>
                </div>
                <div>
                  <img src="/assest/pcb/single_copper.png" alt="Contoh Bottom Single Layer" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Copper Layer (BOTTOM)</p>
                </div>
                <div>
                  <img src="/assest/pcb/single_solder_mask.png" alt="Contoh Solder Mask TOP" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Solder Mask</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h4 className="text-xl font-semibold text-center mb-4">Double Layer</h4>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <img src="/assest/pcb/double_silk.png" alt="Contoh Silk Double Layer" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Silk Layer (TOP)</p>
                </div>
                <div>
                  <img src="/assest/pcb/double_copper_top.png" alt="Contoh Top Double Layer" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Copper Layer (TOP)</p>
                </div>
                <div>
                  <img src="/assest/pcb/double_copper_bot.png" alt="Contoh Bottom Double Layer" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Copper Layer (BOTTOM)</p>
                </div>
                <div>
                  <img src="/assest/pcb/double_solder_mask.png" alt="Contoh Solder Mask TOP" className="rounded shadow w-full aspect-square object-cover border" />
                  <p className="text-center text-xs md:text-sm mt-2 text-gray-600">Solder Mask</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500} className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 pb-4 border-b border-gray-200 text-center">Daftar Harga (Pricelist)</h3>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200 text-xs md:text-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Single Layer FR1 (Pertinax)</span>
                    <span className="font-semibold text-blue-600">Rp 325 / cm²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Single Layer FR4 (Fiber)</span>
                    <span className="font-semibold text-blue-600">Rp 375 / cm²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Double Layer FR4 (Fiber)</span>
                    <span className="font-semibold text-blue-600">Rp 450 / cm²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Masking Bawah atau Atas (1 Sisi)</span>
                    <span className="font-semibold text-blue-600">+ Rp 60 / cm²</span>
                </div>
                <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Masking Bawah dan Atas (2 Sisi)</span>
                    <span className="font-semibold text-blue-600">+ Rp 120 / cm²</span>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-gray-600">
                <h4 className="font-semibold mb-3 text-center text-gray-800">Ukuran Minimal Pemesanan: 1 file desain 100 cm²</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>Jika ukuran kurang dari luas 100 cm² akan terkena biaya minimal pemesanan.</li>
                    <li>Harga cetak PCB sesuai dengan luas dari desainnya, sudah termasuk lapisan soldering & proteksi.</li>
                    <li>Jika pesan secara online, terkena biaya cetak karkir film Rp 5K (A4), Rp 10K (A3).</li>
                </ul>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Terms;