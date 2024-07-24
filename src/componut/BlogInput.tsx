import React, { useId } from "react"



const BlogInput = React.forwardRef(function BlogInput({
  placeholder,
  className,
  type='text',
  ...props}:{
    placeholder:string,
    className:string,
    type:string,
  },ref) {
const id = useId()
  return (

<div className="flex flex-col w-full"           >

      <input style={{fontFamily:'medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif'}} type={type}  placeholder={placeholder} {...props} className={` outline-none text-2xl  border-none text-black rounded-xl p-2 mt-1 mb-2 ${className} `} ref={ref} id={id}  />
    </div>
  )
})
export default BlogInput

