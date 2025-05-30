import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperMobileStyle.css';
import OurServiceCardsMobile from './OurServiceCardsMobile';

const  Ourdata = [
  {
    "id": 1,
    "name": "API Management",
    "discription": "Connect systems to enable smooth data flow, better functionality, and smarter user experiences"
  },
  {
    "id": 2,
    "name": "IoT Platform",
    "discription": "Drive growth with connected IoT solutions that deliver insights and efficiency"
  },
  {
    "id": 3,
    "name": "UX Services",
    "discription": "Design experiences that create memorable moments and elevate every interaction that matters"
  },
  {
    "id": 4,
    "name": "Web & App Development",
    "discription": "Create modern apps that engage users and exceed expectations through thoughtful design"
  },
  {
    "id": 5,
    "name": "Product Consulting",
    "discription": "Refine, strategize and bring your ideas to life backed by expert guidance and user-focused execution"
  },
  {
    "id": 6,
    "name": "Team Augmentation",
    "discription": "Build agile tech teams on demand without having an in-house recruitment team"
  }
]

const OurServiceSctnMobile = () => {
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={setSwiperInstance}
        pagination={{ el: null, clickable: true }}
      >
        { Ourdata.map((item, index) => (  
        <SwiperSlide key={index}>
      <OurServiceCardsMobile id={item.id} title={item.name} discription={item.discription} />
     </SwiperSlide>))}
      </Swiper>

      {/* External pagination container */}
      <div ref={paginationRef} className="custom-swiper-pagination" />
    </>
  );
};

export default OurServiceSctnMobile;
