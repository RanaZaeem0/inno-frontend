import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "./Navbar";
import Button from "./Button";
import Avatar from "./Avatar";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
export default function Updateblog() {
  type FormInputs = {
    test: string;
    test1: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [post, setPost] = useState();
  const [searchParams] = useSearchParams();
  const blogId = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);
  const userId = localStorage.getItem("userId");
  const Navigate = useNavigate()

  useEffect(() => {
    console.log(blogId);

    try {
      const reponse = axios
        .get(`http://localhost:3000/api/post/blog?id=${blogId}`)
        .then((data) => {
          const res = data.data.response;
          setPost(res);
          setLoading(false);
          console.log(post);
          setValue("title", res.title);
          setValue("content", res.content);
        });
    } catch (error) {
      console.log(` ${error}`);
    }

    console.log(post);
  }, []);

  const updateBlogData = (data) => {

    const token  = localStorage.getItem('token')
    interface Blogupdate {
      title:string,
      content:string
    }

    const response:Blogupdate  = data
    try {
      const reponse = axios
        .put(`http://localhost:3000/api/post/blog?id=${blogId}`,
          response, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          const res = data.data.response;
          setPost(res);
          setLoading(false);
              Navigate(`/readblog?id=${blogId}`)
          console.log(post);
        });
    } catch (error) {
      console.log(` ${error}`);
    }
  };

  interface BlogData {
    author: { username: string; id: string };
    authorId: string;
    content: string;
    createdAt: string;
    id: string;
    published: boolean;
    title: string;
  }
  const handleTextareaChange = useMemo(
    () => (e) => {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    []
  );
  const handleContentInput = useMemo(
    () => (e) => {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    []
  );

  console.log(post);

  return (
    <div className="bg-white h-auto w-full flex flex-col items-center justify-center ">
      <div className="w-9/12 flex flex-col items-start justify-start h-screen">
        <form onSubmit={handleSubmit(updateBlogData)}>
          <button
            type="submit"
            className="text-white bg-green-500 p-2  m-3 rounded-2xl px-4 lg:ml-80 font-medium "
          >
            Update
          </button>

            <div className="">
              <div className="relative">
                <textarea
                  {...register("title", {
                    required: "Blog content is required",
                    min: 4,
                  })}
                  className=" border-none p-2 text-2xl font-bold outline-none  resize-none overflow-hidden w-auto min-w-[400px] h-auto"
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
                  className=" border-none p-2  text-lg outline-none resize-none overflow-hidden w-auto min-w-[400px] h-auto"
                  placeholder="Content"
                ></textarea>
              </div>

              {errors.content && (
                <span className="text-red-500">{errors.content.message}</span>
              )}
            </div>
          
        </form>
      </div>
    </div>
  );
}
