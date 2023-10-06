import { useState } from 'react'
import logo from "/logo-mytinerary.png"
import { Link as LinkRouter } from 'react-router-dom'
import UserMenu from './UserMenu'

const Nav = () => {
  let links =[
    {title: "Home", to: "/"},
    {title: "Cities", to: "cities"}
  ]
   let [open,setOpen] = useState(false);
  
  return (
    <div className="nav flex items-center justify-between w-full md:px-14 px-8 py-5 absolute">
      <img src={logo} className='logo w-[200px] cursor-pointer'/>
      <div onClick={() => setOpen(!open)} className='text-white text-3xl absolute right-8 top-auto cursor-pointer md:hidden'>
        <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
      </div>
      <ul className={`flex items-center flex-col md:flex-row transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}`}>
        {
          links.map((link) => (<LinkRouter className='nav-links md:mx-8 text-white text-xl' key={link.title} to={link.to}>{link.title}</LinkRouter>))
        }
        <UserMenu />
      </ul>
    </div>
  )
}

export default Nav

{/* return (
      <div className='nav h-20 w-full top-0 left-0 bg-white drop-shadow-lg'>
        <div className='md:flex items-center justify-between py-0 md:px-10 px-7'>
          <div className='flex items-center'>
            <img className='logo h-20 w-50 p-0 ml-5 cursor-pointer' src={logo} alt='Logo MyTinerary'/>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pr-5 absolute z-50 md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100 menu-shadow" : "top-[-490px] md:opacity-100 opacity-0"}`}>
            {
              links.map((link) => (<LinkRouter className='font-text text-gray-800 text-3xl hover:text-amber-500 flex md:ml-5 md:my-0 my-7' key={link.title} to={link.to}>{link.title}</LinkRouter>))
            }
            <UserMenu /> 
          </ul>
        </div>
    </div> 
  )*/}