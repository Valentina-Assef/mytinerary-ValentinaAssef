export default function Gallery() {
  let cities = [
    {
      "img": "/public/img/paris.jpg", 
      "name": "Paris",
      "country": "France"
    },
    {
      "img": "/public/img/san-francisco.jpg", 
      "name": "San Francisco",
      "country": "United States"
    },
    { 
      "img": "/public/img/rio-janeiro.jpg", 
      "name": "Rio de Janeiro",
      "country": "Brazil"
    },
    {
      "img": "/public/img/barcelona.jpg", 
      "name": "Barcelona",
      "country": "Spain"
    },
    { 
      "img": "/public/img/dubai.jpg", 
      "name": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "img": "/public/img/cartagena.jpg", 
      "name": "Cartagena",
      "country": "Colombia"
    },
    { 
      "img": "/public/img/moscow.jpg", 
      "name": "Moscow",
      "country": "Russia"
    },
    { 
      "img": "/public/img/sydney.jpg", 
      "name": "Sydney",
      "country": "Australia"
    },
    { 
      "img": "/public/img/beijing.jpg", 
      "name": "Beijing",
      "country": "China"
    },
    { 
      "img": "/public/img/santorini.jpg", 
      "name": "Santorini",
      "country": "Greece"
    },
    { 
      "img": "/public/img/rome.jpg", 
      "name": "Rome",
      "country": "Italy"
    },
    { 
      "img": "/public/img/buenos-aires.jpg", 
      "name": "Buenos Aires",
      "country": "Argentina"
    },
    { 
      "img": "/public/img/new-delhi.jpg", 
      "name": "New Delhi",
      "country": "India"
    },
    { 
      "img": "/public/img/tokio.jfif", 
      "name": "Tokyo",
      "country": "Japan"
    },
    { 
      "img": "/public/img/london.jpg", 
      "name": "London",
      "country": "England"
    }
  ]

  return (
    <>
    <div className="gallery">
      {cities.map((item, index) => {
        return(
          <div className="pics flex justify-center items-end hover:scale-105" key={index}>
            <img src={item.img} />
            <p className="bg-white p-3 mb-2 nav-links rounded-lg opacity-80 absolute">{item.name} - {item.country}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}


/* import { useState, useEffect } from 'react';

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