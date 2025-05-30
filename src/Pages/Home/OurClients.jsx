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
        <div className='grid lg:grid-cols-4 lg:grid-rows-2 max-sm:grid-cols-2 max-sm:grid-rows-4 w-full h-auto lg:py-12 lg:px-32 max-sm:py-4 max-sm:px-4'>
            <div className='relative max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 7.svg" alt="tenxerlabs" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>Tenxerlabs.com</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#fff] to-[#667085] md:block max-sm:hidden"></div>
            </div>
            <div className='relative max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 8.svg" alt="onzetech" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>latlong.ai</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085] md:block max-sm:hidden"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085] md:block max-sm:hidden"></div>
            </div>
            <div className='relative max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 12.svg" alt="optenergy" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>optenergy.com.au</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085] md:block max-sm:hidden"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085] md:block max-sm:hidden"></div>
            </div>
            <div className='relative max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 9.svg" alt="signup" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>Sign-Up.to</h4>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#fff] md:block max-sm:hidden"></div>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085] md:block max-sm:hidden"></div>
            </div>
            <div className=' pt-6 max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 11.svg" alt="iocaoi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>ICMAI.in</h4>
            </div>
            <div className='relative pt-6 max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 13.svg" alt="zchem" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>zchem.in</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff] md:block max-sm:hidden"></div>
            </div>
            <div className='relative pt-6 max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/s_logo1 2.svg" alt="sipl" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>saradeuz.com</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff] md:block max-sm:hidden"></div>
            </div>
            <div className='relative pt-6 max-sm:border-[1px] max-sm:border-[#D0D5DD] max-sm:py-8'>
                <img src="src/assets/image 15.svg" alt="vedavaapi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px] max-sm:mt-8'>vedavaapi.org</h4>
                <div className="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff] md:block max-sm:hidden"></div>
            </div>
        </div>
      

    </div>
    
  )
}

export default OurClients
