import imgSignIn from "/bg_under-construction.jpg"
import FormSignIn from "../components/FormSignIn"

export default function SignIn() {
  return (
    <section className="relative flex flex-wrap md:h-screen md:items-center lg:max-h-[90vh]">
      <div className="relative -z-10 h-64 w-full md:h-full md:w-1/2">
        <img alt="Sign In" src={imgSignIn} className="absolute inset-0 h-full w-full object-cover"/>
      </div>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 md:w-1/2 md:px-8 md:py-24">
        <h1 className="mx-auto max-w-lg text-center text-2xl font-bold sm:text-3xl relative -z-10">Get started today!</h1>
        <FormSignIn />
      </div>
    </section>
  )
}