import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Avatar from "./Avatar";
import Dropdown from "./Dropdown.jsx"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComments, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
export default function ReadBlog() {
  const [post, setPost] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    console.log(id);

    try {
      const reponse = axios
        .get(`http://localhost:3000/api/post/blog?id=${id}`)
        .then((data) => {
          const res = data.data.response;
          setPost(res);
          setLoading(false);
          console.log(post);
        });
    } catch (error) {
      console.log(` ${error}`);
    }

    console.log(post);
  }, []);

  interface BlogData {
    author: { username: string , id:string};
    authorId: string;
    content: string;
    createdAt: string;
    id: string;
    published: boolean;
    title: string;
  }
  
  const response: BlogData = post;
   console.log(response);
   
  if (!loading) {
    const authorId = response.authorId;
    if (authorId == userId) {
      console.log("ad");
    }
  }

  return !loading ? (
    <div className="">
      <div className="flex items-center h-auto  justify-center mt-10 mb-24">
        <div className="pt-10 w-1/2 max-md:w-10/12 border rounded-xl p-8 flex items-start pl-5 justify-center flex-col">
          <h2 className="font-bold text-3xl text-center py-5 ">{response.title}</h2>
     <div className="flex items-center justify-between w-full">
     <Avatar username={response.author.username} userId={response.author.id} createdAt={response.createdAt} />
     <Dropdown authorId={`${!loading ? response.author.id:''}`} blogId={response.id}/>
     </div>
          <p className=" pt-4 py-5 pl-2">{response.content}</p>
          <div className="flex pt-4 items-center justify-between w-full pr-8 mb-7">
         <div className="flex"> <h2 className='para-text'> <FontAwesomeIcon className='pr-2' icon={faComments} />Disuss </h2>
         <h2 className='para-text'>21 <FontAwesomeIcon icon={faHandsClapping} /></h2></div>
           <h2>
           
           




</h2>
         </div>
        </div>

      </div>
    </div>
  ) : (
    // Sekloten at the time od loading
    <div className="h-[80vh] items-center justify-center">
      <div role="status" className="max-w-screen-1xl animate-pulse p-5">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
        <div className="flex items-center mt-4">
          <svg
            className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>

        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div className="h-2 w-5/6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
