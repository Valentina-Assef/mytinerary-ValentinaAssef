import img from "../../public/img/rome.jpg"

export default function Details() {
  return (
    <div className="p-10 bg-amber-400">
      <div className="flex justify-center items-end">
        <img src={img} className="max-h-screen"/>
        <p className="bg-white p-3 mb-5 md:text-4xl font-text rounded-lg opacity-80 absolute">Name - Country</p>
      </div>
      <div className="mt-5 md:mx-6 lg:mx-32 p-3 flex flex-col justify-center items-center text-4xl bg-amber-300" style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.8)"}}>
        <p>Itinerary</p>
        <p>(Under Construction)</p>
      </div>
    </div>
  )
}