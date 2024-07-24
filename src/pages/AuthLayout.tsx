import  { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function AuthLayout({children}:{
  children:React.ReactElement
}) {
   const Navigator  = useNavigate()
    const token:any = localStorage.getItem('token')
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
