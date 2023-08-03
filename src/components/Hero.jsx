import logo from "../../public/logo-mytinerary.png"
import Carousel from "./Carousel"

export default function Hero() {
  return (
    <div className="main w-screen h-screen text-gray-800 flex items-between justify-center">
      <div className="container flex flex-row max-w-50 opacity-90 m-20 items-center">
        <div className="text-center bg-white pb-4 rounded-lg p-3">
          <img className='logo h-fit w-5/6 p-0 cursor-pointer mx-auto' src={logo} alt='Logo MyTinerary'/>
          <h2 className="my-3 text-3xl font-bold leading-tight">
            Find your perfect trip, designed by insiders who know and love their cities
          </h2>
          <div className="flex justify-center">
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              View More
            </button>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  )
}