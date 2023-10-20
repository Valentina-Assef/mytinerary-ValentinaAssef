import { useState, useEffect } from 'react'
import logo from "/logo-mytinerary.png"
import { Link as LinkRouter } from 'react-router-dom'
import UserMenu from './UserMenu'

const Nav = () => {
  let links =[
    {title: "Home", to: "/"},
    {title: "Cities", to: "cities"}
  ]
  //Menu responsive
  let [open,setOpen] = useState(false);
  
  // Controlador de eventos para cerrar el menú en scroll y desplazamiento táctil
  useEffect(() => {
    const handleCloseMenu = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleCloseMenu);
    window.addEventListener('touchmove', handleCloseMenu);

    return () => {
      window.removeEventListener('scroll', handleCloseMenu);
      window.removeEventListener('touchmove', handleCloseMenu);
    };
  }, [open]);

  return (
    <div className="nav flex items-center justify-between w-full md:px-14 absolute">
      <a href="/"><img src={logo} className='logo w-[200px] mx-8 my-5 cursor-pointer'/></a>
      <div onClick={() => setOpen(!open)} className='text-white text-3xl absolute right-8 top-auto cursor-pointer sm:hidden'>
        <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
      </div>
      <ul className={`flex justify-center fixed z-50 w-full mt-[80px] bg-black sm:items-center sm:mt-0 sm:pt-0 sm:pr-5 sm:pl-0 sm:static sm:bg-transparent sm:w-auto transition-all duration-100 ease-in ${open ? "top-0 opacity-100" : "top-[-490px] sm:opacity-100 opacity-0"}`}>
        {
          links.map((link) => (<LinkRouter className='nav-links flex items-center mr-10 md:mx-8 text-white text-lg' key={link.title} to={link.to}>{link.title}</LinkRouter>))
        }
        <UserMenu />
      </ul>
    </div>
  )
}

export default Nav