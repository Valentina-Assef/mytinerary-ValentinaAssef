export default function Cards({ img, text, optionalClass }) {
  return (
    <div className="popular-card">
      <img src={img} alt={text} className="w-full rounded-lg h-[220px] object-cover" />
      <span className="font-text text-xl">{text}</span>
    </div>
  );
}

/* <div className={`polaroid hover:scale-105 ${optionalClass}`}>
      <img src={img} alt={text} className="img-city" />
      <span className="font-text text-xl pt-4">{text}</span>
    </div> */