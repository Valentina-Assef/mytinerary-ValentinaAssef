import imgSignUp from "/bg_signup.jpg"
import FormSignUp from "../components/FormSignUp"

export default function SignUp() {
  return (
    <section className="relative flex flex-wrap md:h-screen lg:max-h-[90vh]">
      <div className="relative -z-10 h-56 w-full md:h-full md:w-1/2">
        <img alt="Sign Up" src={imgSignUp} className="absolute inset-0 h-full w-full object-cover"/>
      </div>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 md:w-1/2 md:px-8 md:py-10">
        <h1 className="font-text text-3xl text-gray-700 text-center md:text-4xl lg:text-5xl relative -z-10">Welcome to MyTinerary!!</h1>
        <FormSignUp />
      </div>
    </section>
  )
}