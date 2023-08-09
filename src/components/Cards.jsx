export default function Cards({ url, text }) {
  return (
    <div className="polaroid hover:scale-105">
        <img src={url} alt={text} className="img-city"/>
        <span className="textoCarousel flex justify-center items-center">{text}</span>
    </div>
  )
}
