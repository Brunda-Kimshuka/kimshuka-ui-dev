import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperMobileStyle.css';
import Tenxer from '../../assets/Tenxer.svg'
import Latlong from '../../assets/latlong.svg'
import Zhem from '../../assets/Zhem.svg'
import TestimonialsCardMb from './TestimonialsCardMb';

 const testimonials = [
    { 
      text: "Their recruitment service understood our needs precisely, presenting us with skilled candidates that have become invaluable assets to our team.", 
      orgName: "Zchem Specialities Pvt Ltd", 
      OrgImg : Zhem
     },
      {
        text:'It has been 5 years since the APIs were first written and deployed, they still are a pillar of our architecture with almost no need for maintenance. This is a great example of how Kimshuka builds lasting software.',
        orgName:'Tenxer Labs',
        OrgImg: Tenxer
      },
      {
        text:"Team at Kimshuka Technologies is highly professional and reliable when it comes to working with them on all of our engagements",
        orgName: "Onze Technologies",
        OrgImg: Latlong
      },
      {
        text: "Kimshuka has been pivotal in designing and developing a UI for our product, they are not just our vendors, but remain to be one of the co-creators of our product.",
        orgName: "Tenxer Labs",
        OrgImg: Tenxer
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur. Tempus varius pulvinar elit rutrum.Lorem ipsum dolor sit amet consectetur. Tempus varius pulvinar elit rutrum.",
        orgName: "Company Name",
        OrgImg:""
      },
    

  ];

const TestimonialsSliderMb = () => {
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
        { testimonials.map((item, index) => (  
        <SwiperSlide key={index}>
      <TestimonialsCardMb text={item.text} orgName={item.orgName} OrgImg={item.OrgImg} />
     </SwiperSlide>))}
      </Swiper>

      {/* External pagination container */}
      <div ref={paginationRef} className="custom-swiper-pagination" />
    </>
  )
}

export default TestimonialsSliderMb
