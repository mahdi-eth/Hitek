import React from 'react'
import FinanceAccounting from "@/assets/images/homeIMg/FinanceAccounting.png";
import WomenWallet from "@/assets/images/homeIMg/WomenWallet.svg";
import Secure from "@/assets/images/homeIMg/Secure.svg";
import Callcenter from "@/assets/images/homeIMg/Callcenter.svg";
import iDeliveryi from "@/assets/images/homeIMg/iDeliveryi.svg";

export function WhyUsHomePage() {
    return (
        <div className='pt-16 flex'>
            <img src={FinanceAccounting} alt="FinanceAccounting" />
            <div className='flex flex-wrap'>
                <div className='rounded-lg border border-slate-300 w-72 h-52 ml-7 mr flex flex-col'>
                    <img className='mt-12 ml-9 w-14 h-14' src={WomenWallet} alt="WomenWallet" />
                    <span className='ml-6 mt-4 font-semibold text-xl text-_Gray'>Lorem ipsum dolor</span>
                    <span className='font-normal text-sm text-slate-500 mt-3 ml-6'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed</span>
                </div>
                <div className='rounded-lg border border-slate-300 w-72 h-52 ml-7 mr flex flex-col'>
                    <img className='mt-12 ml-9 w-14 h-14' src={Secure} alt="Secure" />
                    <span className='ml-6 mt-4 font-semibold text-xl text-_Gray'>Lorem ipsum dolor</span>
                    <span className='font-normal text-sm text-slate-500 mt-3 ml-6'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed</span>
                </div>
                <div className='rounded-lg border border-slate-300 w-72 h-52 ml-7 mr mt-5 flex flex-col '>
                    <img className='mt-12 ml-9 w-14 h-14' src={Callcenter} alt="Callcenter" />
                    <span className='ml-6  mt-4 font-semibold text-xl text-_Gray'>Lorem ipsum dolor</span>
                    <span className='font-normal text-sm text-slate-500 mt-3 ml-6'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed</span>
                </div>
                <div className='rounded-lg border border-slate-300 w-72 h-52 ml-7 mr mt-5 flex flex-col'>
                    <img className='mt-12 ml-9 w-14 h-14' src={iDeliveryi} alt="iDeliveryi" />
                    <span className='ml-6 mt-4 font-semibold text-xl text-_Gray'>Lorem ipsum dolor</span>
                    <span className='font-normal text-sm text-slate-500 mt-3 ml-6'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed</span>
                </div>
            </div>
        </div>
    )
}
