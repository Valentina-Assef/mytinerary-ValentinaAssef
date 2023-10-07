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
      <header className='flex justify-center items-center text-center'>
        <img className='h-[70vh] w-screen object-cover' src={img} alt='Img Header'/>
        <h2 className="text-white text-7xl p-2 font-text absolute">Find your perfect trip</h2>
        <div className="search-bar w-[70%] md:w-[50%] lg:w-[25%] mt-64 md:mt-56 rounded-full absolute bg-white py-0.5 pr-0.5 pl-2.5">
          <form role="search" className="flex items-center justify-between pl-5">
            <input ref={inputSearch} id="searchInput" type="text" placeholder="Search" aria-label="Search" className="w-[50%] outline-none"/>
            <button onClick={handleSearch} aria-label="Search" type="button" className="bg-red-500 w-[45px] h-[45px] rounded-full outline-none">
              <ion-icon name="search-outline" style={{ fontSize: "1.5rem", color: "#fff"}}></ion-icon>
            </button>
          </form>
        </div>
      </header>
      <section className="flex justify-center items-center p-8">
        <Gallery cities={cities}/>
      </section>
    </>
  )
}