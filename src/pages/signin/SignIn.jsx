import { Button } from '@mui/material'
import React from 'react'
import Image from '../../utils/Image'
import Google from '../../../public/images/google.png'
import {signInWithPopup} from 'firebase/auth'
import {auth} from '../../config/FirebaseConfig'
import { googleProvider } from '../../config/FirebaseConfig'
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)({
    padding: '20px 20px',
    fontSize: '18px'
  });

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
        <div style={{position:"absolute", top:"20%", left:"35%"}}>
           <div style={{padding:"30px", textAlign:"center"}}>
            <Image sorce={Google} alter="Not Found"/>
                <h2 style={{fontWeight:"200", fontSize:"50px"}}>Create your google account</h2>
                <h3 style={{fontWeight:"200", fontSize:"35px"}}>Click the signin button</h3>
                <CustomButton onClick={googleSignin} variant="contained">SIGNIN WIDTH GOOGLE</CustomButton>
           </div>
        </div>
    </>
  )
}

export default SignIn