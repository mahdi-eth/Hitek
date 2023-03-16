import React from 'react'
import { checkPropTypes } from 'prop-types'

export function Ctegories({ title, image, Number }) {
    return (

        <div className='flex flex-col w-32 h-52 cursor-pointer rounded-lg border border-slate-300 items-center mt-20 mr-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-50 duration-300 '>
            <img
                className='items-center pt-11 '
                src={image}
                alt="image"
            />
            <span
                className='mt-9 font-semibold text-base text-_Gray'>
                {title}
            </span>
            <span
                className='mt-3 font-normal text-sm text-slate-500'>
                {Number}
            </span>
        </div>


    )
}
Ctegories.propTypes = {
    image: checkPropTypes.String,
    title: checkPropTypes.String,
    Number: checkPropTypes.String
}
