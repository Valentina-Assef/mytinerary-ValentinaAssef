import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userActions"
import { GoogleSignIn } from "./GoogleSignIn"

export default function FormSignIn() {
  const store = useSelector(store => store.userReducer)
  console.log(store);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch()

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignIn = async (e) => {
    e.preventDefault()

    try {
      dispatch(user_login({
        data: formData
      }))
    } catch (error) {
      console.error(error)
    }
  } 

  return (
    <div className="pt-5 md:pt-10">
      <h2 className="text-center text-2xl font-bold">Get started today!</h2>
      <form action="" onSubmit={handleSignIn} className="px-2 lg:px-10 mx-auto my-3 max-w-md space-y-3">
        {/* Email */}
        <label htmlFor="email" className="sr-only">Email</label>
        <input type="email" name="email" onChange={handleInput} placeholder="Enter email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"/>
        {/* Password */}
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" name="password" onChange={handleInput} placeholder="Enter password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"/>
        {/* Footer */}
        <div className="flex flex-col justify-center items-center">
          <button type="submit" className="rounded-3xl border-2 border-red-500 bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            Sign in
          </button>
          <div className="mt-5">
            <GoogleSignIn onSubmit={handleSignIn}/>
          </div>
        </div>
      </form>
    </div>
  )
}