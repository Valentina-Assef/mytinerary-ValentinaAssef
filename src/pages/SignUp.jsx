import imgSignUp from "/bg_signup.jpg"
import FormSignUp from "../components/FormSignUp"
import { Link as LinkRouter } from 'react-router-dom'

export default function SignUp() {
  return (
    <section className="flex justify-center items-center text-center">
      <img alt="Sign In" src={imgSignUp} className="h-[98vh] w-screen object-cover"/>
      <div className="absolute flex bg-white rounded-lg w-[60vw] max-w-[90vw] h-[75vh] mt-20 form-shadow">
        <div className="text-white md:w-1/2 px-5 form-color bg-red-500 flex flex-col justify-center items-center rounded-tl-lg rounded-bl-lg" >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Hello, Friend!</h2>
          <p className="my-8">Please log in with your personal info</p>
          <button type="submit" className="rounded-3xl border-2 border-white bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            <LinkRouter to="/signin" className="">Sign in</LinkRouter>
          </button>
        </div>
        <div className="md:w-1/2 px-2 rounded-tl-lg rounded-bl-lg">
          <FormSignUp />
        </div>
      </div>
  </section>
  )
}