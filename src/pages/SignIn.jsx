import FormSignIn from "../components/FormSignIn"
import { Link as LinkRouter } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className="img_signIn flex justify-center items-center text-center">
      <div className="flex flex-wrap rounded-lg bg-white w-[678px] max-w-[75vw] md:max-w-[90vw] md:min-h-[400px] md:max-h-[400px] mt-32 md:mt-24 mb-10 form-shadow">
        <div className="bg-white md:w-1/2 w-full px-3 md:px-5 rounded-lg">
          <FormSignIn />
        </div>
        <div className="bg-red-500 md:w-1/2 w-full flex flex-col justify-center items-center p-5 rounded-b-lg md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg ">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">No account?</h2>
          <p className="my-8">Enter Your personal details and start journey with us</p>
          <button type="submit" className="rounded-3xl border-2 border-white bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            <LinkRouter to="/signup" className="">Sign up</LinkRouter>
          </button>
        </div>
        {/* Contenedor SignIn */}
        {/* <div className="md:w-1/2 md:px-2 rounded-tl-lg rounded-bl-lg">
          <FormSignIn />
        </div>
        <div className="text-white md:w-1/2 px-5 py-10 bg-red-500 flex flex-col justify-center items-center rounded-tr-lg rounded-br-lg" >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">No account?</h2>
          <p className="my-8">Enter Your personal details and start journey with us</p>
          <button type="submit" className="rounded-3xl border-2 border-white bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            <LinkRouter to="/signup" className="">Sign up</LinkRouter>
          </button>
        </div> */}
      </div>
    </div>
  )
}