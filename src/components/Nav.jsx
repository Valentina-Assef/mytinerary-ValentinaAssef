import { useState } from 'react'
import logo from "../../public/logo-mytinerary.png"

const Nav = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"Cities",link:""},
  ]
  let [open,setOpen]=useState(false);
  return (
    <div className='nav h-20 shadow-md w-full fixed top-0 left-0 bg-white opacity-70'>
        <div className='md:flex items-center justify-between py-0 md:px-10 px-7'>
          <div className='flex items-center'>
            <img className='logo h-auto p-0 cursor-pointer' src={logo} alt='Logo MyTinerary'/>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}`}>
            {
              Links.map((Link) => (
                <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
                </li>
              ))
            }
            <button type="button" className="border-black md:ml-8 md:my-0 my-7 relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <ion-icon name="person-circle-outline"></ion-icon>
            </button>
          </ul>
        </div>
    </div>
  )
}

export default Nav