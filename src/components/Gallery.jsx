import { Link as LinkRouter } from "react-router-dom"

export default function Gallery({ cities }) {
  
  return (
    <div className="gallery">
      {
        cities?.map((city) => {
          return(
            <LinkRouter to={`/cities/${city._id}`} key={city._id}>
              <div className="pics flex justify-center items-end hover:scale-105" key={city._id}>
                <img src={city.img} alt={city.name} />
                <p className="bg-white p-3 mb-2 font-text rounded-lg opacity-80 absolute">{city.name} - {city.country}</p>
              </div>
            </LinkRouter>
          )
        })
      }
    </div>
  )
}