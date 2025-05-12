import React from 'react'
// import { Link , useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom'; 



const Navbar = () => {

  return (
    <nav className='flex justify-between py-2 px-[5%] bg-[#FCFAFA]'>
      <div className='w-[150px] h-[60px] bg-blue-300 items-center'>
        <img src=''/>
      </div>

      <div className='flex gap-8 items-center'>
        
        <h2>Home</h2>

        <div className='flex gap-2 items-center'>
         <h2>Services</h2>
         <div className='w-4 h-4 bg-green-300'><img/></div>
        </div>

        <h2>About Us</h2>

        <h2>Blogs</h2>

        <h2>Contacts</h2>
      </div>

      <div className=' gap-4 flex items-center'>
        <div className='bg-blue-300 w-16 h-16 border rounded-full'><img/></div>
        <div className='flex p-2 gap-2 '>
            <h4>Get Started</h4>
            <div className='bg-[#6c5858] w-8 h-8'>
                <img/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
