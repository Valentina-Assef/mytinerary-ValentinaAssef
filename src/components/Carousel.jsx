import { useState, useEffect } from "react";
import Cards from "./Cards";

export default function Carousel() {
  const carouselData = [
    { 
      img: "/img/london.jfif", 
      text: "London - England"
    },
    {
      img: "/img/san-francisco.jpg", 
      text: "San Francisco - United States"
    },
    { 
      img: "/img/rio-janeiro.jpg", 
      text: "Rio de Janeiro - Brazil"
    },
    {
      img: "/img/paris.jpg", 
      text: "Paris - France"
    },
    { 
      img: "/img/moscow.jpg", 
      text: "Moscow - Russia"
    },
    { 
      img: "/img/sydney.jpg", 
      text: "Sydney - Australia"
    },
    { 
      img: "/img/beijing.jpg", 
      text: "Beijing - China"
    },
    { 
      img: "/img/santorini.jpg", 
      text: "Santorini - Greece"
    },
    { 
      img: "/img/dubai.jpg", 
      text: "Dubai - United Arab Emirates"
    },
    { 
      img: "/img/rome.jpg", 
      text: "Rome - Italy"
    },
    { 
      img: "/img/buenos-aires.jpg", 
      text: "Buenos Aires - Argentina"
    },
    { 
      img: "/img/tokio.jfif", 
      text: "Tokyo - Japan"
    }
  ]

  let sliders = []
  for (let i = 0; i < carouselData.length; i += 4){
    const slide = carouselData.slice(i, i + 4);
    slide[0].optionalClass = "RotarDer"
    slide[slide.length - 1].optionalClass = "RotarIzq"
    sliders.push(slide);
  }

  let [index, setIndex] = useState(0)

  let [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => (index + 1) % sliders.length)
      setActiveSlide((activeSlide) => (activeSlide + 1) % sliders.length);
    }, 5000)
    return () => clearInterval(interval)
  })

  let handlePrev = () => {
    if (index === 0) {
      setIndex(sliders.length - 1);
    } else {
      setIndex(index - 1);
    }
    setActiveSlide(index === 0 ? sliders.length - 1 : index - 1);
  };
  
  let handleNext = () => {
    setIndex((index + 1) % sliders.length);
    setActiveSlide((activeSlide + 1) % sliders.length);
  };

  let handleIndicatorClick = (indicatorIndex) => {
    setIndex(indicatorIndex);
    setActiveSlide(indicatorIndex);
  };

  return (
      <div className="py-5 text-center justify-center cursor-pointer">
        <h2 className="font-text pb-2 md:text-left md:ml-10 text-4xl">Popular Mytineraries</h2>
        <div className="flex items-center justify-center space-x-2 mt-8 mx-2 lg:mx-20">
          <div className="flex-none">
            <ion-icon name="caret-back-outline" onClick={handlePrev} style={{ fontSize: "2rem" }}></ion-icon>
          </div>
          <div>
            <div className="my-5 mx-4 py-5 px-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-lg">
              {sliders[index].map((each, key) => (
              <Cards 
                key={key} 
                img={each.img} 
                text={each.text}
                optionalClass={each.optionalClass} />
              ))}
            </div>
          </div>
          <div className="flex-none">
            <ion-icon name="caret-forward-outline" onClick={handleNext} style={{ fontSize: "2rem" }}></ion-icon>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 space-x-2">
          {sliders.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${activeSlide === i ? "bg-gray-900" : "bg-gray-300"}`}
              onClick={() => handleIndicatorClick(i)}>
            </div>
          ))}
        </div>
      </div>
  )
}