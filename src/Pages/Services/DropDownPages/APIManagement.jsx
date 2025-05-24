import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from "../ServicesContent/ServiceScroll";
const APIManagement = () => {
  const scrollData = [
    {
      id: 1,
      name: "Analytics and Monitoring",
      description:
        "Gain valuable insights into API performance through comprehensive metrics tracking and error rate monitoring. Our user behavior analytics help you understand how your APIs are utilized, enabling data-driven decisions. By identifying trends and issues, we enhance the overall effectiveness and reliability of your services. Trust our analytics solutions to drive continuous improvement and reliability in your API offerings.",
    },
    {
      id: 2,
      name: "API Security",
      description:
        "We implement advanced measures to safeguard your API's including authentication protocols utilizing OAuth, JWT, and API keys to ensure only authorized users access your APIs. Data encryption by employing TLS/SSL encryption to protect sensitive information during transmission and continuous monitoring by implementing real-time monitoring to detect and respond to potential security threats, ensuring ongoing protection against vulnerabilities.",
    },
    {
      id: 3,
      name: "Gateway Management",
      description:
        "Efficiently manage your API ecosystem with robust version control and traffic management solutions. Our centralized security enforcement ensures that all your APIs are protected and compliant with industry standards. By streamlining access and optimizing performance, we help you maintain a seamless user experience. Trust us to provide the tools you need for effective governance and operational efficiency in your API landscape.",
    },
    {
      id: 4,
      name: "Developer Gateway",
      description:
        "Empower developers with user-friendly documentation and intuitive testing tools that simplify the integration process. Our comprehensive resources ensure that developers have everything they need to work efficiently and effectively. With dedicated community support, we foster collaboration and knowledge sharing among users. By streamlining the development experience, we help you accelerate time-to-market and enhance application quality.",
    },
    {
      id: 5,
      name: "Performance Optimization",
      description:
        "We optimize API reliability with smart load balancing and strategic caching for faster response times. Our scalable solutions adapt to traffic changes, ensuring consistent performance. By identifying and resolving bottlenecks early, we keep your systems running smoothly. Count on us to boost your API efficiency and reliability.",
    },
    {
      id: 6,
      name: "Lifecycle Management",
      description:
        "From initial installation to continuing maintenance, get all encompassing assistance for the API lifetime. As your company demands change, our committed staff makes sure your APIs stay efficient and optimized. To ensure long-term success, we assist you in planning for upcoming integrations and upgrades through strategic road mapping. Count on us to help you maximize the return on your API investments by guiding you through every stage of the process.",
    },
    {
      id: 7,
      name: "Compliance",
      description:
        "Navigate regulatory requirements with confidence through our robust data protection measures and comprehensive audit trails. We implement integrity management practices to ensure that your systems remain compliant with industry standards. Our solutions safeguard sensitive information, minimizing risks and enhancing trust with your stakeholders. With our expertise, you can focus on your core business while ensuring compliance and data security.",
    },
  ];

  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng="Our Services"
          SecHdng="API Management"
          Para="Seamlessly integrate and scale your applications with Kimshuka's robust API Management solutions. Our services ensure secure, efficient, and scalable API performance to accelerate your business growth and innovation."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollData} />
      </div>
    </div>
  );
};

export default APIManagement



