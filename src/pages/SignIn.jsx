import imgSignIn from "/bg_under-construction.jpg"
import FormSignIn from "../components/FormSignIn"
import { Link as LinkRouter } from 'react-router-dom'

export default function SignIn() {
  return (
    <section className="flex justify-center items-center text-center">
      <img alt="Sign In" src={imgSignIn} className="h-[98vh] w-screen object-cover"/>
      {/* Contenedor */}
      <div className="absolute flex bg-white rounded-lg w-[678px] max-w-[90vw] min-h-[400px] mt-20 lg:mt-0 form-shadow">
        {/* Contenedor SignIn */}
        <div className="md:w-1/2 px-2 rounded-tl-lg rounded-bl-lg">
          <FormSignIn />
        </div>
        <div className="text-white md:w-1/2 px-5 form-color bg-red-500 flex flex-col justify-center items-center rounded-tr-lg rounded-br-lg" >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">No account?</h2>
          <p className="my-8">Enter Your personal details and start journey with us</p>
          <button type="submit" className="rounded-3xl border-2 border-white bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            <LinkRouter to="/signup" className="">Sign up</LinkRouter>
          </button>
        </div>
      </div>
    </section>
  )
}