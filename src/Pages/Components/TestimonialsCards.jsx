import React from 'react'

const TestimonialsCards = ({ text, author }) => {
  return (
    <div className='flex flex-col gap-4 p-4 w-[100%] bg-gray-500'>
        <div className='w-16 h-16 bg-amber-200 flex '><img/></div>
        <div>{text}</div>
        <div className='flex gap-4 '>
            <div className='w-20 h-20 rounded-full bg-green-200'><img src=""/></div>
            <div>{author}</div>
        </div>
    </div>
  )
}

export default TestimonialsCards
