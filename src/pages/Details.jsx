import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Details() {
  const { _id } = useParams()
  let [cityDetail, setCityDetail] = useState()

  useEffect(() => {
    axios.get(`http://localhost:7000/api/cities/${_id}`)
      .then(response => setCityDetail(response.data.oneCity))
      .catch(err => console.log(err))
  }, [_id])

  if (!cityDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 bg-amber-400">
      <div className="flex justify-center items-end">
        <img src={cityDetail.img} className="max-h-screen" alt={cityDetail.name} />
        <p className="bg-white p-3 mb-5 md:text-4xl font-text rounded-lg opacity-80 absolute">{cityDetail.name} - {cityDetail.country}</p>
      </div>
      <div className="mt-5 md:mx-6 lg:mx-32 p-3 flex flex-col justify-center items-center text-4xl bg-amber-300" style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.8)"}}>
        <p>Itinerary</p>
        <p>(Under Construction)</p>
      </div>
    </div>
  )
}