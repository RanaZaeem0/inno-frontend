

export default function Button({label,onClick,type= 'button',className}) {
  return (
    <button type={type} onClick={onClick} className={`w-full text-white
     bg-gray-800 mt-2 p-2 font-medium rounded-xl  ${className}`} >{label}</button>
  )
}
