import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import NavAvatars from './NavAvatars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons"
 export default function Navbar() {
const Navigate = useNavigate()

const authStatus = useSelector(state => state.auth.status)
const token = localStorage.getItem('token')

 
 
  const handelLogoNavigation  = ()=>{  
      Navigate('/allblog')
  }

  const handleWritefn = ()=>{
 
    if (!token || token === 'undefined' || token.length < 10) {
      Navigate('/signup')
    }else{
      Navigate('/addblog')
    }

  }
 
  return (
    <div className="w-full flex items-center justify-between p-4 text-black border-b-2 border-black pb-2">
    <button onClick={handelLogoNavigation} className="font-bold">
      Medium
    </button>
  <div className="flex gap-4 items-center ">
    <button  onClick={handleWritefn} className='font-medium pl-2 '>Write<FontAwesomeIcon className='pl-1' icon={faPenToSquare} /></button>
   {(!token || token === 'undefined' || token.length < 10) &&<button onClick={()=>Navigate('/signin')}  className='font-medium pl-2'>Sign In</button> }
    {(!token || token === 'undefined' || token.length < 10) && <button onClick={()=>Navigate('/signup')}  className='rounded-xl bg-black px-4 p-2 text-white'>Get started</button>}
 {!(!token || token === 'undefined' || token.length < 10) &&
     <NavAvatars /> }
  </div>

      </div>
  )
}
