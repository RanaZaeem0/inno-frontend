import {  useState } from 'react'

import { useSelector } from "react-redux"
import customdominImg from "../img/customdomain.png"
import customSubImg from "../img/customSub.png"
import apisImg from "../img/apis.png"

import { useNavigate } from 'react-router'
import Blogs from '../componut/layout/Blogs'
import OfferLayout from '../componut/layout/OfferLayout'
import Darklayout from '../componut/layout/Darklayout'


function Home() {
  const [count, setCount] = useState(0)
  const Navigate = useNavigate()

  return (
    <div>
      

      <div className="flex  items-center justify-center h-full">

        <div className="  pl-4 flex flex-col items-center justify-center h-96 ">
          <h2 className='text-7xl max-md:text-6xl font-semibold '>Human  Stoires & ideas

          </h2>
          <h3 className='font-medium text-1xl pb-5'>A place to read, write, and deepen your understanding</h3>
          <button onClick={() => Navigate('/allblog')} className='bg-black text-white rounded-3xl px-5 p-3'>Start Reading</button>


        </div>

      </div>
      <Blogs />
      <h2 className='text-center mt-5 font-bold text-4xl '>Blog anywhere,
      </h2>
      <h2 className='text-center font-semibold font-body text-2xl mb-8 '>anyhow.
      </h2>
      <div className="flex items-center justify-center gap-5 flex-col">
        <div className="w-11/12 bg-gray-50 border rounded-lg  flex max-md:flex-col">
          <div className="pt-16 max-md:pt-10 max-md:p-5  p-10 w-1/2 max-md:w-full" >
            <h2 className='font-semibold text-1xl ' >Custom domain</h2>
            <h3 className='text-sm py-2'>Set up your custom domain in less than a minute at no cost. Control your developer brand and content, and make your voice heard.</h3>
          </div>
          <div className="w-1/2 max-md:w-full">
            <img src={customdominImg} alt="" />
          </div>
        </div>
        <div className=" bg-gray-50 w-11/12 max-md:flex-col border rounded-lg  flex">
          <div className="w-1/2 max-md:w-full">
            <img src={customSubImg} alt="" />
          </div>
          <div className="pt-20 max-md:pt-10 p-10 w-1/2 max-md:w-full">
            <h2 className='font-semibold text-xl ' >
              DEVs's free sub-domain.</h2>
            <h3 className='text-sm text-start  py-2'>Start a blog immediately using DEVs's free sub-domain, and switch to a custom domain once your brand is established.</h3>
          </div>

        </div>
        <div className="w-11/12 max-md:flex-col border rounded-lg bg-gray-50  flex">

          <div className="pt-8 p-10 w-1/2 max-md:w-full">
            <h2 className='font-semibold text-xl ' >
              Headless Mode with APIs.</h2>
            <h3 className='text-sm text-start  py-2'>Enable headless mode to integrate your blog into your existing websites and host it on a sub-path such as /blog. Utilize DEVs APIs to fetch content for your main company website, personal portfolio, mobile apps, or other CMS platforms.</h3>
          </div>
          <div className="w-1/2 max-md:w-full">
            <img src={apisImg} alt="" />
          </div>

        </div>

      </div>
      <h2 className='text-center mt-10 font-bold text-4xl '>World-class writing editor for developers,
      </h2>
      <h2 className='text-center mt-1 font-semibold font-body text-2xl mb-8 '>Optimized for everyone!
      </h2>
      <OfferLayout />
      <Darklayout />
    </div>
  )
}

export default Home
