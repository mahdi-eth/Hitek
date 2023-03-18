import React from 'react'
import ExchangeMarket from "@/assets/images/homeImg/ExchangeMarket.png";

export function SearchHome() {
    return (
        <div className='w-full mt-36 bg-cyan-400 rounded-xl flex '>
            <div>
                <img src={ExchangeMarket} alt="ExchangeMarket" />
            </div>
            <div className='ml-32 mt-12'>
                <h2 className='font-bold text-4xl text-white'>Lorem ipsum dolor</h2>
                <p className='mt-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <div>
                    <input className='w-96 h-14  indent-4 mt-10 rounded-xl  absolute' placeholder='yourname@mail.com' />
                    <button style={{
                        marginTop:"46px"
                    }} className='w-32 h-11 rounded-xl text-white absolute bg-cyan-400 font-bold  ml-60 '>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
