import  { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function AuthLayout({children}) {
   const Navigator  = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    const token = localStorage.getItem('token')
  useEffect(()=>{
    if(token == "undefined" && token == null && token?.length > 10){
      Navigator('/allblog')
      }
  },[])
    
    return (
    <div className="">{
    children}</div>
  )
}
