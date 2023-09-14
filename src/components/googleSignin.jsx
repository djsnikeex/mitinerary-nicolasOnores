import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"
import { user_login_google } from "../store/actions/userActions";
import { useDispatch } from "react-redux";



export const GoogleSignIn = () => {
    const googleButton = useRef();

    const dispatch = useDispatch()

    const handleCredentialResponse = async (response) => {
       /*   console.info('JWT GOOGLE: ', response.credential); */
        const data = {
            token_id: response.credential
        }
        try{
            dispatch(user_login_google({
                data: data
            }))
        }
        catch(err){
            console.log(err)
        }
    }
    

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "709650831228-dkcpo3iep5ngs2br1gj2bm8nvj7qsr86.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill',size: "medium", text: 'signin_with', theme: 'outline'
            }
            );
        }}, [])

    return (
        <div ref={googleButton}></div>
    )
}