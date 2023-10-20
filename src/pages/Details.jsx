import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link as LinkRouter } from "react-router-dom"
import ItineraryCard from "../components/ItineraryCard"
import { useDispatch, useSelector } from "react-redux"
import { get_detail, get_itineraries } from "../store/actions/detailActions"

export default function Details() {
  const _id  = useParams()
  const dispatch = useDispatch()
  const cityDetail = useSelector((store) => store.detailReducer.cityDetail)
  const itineraries = useSelector((store) => store.detailReducer.itineraries)
  
  //Una ciudad en particular
  useEffect(() => {
    dispatch(get_detail(_id))
  }, [_id, dispatch])

  //Itinerarios de una ciudad
  useEffect(() => {
    dispatch(get_itineraries({ cityDetail: cityDetail }))
  }, [cityDetail, dispatch]);

  if (!cityDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <img src={cityDetail.img} className="w-full max-h-[85vh] object-cover" alt={cityDetail.name} />
      </div>
      {itineraries?.map((itinerary, index) => (
          <ItineraryCard
            key={index}
            img={itinerary.img}
            name={itinerary.name}
            user_name={itinerary.user.user_name}
            user_img={itinerary.user.user_img}
            price={itinerary.price}
            duration={itinerary.duration}
            hashtags={itinerary.hashtags}
          /> 
        ))}
      <div className="flex justify-center items-center mt-16">
        <button className="bg-gray-900 text-white font-bold rounded-full py-3 px-8 mb-5">
          <LinkRouter to={`/cities`} className="">Go Back</LinkRouter>
        </button>
      </div>
    </>
      
  )
}

/* <div className="p-5 md:p-10 bg-amber-500 border-4">
      <div className="p-3 mb-7 md:mb-10 mx-auto md:w-[90vw] text-3xl md:text-5xl bg-amber-300" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.8)" }}>
        <p className="font-text text-center">Itineraries</p>
      </div> 
      <div className="lg:grid lg:grid-cols-2 flex justify-center items-center flex-wrap md:m-10 ">
        <div className="flex justify-center items-end mb-3">
          <img src={cityDetail.img} className="lg:max-h-[85vh] lg:w-[50vw] lg:object-cover rounded-lg" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.8)" }} alt={cityDetail.name} />
          <p className="bg-white p-3 mb-3 md:mb-5 text-md md:text-4xl font-text rounded-lg opacity-80 absolute">{cityDetail.name} - {cityDetail.country}</p>
        </div>
        {itineraries?.map((itinerary, index) => (
          <ItineraryCard
            key={index}
            name={itinerary.name}
            user_name={itinerary.user.user_name}
            user_img={itinerary.user.user_img}
            price={itinerary.price}
            duration={itinerary.duration}
            hashtags={itinerary.hashtags}
          /> 
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="bg-gray-900 text-white font-bold rounded-full py-3 px-8">
          <LinkRouter to={`/cities`} className="">Go Back</LinkRouter>
        </button>
      </div>
    </div> */