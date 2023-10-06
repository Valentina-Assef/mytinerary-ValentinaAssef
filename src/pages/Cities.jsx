import img from "/header_cities.jpg"
import Gallery from "../components/Gallery"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_cities, filter_search } from "../store/actions/cityActions"

export default function Cities() {
  const dispatch = useDispatch()
  const cities = useSelector((store) => store.cityReducer.cities)

  let inputSearch = useRef()

  //Muestra todas los cities
  useEffect(() => {
    dispatch(get_cities())   
  }, [dispatch])

  //Search
  const handleSearch = () => {
    dispatch(filter_search({
      name: inputSearch.current.value
    }))
  }

  return (
    <>
      <header className='flex justify-center items-center relative -z-10'>
        <img className='h-[70vh] w-screen object-cover' src={img} alt='Img Header'/>
        <h2 className="text-white text-7xl p-2 font-text absolute">Find your perfect trip</h2>
      </header>
      <section className="m-3"> 
        <form className="flex justify-center items-center" role="search">
          <input ref={inputSearch} id="searchInput" className="border-2 border-amber-500 rounded mx-2 p-2 focus:border-amber-500 focus:outline-none" type="text" placeholder="Search" aria-label="Search" />
          <button onClick={handleSearch} aria-label="Search" type="button">
            <ion-icon name="search-outline" style={{ fontSize: "2rem", color: "#FFC107", position: "relative", zIndex: "-10"}}></ion-icon>
          </button>
        </form>
      </section>
      <section className="flex justify-center items-center bg-amber-500 p-10">
        <Gallery cities={cities}/>
      </section>
    </>
  )
}