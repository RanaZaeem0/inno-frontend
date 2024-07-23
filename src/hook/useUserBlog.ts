import { useState,useEffect } from "react"
import axios from "axios"

const useUserBlog = ()=>{
      const [userBlog,setUserBlog ]  = useState([])
      const [loading,setLaoding] = useState(true)
      const userId = localStorage.getItem('userId')

    

  return {
    loading,
    userBlog
  }

}


export default useUserBlog
