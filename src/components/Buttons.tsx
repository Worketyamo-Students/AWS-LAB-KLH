import { Link } from 'react-router-dom';
import React from 'react'
type propBtn={
    link:string;
}

export const Bouton:React.FC<propBtn> = ({link}) => {
  return (

    <Link to={link}>
        <button type='button' className='w-[328px] h-[40px] bg-[#00539C] rounded-md mt-[1.5rem]'>
            <p className='text-[#FAFAFA]'>Creer le compte</p>
        </button>
    </Link>
        
    )
}

