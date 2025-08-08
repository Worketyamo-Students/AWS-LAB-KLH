import React from 'react'
interface propInput {
    image: string;
    title: string;
    description: string;
}

export const Titles: React.FC<propInput> = ({ image, title, description }) => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-[40px] h-[38px] mt-[5rem]' src={image} alt="logo" />
            <h1 className='font-semibold text-[25px] mt-[2rem]'>{title}</h1>
            <p className='text-[16px] text-[#71717A]'>{description}</p>
        </div>
    )
}

