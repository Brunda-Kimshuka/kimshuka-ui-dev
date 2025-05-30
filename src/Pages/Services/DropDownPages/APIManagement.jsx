import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from "../ServicesContent/ServiceScroll";
import Arrow from '../../../assets/ArrowUpRight.svg';
import Arrowright from '../../../assets/ArrowRight.svg';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServicesContent/ServiceCard';
import AboutUsHdng from '../../Home/AboutUsHdng';
const APIManagement = () => {
  const scrollData = [
    {
      id: 1,
      name: "API Analytics & Monitoring",
      description:
        "Gain real-time visibility into API performance, error rates and usage trends. With actionable insights and behavior tracking we help uncover performance gaps, user behavior patterns, and  optimization opportunities so that you can proactively make smarter integration decisions, ensuring every API call delivers value.",
    },
    {
      id: 2,
      name: "API Security & Access Control",
      description:
        "Protect your APIs with enterprise-grade security protocols including OAuth, JWT, API keys and TLS/SSL encryption. Our solutions ensures trusted, authorized access, real-time monitoring and continuous threat detection to keep your systems secure against vulnerabilities, without slowing innovation.",
    },
    {
      id: 3,
      name: "API Gateway & Traffic Management",
      description:
        "Integration with developer-friendly documentation, sandbox testing tools and community support. We build  developers portal that enable your teams build, test and deploy faster reducing time-to-market and encouraging adoption through intuitive workflows and self-service resources.",
    },
    {
      id: 4,
      name: "Performance Optimization",
      description:
        "Proactively identify performance bottlenecks, latency issues, and inefficient calls before they impact users. As your traffic grows, we help you maintain optimal speed, reliability, and high availability of your APIs through fast response times powered by smart load balancing, strategic caching, and continuous performance tuning.",
    },
    {
      id: 5,
      name: "API Lifecycle Management",
      description:
        "We optimize API reliability with smart load balancing and strategic caching for faster response times. Our scalable solutions adapt to traffic changes, ensuring consistent performance. By identifying and resolving bottlenecks early, we keep your systems running smoothly. Count on us to boost your API efficiency and reliability.",
    },
    {
      id: 6,
      name: "Lifecycle Management",
      description:
        "Manage your API lifecycle with full spectrum support from design and deployment to deprecation. We help align your API roadmap with evolving business priorities through strategic planning for scalability, upcoming integrations and upgrades, leading to a maximized return on your API investments.",
    },
    {
      id: 7,
      name: "Compliance & Data Governance",
      description:
        "Stay audit-ready and compliant with built-in data protection, access logging, and governance controls. We help  navigate evolving regulations with ease protecting sensitive information with automated logging, access controls  that simplify compliance and enhance trust across your digital ecosystem.",
    },
  ];

  const cardData = [
    {
      id: 1,
      name: "Map & Assess Your Ecosystem",
      description: "We start by mapping your current systems and assessing API behavior like load distribution and existing security practices, giving you full visibility and a clear baseline for improvement.",
    },
    {
      id: 2,
      name: "Design for Traceability & Security",
      description: "Our team implements secure, scalable gateways that simplify access, enforce policies, and maintain end-to-end traceability for compliance.",
    },
    {
      id: 3,
      name: "Empower Your Developers",
      description: "With intuitive tools, test environments, and clean documentation, we make it easy for your developers to build and integrate faster.",
    },
    {
      id: 4,
      name: "Monitor & Evolve",
      description: "Post-deployment, we continuously monitor performance, track usage, and fine-tune your APIs to evolve with your business.",
    }
  ]

  return (
    <div className="flex flex-col ">
      <div className='2xl:flex xl:flex lg:flex md:flex sm:flex max-sm:px-0 max-sm:h-[2164px] w-full h-screen px-[80px] py-[100px] gap-4 '>
        <div className="h-[490px] w-[40%] max-sm:w-[328px] max-sm:h-[245px] flex flex-col flex-shrink-0">
          <ServiceHdng
            PriHdng="Our Services"
            SecHdng="API Management"
            Para="Seamlessly integrate, secure and scale your applications with Kimshuka's robust API solutions, built for agility, reliability and cost-efficiency. We help you deliver resilient, future-ready APIs, without enterprise-level overhead."
         />
         <Link to="/contact" className='flex py-2 px-4  gap-2 text-[#FFFFFF] bg-[#1B1B1D] w-fit justify-center items-center  rounded-full group hover:bg-[#F27F0C]'>
             <h4 className='2xl:text-lg xl:text-base lg:text-base md:text-sm sm:text-xs'>Talk to an Integration Specialist</h4>
             <div className='bg-[#F27F0C] p-1 rounded-full w-6 h-6 justify-center items-center'>
                 <img src={Arrow} className='group-hover:hidden'/>
                  <img src={Arrowright} className=' hidden group-hover:block'/>               
              </div>
          </Link>
        </div>
        <div className="w-[60%] flex flex-1">
          <ServiceScroll services={scrollData} />
        </div>
      </div>
      <div className='h-full w-full max-sm:h-[964px]'>
        <div>
          <AboutUsHdng
            OrngHdng='Our Approach'
            PrimaryHdng='How We Make API Management Work for You'
            Hidden='hidden'
          />
        </div>
        <div>
          <ServiceCard cards={cardData}/>
        </div>
      </div>
    </div>
    
  );
};

export default APIManagement



