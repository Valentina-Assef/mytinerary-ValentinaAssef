import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as LinkRouter } from 'react-router-dom'
import { user_login } from "../store/actions/userActions"
import { GoogleSignIn } from "./GoogleSignIn"

export default function FormSignIn() {
  const store = useSelector(store => store.userReducer)
  console.log(store);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch()

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const minLength = 8;
    const maxLength = 35;
    const regex = /^[a-zA-Z0-9]+$/;

    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      regex.test(password)
    );
  };

  const handleSignIn = async (e) => {
    e.preventDefault()

    const errors = {
      email: "",
      password: ""
    };

    if (!formData.email) {
    errors.email = "Please enter an email.";
  } else if (!isEmailValid(formData.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!formData.password) {
    errors.password = "Por favor, ingrese una contraseña.";
  } else if (!isPasswordValid(formData.password)) {
    errors.password = "La contraseña debe tener entre 8 y 35 caracteres y contener solo caracteres alfanuméricos.";
  }

  setErrorMessages(errors);

    try {
      dispatch(user_login({
        data: formData
      }))
    } catch (error) {
      console.error(error)
    }
  } 

  return (
    <form action="" onSubmit={handleSignIn} className="px-2 lg:px-10 mx-auto my-8 max-w-md space-y-5">
      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input type="email" name="email" onChange={handleInput} placeholder="Enter email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"/>  
        <div className="text-red-500 text-sm mt-1">{errorMessages.email}</div>
      </div>
      {/* Password */}
      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" name="password" onChange={handleInput} placeholder="Enter password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"/>
        <div className="text-red-500 text-sm mt-1">{errorMessages.password}</div>
      </div>
      {/* Footer */}
      <div className="py-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <button type="submit" className="inline-block rounded-lg border border-amber-500 bg-amber-500 mx-5 lg:mx-0 px-10 lg:px-5 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            Sign in
          </button>
          <div className="flex lg:ml-8 mt-10 lg:mt-0 items-center">
            <p className="text-md mr-5">or</p>
            <GoogleSignIn />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <p className="text-sm text-gray-500 pr-3">
            No account?
          </p>
          <LinkRouter to="/signup" className="underline">Sign up</LinkRouter>
        </div>
      </div>
    </form>
  )
}
