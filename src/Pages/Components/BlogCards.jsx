import React from 'react'
// import BlogOne from '../../assets/Blogone.svg';

const BlogCards = (prop ) => {
  const{
        Heading,
        desc,
        date,
        imgurl
    } = prop;
  
  return (
    
    <div className=' flex flex-col gap-4 border-[1px] border-[#d5d3d3] rounded-2xl overflow-hidden col-span-4' >
      <div className="relative group overflow-hidden ">
  <img
    src={imgurl}
    className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
</div>

      <div className='flex flex-col gap-4 py-4 px-6'>
        <h2 className='font-medium xl:text-2xl lg:text-lg'>{Heading}</h2>
        <p className='text-[#667085] xl:text-base lg:text-[14px]'>{desc}</p>
        <p className='text-[#056C39] xl:text-lg lg:text-base'>{date}</p>
      </div>
    </div>  
  )
}

export default BlogCards
