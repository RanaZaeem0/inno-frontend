import React, { forwardRef, useId } from "react"



const Input = React.forwardRef(function Input({
  label,
  placeholder,
  type='text',
  ...props},ref) {
const id = useId()
  return (

<div className="flex flex-col w-full"           >
      <label  htmlFor={id} className='text-sm text-black font-medium text-left py-2'>{label }</label>
      <input type={type}  placeholder={placeholder} {...props} className='   border text-black rounded-xl p-2 mt-1 mb-2' ref={ref} id={id}  />
    </div>
  )
})
export default Input
