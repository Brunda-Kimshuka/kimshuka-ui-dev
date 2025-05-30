import React, {useState} from 'react'
import Logo from '../../assets/Kimshuka-Logo.svg';
import Menubar from '../../assets/MenuBarMbl.svg';

const NavbarMobile = () => {
 const [isMenu, setIsMenu] = useState(false);

 const handleMenuclick = () => {
  const newState = !isMenu;
  setIsMenu(newState);
};


  return (
    <>
    <div className='w-full h-12 bg-[#FCFAFA] flex justify-between items-center px-4'>
      <div className='' >
      <img src={Logo} className='w-[75px] h-[35px]' />
     </div>

    <div className='w-6 h-6' onClick={handleMenuclick}>
    <img src={Menubar} />
    </div>

    </div>

<div
  className={`z-40 absolute w-full h-[95vh]  bg-purple-200 ${isMenu ? 'block' : 'hidden'}`}
>
 
</div>
    </>
  )
}

export default NavbarMobile
