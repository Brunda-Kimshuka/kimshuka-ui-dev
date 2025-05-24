import React from 'react'
import ServiceHdng from '../ServicesContent/ServiceHdng'
import ServiceScroll from '../ServicesContent/ServiceScroll'
const IoTPlatform = () => {
  const scrollData = [
    {"id": 1, "name" : "IOT Solution Design", "description" : "At Kimshuka Technologies, we specialize in creating custom IoT solutions tailored to your specific requirements. Our approach begins with a thorough understanding of your business needs and goals, allowing us to design solutions that seamlessly integrate platforms, devices, and sensors. Our solutions facilitate real-time data analysis, enabling you to capture and process data as it flows in."},
    {"id": 2, "name" : "MQTT Integration", "description" : "Utilizing the MQTT protocol, we facilitate efficient, real-time communication for your IoT applications. This lightweight messaging protocol is ideal for low-bandwidth devices, allowing for quick and reliable data transmission. The publish subscribe model enhances scalability and responsiveness, ensuring that critical updates and notifications are delivered promptly."},
    {"id": 3, "name" : "Data Analytics", "description" : "We transform raw data into actionable insights through our advanced analytics tools, enabling informed decision-making. Our real-time processing capabilities allow for immediate analysis of incoming data, ensuring you can respond swiftly to emerging trends. With custom reporting features, we provide clear visualizations to help you track key metrics effectively."},
    {"id": 4, "name" : "Device Management", "description" : "Our approach ensures reliable communication and functionality among your IoT devices. Through effective configuration, we optimize device settings for peak performance. Continuous monitoring solutions help identify issues proactively, reducing downtime and ensuring your operations run smoothly."},
    {"id": 5, "name" : "Platform Integration", "description" : "We specialize in seamlessly integrating IoT solutions with your existing systems, ensuring smooth data transfer and compatibility. Our expertise in APIs and middleware enables efficient communication between disparate systems, enhancing your overall operational efficiency."},
  ]
  return (
    <div className="flex w-full h-screen px-[80px] py-[100px] gap-4">
      <div className="h-[490px] w-[40%] flex flex-shrink-0">
        <ServiceHdng
          PriHdng='Our Services'
          SecHdng='Iot Platform'
          Para="Kimshuka's IoT solutions empower businesses with connected devices, actionable insights, and transformative opportunities. Our experts drive scalable innovation, optimizing operations for sustained growth in the digital landscape."
        />
      </div>
      <div className="w-[60%] flex flex-col flex-1">
        <ServiceScroll services={scrollData}/>
      </div>
    </div>
  )
}

export default IoTPlatform
