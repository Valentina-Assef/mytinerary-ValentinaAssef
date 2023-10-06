import logo from "/logo-mytinerary.png"
import { Link as LinkRouter } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="flex flex-col text-center m-auto mt-32 text-white">
      <img className='logo cursor-pointer mx-auto w-[250px] md:w-[400px]' src={logo} alt='Logo MyTinerary'/>
      <h2 className="font-text my-5 text-7xl">
        Find your perfect trip 
      </h2>
      <h3 className="text-xl mb-3">
        Designed by insiders who know and love their cities
      </h3>
      <div className="flex justify-center mt-6">
        <button className="btn-hero bg-red-500 border-gray-100 border-2 text-white font-semibold rounded-full mb-5 py-3 px-8 transition-all duration-300 ease relative overflow-hidden">
          <LinkRouter to={`/cities`} className="relative z-10 transition-all duration-300 ease">View More</LinkRouter>
        </button>
      </div>
    </div>
  )
}