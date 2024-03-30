'use client'

import { Menu, Search } from "@mui/icons-material"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from "next/link"
import './satelite.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext, useEffect, useState } from "react";
import { ShopC } from "@/app/components/context/Shopcontext";
import { productlist } from "./product/productlist";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(ShopC)
    const [scrolled, setScrolled] = useState(false)
    var numbers = [1, 2, 3, 4]

    const totalPrice = cartItems.reduce((acc, currentItem) => {


        const product = productlist.find(item => item.id === currentItem.id);
        return acc + (currentItem.count * product.ProductPriceNew);
    }, 0);

    useEffect(() => {
        const handleScrolled = () => {


            const windowS = window.scrollY

            if (windowS > 200) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }


        }
        window.addEventListener("scroll", handleScrolled
        )


    }, []);
    const [menustart, setmenustart] = useState(false)

    return (
        <>
       
            <header className="w-full bg-[#F5F5F5] relative">

                <div className={menustart ? "absolute w-[70%] duration-300  lg:hidden h-screen top-0 left-[0%] bg-white   z-50" : "absolute w-[50%] duration-300 lg:hidden h-screen top-0 left-[-100%] bg-white   z-50"}>
                    <ul className="
         font-iranYekanBold  ">
                        <li className="p-4">
                            <CloseIcon className="cursor-pointer" onClick={() => setmenustart(prev => !prev)} />
                        </li>
                        <li className="px-4 py-4">
                            <Link href={'/'}>
                                خانه

                            </Link>
                        </li>
                        <li className="p-4 ">
                            <Link href={'/shop'}>
                                فروشگاه
                            </Link>
                        </li>
                        <li className="p-4 relative group">
                            <Link href={'#'}>
                                <KeyboardArrowDownIcon />
                                وبلاگ
                            </Link>
                            <ul className="absolute z-50 scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                <li className="py-2 font-iranYekanBlack">
                                    <Link href={'#'}>
                                        وبلاگ
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        وبلاگ 1
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        وبلاگ 2
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        وبلاگ 3
                                    </Link>

                                </li>

                            </ul>
                        </li>
                        <li className="p-4 relative group">
                            <Link href={'#'}>
                                <KeyboardArrowDownIcon />
                                صفحات
                            </Link>
                            <ul className="absolute z-50 scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                <li className="py-2 font-iranYekanBlack">
                                    <Link href={'#'}>
                                        صفحات
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        صفحات 1
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        صفحات 2
                                    </Link>

                                </li>
                                <li className="py-2">
                                    <Link href={'#'}>
                                        صفحات 3
                                    </Link>

                                </li>

                            </ul>


                        </li>
                        <li className="px-4 ">
                            <Link href={'#'}>
                                <KeyboardArrowDownIcon />
                                ارتباط با ما
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="container mx-auto">
                    <div className=" text-black">
                        <div className="block lg:flex justify-between px-5 py-3   ">
                            <div>
                                <div className="flex justify-center">
                                    <Link href={'/'}>
                                        <img className="" src="images/download.png" alt="" />
                                    </Link>

                                </div>
                            </div>
                            <div className="hidden lg:flex">
                                <ul className="flex font-iranYekanBold  ">
                                    <li className="px-4 ">
                                        <Link href={'/'}>
                                            خانه

                                        </Link>
                                    </li>
                                    <li className="px-4 ">
                                        <Link href={'/shop'}>
                                            فروشگاه
                                        </Link>
                                    </li>
                                    <li className="px-4 relative group">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            وبلاگ
                                        </Link>
                                        <ul className="absolute z-50 scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                            <li className="py-2 font-iranYekanBlack">
                                                <Link href={'#'}>
                                                    وبلاگ
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 1
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 2
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 3
                                                </Link>

                                            </li>

                                        </ul>
                                    </li>
                                    <li className="px-4 relative group">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            صفحات
                                        </Link>
                                        <ul className="absolute z-50 scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                            <li className="py-2 font-iranYekanBlack">
                                                <Link href={'#'}>
                                                    صفحات
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 1
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 2
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 3
                                                </Link>

                                            </li>

                                        </ul>


                                    </li>
                                    <li className="px-4 ">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            ارتباط با ما
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex  justify-between pt-6 lg:pt-0 relative">

                                <div className="flex font-iranYekanBold ">
                                    <div className="flex px-2">
                                        <Search className="mx-2" />
                                        <p>
                                            جستجو
                                        </p>

                                    </div>
                                    <div className="flex px-2 group relative">
                                        <div className="flex">
                                            <LocalMallIcon className="mx-2" />
                                            <Link href={'/cartItem'}>
                                                <p>

                                                    سبد خرید
                                                    <span className='text-sm mx-2'>
                                                        (


                                                        {cartItems?.length}
                                                        )



                                                    </span>
                                                </p>
                                            </Link>
                                        </div>
                                        {
                                            cartItems.length == 0 ? <ul className="absolute shadow-xl z-50 p-2 w-[150%] ps-4 bg-white top-[100%] scale-y-0 origin-top group-hover:scale-y-100 lg:right-[-70px] right-0 ">
                                                <li className="font-iranYekanLight">
                                                    سبد خرید <span className="text-red-500">خالی</span> است

                                                </li>
                                            </ul> :
                                                <>
                                                    <ul className="absolute z-50 shadow-xl duration-300 w-[150%] scale-y-0 py-2 bg-white top-[100%]  origin-top group-hover:scale-y-100 right-0 lg:right-[-70px]">
                                                        {
                                                            cartItems.map((val4) => {
                                                                const prod = productlist.find(item => item.id == val4.id)

                                                                return (

                                                                    <li key={val4.id} className="flex justify-between py-2 px-5">
                                                                        <div className="flex">
                                                                            <figure>
                                                                                <img src={prod.image1} className="w-10 h-10" alt="" />
                                                                            </figure>
                                                                            <div className="flex items-center ms-3 ">
                                                                                <div>
                                                                                    <Link href={'/product/' + prod.id + '/' + prod.productName}>
                                                                                        <p className="text-[10px]  ">
                                                                                            {prod.productName}
                                                                                        </p>
                                                                                    </Link>
                                                                                    <p className="text-[10px] py-1">
                                                                                        {val4.count} * {prod.ProductPriceNew}$ = {val4.count * prod.ProductPriceNew}$
                                                                                    </p>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <CloseIcon className="cursor-pointer text-red-500 text-[15px]" onClick={() => removeFromCart(val4.id)} />
                                                                        </div>



                                                                    </li>
                                                                )


                                                            })
                                                        }
                                                        <li className="w-full py-2 px-5">
                                                            <span className="w-full h-[1px] flex bg-black"></span>

                                                        </li>
                                                        {cartItems ?
                                                            <> <li className="flex justify-between px-5">
                                                                <div>
                                                                    <p className="text-[10px] lg:text-[13px] font-iranYekanMedium">
                                                                        جمع خرید:
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-[10px] lg:text-[14px] text-red-400">
                                                                        $ {totalPrice}
                                                                    </p>
                                                                </div>

                                                            </li>
                                                                <li className="px-5  justify-center pt-3">
                                                                    <div className='relative group-custom border flex justify-center ' >
                                                                        <Link href={'/cartItem'} className=' text-center w-full h-full py-2 duration-500 group-custom-hover:text-white group--custom-hover:border-[#BD8448] relative z-10 text-[10px] lg:text-[13px]'>
                                                                            مشاهده سبد خرید
                                                                        </Link>
                                                                        <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-custom-hover:h-full duration-500 z-0'>

                                                                        </div>
                                                                    </div>

                                                                </li>
                                                                <li className="px-5 pt-2">
                                                                    <div className='relative group-custom border flex justify-center  bg-[#323232]' >
                                                                        <Link href={'/checkout'} className=' text-center w-full h-full py-2 text-white duration-500 group-custom-hover:text-white group--custom-hover:border-[#BD8448] relative z-10 text-[10px] lg:text-[13px]'>
                                                                            تسویه حساب
                                                                        </Link>
                                                                        <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-custom-hover:h-full duration-500 z-0'>

                                                                        </div>
                                                                    </div>

                                                                </li>
                                                            </>
                                                            : null}


                                                    </ul>

                                                </>
                                        }


                                    </div>
                                </div>

                                <div className="lg:hidden">
                                    <Menu className="mx-2 cursor-pointer" onClick={()=>setmenustart(prev=>!prev)} />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </header>

            <header className={scrolled ? "w-full bg-white shadow-md duration-300 fixed   py-0 md:py-7 visible opacity-100 " : "w-full py-0 md:py-7  bg-[#F5F5F5] duration-700 fixed opacity-0 invisible  "} style={{ top: scrolled ? '0px' : '-600px', zIndex: 999999 }} >
                <div className="container mx-auto">
                    <div className=" text-black">
                        <div className="block lg:flex justify-between px-5 py-3  ">
                            <div>
                                <div className="flex justify-center">
                                    <Link href={'/'}>
                                        <img className="" src="images/download.png" alt="" />
                                    </Link>

                                </div>
                            </div>
                            <div className="hidden lg:flex">
                                <ul className="flex font-iranYekanBold  ">
                                    <li className="px-4 ">
                                        <Link href={'/'}>
                                            خانه

                                        </Link>
                                    </li>
                                    <li className="px-4 ">
                                        <Link href={'/shop'}>
                                            فروشگاه
                                        </Link>
                                    </li>
                                    <li className="px-4 relative group">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            وبلاگ
                                        </Link>
                                        <ul className="absolute scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                            <li className="py-2 font-iranYekanBlack">
                                                <Link href={'#'}>
                                                    وبلاگ
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 1
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 2
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    وبلاگ 3
                                                </Link>

                                            </li>

                                        </ul>
                                    </li>
                                    <li className="px-4 relative group">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            صفحات
                                        </Link>
                                        <ul className="absolute z-50 scale-y-0 origin-top group-hover:scale-y-100 duration-300 bg-white w-[200%] ps-4 py-2 shadow-xl">
                                            <li className="py-2 font-iranYekanBlack">
                                                <Link href={'#'}>
                                                    صفحات
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 1
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 2
                                                </Link>

                                            </li>
                                            <li className="py-2">
                                                <Link href={'#'}>
                                                    صفحات 3
                                                </Link>

                                            </li>

                                        </ul>


                                    </li>
                                    <li className="px-4 ">
                                        <Link href={'#'}>
                                            <KeyboardArrowDownIcon />
                                            ارتباط با ما
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex  justify-between pt-6 lg:pt-0">
                                <div className="flex font-iranYekanBold">
                                    <div className="flex px-2">
                                        <Search className="mx-2" />
                                        <p>
                                            جستجو
                                        </p>

                                    </div>
                                    <div className="flex px-2 relative group">
                                        <LocalMallIcon className="mx-2" />
                                        <Link href={'/cartItem'}>
                                            <p>

                                                سبد خرید
                                                <span className='text-sm mx-2'>
                                                    (


                                                    {cartItems?.length}
                                                    )



                                                </span>
                                            </p>
                                        </Link>
                                        {
                                            cartItems.length == 0 ? <ul className="absolute shadow-xl z-50 p-2 w-[150%] ps-4 bg-white top-[100%] scale-y-0 origin-top group-hover:scale-y-100 lg:right-[-70px] right-0 ">
                                                <li className="font-iranYekanLight">
                                                    سبد خرید <span className="text-red-500">خالی</span> است

                                                </li>
                                            </ul> :
                                                <ul className="absolute z-50 shadow-xl duration-300 w-[150%] scale-y-0 py-4  bg-white top-[100%]  origin-top group-hover:scale-y-100 right-0 lg:right-[-70px]">
                                                    {
                                                        cartItems.map((val4) => {
                                                            const prod = productlist.find(item => item.id == val4.id)

                                                            return (

                                                                <li key={val4.id} className="flex justify-between py-2 px-5">
                                                                    <div className="flex">
                                                                        <figure>
                                                                            <img src={prod.image1} className="w-10 h-10" alt="" />
                                                                        </figure>
                                                                        <div className="flex items-center ms-3 ">
                                                                            <div>
                                                                                <Link href={'/product/' + prod.id + '/' + prod.productName}>
                                                                                    <p className="text-[10px]  ">
                                                                                        {prod.productName}
                                                                                    </p>
                                                                                </Link>
                                                                                <p className="text-[10px] py-1">
                                                                                    {val4.count} * {prod.ProductPriceNew}$ = {val4.count * prod.ProductPriceNew}$
                                                                                </p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <CloseIcon className="cursor-pointer text-red-500 text-[15px]" onClick={() => removeFromCart(val4.id)} />
                                                                    </div>



                                                                </li>
                                                            )


                                                        })
                                                    }
                                                    <li className="w-full py-2 px-5">
                                                        <span className="w-full h-[1px] flex bg-black"></span>

                                                    </li>
                                                    {cartItems ?
                                                        <> <li className="flex justify-between px-5">
                                                            <div>
                                                                <p className="text-[10px] lg:text-[13px] font-iranYekanMedium">
                                                                    جمع خرید:
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-[10px] lg:text-[14px] text-red-400">
                                                                    $ {totalPrice}
                                                                </p>
                                                            </div>

                                                        </li>
                                                            <li className="px-5  justify-center pt-3">
                                                                <div className='relative group-custom border flex justify-center ' >
                                                                    <Link href={'/cartItem'} className=' text-center w-full h-full py-2 duration-500 group-custom-hover:text-white group--custom-hover:border-[#BD8448] relative z-10 text-[10px] lg:text-[13px]'>
                                                                        مشاهده سبد خرید
                                                                    </Link>
                                                                    <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-custom-hover:h-full duration-500 z-0'>

                                                                    </div>
                                                                </div>

                                                            </li>
                                                            <li className="px-5 pt-2">
                                                                <div className='relative group-custom border flex justify-center  bg-[#323232]' >
                                                                    <Link href={'/checkout'} className=' text-center w-full h-full text-white py-2 duration-500 group-custom-hover:text-white group--custom-hover:border-[#BD8448] relative z-10 text-[10px] lg:text-[13px]'>
                                                                        تسویه حساب
                                                                    </Link>
                                                                    <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-custom-hover:h-full duration-500 z-0'>

                                                                    </div>
                                                                </div>

                                                            </li>
                                                        </>
                                                        : null}
                                                </ul>
                                        }




                                    </div>
                                </div>

                                <div className="lg:hidden">
                                    <Menu className="mx-2" />
                                </div>

                            </div>


                        </div>



                    </div>



                </div>

            </header>

        </>
    )
        ;
}
export default Header