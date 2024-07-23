import React from "react";
import sideImg1 from "../img/side1.avif"

export default function Sidebar() {
  return (
    <div className="flex border-l-black flex-col w-1/3 p-4 pr-10 max-md:hidden">
      <div className="">
        <div className="border rounded-lg">
    <h2 className="bold-text">Changelog</h2>
      <img className="w-5/6 ml-2 rounded-xl" src={sideImg1} alt="" />
      <div className="para-text mt-2">
       Hashnode AL Sidekick can now fetch the latest info while you draft.
      </div>
     <div className="flex items-center ">
     <h3 className="para-text">Jun 27, 2024 .</h3>
      <button className="border p-2 mb-3 rounded-2xl">
        View prevvious changelogs 
      </button>
     </div>
        </div>
        <h2 className="font-semibold py-4">Staff Picks</h2>
        <div className="py-3 bg-blue-200 rounded-xl px-4">
          <h2 className="font-bold ">Writing on Medium </h2>
          <h2 className="font-medium text-base my-2">New write FAQ</h2>
          <h2 className="font-medium text-base ">Expert writing adivice </h2>
          <h2 className="font-medium text-base my-2">Grow your readership</h2>
          <button className="rounded-xl px-3 p-2 m-2 bg-black text-white">
            start writing
          </button>
        </div>
        <div className="">
          <h2 className="font-semibold py-4"> Recommended topics</h2>
          <div className="flex">
            <button className="bg-gray-200 rounded-2xl p-2 m-2">UI</button>
            <button className="bg-gray-200 rounded-2xl p-2 m-2">
              Philosophy
            </button>
          </div>
          <div className="flex">
            <button className="bg-gray-200 rounded-2xl p-2 m-2">
              This Happened To me{" "}
            </button>
            <button className="bg-gray-200 rounded-2xl p-2 m-2">Defi</button>
          </div>
          <div className="flex">
            <button className="bg-gray-200 rounded-2xl p-2 m-2">NLP</button>
            <button className="bg-gray-200 rounded-2xl p-2 m-2">
              Economics
            </button>
            <button className="bg-gray-200 rounded-2xl p-2 m-2">World</button>
          </div>
        </div>
        <h2 className="font-semibold py-4">Who to follow</h2>
        <div className="border rounded-lg p-4">
          
          <div className="">
            <div className="flex items-center">
              <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden px-3 bg-gray-700 text-white rounded-full dark:bg-gray-600">
                <span className="font-medium  text-white dark:text-gray-300">
                  Kh
                </span>
              </div>
              <h2 className=" text-gray-600 text-lg text-center pl-2 font-semibold">
                khan sam{" "}
              </h2>

              {/* <h3>{format(new Date(item.createdAt), 'MMM d, yyyy')

}</h3> */}
            </div>
            <h3 className="pl-2 py-2 ">
            I help you gain the coding knowledge and skills to build
          </h3>
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden px-3 bg-gray-700 text-white rounded-full dark:bg-gray-600">
                <span className="font-medium  text-white dark:text-gray-300">
                  Kh
                </span>
              </div>
              <h2 className="font-normal text-gray-600 text-lg text-center pl-2 font-semibold">
               UX Collection{" "}
              </h2>

              {/* <h3>{format(new Date(item.createdAt), 'MMM d, yyyy')

}</h3> */}
            </div>
            <h3 className="pl-2 py-2 ">
            We believe designers are thinkers as much as they are
          </h3>
          </div>
          
        </div>
      </div>
    </div>
  );
}
