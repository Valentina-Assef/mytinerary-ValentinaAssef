import { useState, useEffect } from "react";
import Cards from "./Cards";

export default function Carousel() {
  const carouselData = [
    { 
      url: "../../public/img/london.jfif", 
      text: "London - England"
    },
    {
      url: "../../public/img/san-francisco.jpg", 
      text: "San Francisco - United States"
    },
    { 
      url: "../../public/img/rio-janeiro.jpg", 
      text: "Rio de Janeiro - Brazil"
    },
    {
      url: "../../public/img/paris.jpg", 
      text: "Paris - France"
    },
    { 
      url: "../../public/img/moscow.jpg", 
      text: "Moscow - Russia"
    },
    { 
      url: "../../public/img/sydney.jpg", 
      text: "Sydney - Australia"
    },
    { 
      url: "../../public/img/beijing.jpg", 
      text: "Beijing - China"
    },
    { 
      url: "../../public/img/santorini.jpg", 
      text: "Santorini - Greece"
    },
    { 
      url: "../../public/img/dubai.jpg", 
      text: "Dubai - United Arab Emirates"
    },
    { 
      url: "../../public/img/rome.jpg", 
      text: "Rome - Italy"
    },
    { 
      url: "../../public/img/buenos-aires.jpg", 
      text: "Buenos Aires - Argentina"
    },
    { 
      url: "../../public/img/tokio.jfif", 
      text: "Tokyo - Japan"
    }
  ]

  let sliders = []
  for (let i = 0; i < carouselData.length; i += 4){
    sliders.push(carouselData.slice(i, i + 4))
  }

  let [index, setIndex] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => (index + 1) % sliders.length)
    }, 5000)
    return () => clearInterval(interval)
  })

  let handlePrev = () => {
    if (index === 0) {
      setIndex(sliders.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  
  let handleNext = () => {
    setIndex((index + 1) % sliders.length);
  };

  return (
    <div className="container p-6">
      <div className="max-w-sm mx-auto py-5 px-2 rounded-lg justify-center bg-amber-500 cursor-pointer">
        <h2 className="textoCarousel pb-2 text-4xl text-slate-100">Popular Mytineraries</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex-none">
            <ion-icon name="caret-back-outline" onClick={handlePrev} style={{ fontSize: "2rem", color: "white" }}></ion-icon>
          </div>
          <div>
            <div className="my-5 mx-1 py-5 px-2 grid sm:grid-cols-2 gap-4 bg-white rounded-lg">
              {sliders[index].map((each, key) => (<Cards key={key} url={each.url} text={each.text} />))}
            </div>
          </div>
          <div className="flex-none">
            <ion-icon name="caret-forward-outline" onClick={handleNext} style={{ fontSize: "2rem", color: "white" }}></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}