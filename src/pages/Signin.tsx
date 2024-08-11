import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Input from '../componut/Input'
import Button from '../componut/Button'
import ButtonWarning from '../componut/ButtonWarning'
import {  useForm } from 'react-hook-form'
import LoadingButton from '../componut/LoadingButton'
import getRefreshToken from '../config'
export default function Signin() {
const naigavte  = useNavigate()

interface userSignin {
  email: string,
  password: string
}
const [LoadingSign,setLoadingSign]= useState(false)
const [ error, setError ] = useState('')
const {register,handleSubmit,formState:{errors}} = useForm<userSignin>()

useEffect(()=>{

  const Token = getRefreshToken()
  if(Token){
    naigavte('/allblog')
  }


},[])

const loginUser = async (data:userSignin)=>{

    

      console.log(data);
      setError('')
            try {
              setLoadingSign(true)
                const userDetails:userSignin  = data                
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}user/signin`,
                  userDetails,
                  {  
                    headers:{
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status >= 200 && response.status < 300) {
              console.log(response);
              setLoadingSign(false)
                    localStorage.setItem('token',response.data.jwt)
                    localStorage.setItem('usersname',response.data.username)
                    localStorage.setItem('userId',response.data.id)


                    console.log(response.data);
                    

                naigavte('/allblog')
                }
            } catch (error:any) {
              setLoadingSign(false)

              if (error.response) {
                
                // Server responded with a status other than 200 range
                console.log(`Error response from server: ${error.response.status} - ${error.response.data}`);
                setError(`Error: ${error.response.data.message || 'Server Error'}`);
              } else if (error.request) {
                // No response received from server
                console.log('No response received from server', error.request);
                setError('No response received from server. Please try again later.');
              } else {
                // Other errors
                console.log(`Error during signup: ${error.message}`);
                setError(`Error: ${error.message}`);
              }            }
        }
    
    
  return (
    <div className='bg-slate-800 h-screen flex justify-center '>
  <div className="flex w-screen justify-center">
  <div className="w-1/2 flex flex-col items-start p-14 justify-center text-start bg-slate-200 max-lg:hidden">
         <h2 className="text-black text-2xl font-bold italic" >
         "The product quality exceeded my expectations. The team demonstrated excellent craftsmanship and attention to detail."
         </h2>
          <h3 className="text-black font-medium py-2">Mia Wallace</h3>
          <h2>Director, Marcellus Corp</h2>
        </div>
    <div className="bg-white h-full w-1/2 max-lg:w-full  text-center flex items-center justify-center flex-col ">
  
   <h2 className='text-black font-semibold'>Sign In</h2>
   <h2>Enter your info</h2>
   <form onSubmit={handleSubmit(loginUser)}>
            <div className="flex flex-col max-lg:w-full items-center justify-center w-96">

            
            
            <Input
              {...register("email", {
                required: true,
             
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              type={"email"}
              placeholder={"example@gmail.com"}
              label={"email"}
            />
            <h2 className='bg-red-500'>{errors.email?.message}</h2>
            <Input
              {...register("password", { required: true, minLength: 6 })}
              placeholder={"******"}
              label={"password"}
            />
              <h2 className='bg-red-500'>{errors.password?.message}</h2> 
        {!LoadingSign ?  <Button label={'Sign In'} type="submit" className={"bg-gray-800"} />:
        <LoadingButton/>}
            </div>
            
            <h2 className="text-red-500 font-normal">{error}</h2>
          </form>
<ButtonWarning label={'I dont have an account ?'} buttonText={"Sign in"} to={'/signup'} />
</div>






    </div>
  </div>
 
    
            )
}
