import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyOverlapSections() {
  const sectionsRef = useRef([]);
    


//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(t => t.kill());

//     sectionsRef.current.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 15%",
//         end: "bottom 15%",
//         pin: true, // pin all except last
//         pinSpacing: i !== sectionsRef.current.length - 1 ? false : true, // spacing only for last section
//         markers: true,
//         scrub: true,
//       });
//     });

//     return () => ScrollTrigger.getAll().forEach(t => t.kill());
//   }, []);

//   const sections = [
//     {
//       title: "Who We Are",
//       description: "Kimshuka Technologies is a trusted IT service and consultancy company dedicated to helping businesses grow through technology. We deliver tailored solutions that drive digital transformation, improve efficiency, and create new opportunities for success.",
//       bg: "#FCFAFA",
//       flexDirection: "flex-row",
//       alignItems : 'items-start',
//     },
//     {
//       title: "Our Mission",
//       description: "At Kimshuka Technologies, we empower businesses with exceptional service and innovative technology solutions that drive transformative results. We focus on delivering personalized software tailored to our clients need, serving as a catalyst for success in today's dynamic digital landscape.",
//       bg: "#FCFAFA",
//       flexDirection: "flex-row-reverse",
//       alignItems : 'items-end',
//     },
//     {
//       title: "Our Vision",
//       description: "At Kimshuka Technologies, we aim to lead the digital transformation market by empowering businesses with innovative solutions and exceptional support. We integrate technology into all aspects of life and business, driving advancement and unlocking success. Our commitment is to deliver cutting-edge solutions that address current needs while anticipating future demands.",
//       bg: "#FCFAFA",
//       flexDirection: "flex-row",
//       alignItems : 'items-start',
//     },

//   ];


 useEffect(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Card 1: stays pinned for the combined scroll of card2 + card3
  ScrollTrigger.create({
    trigger: '.card1',
    start: 'top 15%',
    endTrigger: '.card3',
    end: 'top 15%', // pin until card3 reaches top
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: false,
  });

  // Card 2: gets pinned when it hits the top
  ScrollTrigger.create({
    trigger: '.card2',
    start: 'top 15%',
    endTrigger: '.card3',
    end: 'top 15%', // pin until card3 reaches top
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: false,
  });

  // Card 3: gets pinned when it hits the top, ends when it scrolls past itself +=100%
  ScrollTrigger.create({
    trigger: '.card3',
    start: 'top top',
    end: 'top 50% ', // scrolls for one viewport
    pin: true,
    pinSpacing: true, // allow spacing after card3
    scrub: true,
    markers: false,
  });

  return () => ScrollTrigger.getAll().forEach(t => t.kill());
}, []);



  return (
    <div ref={sectionsRef}>
    
 <section
          className={`card1  relative border-2 rounded-2xl mx-[5%]  border-[#d4d1d1] h-[80vh] flex items-center justify-center bg-[#FCFAFA] text-white  `} 
        >
           <div className={` py-16 w-full mx-8 flex flex-row gap-6 items-center justify-center px-4`}>
         {/* Text */}
            <div className={`flex flex-col gap-4 w-[65%] py-32 px-4 items-start`}>
           <h1 className="text-[32px] text-[#0A0A0A] font-bold mb-2 w-[70%]">Who We Are</h1>
               <p className="text-2xl text-[#667085] w-[70%]">Kimshuka Technologies is a trusted IT service and consultancy company dedicated to helping businesses grow through technology. We deliver tailored solutions that drive digital transformation, improve efficiency, and create new opportunities for success.</p>
             </div>
            {/* Placeholder */} 
            <div className="w-[35%] p-4 h-auto border-2 rounded-2xl border-[#667085]">
           <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-black font-bold text-xl">
                Image
             </div>
            </div>
          </div>
        </section> 
        <section
          className={`card2 relative border-2 rounded-2xl mx-[5%]  border-[#d4d1d1] h-[80vh] flex items-center justify-center bg-[#FCFAFA] text-white  `} 
        >
           <div className={` py-16 w-full mx-8 flex flex-row-reverse gap-6 items-center justify-center px-4`}>
         {/* Text */}
            <div className={`flex flex-col gap-4 w-[65%] py-32 px-4 items-start`}>
           <h1 className="text-[32px] text-[#0A0A0A] font-bold mb-2 w-[70%]">Who We Are</h1>
               <p className="text-2xl text-[#667085] w-[70%]">Kimshuka Technologies is a trusted IT service and consultancy company dedicated to helping businesses grow through technology. We deliver tailored solutions that drive digital transformation, improve efficiency, and create new opportunities for success.</p>
             </div>
            {/* Placeholder */} 
            <div className="w-[35%] p-4 h-auto border-2 rounded-2xl border-[#667085]">
           <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-black font-bold text-xl">
                Image
             </div>
            </div>
          </div>
        </section>
        <section
          className={`card3 relative border-2 rounded-2xl mx-[5%]  border-[#d4d1d1] h-[80vh] flex items-center justify-center bg-[#FCFAFA] text-white  `} 
        >
           <div className={` py-16 w-full mx-8 flex flex-row gap-6 items-center justify-center px-4`}>
         {/* Text */}
            <div className={`flex flex-col gap-4 w-[65%] py-32 px-4 items-start`}>
           <h1 className="text-[32px] text-[#0A0A0A] font-bold mb-2 w-[70%]">Who We Are</h1>
               <p className="text-2xl text-[#667085] w-[70%]">Kimshuka Technologies is a trusted IT service and consultancy company dedicated to helping businesses grow through technology. We deliver tailored solutions that drive digital transformation, improve efficiency, and create new opportunities for success.</p>
             </div>
            {/* Placeholder */} 
            <div className="w-[35%] p-4 h-auto border-2 rounded-2xl border-[#667085]">
           <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-black font-bold text-xl">
                Image
             </div>
            </div>
          </div>
        </section>
    </div>
  );
} 


// <div className="w-full">
    //   {sections.map((section, i) => (
    //     <section
    //       key={i}
    //       ref={(el) => (sectionsRef.current[i] = el)}
    //       className={`trig-${i} relative border-2 rounded-2xl mx-[5%]  border-[#d4d1d1] h-[80vh] flex items-center justify-center bg-[#FCFAFA] text-white  z-[${100 - i}]`}
    //     >
    //       <div className={` py-16 w-full mx-8 flex ${section.flexDirection} gap-6 items-center justify-center px-4`}>
    //         {/* Text */}
    //         <div className={`flex flex-col gap-4 w-[65%] py-32 px-4 ${section.alignItems}`}>
    //           <h1 className="text-[32px] text-[#0A0A0A] font-bold mb-2 w-[70%]">{section.title}</h1>
    //           <p className="text-2xl text-[#667085] w-[70%]">{section.description}</p>
    //         </div>
    //         {/* Placeholder */} 
    //         <div className="w-[35%] p-4 h-auto border-2 rounded-2xl border-[#667085]">
    //           <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-black font-bold text-xl">
    //             Image
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   ))}
    // </div>