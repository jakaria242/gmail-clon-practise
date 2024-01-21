import { Button } from '@mui/material'
import React from 'react'
import '../signin/signin.css'
import Image from '../../utils/Image'
import Google from '../../../public/images/google.png'
import {signInWithPopup} from 'firebase/auth'
import {auth} from '../../config/FirebaseConfig'
import { googleProvider } from '../../config/FirebaseConfig'

const SignIn = () => {

    const googleSignin = async() => {
        try{
            await signInWithPopup (auth,googleProvider)
        }catch(err){
            console.log(err);
        }
    }



  return (
    <>
        <div className='google_signin'>
            <div className='google_img'>
            <Image sorce={Google} alter="Not Found"/>
            </div>
            <h1>Creat your google account</h1>
            <h3>Click The Signin Button</h3>
        <Button onClick={googleSignin} variant="contained">SIGNIN WIDTH GOOGLE</Button>
        </div>
    </>
  )
}

export default SignIn