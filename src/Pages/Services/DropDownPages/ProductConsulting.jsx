import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
import Arrow from '../../../assets/ArrowUpRight.svg';
import Arrowright from '../../../assets/ArrowRight.svg';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServicesContent/ServiceCard';
import AboutUsHdng from '../../Home/AboutUsHdng';
const ProductConsulting = () => {
  const scrollDate = [
    {"id": 1, "name" : "Market Research", "description" : "Uncover critical market gaps and user needs through in-depth research and competitive analysis. We uncover market trends, customer needs, and competitive landscapes to provide strategic insights that help you de-risk investments through product validation and innovation."},
    {"id": 2, "name" : "Product Strategy", "description" : "Define a clear product vision and strategic roadmap aligned with your core business objectives. We identify growth opportunities, prioritize high-impact initiatives based on user and market needs and build a focused plan that drives team alignment and delivers predictable, measurable outcomes."},
    {"id": 3, "name" : "Product Development", "description" : "Accelerate your product launch with lean, agile development methodologies. We implement best practices and start with Minimum Viable Products (MVPs) to ensure early, tangible value for your customers and faster market entry. Through iterative improvements based on real-time user feedback and market changes, we help maximize your ROI."},
    {"id": 4, "name" : "Go-to-Market Plans", "description" : "Craft a compelling go-to-market strategy to launch your product. We partner with you and plan strategic and tactical promotional activities that resonate with your target audience and align with your business stage. This ensures market penetration and maximize product impact within your specific market landscape."},
    {"id": 5, "name" : "Product Performance", "description" : "Continuously optimize your product performance. We monitor key metrics like load time, error rate, user engagement (conversion, drop-off, satisfaction retention etc,.), to assess product performance This analytical approach helps identify areas for improvement, ensuring your product consistently meets and exceeds user expectations."},

  ]

    const cardData = [
    {
      id: 1,
      name: "Discover & Align",
      description: "Identify real user needs, behavior patterns and whitespace through research and interviews.",
    },
    {
      id: 2,
      name: "Strategize & Blueprint",
      description: "Craft detailed product strategy and roadmap that prioritizes value-driven initiatives.",
    },
    {
      id: 3,
      name: "Execute & Iterate",
      description: "Design MVPs and iterate through agile sprints based on rapid user feedback.",
    },
    {
      id: 4,
      name: "Launch & Grow",
      description: "Shape GTM strategies from competitive positioning to pricing and launch messaging that lands.",
    },
    {
      id: 5,
      name: "Adopt & Refine",
      description: "Post-launch, monitor adoption and focus on continuous optimization to enhance performance and business impact.",
    }
  ];

  return (
    <div className="flex flex-col" >
      <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
       <div className="h-[490px] w-[40%] flex flex-col flex-shrink-0">
         <ServiceHdng
           PriHdng='Our Services'
           SecHdng='Product Consulting &   Management'
           Para="Turn your bold ideas into   reality. Our expert Product   Management as a Service (PMaaS)   adopts agile approach and helps you   refine, strategize and launch   user-focused digital products with  confidence."
         />
          <Link to="/contact" className='flex py-2 px-4  gap-2 text-[#FFFFFF] bg-[#1B1B1D] w-fit justify-center items-center  rounded-full group hover:bg-[#F27F0C]'>
             <h4 className='xl:text-lg lg:text-base'>Talk to a Product Consultant</h4>
             <div className='bg-[#F27F0C] p-1 rounded-full w-6 h-6 justify-center items-center'>
                 <img src={Arrow} className='group-hover:hidden'/>
                  <img src={Arrowright} className=' hidden group-hover:block'/>               
              </div>
          </Link>
       </div>
        <div className="w-[60%] flex flex-col flex-1">
          <ServiceScroll services={scrollDate}/>
        </div>
      </div>
      <div className='h-full w-full'>
        <div>
          <AboutUsHdng
            OrngHdng='Our Approach'
            PrimaryHdng='How We Turn Your Product Idea into Market Winning Reality'
          />
        </div>
        <div>
          <ServiceCard cards={cardData}/>
        </div>
      </div>
    </div>
  )
}

export default ProductConsulting
