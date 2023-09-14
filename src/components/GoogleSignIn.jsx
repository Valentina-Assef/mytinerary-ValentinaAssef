import axios from "axios"
import { useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { google_login } from "../store/actions/userActions"

export const GoogleSignIn = () => {
    const googleButton = useRef()
    const dispatch = useDispatch()
    
    //Maneja la respuesta de Google
    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential //token de Google
        }
        //Lo que le devuelvo a user
        const userResponse = await axios.post("http://localhost:7000/api/auth/google", data)
        console.log(userResponse);

        //deberia mostralo como con handleSignIn en SignIn.jsx
        const handleGoogleSignIn = async (e) => {
            e.preventDefault()

            try {
              dispatch(google_login({
                data: userResponse
              }))
            } catch (error) {
              console.error(error)
            }
        }
    }

    //Para manejar window
    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "654151116312-di638kt41mtrbrm8octq4vnk0fg52i78.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            //Manejo el boton
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }
            );
        }
    }, [])

    return (
        <div ref={googleButton}></div>
    )
}