// import React from 'react'
import { Inputs } from './subcomponents/inputs'
import { Bouton } from './Buttons'
import { Titles } from './Titles'

function Creation() {
    return (
        <section className='flex-1 flex flex-col text-[inter] justify-center items-center'>
            <Titles image='/logo1.svg' title='Creation de compte' description='Rentrez vos infos pour creer votre compte .'/>

            <form className='mt-4' action="submit">
                <Inputs label='Email' placeHolder='abc@example.com' type='email' />
                <Inputs label='Password' placeHolder='**************' type='password' />
            </form>

            <div className='flex gap-2 mt-[.5rem]'>
                <div className='w-[69px] h-[8px] bg-[#00539C] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
            </div>

            <div className='flex items-center justify-evenly gap-6 p-8'>
                <hr className='w-[98px] border-[#E4E4E7]' />
                <p className='font-[400] text-[12px] text-[#71717A]'>OU AVEC</p>
                <hr className='w-[98px] border-[#E4E4E7]' />
            </div>

            <div className='p-2 flex flex-col gap-4'>
                <button className='w-[300px] h-[35px] border-2 rounded-md border-[#E4E4E7] flex items-center justify-center gap-2'>
                    <img src="/github-logo.svg" alt="Github logo" />
                    <p>Github</p>
                </button>
                <button className='w-[300px] h-[35px] border-2 rounded-md border-[#E4E4E7] flex items-center justify-center gap-2'>
                    <img src="/google.svg" alt="Google logo" />
                    <p>Google</p>
                </button>
            </div>

           <Bouton link='/verification'/>

            <p className='font-[400] text-[14px] text-[#71717A] p-6'>By clicking continue, you agree to our <br />
                <a className='underline' href="">Terms of Service</a> and <a className='underline' href="">Privacy Policy</a>.</p>

            <footer className='flex gap-2 mt-[3rem]'>
                <div className='w-[69px] h-[8px] bg-[#FFA273] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
                <div className='w-[69px] h-[8px] bg-[#D9D9D9] rounded-[20px]'></div>
            </footer>
        </section>
    )
}

export default Creation