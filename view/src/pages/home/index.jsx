import React from "react";
import { Header } from "@/layout";
import SearchInputHome from "../../components/searchInputHome";
import img from "@/assets/images/homeIMg/imgSectionbar.png";
import Delivery from "@/assets/images/homeIMg/Delivery.png";
import IconArrows from "@/assets/images/homeIMg/IconArrows.svg";
import ShoppingCartMobile from "@/assets/images/homeIMg/ShoppingCartMobile.png";
import CallCenter from "@/assets/images/homeIMg/CallCenter.png";
import WelcomeScreenForECommerce from "@/assets/images/homeIMg/WelcomeScreenForECommerce.png";
import { Ctegories } from "../../components/CategoriesHome";
import Fashion from "@/assets/images/iconCtegories/Fashion.svg";
import Handphone from "@/assets/images/iconCtegories/Handphone.svg";
import Laptop from "@/assets/images/iconCtegories/Laptop.svg";
import Music from "@/assets/images/iconCtegories/Music.svg";
import Photography from "@/assets/images/iconCtegories/Photography.svg";
import Furniture from "@/assets/images/iconCtegories/Furniture.svg";
import Health from "@/assets/images/iconCtegories/Health.svg";
import Ball from "@/assets/images/iconCtegories/Ball.png";
import { WhyUsHomePage } from "@/components";
import { ProductsHomePage } from "@/components";
import AsusZenbook from "@/assets/images/homeImg/AsusZenbook.svg";
import AudioTechnica from "@/assets/images/homeImg/AudioTechnica.svg";
import SK from "@/assets/images/homeImg/SK.svg";
import modena from "@/assets/images/homeImg/modena.svg";
import { CompareProduct } from "@/components"
import katana from "@/assets/images/homeImg/katana.svg";
import { SearchHome } from "@/components"
import { Footer } from "@/layout";

export function HomePage() {
    return (
        <div className="container mx-auto lg:minmin-w-fit md:px-20  sm:px-16 mb-7">
            <Header />
            <div
                style=
                {{ height: "332px", }}
                className="w-full mt-9 ml-auto">

                <div className="flex">
                    <div>
                        <h1 className="text-_Gray font-sans-serif leading-1 ml-9 pt-20 font-bold text-5xl flex">
                            Browse Milliion<br />
                            Products for Your Needs</h1>
                        <SearchInputHome
                            placeholder='I want to buy…'
                        />
                    </div>
                    <div className="ml-14">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
            <div className="flex">
                <div style={{
                    width: "545px"
                }} className="mt-24  flex flex-col">
                    <span className="text-primary font-semibold  text-base pt-7 pl-8">WEEKLY DEALS</span>
                    <div className="pt-4">
                        <span className="text-_Gray font-bold  text-4xl pl-9">Lorem ipsum</span>
                        <button className="bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary  cursor-pointer w-28 h-9 rounded-3xl text-center font-bold text-sm ml-32">Learn More</button>
                    </div>
                    <img className="mt-3 ml-9" src={Delivery} alt="delivery" />
                </div>

                <div className="flex-col">
                    <div className="mt-36 ml-5 flex">
                        <div>
                            <div className="pt-9 pl-5">
                                <span className=" text-2xl font-bold text-_Gray " >Lorem ip <br />
                                    sum dolor</span>
                            </div>
                            <div className="flex cursor-pointer">
                                <span className="text-primary font-bold text-sm pl-5 pt-3 ">Learn More</span>
                                <img className="mt-3 ml-3" src={IconArrows} alt="IconArrows" />
                            </div>
                        </div>
                        <div>
                            <img src={ShoppingCartMobile} alt="ShoppingCartMobile" />
                        </div>
                    </div>
                    <div className="mt-5 ml-5 flex">

                        <div className="pt-6">
                            <img src={CallCenter} alt="CallCenter" />
                        </div>
                        <div>
                            <div className="mt-9 ml-7">
                                <span className="text-_Gray font-bold text-2xl  ">Lorem ip<br />
                                    sum dolor</span>
                            </div>
                            <div className="flex cursor-pointer">
                                <span className="text-primary font-bold text-sm pl-5 pt-3 ">Learn More</span>
                                <img className="mt-3 ml-3" src={IconArrows} alt="IconArrows" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="text-center items-center mt-36 ml-5 pt-6">
                    <span className="text-_Gray font-bold text-2xl ">
                        Lorem ipsum<br />
                        dolor sit amet
                    </span>
                    <div className="flex ml-12 mt-4 cursor-pointer">
                        <span className="text-primary font-bold text-sm pl-5 pt-3 ">Learn More</span>
                        <img className="mt-3 ml-3" src={IconArrows} alt="IconArrows" />
                    </div>
                    <img className="mt-9" src={WelcomeScreenForECommerce} alt="WelcomeScreenForECommerce" />
                </div>
            </div>
            <div className="mt-14 flex ">
                <div>
                    <span className="text-_Gray font-bold text-3xl mt-14">Categories</span>
                </div>
                <div>
                    <button style={{ marginLeft: "810px" }}
                        className='bg-transparent w-32 h-11 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl'>Show All</button>
                </div>
            </div>
            <div className="flex ml-6">
                <Ctegories
                    image={Fashion}
                    title="Fashion"
                    Number={"290K Items"}
                />
                <Ctegories
                    image={Handphone}
                    title="Handphone"
                    Number={"3M Items"}
                />
                <Ctegories
                    image={Laptop}
                    title="Laptop"
                    Number={"1,2 M Items"}
                />
                <Ctegories
                    image={Music}
                    title="Music"
                    Number={"751K Items"}
                />
                <Ctegories
                    image={Photography}
                    title="Photography"
                    Number={"1,0M Items"}
                />
                <Ctegories
                    image={Furniture}
                    title="Furniture"
                    Number={"88K Items"}
                />
                <Ctegories
                    image={Health}
                    title="Health"
                    Number={"761K Items"}
                />
                <Ctegories
                    image={Ball}
                    title="Fashballion"
                    Number={"2,9K Items"}
                />
            </div>
            <div className="text-center">
                <h2 className="mt-20 font-bold text-3xl text-_Gray">Why the Choose us than other?</h2>
                <p className="font-normal text-base mt-5 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et</p>
            </div>
            <WhyUsHomePage />
            <hr
                style={{ height: "2px", width: "1090px", backgroundColor: "#C2C9D6" }}
                className="mt-24"
            />
            <div className="text-center mt-14">
                <h2 className="font-bold text-3xl text-_Gray ">Lorem ipsum dolor sit amet</h2>
                <span className="font-normal text-base text-slate-500 pt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
            </div>
            <div>
                <ProductsHomePage
                    image={AsusZenbook}
                    name="Asus Zenbook UX-430 US"
                    rate="4,8"
                    number="21K Total Reviews"
                />
                <ProductsHomePage
                    image={AudioTechnica}
                    name="Audio Technica ATH M20 BT"
                    rate="5,0"
                    number="300K Total Reviews"
                />
                <ProductsHomePage
                    image={SK}
                    name="SK II - Anti Aging Cream"
                    rate="4,9"
                    number="89K Total Reviews"
                />
                <ProductsHomePage
                    image={modena}
                    name="Modena Juice Blender"
                    rate="4,8"
                    number="871 Total Reviews"
                />
            </div>
            <div className="mt-14 text-center">
                <span className="mt-14 text-primary font-bold text-base ">See full Leaderboards</span>
            </div>
            <div className='flex mt-52'>
                <h2 className='font-bold text-4xl text-_Gray  grow'>Compare the Product</h2>
                <button className='w-52 h-11 rounded-3xl border-2 border-primary text-primary hover:bg-primary hover:text-white text-base font-bold  '> + New Comparison</button>
            </div>
            <div className="flex ">
                <CompareProduct
                    image={katana}
                    name="Asus Zenbook Pro UX-430 US"
                    CPU="Intel® Core™ i3 7100U Processor"
                    OperatingSystem="Windows 10 Pro for business"
                />
                <CompareProduct
                    image={katana}
                    name="Lenovo Legion Y545 2018"
                    CPU="Intel® Core™ i7 9100P Processor"
                    OperatingSystem="Windows 10 Pro for business"
                />
                <CompareProduct
                    image={katana}
                    name="Acer Swift Air SF-313 51"
                    CPU="Intel® Core™ i3 7100U Processor"
                    OperatingSystem="Intel® Core™ i3 7100X Processor"
                />
                <CompareProduct
                    image={katana}
                    name="Lenovo Thinkpad Y51X1"
                    CPU="Intel® Core™ i3 7100U Processor"
                    OperatingSystem="Intel® Core™ i5 8000C Processor"
                />
            </div>
            <SearchHome />
            <div>
                <Footer />
            </div>
        </div>
    )
}