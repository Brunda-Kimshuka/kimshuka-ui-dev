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
import DropDown from './DropDown'

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
        <Navbar onSelectService={handleSelectService}/>
        
        {activeService?(<CurrentService/>):(<p>Please select a component from the dropdown</p>)}
        <FAQ/>
        <CTABanner />
        <Footer />
        
   </div>
  )
}

export default Services
