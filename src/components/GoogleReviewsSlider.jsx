import React from 'react';
import reviewsData from './data/ulasan.json';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const GoogleReviewsSlider = () => {
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Apa Kata Klien Kami
        </h2>
        <p className="text-gray-500">
          Dipercaya oleh banyak klien. Rating 4.9/5 dari total 86 ulasan.
        </p>
      </div>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }} 
        autoplay={{ 
          delay: 3500,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className="h-auto"> 
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name} 
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 leading-tight">
                      {review.author_name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {review.relative_time_description}
                    </span>
                  </div>
                </div>

                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-4 h-4 opacity-70"
                />
              </div>
              
              <div className="mb-3 text-sm">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-6">
        <a 
          href="https://www.google.com/maps/place/CETAK+PCB+MURAH+ELMECH/@-7.3249356,112.7992454,17z/data=!4m8!3m7!1s0x2dd7fbbf3fe66033:0x9981d37d9d6c11a3!8m2!3d-7.3249356!4d112.7992454!9m1!1b1!16s%2Fg%2F11szbpj03l?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Baca Semua Ulasan
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsSlider;