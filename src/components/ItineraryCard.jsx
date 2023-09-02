import { useState } from "react";
import ModalDetails from "../components/ModalDetails"

export default function ItineraryCard({ name, user_name, user_img, price, duration, hashtags }) {
  //Modal View More
  const [modalChange, setModalChange] = useState(false)

  const handleOpenModal = () => {
    setModalChange(true);
  };

  const handleCloseModal = () => {
    setModalChange(false);
  }
  
  return (
    <div className="w-[75vw] lg:w-[95%] m-10 lg:mt-5 p-5 flex flex-col justify-center items-center bg-white rounded-xl" style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)" }}>
      <div className="text-center flex flex-col justify-center items-center">
        <h3 className="text-2xl mb-3">{name}</h3>
        <div className="flex items-center">
          <img src={user_img} alt={user_name} className="w-10 h-10 rounded-full object-cover mr-1 md:mr-2" />
          <p className="text-xl">{user_name}</p>
        </div>
      </div>
      <div className="text-lg text-center flex flex-wrap justify-center md:mt-5 px-5 py-3 md:space-x-2">
        <div className="p-2">
          <p>Price</p>
          {Array.from({ length: price }).map((_, index) => (
              <ion-icon key={index} name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
          ))}
        </div>
        <div className="p-2">
          <p>Duration</p>
          <p>{duration}</p>
        </div>
        <div className="p-2">
          {hashtags.map((tag, index) => (
              <p key={index}>{tag}</p>
          ))}
        </div>
        <div className="p-2 flex flex-col justify-center items-center">
          <botton className="cursor-pointer transition-colors hover:text-red-500"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></botton>
          <p className="text-lg" style={{ marginTop: "-10px" }}>0</p>
        </div>
      </div>
      <div className="mb-2 md:mt-5">
        <button onClick={handleOpenModal} className="bg-gray-900 text-white hover:bg-gray-800 font-bold rounded-full p-3 md:px-8 cursor-pointer">+ View More</button>
        {modalChange && <ModalDetails onClose={handleCloseModal} />}
      </div>
    </div>
  )
}