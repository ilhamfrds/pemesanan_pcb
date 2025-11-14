import React from 'react';
import AnimatedSection from './AnimatedSection';

function ProductDetails() {
  return (
    <section id="layanan-detail" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Detail Spesifikasi Produk</h2>
          <p className="mt-4 text-lg text-gray-600">Pelajari perbedaan setiap material dan finishing yang kami tawarkan.</p>
        </AnimatedSection>

        <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 pb-4 border-b-2 border-blue-200">
              PCB Pertinax Single Layer
            </h3>
          </AnimatedSection>
          
          {/* Item 1 */}
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Tanpa Masking" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Pertinax Single Layer (Tanpa Masking)</h4>
              <p className="text-gray-600 my-4">Pilihan paling ekonomis untuk prototipe cepat dan sirkuit sederhana. Ideal untuk proyek hobi atau edukasi di mana biaya adalah prioritas utama.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: Phenolic Paper (Pertinax)</li>
                <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Tanpa Solder Mask</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Item 2 */}
          <AnimatedSection className="flex flex-col md:flex-row-reverse gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Masking Satu Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Pertinax Single Layer (Masking Satu Sisi)</h4>
              <p className="text-gray-600 my-4">Menambahkan lapisan pelindung solder mask di satu sisi (biasanya sisi bawah / jalur) untuk mencegah korosi dan memudahkan penyolderan.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: Phenolic Paper (Pertinax)</li>
                <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (1 Sisi)</li>
              </ul>
            </div>
          </AnimatedSection>
          
          {/* Item 3 */}
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1999&q=80" alt="Fyber Single Layer Masking Dua Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Pertinax Single Layer (Masking Dua Sisi)</h4>
              <p className="text-gray-600 my-4">Perlindungan penuh di kedua sisi board, memberikan tampilan lebih profesional dan durabilitas ekstra.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: Phenolic Paper (Pertinax)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (2 Sisi)</li>
              </ul>
          </div>
          </AnimatedSection>
        </div>

        <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 pb-4 border-b-2 border-blue-200">
              PCB Fyber Single Layer
            </h3>
          </AnimatedSection>
          
          {/* Item 1 */}
          <AnimatedSection className="flex flex-col md:flex-row-reverse gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Tanpa Masking" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Single Layer (Tanpa Masking)</h4>
              <p className="text-gray-600 my-4">Menggunakan material FR4 (Fyber) yang jauh lebih kuat, kaku, dan tahan panas dibanding Pertinax. Pilihan standar industri untuk prototipe berkualitas.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Tanpa Solder Mask</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Item 2 */}
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Masking Satu Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Single Layer (Masking Satu Sisi)</h4>
              <p className="text-gray-600 my-4">Kombinasi material FR4 yang kuat dengan lapisan pelindung Solder Mask untuk perakitan yang mudah.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (1 Sisi)</li>
              </ul>
            </div>
          </AnimatedSection>
          
          {/* Item 3 */}
          <AnimatedSection className="flex flex-col md:flex-row-reverse gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1999&q=80" alt="Fyber Single Layer Masking Dua Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Single Layer (Masking Dua Sisi)</h4>
              <p className="text-gray-600 my-4">Layanan standar industri yang paling umum. Memberikan proteksi penuh di kedua sisi board (meskipun jalur hanya 1 sisi).</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 1 (Single Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (2 Sisi)</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 pb-4 border-b-2 border-blue-200">
              PCB Fyber Double Layer
            </h3>
          </AnimatedSection>
          
          {/* Item 1 */}
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Tanpa Masking" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Double Layer (Tanpa Masking)</h4>
              <p className="text-gray-600 my-4">Untuk sirkuit kompleks yang membutuhkan routing di kedua sisi. Opsi "tanpa masking" cocok untuk prototipe cepat di mana modifikasi jalur mungkin diperlukan.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 2 (Double Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Tanpa Solder Mask</li>
                  <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Plated Through-Hole (PTH)</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Item 2 */}
          <AnimatedSection className="flex flex-col md:flex-row-reverse gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=1999&q=80" alt="Pertinax Single Layer Masking Satu Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Double Layer (Masking Satu Sisi)</h4>
              <p className="text-gray-600 my-4">Layanan khusus jika Anda hanya membutuhkan proteksi di satu sisi (misal, sisi Top), sementara sisi Bottom dibiarkan terekspos.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 2 (Double Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (1 Sisi)</li>
                  <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Plated Through-Hole (PTH)</li>
              </ul>
            </div>
          </AnimatedSection>
          
          {/* Item 3 */}
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1999&q=80" alt="Fyber Single Layer Masking Dua Sisi" className="w-full md:w-1/2 rounded-lg shadow-xl aspect-video object-cover" />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900">Fyber Double Layer (Masking Dua Sisi)</h4>
              <p className="text-gray-600 my-4">Kualitas terbaik untuk produk profesional. Proteksi penuh di kedua sisi atas dan bawah untuk sirkuit yang paling kompleks.</p>
              <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Material: FR4 (Fyberglass)</li>
                  <li className="flex items-center"><ion-icon name="chevron-forward-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Layer: 2 (Double Sided)</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Termasuk Silkscreen</li>
                  <li className="flex items-center"><ion-icon name="checkmark-circle-outline" className="w-5 h-5 mr-2 text-blue-600"></ion-icon>Solder Mask (2 Sisi)</li>
                  <li className="flex items-center"><ion-icon name="close-circle-outline" className="w-5 h-5 mr-2 text-gray-500"></ion-icon>Plated Through-Hole (PTH)</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        
      </div>
    </section>
  );
}

export default ProductDetails;