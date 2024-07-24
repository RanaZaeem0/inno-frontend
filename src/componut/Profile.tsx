import  { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { NavLink, useSearchParams } from "react-router-dom";
import ProfileAvatar from "./layout/ProfileAvatar";
import axios from "axios";

export default function Profile() {
const [loading ,setLoading] = useState(true)
const [userBlog , setUserBlog ] = useState([])
const [searchParams] = useSearchParams();
const [showEditBtn , setShowEditBtn] = useState(false)
const userId = searchParams.get("userId");
    interface BlogPost {
      author:{username:string , id:string}
        id: string;
        authorId: string;
        title: string;
        content: string;
        published: boolean;
        createdAt: string; // Use Date if you plan to parse this to a Date object
      }
     
     

      useEffect(()=>{
        try {
            const  response = axios.get(`http://localhost:3000/api/post/profile?userId=${userId}`)
            .then(data =>{
                
             setUserBlog(data.data.response)
         
              setLoading(false)
            
             console.log("send");
               
            })
          } catch (error) {
            console.log(` ${error}`);
            
          }
    
    
    },[])
  console.log(loading)

 const response:BlogPost  = userBlog


 console.log(response.length);
 
 
  const localUserId  = localStorage.getItem("userId") 
useEffect(()=>{
  if(localUserId == userId){
    setShowEditBtn(true)
  }
},[])
  
  //    console.log(userBlog.map());

  return !loading ? <div>
     <ProfileAvatar username={`${localStorage.getItem('username')}`} showEditbtn={showEditBtn}  />
    {  response.length > 0 &&
    response.map((item,index) =>{
      return <div key={index} className="w-full flex items-center justify-center">

      <NavLink  to={`/readblog?id=${item.id}&name=${item.author.username}`} className="w-1/2">
        <div className="flex items-center justify-center mt-10">
        <div  className=" flex w-full border rounded-lg  flex-col  justify-center items-savtart px-6">
        <h2 className='text-2xl font-bold py-4' >{item.title}</h2>
      <Avatar username={item.author.username}   createdAt={item.createdAt}/>
        <h2 className='text-1xl  py-4'>{(item.content.slice(0,200))} ...</h2>
      </div>
        </div>
      </NavLink>
      </div> 
    })

    }

    </div> : null;
}
