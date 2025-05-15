import React from 'react'

const OurClients = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center space-y-2'>
            <div className='flex items-center justify-center gap-2'>
                <img src="src/assets/Group.svg" alt="" />
                <h2 className='text-[#F27F0C]'>Big wins, thanks to</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-[600px] space-y-2'>
                <h1 className='font-bold text-3xl text-[#0A0A0A]'>OUR CLIENTS</h1>
                <p className='text-center text-[#667085]'>We've partnered with businesses across industries to deliver tailored solutions, streamline digital operations, and modernize tech stacks.</p>
            </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 w-[1000px] h-[400px] pt-12 pb-12'>
            <div className='relative'>
                <img src="src/assets/image 7.svg" alt="tenxerlabs" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>Tenxerlabs.com</h4>
                <div class="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 8.svg" alt="onzetech" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>latlong.ai</h4>
                <div class="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085]"></div>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 12.svg" alt="optenergy" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>optenergy.com.au</h4>
                <div class="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#667085]"></div>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className='relative'>
                <img src="src/assets/image 9.svg" alt="signup" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>Sign-Up.to</h4>
                <div class="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#667085] to-[#fff]"></div>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#fff] to-[#667085]"></div>
            </div>
            <div className=' pt-6'>
                <img src="src/assets/image 11.svg" alt="iocaoi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>ICMAI.in</h4>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/image 13.svg" alt="zchem" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>zchem.in</h4>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/s_logo1 2.svg" alt="sipl" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>saradeuz.com</h4>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
            <div className='relative pt-6'>
                <img src="src/assets/image 15.svg" alt="vedavaapi" />
                <h4 className='flex items-center justify-center text-[#667085] text-[15px]'>vedavaapi.org</h4>
                <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#667085] to-[#fff]"></div>
            </div>
        </div>
      

    </div>
    
  )
}

export default OurClients
