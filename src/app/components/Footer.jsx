'use client'

import { Add, AddCircle, AddCircleOutlineSharp, AddReactionSharp, Email, Face2, Facebook, FacebookOutlined, FacebookRounded, FacebookSharp, FacebookTwoTone, GitHub, LocationCity, LocationOn, Phone, PlaylistAddCircleSharp, Telegram, Twitter } from "@mui/icons-material"
import Link from "next/link"
import styleess from './style.css'
import { useEffect } from "react"


const Footer = ()=>{
    useEffect(()=>{
        console.log(styleess)
    },[])

    return(
        <div className="w-full bg-[#151616]">
            <div className="container mx-auto">
                <div className="py-10 flex flex-wrap font-shabnamLight">
                    <ul className="w-full md:w-[50%] px-4 ">
                        <li>
                            <figure>
                                <img src="images/download (1).png" alt="" />
                            </figure>
                            
                            
                            
                            
                            
                        </li>
                        <li>
                        <div className="text-white  py-4 pt-10">
                                <p>
                                Outstock یک تم الگوهای برتر با ماژول مدیریت پیشرفته است. بسیار قابل تنظیم، استفاده آسان و کاملاً پاسخگو و آماده شبکیه است.

                                </p>
                            </div>

                        </li>
                        <li>
                        <div className="flex py-3">
                                <LocationOn className="text-[#dadada] text-[1.2rem] me-2"/>
                                <div className="text-[#dadada] ">
                                    <p>
                                        آدرس : تهران منطقه 1 تجریش خیابان مژده پلاک 130
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                        <div className="flex py-3">
                                <Email className="text-[#dadada] text-[1.2rem] me-2"/>
                                <div className="text-[#dadada] ">
                                    <p>
                                        ایمیل : rezaaminiweb@gmail.com 
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                        <div className="flex py-3">
                                <Phone className="text-[#dadada] me-2 text-[1.2rem]"/>
                                <div className="text-[#dadada] ">
                                    <p>
                                        تلفن : 09126059969
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="text-[#dadada] px-4 w-[50%] md:w-[25%]">
                        <li className="text-white  flex font-shabnamBold text-[1.3rem]">
                            <p className="py-2 ">
                                اطلاعات
                            </p>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">درباره ما  </p>
                            </Link>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            <p className="after:w-full after:h-[1px] hover:text-white after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                مقالات
                                
                            </p>
                            </Link>
                        </li>
                        <li className="flex py-1" >
                            <Link href={'#'}>
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                قوانین و مقررات
                            </p>
                            </Link>
                        </li>

                        <li className="flex py-1">
                            <Link href={'#'}>
                            
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                شرایط
                            </p>
                            </Link>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                صفحه اصلی 
                            </p>
                            </Link>
                        </li>
                    </ul>
                    <ul className="text-[#dadada] px-4 w-[50%] md:w-[25%]">
                    <li className="text-white  flex font-shabnamBold text-[1.3rem]">
                            <p className="py-2 ">
                                اطلاعات
                            </p>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">درباره ما  </p>
                            </Link>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                مقالات
                                
                            </p>
                            </Link>
                        </li>
                        <li className="flex py-1" >
                            <Link href={'#'}>
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                قوانین و مقررات
                            </p>
                            </Link>
                        </li>

                        <li className="flex py-1">
                            <Link href={'#'}>
                            
                            <p className="after:w-full hover:text-white after:h-[1px] after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                شرایط
                            </p>
                            </Link>
                        </li>
                        <li className="flex py-1">
                            <Link href={'#'}>
                            
                            <p className="after:w-full after:h-[1px] hover:text-white after:bg-white after:absolute after:top-[120%] duration-300 after:opacity-0 hover:after:opacity-100 after:duration-300 relative after:flex hover:after:top-[100%]">
                                صفحه اصلی 
                            </p>
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
            <div className="w-full relative py-6">
                <span className="absolute top-[50%] h-[0.1px] bg-[#343434] w-full ">

                </span>
            </div>
            <div className="container mx-auto">

                <div className="flex justify-between font-iranYekanLight py-5 pb-8 text-[#aeaeae]">
                    <div className="flex">
                    <p className="text-white" >
                        
                       تهیه و تنظیم توسط <Link href={'#'} className="text-[#BD8448]">رضا امینی </Link>
                    </p>

                    </div>
                    <div className="flex">
                        <Link className="mx-2" href={'#'}>
                        <Twitter className=" text-[1.2rem] hover:text-[#BD8448]" style={{"transition":".3s ease-in-out"}}  />
                        </Link>
                        <Link className="mx-2" href={'#'}>
                        <GitHub className=" text-[1.2rem] hover:text-[#BD8448]" style={{"transition":".3s ease-in-out"}}/>
                        </Link>
                        <Link className="mx-2" href={'#'}>
                        <Telegram className=" text-[1.2rem] hover:text-[#BD8448] duration-300" style={{"transition":".3s ease-in-out"}}/>
                        </Link>
                        
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Footer