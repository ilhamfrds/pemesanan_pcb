import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product, onOrderClick, delay }) {
  const { title, subTitle, price, img } = product;

  const handleOrder = (e) => {
    e.preventDefault();
    onOrderClick(product);
  };

  return (
    <AnimatedSection
      delay={delay}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 text-sm font-semibold mb-2">{subTitle}</p>
        <p className="text-lg font-bold text-blue-600 my-5">Rp {price} / cm²</p>
        <a
          href="#" 
          onClick={handleOrder}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 group"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          Pesan Sekarang
        </a>

      </div>
    </AnimatedSection>
  );
}

export default ProductCard;