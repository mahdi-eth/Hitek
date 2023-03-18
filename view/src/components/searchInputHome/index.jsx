import { checkPropTypes } from 'prop-types'
import React, { useState } from 'react'
import img from "@/assets/images/homeIMg/Large.png";

export default function SearchInputHome({ placeholder }) {
    const [changeicon, setchangeicon] = useState(false)
    return (
        <div>
            <img
                style={{ marginLeft: "480px" }}
                className='absolute mt-12 cursor-pointer'
                src={img} alt="search"
            />
            <input onChange={() => setchangeicon(console.log(changeicon))}
                style={{ width: "505px", height: "76px" }}
                className=' rounded-xl mt-9 ml-9 bg-white indent-4 '
                placeholder={placeholder}
            />
        </div>
    )
}
SearchInputHome.propTypes = {
    placeholder: checkPropTypes.string,
};
