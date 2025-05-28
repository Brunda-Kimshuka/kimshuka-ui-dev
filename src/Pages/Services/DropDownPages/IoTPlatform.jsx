import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
import Arrow from '../../../assets/ArrowUpRight.svg';
import Arrowright from '../../../assets/ArrowRight.svg';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServicesContent/ServiceCard';
import AboutUsHdng from '../../Home/AboutUsHdng';
const IoTPlatform = () => {
  const scrollData = [
    {
      id: 1, 
      name : "IoT Strategy & Solution Design", 
      description : "Identify the right use cases to automate, optimize, and scale. We help you define measurable IoT goals, select fit-for-purpose devices and platforms, and create a deployment roadmap that aligns with your operational workflows whether you're tracking assets, monitoring equipment, or improving field operations."
    },
    {
      id: 2, 
      name : "MQTT Integration", 
      description : "Enable fast, efficient communication across your IoT ecosystem with MQTT, a lightweight protocol designed for real-time performance and minimal network overhead. We specialize in integrating MQTT to streamline data transmission between sensors, gateways and platforms using a publish/subscribe model that enhances scalability, responsiveness and bandwidth efficiency."
    },
    {
      id: 3, 
      name : "Data Analytics & Insights", 
      description : "Turn raw IoT data into actionable business decisions. We help build analytics workflows with custom dashboards and reporting to surface relevant KPIs to gain real-time visibility into your operations, respond faster and unlock greater business value from your IoT infrastructure."
    },
    {
      id: 4, 
      name : "Platform & System Integration", 
      description : "Connect your IoT devices with your existing systems to enable smooth data flow. With our expertise in cloud platforms, APIs and middleware we help integrate disparate systems and facilitate bidirectional data flow for efficient communication."
    },
    {
      id: 5, 
      name : "Device Management & Monitoring", 
      description : "Configure, manage and monitor IoT devices to ensure reliable communication and performance. We support your operations through device updates, optimized configurations and continuous monitoring. This proactive approach helps identify and resolve problems early, reduce downtime and keep IoT ecosystem running smoothly."
    },
  ]
    const cardData = [
    {
      id: 1,
      name: "Identify high-impact use cases",
      description: "Prioritize opportunities where IoT delivers specific business outcomes like cost savings, uptime, or faster response.",
    },
    {
      id: 2,
      name: "Design and connect the platform",
      description: "Build a scalable system architecture and establish secure device-to-cloud communication with MQTT.",
    },
    {
      id: 3,
      name: "Integrate and activate data",
      description: "Link IoT data with business systems and setup analytics and dashboards to surface actionable insights in real time.",
    },
    {
      id: 4,
      name: "Support Scale and Evolution",
      description: "Post-deployment, we fine-tune configurations, manage devices, and expand the platform as new business needs evolve.",
    }
  ]
  return (
    <div className='flex flex-col'>
      <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
        <div className="h-[490px] w-[40%] flex flex-col flex-shrink-0">
          <ServiceHdng
           PriHdng='Our Services'
           SecHdng='Iot Platform'
           Para="Unify your connected devices with expert-driven IoT solutions, We help convert complex device interactions into clear, impactful insights that maximize business potential through optimized operations, sustainable growth, and transformative opportunities in the evolving digital landscape."
         />
         <Link to="/contact" className='flex py-2 px-4  gap-2 text-[#FFFFFF] bg-[#1B1B1D] w-fit justify-center items-center  rounded-full group hover:bg-[#F27F0C]'>
             <h4>Connect with Our IoT Expert.</h4>
             <div className='bg-[#F27F0C] p-1 rounded-full w-6 h-6 justify-center items-center'>
                 <img src={Arrow} className='group-hover:hidden'/>
                  <img src={Arrowright} className=' hidden group-hover:block'/>               
              </div>
          </Link>
       </div>
       <div className="w-[60%] flex flex-col flex-1">
         <ServiceScroll services={scrollData}/>
        </div>
      </div>
      <div className='h-full w-full'>
        <div>
          <AboutUsHdng
            OrngHdng='Our Approach'
            PrimaryHdng='How We Make Your IoT System Work'
          />
        </div>
        <div >
          <ServiceCard cards={cardData}/>
        </div>
      </div>
    </div>
  )
}

export default IoTPlatform
