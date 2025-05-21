import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from 'swiper/modules';
import TestimonialsCards from './TestimonialsCards';
import 'swiper/css';
import 'swiper/css/navigation';
import Tenxer from '../../assets/Tenxer.svg'
import Latlong from '../../assets/latlong.svg'
import Zhem from '../../assets/Zhem.svg'
import Right from '../../assets/ArrRyt.svg'
import Left from '../../assets/Arrlft.svg'
import  './swiperstyle.css';





const TestimonialsSlider = () => {
    
    const nextRef = useRef(null);
  const prevRef = useRef(null);

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
  
  return (
<>
    
    <Swiper
     modules={[Navigation, Autoplay]}
      spaceBetween={20}
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
        <TestimonialsCards text={t.text} orgName={t.orgName} OrgImg={t.OrgImg} />
      </SwiperSlide>
        ))}
    </Swiper>

    <div className="flex justify-between mt-20 relative">
        <button
          ref={prevRef}
          className="px-4 py-2 bg-[#1B1B1D] cursor-pointer flex justify-center items-center w-15 h-15 hover:bg-[#F27F0C] rounded-full absolute right-[43%] bottom-0"
        >
          <img src={Left} alt="" />
        </button>
        <button
          ref={nextRef}
          className="px-4 py-2 cursor-pointer bg-[#1B1B1D] flex justify-center items-center rounded-full w-15 h-15 hover:bg-[#F27F0C] absolute left-[43%] bottom-0"
        >
          <img src={Right} alt="" />
        </button>
      </div>
    </>
  );
}   

export default TestimonialsSlider
