import { useState } from "react";
import ModalDetails from "../components/ModalDetails"

export default function ItineraryCard({ name, img, user_name, user_img, price, duration, hashtags }) {
  //Modal View More
  const [modalChange, setModalChange] = useState(false)

  const handleOpenModal = () => {
    setModalChange(true);
  };

  const handleCloseModal = () => {
    setModalChange(false);
  }
  
  return (
    <div className="lg:w-3/4 flex flex-wrap md:flex-nowrap justify-center mt-16 mx-5 lg:mx-auto">
      <img src={img} alt={name} className="w-48 h-48 rounded-full object-cover"/>
      <div className="md:mx-8">
        <div className="md:absolute flex items-center justify-center md:justify-start">
          <h3 className="text-2xl text-center md:text-start md:text-3xl mb-1">{name}</h3>
          <div className="md:ml-6 ml-2 flex justify-center items-end">
            <button className="cursor-pointer transition-colors hover:text-red-500"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></button>
            <p>0</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2 md:mt-10 md:justify-start">
          <img src={user_img} alt={user_name} className="w-10 h-10 rounded-full object-cover mr-1 md:mr-2" />
          <p className="text-lg">{user_name}</p>
        </div>
        <div className="mt-5 text-center text-md flex flex-wrap justify-center md:justify-start">
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
        </div>
        <div className="flex space-x-5 px-1 md:space-x-5 justify-center md:justify-start flex-wrap">
          {hashtags.map((tag, index) => (
              <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      <div className="flex items-center mx-auto mt-10 md:mr-4">
        <button onClick={handleOpenModal} className="bg-red-500 border-gray-100 border-2 text-white font-semibold rounded-full p-3 md:px-8 cursor-pointer">+ View More</button>
        {modalChange && <ModalDetails onClose={handleCloseModal} />}
      </div>
    </div>
  )
}

/* import { useState } from "react";
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
          <button className="cursor-pointer transition-colors hover:text-red-500"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></button>
          <p className="text-lg" style={{ marginTop: "-10px" }}>0</p>
        </div>
      </div>
      <div className="mb-2 md:mt-5">
        <button onClick={handleOpenModal} className="bg-gray-900 text-white hover:bg-gray-800 font-bold rounded-full p-3 md:px-8 cursor-pointer">+ View More</button>
        {modalChange && <ModalDetails onClose={handleCloseModal} />}
      </div>
    </div>
  )
} */