import React from 'react'

const OurServicesCard = () => {
   
  const  Ourdata = [
  {
    "id": 1,
    "name": "API Management",
    "discription": "Connect systems to enable smooth data flow, better functionality, and smarter user experiences"
  },
  {
    "id": 2,
    "name": "IoT Platform",
    "discription": "Drive growth with connected IoT solutions that deliver insights and efficiency"
  },
  {
    "id": 3,
    "name": "UX Services",
    "discription": "Design experiences that create memorable moments and elevate every interaction that matters"
  },
  {
    "id": 4,
    "name": "Web & App Development",
    "discription": "Create modern apps that engage users and exceed expectations through thoughtful design"
  },
  {
    "id": 5,
    "name": "Product Consulting",
    "discription": "Refine, strategize and bring your ideas to life backed by expert guidance and user-focused execution"
  },
  {
    "id": 6,
    "name": "Team Augmentation",
    "discription": "Build agile tech teams on demand without having an in-house recruitment team"
  }
]


  return ( <>
    { Ourdata.map((item) => (
      <div className='flex flex-col gap-4  border-[1px] rounded-2xl border-[#D0D5DD] w-[550px] p-4' key={item.id}>
        <div className='flex w-12 h-12 justify-center items-center border-[1px] rounded-full border-[#13151a]'>{item.id}</div>
        <h1 className={`font-medium text-2xl `}>{item.name}</h1>
        <p className={`font-normal text-lg`}>{item.discription}</p>

        <button className='px-4 py-2 flex justify-center items-center bg-[#0A0A0A] hover:bg-[#F27F0C] transition-all duration-300 text-[#ffff] rounded-full w-[30%]'>Read More</button>
      </div>))}
      </>
  )
}

export default OurServicesCard
