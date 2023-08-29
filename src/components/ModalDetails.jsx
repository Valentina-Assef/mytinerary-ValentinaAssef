export default function ModalDetails({ onClose }) {
  return (
    <>
        <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60">
            <div className="bg-under-construction w-[75vw] md:w-[60vw] max-h-[80vh] relative rounded-5 shadow-md p-10 md:p-20">
                <div className="flex flex-col items-center justify-center text-2xl text-center bg-amber-300 bg-opacity-90 p-10 lg:m-10 rounded-lg">
                    <h2 className="text-2xl md:text-5xl">Under Construction</h2>
                    <h3 className="mt-10 text-xl md:text-4xl">There are no itineraries yet for this city</h3>
                </div>
                <button onClick={onClose} className="absolute top-7 right-7 transition-all duration-300 ease"><ion-icon name="close-outline" style={{ fontSize: "2rem", backgroundColor: "white"}}></ion-icon></button>
            </div>
        </div>
    </>
  )
}