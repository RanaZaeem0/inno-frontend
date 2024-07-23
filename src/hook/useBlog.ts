import { useState,useEffect } from "react"


const useBlog = ()=>{
      const [allBlog,setAllBlog ]  = useState([])
      const [loading,setLaoding] = useState(true)


     useEffect(()=>{
    try {
        const reponse = axios.get('http://localhost:3000/api/post/blog/all')
        .then(data =>{
            
         setAllBlog(data.data.response)
  setLaoding(false)
         console.log(data.data.response);
           
        })
      } catch (error) {
        console.log(` ${error}`);
        
      }


},[])

  return {
    loading,
    allBlog
  }

}


export default useBlog
