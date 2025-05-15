import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from 'swiper/modules';
import TestimonialsCards from './TestimonialsCards';
import 'swiper/css';
import 'swiper/css/navigation';
import './udg-style.module.css';


const TestimonialsSlider = () => {
    
    const nextRef = useRef(null);
  const prevRef = useRef(null);

    const testimonials = [
    { text: "This is the best product I've used!", author: "Alice" },
    { text: "Amazing service and quality.", author: "Bob" },
    { text: "I'll definitely come back again!", author: "Charlie" },
    { text: "I'll definitely come back again!", author: "Charlie" },
    { text: "I'll definitely come back again!", author: "Charlie" },
    { text: "I'll definitely come back again!", author: "Charlie" },
    { text: "I'll definitely come back again!", author: "Charlie" },

  ];
  
  return (
<>
    <div className="flex justify-between mb-4">
        <button
          ref={prevRef}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Back
        </button>
        <button
          ref={nextRef}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    <Swiper
     modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={3} 
      navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        centeredSlides={true}
        loop={true}
        className="testimonial-swiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {testimonials.map((t, index) => (
      <SwiperSlide key={index}>
        <TestimonialsCards text={t.text} author={t.author} />
      </SwiperSlide>
        ))}
    </Swiper>
    </>
  );
}   

export default TestimonialsSlider
