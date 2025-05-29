import React from 'react'
import AboutUsHdng from './AboutUsHdng'
const OurClients = () => {
  return (
    <div>
        <AboutUsHdng
            OrngHdng='Big wins, thanks to'
            PrimaryHdng='Our Clients'
            PyrA="We've partnered with businesses across industries to deliver tailored solutions,"
            PyrB='streamline digital operations, and modernize tech stacks.'
        />
        <div className='grid grid-cols-4 grid-rows-2 w-full h-auto py-12 px-32'>
            <div className='relative'>
                <img src="src/assets/image 7.svg" alt="tenxerlabs" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>Tenxerlabs.com</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 8.svg" alt="onzetech" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>latlong.ai</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085]"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 12.svg" alt="optenergy" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>optenergy.com.au</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085]"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 9.svg" alt="signup" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>Sign-Up.to</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#fff]"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className=' pt-6'>
                <img src="src/assets/image 11.svg" alt="iocaoi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>ICMAI.in</h4>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/image 13.svg" alt="zchem" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>zchem.in</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/s_logo1 2.svg" alt="sipl" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>saradeuz.com</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/image 15.svg" alt="vedavaapi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>vedavaapi.org</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
        </div>
      

    </div>
    
  )
}

export default OurClients
