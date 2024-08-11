import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Dropdown from "../componut/Dropdown";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHandsClapping } from "@fortawesome/free-solid-svg-icons";

interface Author {
  username: string;
  id: string;
}

interface BlogData {
  author: Author;
  authorId: string;
  content: string;
  createdAt: string;
  id: string;
  published: boolean;
  title: string;
}

export default function ReadBlog() {
  const [post, setPost] = useState<BlogData | null>(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}post/blog?id=${id}`);
        const res = response.data.response;
        setPost(res);
        setLoading(false);
      } catch (error) {
        console.log(`Error fetching post: ${error}`);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return (
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

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  const authorId = post.authorId;
  if (authorId === userId) {
    console.log("User is the author of the post");
  }

  return (
    <div className="">
      <div className="flex items-center h-auto justify-center mt-10 mb-24">
        <div className="pt-10 w-1/2 max-md:w-10/12 border rounded-xl p-8 flex items-start pl-5 justify-center flex-col">
          <h2 className="font-bold text-3xl text-center py-5 ">{post.title}</h2>
          <div className="flex items-center justify-between w-full">
            <Avatar username={post.author.username} userId={post.author.id} createdAt={post.createdAt} />
            <Dropdown authorId={post.author.id} blogId={post.id} />
          </div>
          <p className="pt-4 py-5 pl-2">{post.content}</p>
          <div className="flex pt-4 items-center justify-between w-full pr-8 mb-7">
            <div className="flex">
              <h2 className='para-text'>
                <FontAwesomeIcon className='pr-2' icon={faComments} />
                Discuss
              </h2>
              <h2 className='para-text'>21 <FontAwesomeIcon icon={faHandsClapping} /></h2>
            </div>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
