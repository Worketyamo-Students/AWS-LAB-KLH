// import React from 'react'
import Buttons from './Buttons'
import Terms from './Terms'
import { Titles } from './Titles'

function Acceuil() {
    return (
        <section className='flex flex-col text-[inter] justify-center items-center'>
            <div className='mt-[3rem]'>
                <Titles image='/logo1.svg' title='Bienvenue' description='Plus que 3 petites minutes ........' />
            </div>

            <div className='mt-10'>
                <img src="/vid.svg" alt="presentation" />
            </div>

            <div className='mt-2'>
                <Buttons/>
            </div>

            <div className='mt-2'>
                <Terms/>
            </div>

            <footer className='flex gap-2 mt-[8rem] '>
                <div className='w-[69px] h-[8px] bg-[#FFA2738F] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#FFA273] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-gradient-to-r from-[#FFA273] to-[#00539C] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#00539C] rounded-[20px]'></div>
            </footer>
        </section>
    )
}

export default Acceuil