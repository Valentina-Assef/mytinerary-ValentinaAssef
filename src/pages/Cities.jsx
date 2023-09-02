import axios from "axios"
import img from "/header_cities.jpg"
import Gallery from "../components/Gallery"
import { useState, useEffect, useRef } from "react"

export default function Cities() {
  let [cities, setCities] = useState([])

  let inputSearch = useRef()

  //Muestra todas los cities
  useEffect(() => {
    axios.get("http://localhost:7000/api/cities")
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, [])

  //Search
  const handleSearch = async () => {
    const name = inputSearch.current.value
    try {
      const response = await axios.get(`http://localhost:7000/api/cities?name=${name}`)
      setCities(response.data.cities)
    } catch (error) {
      if(error.response.status === 404) {
        setCities([])
      } else {
        console.log(error)
      }
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
          <input ref={inputSearch} id="searchInput" className="border-2 border-amber-500 rounded mx-2 p-2 focus:border-amber-500 focus:outline-none" type="text" placeholder="Search" aria-label="Search" />
          <button onClick={handleSearch} aria-label="Search" type="button">
            <ion-icon name="search-outline" style={{ fontSize: "2rem", color: "#FFC107" }}></ion-icon>
          </button>
        </form>
      </section>
      <section className="flex justify-center items-center bg-amber-500 p-10">
        <Gallery cities={cities}/>
      </section>
    </>
  )
}