import london from "../../public/img/londres.jfif"
import bogota from "../../public/img/san_francisco.jpg"
import mexico from "../../public/img/san_francisco.jpg"
import paris from "../../public/img/paris.jpg"

export default function Carousel() {
  return (
    <div className="container p-6">
      <div className="max-w-sm mx-auto py-5 px-2 rounded-lg justify-center bg-amber-500 cursor-pointer">
        <h2 className="textoCarousel pb-2 text-4xl text-slate-100">Popular Mytineraries</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex-none">
            <ion-icon name="caret-back-outline" style={{ fontSize: "2rem", color: "white" }}></ion-icon>
          </div>
           <div className="">
            <div className="my-5 mx-1 py-5 px-2 grid sm:grid-cols-2 gap-4 bg-white rounded-lg">
              <div className="polaroid RotarDer hover:scale-105">
                <img src={london} alt="London" className="img-city"/>
                <span className="textoCarousel">London - England</span>
              </div>
              <div className="polaroid hover:scale-105">
                <img src={mexico} alt="London" className="img-city"/>
                <span className="textoCarousel">Ciudad de Mexico - Mexico</span>
              </div>
              <div className="polaroid hover:scale-105">
                <img src={bogota} alt="London" className="img-city"/>
                <span className="textoCarousel">Bogota - Colombia</span>
              </div>
              <div className="polaroid RotarIzq hover:scale-105">
                <img src={paris} alt="London" className="img-city"/>
                <span className="textoCarousel">Paris - France</span>
              </div>
            </div>
            </div>
          <div className="flex-none">
            <ion-icon name="caret-forward-outline" style={{ fontSize: "2rem", color: "white" }}></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}