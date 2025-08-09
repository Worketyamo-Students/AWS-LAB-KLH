// import React from 'react'
import Terms from './Terms'
import { Titles } from './Titles'
import { Bouton } from './Buttons'
function Acceuil() {
    return (
        <section className='flex flex-1 flex-col text-[inter] justify-center items-center'>
            <div className='mt-[3rem]'>
                <Titles image='/logo1.svg' title='Bienvenue' description='Plus que 3 petites minutes ........' />
            </div>

            <div className='mt-10'>
                <img className='lg:w-[470px] lg:h-[280px]' src="/vid.svg" alt="presentation" />
            </div>

            <div className='mt-2'>
                <Bouton link='/'/>
            </div>

            <div className='mt-2'>
                <Terms/>
            </div>

            <footer className='flex gap-2 mt-[6rem] '>
                <div className='w-[69px] h-[8px] bg-[#FFA2738F] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#FFA273] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-gradient-to-r from-[#FFA273] to-[#00539C] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#00539C] rounded-[20px]'></div>
            </footer>
        </section>
    )
}

export default Acceuil