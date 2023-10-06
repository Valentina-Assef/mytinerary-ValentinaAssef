import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <>
    <div className="img_home flex flex-wrap md:flex-nowrap">
      <Hero />
    </div>
    <Carousel />
    </>
    
  )
}