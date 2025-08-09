import React from 'react'
interface propSteps {
    title?: string;
    description: string;
    image: string;
}

export const Steps: React.FC<propSteps> = ({ title, description, image }) => {
    return (
        <div className='flex gap-8 items-center'>
            <div className='w-[50px] h-[40px] border-[1px] border-[#8080808C] rounded-xl flex justify-center items-center'>
                <img className='' src={image} alt="logo" />
            </div>
            <div className='flex flex-col'>
                <h1 className='font-400 text-[20px]'>{title}</h1>
                <p className='text-[16px] text-[#8080808C]'>{description}</p>
            </div>
        </div>
    )
}