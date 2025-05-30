import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FAQ from '../Components/FAQ'
import CTABanner from '../Components/CTABanner'
import Footer from '../Navbar/Footer'
import APIManagement from './DropDownPages/APIManagement'
import IoTPlatform from './DropDownPages/IoTPlatform'
import UXServices from './DropDownPages/UXServices'
import WebAndAppDevelopment from './DropDownPages/WebAndAppDevelopment'
import ProductConsulting from './DropDownPages/ProductConsulting'
import TeamAugmentation from './DropDownPages/TeamAugmentation'
import DropDown from "./DropDown";

export const SERVICES_CONFIG = [
  { id: 1, name: "API Management", component: APIManagement },
  { id: 2, name: "IoT Platform", component: IoTPlatform },
  { id: 3, name: "UX Services", component: UXServices },
  { id: 4, name: "Web & App Development", component: WebAndAppDevelopment },
  { id: 5, name: "Product Consulting", component: ProductConsulting },
  { id: 6, name: "Team Augmentation", component: TeamAugmentation },
];


const Services = () => {
  const [activeService, setActiveService] = useState("1");

  const servicesMap = SERVICES_CONFIG.reduce((acc, service) => {
    acc[service.id] = service.component;
    return acc;
  }, {});
  const handleSelectService = (serviceId) => {
    setActiveService(serviceId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const CurrentService = servicesMap[activeService];

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar onSelectService={handleSelectService} />
      </div>
      {CurrentService ? (
        <CurrentService />
      ) : (
        <p>Please select a component from the dropdown</p>
      )}
      {/* <DropDown
          activeService={activeService}
          onSelectService={handleSelectService}
        />  */}
      <FAQ />
      <CTABanner />
      <Footer onSelectService={handleSelectService} />
    </div>
  );
};

export default Services
