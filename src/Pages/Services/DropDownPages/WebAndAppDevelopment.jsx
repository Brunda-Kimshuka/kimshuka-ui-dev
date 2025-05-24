import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
const WebAndAppDevelopment = () => {
  const scrollData = [
    {"id" : 1, "name" : "Cloud Solution", "description" : "We offer cloud solutions that provide scalability, flexibility, and cost-efficiency for your applications. We enhance accessibility and collaboration, empowering your team to work more effectively from anywhere, ensuring a smooth and seamless transition to the cloud without disruption to your operations."},
    {"id" : 2,  "name" : "Mobile App Development", "description" : "We specialize in developing native and cross-platform apps for iOS and Android, featuring user-friendly interfaces. Our applications are built to provide optimal performance while enhancing user engagement. We guide you through the entire development process, from concept to launch, ensuring a smooth experience."},
    {"id" : 3, "name" : "Custom Web Applications", "description" : "We deliver tailored web solutions that prioritize high performance and seamless user experiences. Our custom applications are designed to meet your unique business needs while ensuring scalability and responsiveness. With a focus on engaging design, we create websites that captivate users across all devices."},
    {"id" : 4, "name" : "API Development", "description" : "Our reliable APIs facilitate seamless integration and enhance your applications' functionality. We design scalable APIs that enable smooth communication between systems, allowing for efficient data exchange. With a focus on best practices, our APIs support your business growth and operational needs."},
    {"id" : 5, "name" : "Maintaience and Support", "description" : "We provide ongoing maintenance and support to ensure your applications run smoothly post-launch. Our services include regular updates, performance optimization, and prompt issue resolution. We monitor your systems to minimize downtime and maximize user satisfaction."},

  ]
  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng='Our Services'
          SecHdng='Web & App Development'
          Para="At Kimshuka, we specialize in developing innovative mobile and online apps that enhance user experiences and drive interaction. Our approach combines advanced technology with user-centered design to exceed your expectations."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollData}/>
      </div>
    </div>
  )
}

export default WebAndAppDevelopment
