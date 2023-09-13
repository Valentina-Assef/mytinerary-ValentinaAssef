import axios from "axios"
import { useRef, useEffect } from "react"

export const GoogleSignIn = () => {
    const googleButton = useRef()
    
    //Maneja la respuesta de Google
    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        const userResponse = await axios.post("http://localhost:7000/api/auth/google", data)
        console.log(userResponse);
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "654151116312-di638kt41mtrbrm8octq4vnk0fg52i78.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
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