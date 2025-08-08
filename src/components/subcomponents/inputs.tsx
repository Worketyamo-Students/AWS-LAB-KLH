import React from 'react'
interface propInput{
    label?:string;
    type:string;
    placeHolder:string;
}

export const Inputs:React.FC<propInput> = ({label,type,placeHolder}) => {
  return (
    <div className='mt-5'>
       <h1 className='text-[16px] font-medium mb-2'>{label}</h1>
       <input className='w-[300px] h-[35px] p-2 bg-[#F4F4F580] outline-0 border-2 border-[#E4E4E7] rounded-md' type={type} placeholder={placeHolder}  />
    </div>
  )
}