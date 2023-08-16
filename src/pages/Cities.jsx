import img from "/header_cities.jpg"
import Gallery from "../components/Gallery"


export default function Cities() {
  return (
    <>
      <header className='flex justify-center items-center'>
        <img className='h-56 w-screen object-cover' src={img} alt='Img Header'/>
        <h2 className="text-white text-7xl nav-links absolute">Find your perfect trip</h2>
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

/* import { useState, useEffect } from 'react';
import header from '../../public/header_cities.jpg';

export default function Cities() {
  const [list, setList] = useState([]);

  async function getData() {
    try {
      const response = await fetch('../../data.json');
      const data = await response.json();
      console.log(data.cities)
      setList(data.cities);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function showCards() {
    if (!list.cities || list.cities.length === 0) {
      return <h2 className="text-black">No results found</h2>;
    }

    return list.cities.map((element) => (
      <div key={element.name} className="card card-index">
        <img src={element.img} className="card-img-top" alt={element.name} />
        <div className="card-body">
          <h5 className="card-title text-center">{element.name}</h5>
          <h6 className="card-date text-center">{element.country}</h6>
        </div>
        <div className="footer-card d-flex">
          <a href={`./details.html?id=${element.name}`} className="btn btn-see-more">
            Ver mas...
          </a>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <header className="flex justify-center items-center relative">
        <img className="h-56 w-screen object-cover" src={header} alt="Img Header" />
        <h2 className="text-white text-7xl nav-links absolute">Find your perfect trip</h2>
      </header>
      <section>
        <div className="m-3">
          <form className="flex justify-center items-center" role="search">
            <input
              id="searchInput"
              className="border-2 border-amber-500 rounded mx-2 p-2 focus:border-amber-500 focus:outline-none"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="" type="submit">
              <ion-icon name="search-outline" style={{ fontSize: '2rem', color: '#FFC107' }}></ion-icon>
            </button>
          </form>
        </div>
        <div id="cardSection" className="card-section d-flex">
          {showCards()}
        </div>
      </section>
    </div>
  );
}
 */