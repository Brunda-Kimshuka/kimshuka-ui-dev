import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
const TeamAugmentation = () => {
  const scrollData = [
    {"id" : 1, "name" : "Customized Approach", "description" : "We tailor recruitment strategies to meet your unique needs, ensuring alignment with your organizational goals and culture. Our flexible methods adapt to various industries and roles, delivering a personalized experience. By understanding your specific requirements, we effectively target the right candidates. This customized approach enhances the quality of hires and supports your long-term success."},
    {"id" : 2, "name" : "Talent Acquisition", "description" : "Our extensive network and sourcing methods enable us to reach both active and passive candidates, expanding your talent pool. We leverage targeted outreach and innovative techniques to attract the best fit for your organization. By focusing on quality over quantity, we ensure that you receive candidates who align with your needs."},
    {"id" : 3, "name" : "Top Talent, Perfect Fit", "description" : "We conduct comprehensive screenings and assessments to deliver only the top candidates for your needs. Our rigorous evaluation process emphasizes not just qualifications, but also cultural fit, ensuring alignment with your organization's values. By meticulously assessing skills and character, we identify individuals who can thrive within your team. This commitment to quality guarantees that you receive highly qualified candidates."},
    {"id" : 4, "name" : "Guidance", "description" : "We provide valuable insights into market trends and compensation, empowering you to make informed hiring decisions. Our expertise helps you stay competitive in attracting top talent, ensuring your offers align with industry standards. This strategic approach enhances your ability to secure the best candidates for your organization."},
    {"id" : 5, "name" : "Onboarding and Retention", "description" : "We support onboarding processes to ensure a smooth transition for new hires, facilitating their integration into your organization. Our onboarding strategies enhance employee engagement from day one, setting the foundation for success providing effective retention strategies to keep top talent engaged and committed."},
    
  ]
  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng='Our Services'
          SecHdng='Team Augmentation'
          Para="Discover exceptional talent aligned with your vision. Our strategic recruitment saves time, securing top candidates who fit flawlessly. Partner with us for a success-driven workforce."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollData}/>
      </div>
    </div>
  )
}

export default TeamAugmentation
