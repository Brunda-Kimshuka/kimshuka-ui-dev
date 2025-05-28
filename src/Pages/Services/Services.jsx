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



const Services = () => {
  const [activeService, setActiveService] = useState('APIManagement');

  const servicesMap = {
    'APIManagement' : APIManagement,
    'IoTPlatform' : IoTPlatform,
    'UXServices' : UXServices,
    'WebAndAppDevelopment' : WebAndAppDevelopment,
    'ProductConsulting' : ProductConsulting,
    'TeamAugmentation' : TeamAugmentation
  };

  const handleSelectService = (serviceName) =>{
    setActiveService(serviceName);
  };

  const CurrentService = servicesMap[activeService];
  return (
     <div className={ `w-full h-full flex flex-col items-center`}>
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar onSelectService={handleSelectService}/>
       </div> 
        {activeService?(<CurrentService/>):(<p>Please select a component from the dropdown</p>)}
        
        <FAQ/>
        <CTABanner />
        <Footer />  
   </div>
  )
}

export default Services
