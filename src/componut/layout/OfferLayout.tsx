import Img1 from "../../img/1.avif"
import Img2 from "../../img/2.avif"

export default function OfferLayout() {
  return (
    <div>
      <div className="flex items-center justify-center   ">
        <div className="w-11/12  border rounded-lg flex  items-center justify-center">
          <img
            className="w-11/12 mt-10 h-96 "
            src={
              "https://cdn.hashnode.com/res/hashnode/image/upload/v1715010498671/tqWZQPAgv.png?auto=format&w=2000"
            }
            alt=""
          />
        </div>
      </div>
      <div className="flex  items-center justify-center mt-10">
        <div className="flex gap-5 w-11/12 max-md:flex-col">
          <div className="w-1/2 max-md:w-full border  rounded-lg">
            <div className="">
                <img src={Img1} alt="" />
              <h2 className="bold-text">  Block-based WYSIWYG Markdown editor.</h2>
             <p className="para-text">
             Write in Markdown with instant content preview or use WYSIWYG mode
             for non-technical writers.
             </p>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full border rounded-lg">
            <div className="">
             <img src={Img2} alt="" />
              <h2 className="bold-text" > In-line commenting.</h2>
             <p className="para-text"> 
             Comment directly in the editor to collaborate with your team and
             perfect the draft.
             </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
