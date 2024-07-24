import Img3 from "../../img/3.avif"
import Img4 from "../../img/4.avif"
import Img5 from "../../img/5.avif"
import Img6 from "../../img/6.avif"


export default function Darklayout() {
    return (
        <div className='bg-black text-white'>
            <div className="mt-10 w-full items-center text-center flex flex-col justify-center h-96 bg-black text-white">
                <h2 className='bold-text text-5xl' >DEVs For</h2>
                <h2 className='bold-text text-3xl' >Enterprises and Teams</h2>
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="flex gap-5 w-11/12 max-md:flex-col">
                    <div className="w-1/2 max-md:w-full   border border-gray-700 bg-neutral-900  rounded-lg">
                        <div className="">
                            <img src={Img3} alt="" />
                            <h2 className="bold-text text-xl">  Headless mode for team blogs.</h2>
                            <p className="para-text text-gray-400">
                                Upgrade to the enterprise plan to use DEVs's Headless blog for your company. Integrate with your existing website and install on sub-paths like /blog.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 max-md:w-full  border border-gray-700 bg-neutral-900 rounded-lg">
                        <div className="">
                            <img src={Img4} alt="" />
                            <h2 className="bold-text text-xl" > AI-assisted writing for all team members.</h2>
                            <p className="para-text text-gray-400">
                                Use AI to enhance your team's writing efficiency and content quality, with GPT-4 access for all members.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  items-center justify-center mt-10 ">
                <div className="flex gap-5 items-center justify-center w-11/12 max-md:flex-col">
                    <div className="w-1/2 max-md:w-full  ">
                        <div className="w-full border border-gray-700 bg-neutral-900 rounded-lg">
                            <div className="">
                                <img src={Img6} alt="" />
                                <h2 className="bold-text text-xl">Member management with various roles.</h2>
                                <p className="para-text text-gray-400">
                                    Upgrade to the enterprise plan to use DEVs's Headless blog for your company. Integrate with your existing website and install on sub-paths like /blog.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
                        <div className="w-full border border-gray-700 bg-neutral-900  rounded-lg">
                            <div className="">
                                <img src={Img5} alt="" />
                                <h2 className="bold-text text-xl">  Headless mode for team blogs.</h2>
                                <p className="para-text text-gray-400">
                                    Upgrade to the enterprise plan to use DEVs's Headless blog for your company. Integrate with your existing website and install on sub-paths like /blog.
                                </p>
                            </div>
                        </div>
                        <div className="w-full border border-gray-700 bg-neutral-900 rounded-lg">
                            <div className="">
                                <img src={Img4} alt="" />
                                <h2 className="bold-text text-xl" > AI-assisted writing for all team members.</h2>
                                <p className="para-text text-gray-400">
                                    Use AI to enhance your team's writing efficiency and content quality, with GPT-4 access for all members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
