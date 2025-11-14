import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';
import { productList } from './data/products';

function Ordering({ onOrderClick }) {
  return (
    <section id="layanan-grid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Cetak PCB Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Pilih material dan finishing yang paling sesuai dengan kebutuhan proyek Anda.</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOrderClick={onOrderClick}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ordering;