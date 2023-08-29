import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link as LinkRouter } from "react-router-dom"
import ModalDetails from "../components/ModalDetails"

export default function Details() {
  const { _id } = useParams()
  const [cityDetail, setCityDetail] = useState()
  const [modalChange, setModalChange] = useState(false)

  const handleOpenModal = () => {
    setModalChange(true);
  };

  const handleCloseModal = () => {
    setModalChange(false);
  }

  useEffect(() => {
    axios.get(`http://localhost:7000/api/cities/${_id}`)
      .then(response => setCityDetail(response.data.oneCity))
      .catch(err => console.log(err))
  }, [_id])

  if (!cityDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 bg-amber-500 border-4">
      <div className="lg:grid lg:grid-cols-2 flex justify-center items-start flex-wrap">
        <div className="1 flex justify-center items-end">
          <img src={cityDetail.img} className="md:max-h-[90vh] lg:h-[65vh] md:w-full lg:object-cover rounded-lg" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.8)" }} alt={cityDetail.name} />
          <p className="bg-white p-3 mb-5 md:text-4xl font-text rounded-lg opacity-80 absolute">{cityDetail.name} - {cityDetail.country}</p>
        </div>
        <div className="2 mx-5 flex flex-col">
          <div className="3 p-3 mb-5 mt-2 flex justify-center items-center text-3xl md:text-4xl bg-amber-300" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.8)" }}>
            <p className="font-text">Itineraries</p>
          </div> 
          <div className="4 m-3 lg:mt-5 p-5 flex flex-col justify-center items-center bg-white rounded-xl" style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)" }}>
            <div className="text-center">
              <h3 className="text-2xl mb-3">Carioca Beaches</h3>
              <div className="flex items-center">
                <img src="../../public/user/carlos-santana.jpg" alt="Carlos Santana" className="w-10 h-10 rounded-full object-cover mr-2" />
                <p className="text-xl">Carlos Santana</p>
              </div>
            </div>
            <div className="text-center flex flex-wrap md:flex-nowrap mt-2 space-x-5 md:space-x-16 lg:space-x-6 justify-center">
              <div className="text-xl mt-3">
                <p>Price</p>
                <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
              </div>
              <div>
                <p className="text-xl mt-3">Duration</p>
                <p>3 days</p>
              </div>
              <div className="text-lg m-3">
                <p>#RelaxCarioca</p>
                <p>#Sand&Sea</p>
                <p>#RioBeaches</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                <botton className="cursor-pointer lg:ml-5"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></botton>
                <p className="lg:ml-5">0</p>
              </div>
            </div>
            <div className="m-5">
              <botton onClick={handleOpenModal} className="bg-gray-900 text-white font-bold rounded-full py-3 px-3 md:px-8 cursor-pointer">+ View More</botton>
              {modalChange && <ModalDetails onClose={handleCloseModal} />}
            </div>
          </div>
        </div>
        <div className="5 m-5 lg:mt-10 p-5 flex flex-col justify-center items-center bg-white rounded-xl" style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)" }}>
          <div className="text-center">
                <h3 className="text-2xl mb-3">Explore Nature</h3>
                <div className="flex items-center">
                  <img src="../../public/user/kamiz-ferreira.jpg" alt="Carlos Santana" className="w-10 h-10 rounded-full object-cover mr-2" />
                  <p className="text-xl">Kamiz Ferreira</p>
                </div>
              </div>
              <div className="text-center flex flex-wrap md:flex-nowrap mt-2 space-x-5 md:space-x-16 lg:space-x-6 justify-center">
                <div className="text-xl mt-3">
                  <p>Price</p>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                </div>
                <div>
                  <p className="text-xl mt-3">Duration</p>
                  <p>2 days</p>
                </div>
                <div className="text-lg m-3">
                  <p>#ExploreRio</p>
                  <p>#CariocaNature</p>
                  <p>#WildAdventure</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-3">
                  <botton className="cursor-pointer lg:ml-5"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></botton>
                  <p className="lg:ml-5">0</p>
                </div>
              </div>
              <div className="m-5">
                <botton className="bg-gray-900 text-white font-bold rounded-full py-3 px-3 md:px-8 cursor-pointer">+ View More</botton>
              </div>
          </div>
        <div className="6 m-5 lg:mt-10 p-5 flex flex-col justify-center items-center bg-white rounded-xl" style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)" }}>
          <div className="text-center">
                <h3 className="text-2xl mb-3">Cultural Rio</h3>
                <div className="flex items-center">
                  <img src="../../public/user/ibadat-singh.jpg" alt="Carlos Santana" className="w-10 h-10 rounded-full object-cover mr-2" />
                  <p className="text-xl">Ibadat Singh</p>
                </div>
              </div>
              <div className="text-center flex flex-wrap md:flex-nowrap mt-2 space-x-5 md:space-x-16 lg:space-x-6 justify-center">
                <div className="text-xl mt-3">
                  <p>Price</p>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                  <ion-icon name="cash-outline" style={{ margin: "0.1rem" }}></ion-icon>
                </div>
                <div>
                  <p className="text-xl mt-3">Duration</p>
                  <p>1 day</p>
                </div>
                <div className="text-lg m-3">
                  <p>#CariocaCulture</p>
                  <p>#BrazilianHistory</p>
                  <p>#LivingArt</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-3">
                  <botton className="cursor-pointer lg:ml-5"><ion-icon name="heart-outline" style={{ fontSize: "2rem" }}></ion-icon></botton>
                  <p className="lg:ml-5">0</p>
                </div>
              </div>
              <div className="m-5">
                <botton className="bg-gray-900 text-white font-bold rounded-full py-3 px-3 md:px-8 cursor-pointer">+ View More</botton>
              </div>
          </div>
        </div>
      <div className="flex justify-center items-center mt-12">
        <button className="bg-gray-900 text-white font-bold rounded-full py-3 px-8">
          <LinkRouter to={`/cities`} className="">Go Back</LinkRouter>
        </button>
      </div>
    </div>
  )
}