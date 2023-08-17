export default function Gallery() {
  let data = [
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
    <div className="gallery">
      {data.map((item, index) => {
        return(
          <div className="pics flex justify-center items-end hover:scale-105" key={index}>
            <img src={item.img} />
            <p className="bg-white p-3 mb-2 nav-links rounded-lg opacity-80 absolute">{item.name} - {item.country}</p>
          </div>
        )
      })}
    </div>
  )
}


 /* Para cuando tenga hecho la api?

 import { useState, useEffect } from "react"

 export default function Gallery() {
  let [data, setData] = useState([])

  useEffect(
    () => {
      fetch("../data/data.json") //Aca va la url de la api, no del json
        .then(response => response.json())
        .then(list => setData(list))
    }, []
  ) 
*/