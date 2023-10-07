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
    <div className="nav flex items-center justify-between w-full md:px-14 absolute">
      <img src={logo} className='logo w-[200px] mx-8 my-5 cursor-pointer'/>
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

/* "fixed top-0 z-100 inline-block w-full mt-[100px] mb-[7%] text-right opacity-100" */
/* <ul className={`flex md:items-center justify-center md:pt-0 md:pr-5 absolute z-50 md:static bg-black md:bg-transparent rounded right-5 left-5 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}`}> */

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