import axios from 'axios'
import  { useEffect, useState } from 'react'

import Avatar from "../componut/Avatar"
import { NavLink } from 'react-router-dom'
import Sidebar from '../componut/Sidebar'
import Skaleton from '../componut/Skaleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHandsClapping } from '@fortawesome/free-solid-svg-icons'
export default function Allblog() {
  const [posts, setPosts] = useState([])
  const [laoding ,setLaoding] =  useState(true)
   
useEffect(()=>{
    try {
      console.log("all blog");
      
        const reponse = axios.get(`${import.meta.env.VITE_BACKEND_URL}post/blog/all`)
        .then(data =>{
            
         setPosts(data.data.response)
       console.log(data.data.response);
        setLaoding(false)
        })
      } catch (error) {
        console.log(` ${error}`);
        
      }
},[])
const getFirst200Words = (text:string) => {
  const words = text.split(' ');
  if (words.length > 50) {
    return words.slice(0, 15).join(' ') + '...';
  }
  return text;
};


interface BlogPost {
  author:{username:string , id:string}
    id: string;
    authorId: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string; // Use Date if you plan to parse this to a Date object
  }
 

  const formatDate = (dateString) => {
    // Create a new Date object from the date string
    const date = new Date(dateString);
  
    // Define options for formatting
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
  
    // Format the date using toLocaleDateString
    return date.toLocaleDateString('en-GB', options);
  };

const response :BlogPost[] = posts

  
    return (
       !laoding ? <div className='flex mt-10'>
  
   <div className="w-3/5 max-md:w-full pl-4 gap-5 flex flex-col">
   {
    response.map((item,index) => {
     return <NavLink to={`/readblog?id=${item.id}&name=${item.author.username}`}  key={index} className=" flex items-start justify-center p-7 ml-10 flex-col border rounded-lg hover:shadow-sm ">
       <div className=" flex flex-col  justify-center items-start px-6">
       <Avatar username={item.author.username} userId={item.author.id} createdAt={item.createdAt}/>
         <h2 className='text-2xl font-bold py-2' >{item.title}</h2>
         <h2 className='py-2'>{getFirst200Words(item.content)}</h2>
         <div className="flex pt-4">
          <h2 className='para-text'> <FontAwesomeIcon className='pr-2' icon={faComments} />Disuss </h2>
          <h2 className='para-text'> <FontAwesomeIcon className='h-4' icon={faHandsClapping} /> 21</h2>
         </div>
       </div>
 
     </NavLink>
    })
     }
   </div>

     <Sidebar/>
  
 
     </div>
     : <div className="w-2/3 pl-8 max-lg:w-full">
      <Skaleton/>
     </div>
  )
}
