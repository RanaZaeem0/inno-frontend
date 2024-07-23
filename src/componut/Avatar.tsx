import axios from 'axios'
import React, { useEffect } from 'react'
import {format} from "date-fns"
import { NavLink } from 'react-router-dom'
export default function Avatar({username ='A',userId,createdAt}:{
  username:string
  userId : string
  createdAt:string
}) 



{

    return (
    <NavLink to={`/profile?userId=${userId}`}>
      <div className='flex items-center'><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-700 text-white rounded-full dark:bg-gray-600">
    <span className="font-medium text-white dark:text-gray-300">{username.charAt(0).toUpperCase()}</span>
    
</div>
      <h2 className='font-normal text-gray-600 hover:underline text-1xl text-center pl-2 pr-4'>{username}</h2>
<h3>
  {}
  {format(new Date(createdAt), 'MMM dd, yyyy')

}</h3>
</div>
    </NavLink>
  )
}
