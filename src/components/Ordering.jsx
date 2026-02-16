import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';
import { productList } from './data/products';

function Ordering({ onOrderClick }) {
  const categories = [
    {
      id: 'cat-pertinax',
      title: "Pertinax (Single Layer)", // Judul yang muncul di pembatas
      items: productList.filter(p => p.type === 'pertinak')
    },
    {
      id: 'cat-fyber-single',
      title: "Fiber FR4 (Single Layer)",
      items: productList.filter(p => p.type === 'fyber single layer')
    },
    {
      id: 'cat-fyber-double',
      title: "Fiber FR4 (Double Layer)",
      items: productList.filter(p => p.type === 'fyber double layer')
    }
  ];

  return (
    <section id="layanan-grid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Cetak PCB Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Pilih material dan finishing terbaik untuk proyek Anda.</p>
        </AnimatedSection>
        
        {categories.map((category, catIndex) => (
          <div key={category.id} className="mb-16 last:mb-0">

            <div className="relative flex items-center mb-12">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium uppercase tracking-widest">
                {category.title}
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOrderClick={onOrderClick}
                  delay={index * 100} 
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Ordering;