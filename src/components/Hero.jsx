import logo from "../../public/logo-mytinerary.png"

export default function Hero() {
  return (
    <div className="main w-screen h-screen text-black">
      <div className="container flex items-center justify-center flex-col opacity-70">
        <div className="text-center lg:w-5/12 w-50 mt-40 bg-white p-2">
          <img className='logo h-auto p-0 cursor-pointer opacity-100' src={logo} alt='Logo MyTinerary'/>
          <h2 className="my-4 text-4xl font-bold leading-tight">
            Find your perfect trip, designed by insiders who know and love their cities
          </h2>
          <div className="flex justify-center mx-auto">
            <button
              className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}