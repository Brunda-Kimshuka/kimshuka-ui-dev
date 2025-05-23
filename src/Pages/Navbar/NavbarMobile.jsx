import React from 'react'
import Logo from '../../assets/Kimshuka-Logo.svg';
import Menubar from '../../assets/MenuBarMbl.svg';

const NavbarMobile = () => {
  return (
    <>
    <div className='w-full h-12 bg-[#FCFAFA] flex justify-between items-center px-4'>
      <div className=''>
        <img src={Logo} className='w-[75px] h-[35px]'/>
      </div>

    <div className='w-6 h-6'>
    <img src={Menubar} />
    </div>

    </div>
    </>
  )
}

export default NavbarMobile
