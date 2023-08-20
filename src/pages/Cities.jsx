import axios from "axios"
import img from "/header_cities.jpg"
import Gallery from "../components/Gallery"
import { useState, useEffect } from "react"

export default function Cities() {
  let [cities, setCities] = useState()

  useEffect(() => {
    axios.get("http://localhost:7000/api/cities?name=")
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, [])

  const handleInput = async (city) => {
    try {
      const response = await axios.get(`http://localhost:7000/api/cities?name=${city.target.value}`)
      setCities(response.data.cities)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className='flex justify-center items-center'>
        <img className='h-56 w-screen object-cover' src={img} alt='Img Header'/>
        <h2 className="text-white text-7xl p-2 font-text absolute">Find your perfect trip</h2>
      </header>
      <section className="m-3"> 
        <form className="flex justify-center items-center" role="search">
          <input onChange={handleInput} id="searchInput" className="border-2 border-amber-500 rounded mx-2 p-2 focus:border-amber-500 focus:outline-none" type="text" placeholder="Search" aria-label="Search" />
          <button className="" aria-label="Search" type="button">
            <ion-icon name="search-outline" style={{ fontSize: "2rem", color: "#FFC107" }}></ion-icon>
          </button>
        </form>
      </section>
      <section className="cards-section flex justify-center items-center bg-amber-400 p-10">
        <Gallery cities={cities}/>
      </section>
    </>
  )
}