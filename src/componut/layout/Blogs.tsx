import UserIcon from "./UserIcon";

export default function Blogs() {
  return (
    <div className="flex mt-10 mb-10 items-center justify-center gap-4 max-md:flex-col">
      <div className="flex gap-5 flex-col w-2/5 max-md:w-11/12">
        <div className="border p-2 rounded-xl py-5 shadow-lg ">
          <h2 className="font-medium text-xl p-4  ">
            “The freeCodeCamp community makes heavy use of DEVs's publishing
            workflow to collaborate on books and tutorials. This has <span className="text-purple-500">boosted our
            productivity</span> and saved us a ton of time.”
          </h2>
          <UserIcon name={"Qunicy Larson"} role="Founder , FreeCodeCamp" img="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <div className="border p-2 py-5 rounded-xl ">
          <h2 className="font-medium text-xl p-4">
            “DEVs is <span className="text-red-500">
            incredibly easy</span> to integrate into existing CMS.”
          </h2>
          <UserIcon name={"Amy Dutton"} role="Core Team , Redwoodjs" img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <div className=" border p-2 py-5 rounded-xl ">
          <h2 className="font-medium text-xl p-4">
            “Setting up a base blog for our company was <span className="text-blue-600">super easy</span>.”
          </h2>
          <UserIcon name={"Chris Battarbee"} role="Ceo , Metoro" img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </div>

      <div className="flex gap-5 flex-col w-2/5 max-md:w-11/12">
        <div className=" border p-2 py-5 rounded-xl ">
          <h2 className="font-medium text-xl p-4 ">
            “DEVs's writing editor is{" "}
            <span className="text-green-500"> the best on the internet.”</span>
          </h2>
          <UserIcon name={"Costa Tin"} role="Markiting Lead , MindBD" img="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <div className=" border p-2 py-5 rounded-xl">
          <h2 className="font-medium text-xl p-4 ">
            “It took <span className="text-orange-400"></span> to integrate. ”
            a single developer an afternoon
          </h2>
          <UserIcon name={"Kevin Van Gundy"} role="Ceo Hypermode" img="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        <div className=" bg-black text-white border p-2 py-5 rounded-xl">
          <h2 className="font-medium text-xl p-4 ">
            “It's amazing to see how fast devs go from 0 to Blog under a domain
            they own on DEVs 🤯. It reminds me a lot of what Substack did
            for journalists.”
          </h2>
          <UserIcon name={"Guillermo Rauch"} role="Ceo Vercel" img="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </div>
  );
}
