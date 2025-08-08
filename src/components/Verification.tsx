// import React from 'react'
import Buttons from './Buttons'
import Cases from './Cases'
import { Titles } from './Titles'
import Terms from './Terms'

function Verification() {
  return (
    <section className='flex flex-col text-[inter] justify-center items-center '>

      <div className='mt-[6rem]'>
        <Titles image='/logo1.svg' title='Verification OTP' description='Rentrez vos infos pour vous connecter .' />
      </div>

      <div className='mt-10'>
        <Cases />
      </div>

      <div>
        <Buttons />
      </div>

      <div className='mt-4'>
        <Terms />
      </div>

      <footer className='flex gap-2 mt-[13rem] '>
        <div className='w-[69px] h-[8px] bg-[#FFA2738F] rounded-[20px]'></div>
        <div className='w-[69px] h-[8px] bg-[#FFA273] rounded-[20px]'></div>
        <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
        <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
      </footer>

    </section>
  )
}

export default Verification