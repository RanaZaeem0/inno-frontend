
export default function UserIcon({name ,img = '', role = 'Lead markiting , Ceo'}:{
  name:string,
  img:string,
  role:string
}) {
    console.log(name);
    
  return (
    <div className="flex w-full justify-between py-6 px-4">
        <div className="">
        <h2 className='font-medium text-gray-600 text-lg text-start pl-2'>{name}</h2>
        <h2 className='font-normal text-gray-600 text-md text-start pl-2'>{role}</h2>
        </div>
        <div className='flex items-center'>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-700 text-white rounded-full dark:bg-gray-600">
    <span className="font-medium text-white dark:text-gray-300">
 
 <img src={img} alt="" />
 
    </span>
    
</div>
</div>
    </div>
    
  )
}
