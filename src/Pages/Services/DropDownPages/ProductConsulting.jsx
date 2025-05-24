import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
const ProductConsulting = () => {
  const scrollDate = [
    {"id": 1, "name" : "Product Strategy", "description" : "We develop a clear strategy and roadmap that aligns with your business goals, ensuring that your product vision is effectively realized. Our tailored approach considers market needs and user insights, guiding every stage of development. This strategic alignment helps prioritize initiatives and drive successful outcomes."},
    {"id": 2, "name" : "Product Development", "description" : "We implement best practices to ensure high-quality outcomes throughout the development process. Our approach focuses on iterative improvements, allowing us to adapt to user feedback and evolving market changes which ensures your product remains competitive and meets user needs."},
    {"id": 3, "name" : "Go to Market Strategy", "description" : "We develop comprehensive plans for successful product launches, focusing on key elements such as market positioning, messaging, and promotional strategies. Our tailored approach ensures that your product resonates with target audiences and stands out in the competitive landscape."},
    {"id": 4, "name" : "Industry Research", "description" : "​At Kimshuka, we specialize in in-depth industry research and strategic insights to empower your product decisions. Our data-driven approach uncovers market trends, customer needs, and competitive landscapes, helping you innovate and stay ahead. With expert consulting, we guide you through the complexities of product development. Partner with us for actionable insights that drive success."},
    {"id": 5, "name" : "Performance Analysis", "description" : "We monitor key metrics to assess product performance, delivering valuable insights that drive data-driven decision-making. This analytical approach helps identify areas for improvement, ensuring your product consistently meets and exceeds user expectations. By leveraging these insights, we enable you to make informed adjustments that enhance functionality and user satisfaction."},

  ]
  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng='Our Services'
          SecHdng='Product Consulting'
          Para="We turn ideas into reality with expert guidance, refining, strategizing, and designing for users. Our agile approach ensures quality and impactful go-to-market strategies, prioritizing your success from ideation to launch."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollDate}/>
      </div>
    </div>
  )
}

export default ProductConsulting
