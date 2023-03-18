import React from 'react'
import { checkPropTypes } from 'prop-types'
import Processor from "../../assets/images/homeImg/Processor.svg"
import CompactDisk from "../../assets/images/homeImg/CompactDisk.svg"

export function CompareProduct({ image, name, CPU, OperatingSystem }) {
    return (
        <div className='mt-32 w-full'>
            <div className='w-64 '>
                <div className=''>
                    <img className='ml-10 mt-14' src={image} alt="Asus Zenbook ProUX-430 US" />
                    <h3 className='w-32 ml-16  mt-4 text-_Gray font-bold text-base  text-center'>{name}</h3>
                </div>
                <hr className='h-0.5 bg-slate-400 mt-6' />
                <div className='text-center'>
                    <img style={{
                        marginLeft: '119px'
                    }} className='mt-7' src={Processor} alt="Processor" />
                    <h4 className='mt-3 font-semibold text-base text-_Gray'>
                        Processor
                    </h4>
                    <span className='ml-2 mt-2 font-normal text-sm text-slate-500'>{CPU}</span>
                </div>
                <div className='text-center '>
                    <img style={{
                        marginLeft: '119px'
                    }} className='mt-8' src={CompactDisk} alt="icon" />
                    <h4 className='mt-4 font-semibold text-base text-_Gray'>
                        Operating System
                    </h4>
                    <span className='ml-2 mt-2 font-normal text-sm text-slate-500'>{OperatingSystem}</span>
                    <svg className='mt-7 ml-32' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.03516 7.19531C6.28125 7.44141 6.69141 7.44141 6.9375 7.19531L12.2695 1.89062C12.5156 1.61719 12.5156 1.20703 12.2695 0.960938L11.6406 0.332031C11.3945 0.0859375 10.9844 0.0859375 10.7109 0.332031L6.5 4.54297L2.26172 0.332031C1.98828 0.0859375 1.57812 0.0859375 1.33203 0.332031L0.703125 0.960938C0.457031 1.20703 0.457031 1.61719 0.703125 1.89062L6.03516 7.19531Z" fill="#1565D8" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

CompareProduct.propTypes = {
    image: checkPropTypes.String,
    name: checkPropTypes.String,
    CPU: checkPropTypes.String,
    OperatingSystem: checkPropTypes.String,
}