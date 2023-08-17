import img from "/header_cities.jpg"
import Gallery from "../components/Gallery"

export default function Cities() {
  return (
    <>
      <header className='flex justify-center items-center'>
        <img className='h-56 w-screen object-cover' src={img} alt='Img Header'/>
        <h2 className="text-white text-7xl p-2 font-text absolute">Find your perfect trip</h2>
      </header>
      <section className="m-3"> 
        <form className="flex justify-center items-center" role="search">
          <input id="searchInput" className="border-2 border-amber-500 rounded mx-2 p-2 focus:border-amber-500 focus:outline-none" type="text" placeholder="Search" aria-label="Search" />
          <button className="" type="submit"><ion-icon name="search-outline" style={{ fontSize: "2rem", color: "#FFC107" }}></ion-icon></button>
        </form>
      </section>
      <section className="cards-section flex bg-amber-400 p-10">
        <Gallery />
      </section>
    </>
  )
}