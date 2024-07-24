import  { ChangeEvent, useMemo, useState } from "react";
import { useForm } from "react-hook-form";


import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import axios from "axios";
export default function Addblog() {
  interface BlogSchema {
    title: string;
    content: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogSchema>();

  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
 
  const token = localStorage.getItem('token')
 console.log(token);
 
 if(!token){
   Navigate('/signup')
 }


  const createBlog = async (data:BlogSchema) => {
    console.log(data);
  
    try {
      const blogData: BlogSchema = data;
      console.log(blogData, "sa");
      const token: string | null = localStorage.getItem("token");
      console.log(token);

      const response = await axios.post(
        "http://localhost:3000/api/post/blog",
        blogData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        Navigate("/allblog");
      }

      
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log(
          `Error response from server: ${error.response.status} - ${error.response.data}`
        );
        setError(`Error: ${error.response.data.message || "Server Error"}`);
      } else if (error.request) {
        // No response received from server
        console.log("No response received from server", error.request);
        setError("No response received from server. Please try again later.");
      } else {
        // Other errors
        console.log(`Error during signup: ${error.message}`);
        setError(`Error: ${error.message}`);
      }
    }
  };
  type InputOrTextareaEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleTextareaChange = useMemo(
    () => (e:InputOrTextareaEvent) => {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    []
  );
  const handleContentInput = useMemo(
    () => (e:InputOrTextareaEvent) => {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    []
  );

  return (
    <div className="bg-white h-auto w-full flex flex-col items-center justify-center ">
      <div className="w-9/12 flex flex-col items-start justify-start h-screen">
        <form className="w-full" onSubmit={handleSubmit(createBlog)}>
          <button
            type="submit"
            className="text-white bg-green-500 p-2  m-3 rounded-2xl px-4 lg:ml-80 font-medium "
          >
            Publich
          </button>

          <div className="w-full">
            <div className="relative">
              <textarea
                {...register("title", {
                  required: "Blog content is required",
                  min: 4,
                })}
                className=" border-none p-2 text-2xl font-bold outline-none  resize-none overflow-hidden w-9/12 h-auto"
                placeholder="Title"
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            <div className="relative">
              <textarea
                {...register("content", {
                  required: "Blog content is required",
                  min: 5,
                })}
                onChange={handleContentInput}
                className=" border-none p-2  text-lg outline-none resize-none overflow-hidden  w-9/12 h-auto"
                placeholder="Content"
              ></textarea>
            </div>

            {error && (
              <span className="text-red-500">{error}</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
