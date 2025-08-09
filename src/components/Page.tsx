// import React from 'react'
import { Steps } from "./Steps"

function Page() {
    return (
        <div className='hidden lg:flex flex-col flex-1 overflow-y-hidden'>
            <img className="ml-[19rem] mt-[1.5rem] absolute w-25 " src="/logo.svg" alt="" />
            <div className='bg-[#00539C0A] w-[75%] ml-[6rem] mt-[3rem] flex flex-col justify-center items-center'>
                <div className="mt-[8rem]">
                    <div className="flex flex-col gap-4">
                        <Steps image="/user.svg" title='Inscription' description='Entrez vos informations personnelles.' />
                        <hr className="w-[3rem] border-[#8080808C] rotate-90" />
                        <Steps image="/mail.svg" title='Validation OTP' description='Confirmez votre adresse e-mail.' />
                        <hr className="w-[3rem] border-[#8080808C] rotate-90" />
                        <Steps image="/invite.svg" title='Invitez vos amis' description='Envoyez des invitations à vos amis.' />
                        <hr className="w-[3rem] border-[#8080808C] rotate-90" />
                        <Steps image="/rocket.svg" title='Bienvenu à worketyamo' description='Votre inscription est terminée.' />
                    </div>
                </div>

                <footer className="mt-[2rem]">
                    <div className="flex gap-[13rem] mt-[22rem]">
                        <a className="flex text-[#00539C]" href=""><img src="/left.svg" alt="vos details" />Vos details</a>
                        <a className="text-[#00539C]" href="">SignIn</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Page