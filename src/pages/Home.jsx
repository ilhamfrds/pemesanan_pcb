import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Terms from '../components/Terms';
import Ordering from '../components/Ordering';
import Contact from '../components/Contact';
import ContactFooter from '../components/ContactFooter';
import OrderModal from '../components/OrderModal';
import Tersedia from '../components/data/tersedia';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const tersedia = Tersedia();

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="font-poppins bg-white text-gray-800">
      <Navbar />
      <Header />
      <main>
        <ProductDetails />
        <Terms />
        <Ordering onOrderClick={handleOrderClick} />
        <Contact />
      </main>
      <ContactFooter />
      
      {isModalOpen && (
        <OrderModal 
          key={selectedProduct.id}
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          product={selectedProduct}
          setting={tersedia}
        />
      )}
    </div>
  );
}

export default Home;