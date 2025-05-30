import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
const UXServices = () => {
  const scrollData = [
    {"id" : 1, "name" : "Collaborative Approach", "description" : "We embrace a collaborative approach, working closely with you throughout the design process to ensure your vision is realized. Your input is invaluable in shaping a product that truly resonates with users. This partnership fosters creativity and results in a user experience that is both effective and engaging."},
    {"id" : 2, "name" : "Customized Solutions", "description" : "We tailor our UX services to meet your specific needs whether for software, websites, or mobile apps. This personalized approach ensures our designs are aligned with your goals and resonate with your target audience. By focusing on customization, we deliver solutions that enhance user engagement and satisfaction."},
    {"id" : 3, "name" : "Ongoing Support", "description" : "Our commitment extends beyond launch, as we provide ongoing support to optimize and enhance the user experience. Continuous feedback and updates allow your product to evolve in line with user needs and market trends. This proactive approach ensures lasting satisfaction and engagement for your users."},
    {"id" : 4, "name" : "Expertise in UX Design", "description" : "Our skilled UX designers specialize in creating intuitive, user-centered interfaces that are both visually appealing and functional. We prioritize understanding user needs, enabling us to craft experiences that truly resonate with your audience. By focusing on usability and aesthetics, we enhance overall user satisfaction. This commitment to quality design ensures that your product stands out in a competitive market."},
    {"id" : 5, "name" : "User Research and Training", "description" : "We conduct thorough research and testing to base our designs on actual user behavior and preferences. This iterative process allows us to continuously refine and enhance user interactions for optimal engagement. By focusing on user insights, we ensure that the final product not only meets but exceeds user expectations. Our commitment to understanding users drives the creation of intuitive and impactful experiences."},

  ]
  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng='Our Services'
          SecHdng='UX Services'
          Para="At Kimshuka Technologies, we craft memorable, user-friendly experiences that captivate and engage customers. Our experts help enhance your digital product to drive business growth and customer loyalty."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollData}/>
      </div>
    </div>
  )
}

export default UXServices
