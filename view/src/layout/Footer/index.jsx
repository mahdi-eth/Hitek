import React from 'react'
import logo from "@/assets/images/logo/logo.svg";
import Google from "@/assets/images/FooterImg/Google.svg"
import Twitter from "@/assets/images/FooterImg/Twitter.svg"
import instagram from "@/assets/images/FooterImg/instagram.svg"
import inIcon from "@/assets/images/FooterImg/inIcon.svg"
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className='flex'>
            <div>
                <img className='mt-36 ml-11' src={logo} alt="" />
                <p className='font-normal text-slate-500 w-64 h-14 mt-7 ml-11' >Fast is known as one of the
                    best online stores and is active
                </p>
                <div className='flex ml-11 mt-8'>
                    <img src={Google} alt="Google" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={inIcon} alt="inIcon" />
                </div>
            </div>
            <div className='flex'>
                <ul className='mt-36 ml-32 cursor-pointer'>
                    <Link to="/product">
                        <li className='font-bold text-lg text-_Gray mt-8'>Product</li>
                    </Link>
                    <li className='font-normal text-_Gray  mt-6'>Photography</li>
                    <li className='font-normal text-_Gray mt-6'>Handphone</li>
                    <li className='font-normal text-_Gray mt-6'>Furniture</li>
                    <li className='font-normal text-_Gray mt-6'>Fashion</li>
                    <li className='font-normal text-_Gray mt-6'>Laptop</li>
                </ul>
                <ul className='mt-36 ml-28 cursor-pointer'>
                    <li className='font-bold text-lg text-_Gray mt-8'>Services</li>
                    <li className='font-normal text-_Gray  mt-6'>Photography</li>
                    <li className='font-normal text-_Gray  mt-6'>Handphone</li>
                    <li className='font-normal text-_Gray  mt-6'>Furniture</li>
                    <li className='font-normal text-_Gray  mt-6'>Fashion</li>
                    <li className='font-normal text-_Gray  mt-6'>Sports</li>
                </ul>
                <ul className='mt-36  ml-24 cursor-pointer'>
                    <li className='font-bold text-lg text-_Gray mt-8'>Company</li>
                    <li className='font-normal text-_Gray  mt-6'>Christian Dior</li>
                    <li className='font-normal text-_Gray  mt-6'>Louis Vuitton</li>
                    <li className='font-normal text-_Gray  mt-6'>Samsung</li>
                    <li className='font-normal text-_Gray  mt-6'>Apple</li>
                </ul>
                <ul className='mt-36 ml-20 cursor-pointer'>
                    <li className='font-bold text-lg text-_Gray mt-8'>More</li>
                    <li className='font-normal text-_Gray  mt-6'>Contact us</li>
                    <li className='font-normal text-_Gray  mt-6'>About us</li>
                    <li className='font-normal text-_Gray  mt-6'>Privacy</li>
                </ul>
            </div>
        </div>
    )
}
