import FormSignUp from "../components/FormSignUp"
import { Link as LinkRouter } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="img_signUp flex justify-center items-center text-center">
      <div className="flex flex-wrap-reverse rounded-lg bg-white max-w-[80vw] md:max-w-[70vw] lg:max-w-[58vw] md:min-h-[400px] md:max-h-[400px] mt-32 md:mt-56 mb-10 form-shadow">
        <div className="bg-red-500 md:w-1/2 w-full flex flex-col justify-center items-center p-5 rounded-b-lg md:rounded-br-none md:rounded-tl-lg md:rounded-bl-lg">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Hello, Friend!</h2>
          <p className="my-8">Please log in with your personal info</p>
          <button type="submit" className="rounded-3xl border-2 border-white bg-red-500 py-3 px-5 text-md md:font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            <LinkRouter to="/signin" className="">Sign in</LinkRouter>
          </button>
        </div>
        <div className="bg-white md:w-1/2 w-full px-4 md:py-4 rounded-lg md:rounded-tl-none">
          <FormSignUp />
        </div>
      </div>
    </div>
  )
}