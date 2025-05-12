import React from 'react'

const HeroComponent = () => {
  return (
    <div className='w-full h-full justify-center items-center text-center mt-[8%] mb-[40%]'>
            <p className='text-[#0BF480] text-lg font-normal'>Innovative Minds. Impactful Solutions.</p>
            <h2 className='text-[62px] font-bold my-4 '>Lorem ipsum <br/> dolor sit amet consectetur.</h2>
            <p className='text-[24px] font-normal'>Lorem ipsum dolor sit amet consectetur <br/>  Tempus varius pulvinar elit rutrum</p>

          <div className='w-full flex justify-center my-6'>
            <button className='flex gap-4 bg-[#1B1B1D] px-6 py-2 text-[#FCFAFA] items-center rounded-full'> 
              <h2 className='text-lg'>Explore Services</h2>
              <div className='w-10 h-10 bg-[#F27F0C] rounded-full'><img/></div>
            </button>
          </div>  
          </div>
  )
}

export default HeroComponent
