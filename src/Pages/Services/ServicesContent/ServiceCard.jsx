import React from 'react'

const ServiceCard = ({ cards }) => {
 if(!cards || cards.length === 0){
        return <p>No data to display.</p>
    }

  return (
    <div className='flex gap-6 p-4'>
      {cards.map(card => (
        <div className='flex flex-col gap-4 border-[1px] rounded-xl border-[#D0D5DD] p-4 hover:border-[#F27F0C]/25 flex-1'>
            <div key={card.id} className='flex w-12 h-12 justify-center items-center border-[1px] rounded-full border-[#D0D5DD]'>{card.id}</div>
            <h1 className={`font-medium text-2xl `}>{card.name}</h1>
            <p className={`font-normal text-lg text-[#667085]`}>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard
