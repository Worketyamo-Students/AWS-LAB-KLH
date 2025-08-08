import React from 'react'
interface propForms{
    name?:string;
    type:string;
    placeHolder:string;
}

export const Forms:React.FC<propForms> = ({name,type,placeHolder}) => {
  return (
    <div className='flex flex-col gap-4'>
       <h1 className='text-[16px] font-medium mb-[-0.5rem]'>{name}</h1>
       <input className='w-[328px] h-[40px] p-2 bg-[#F4F4F580] outline-0 border-2 border-[#E4E4E7] rounded-md' type={type} placeholder={placeHolder}  />
    </div>
  )
}