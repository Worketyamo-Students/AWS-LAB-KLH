// import React from 'react'
import { Titles } from './Titles'
import { Forms } from './Forms'
import Buttons from './Buttons'
import Terms from './Terms'

export default function Finalisation() {
    return (
        <section className='flex flex-col text-[inter] justify-center items-center'>
            <div className='mt-[3rem]'>
                <Titles image='/logo1.svg' title='Finalisation' description='Inviter 04 amis pour finaliser l’inscription ' />
            </div>

            <form className='mt-4 flex flex-col gap-3 text-[16px]' action="submit">
                <Forms name='Numeros de Télephone' placeHolder='Numero whatsapp' type='number' />
                <Forms placeHolder='Numero whatsapp' type='number' />
                <Forms placeHolder='Numero whatsapp' type='number' />
                <Forms placeHolder='Numero whatsapp' type='number' />
            </form>

            <div className='mt-4'>
                <Buttons />
            </div>

            <div className='mt-4'>
                <Terms />
            </div>

            <footer className='flex gap-2 mt-[5rem] '>
                <div className='w-[69px] h-[8px] bg-[#FFA2738F] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#FFA273] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-gradient-to-r from-[#FFA273] to-[#00539C] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
            </footer>
        </section>
    )
}
