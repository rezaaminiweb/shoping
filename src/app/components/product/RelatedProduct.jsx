'use client'

import Link from "next/link"
import { productlist } from "./productlist"
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { AddAPhoto, AddAlert, AddBox, AddBoxTwoTone, AddBusiness, AddCard, AddCircle, AddCircleOutlineOutlined, AddCircleSharp, AddIcCallOutlined, AddReactionSharp, AttachMoney, FavoriteBorder, PlusOne, PlusOneSharp } from '@mui/icons-material';
import dynamic from "next/dynamic";
import {useContext, useEffect} from "react";
import { ShopC } from "../context/Shopcontext";


const RelatedProduct = (props) => {
    const {addToCart} = useContext(ShopC)
    useEffect(() => {

        const RandomNumber = Math.random()
    }, []);




    return (

        productlist.slice(0,3).map((item, index) => {
            console.log(item)
            return (
                <>
                    <div className='w-full font-snapFoodLight sm:w-[50%] lg:w-[25%] px-5 group' key={item.id}>


                        <figure className=' relative'>
                            <Link href={'/product/'+item.id+'/'+item.productName}>
                                {item.sale && (
                                    <div className="">
                                        <div className="absolute z-50 w-7 h-10 bg-[#BC8246]  top-0   after:w-[50%] after:h-3 after:clip-path-polygon-[0%_0%,_100%_0%,_100%_100%] after:bg-[#BC8246] after:z-50 after:top-[99%] after:absolute after:flex after:right-0 before:bg-[#BC8246] before:left-0 before:top-[99%] before:flex before:absolute before:w-[50%] before:h-3 before:z-40 before:clip-path-polygon-[0%_0%,_100%_0%,_0%_100%] "  >
                                            <p className="text-white text-[10px]  text-center rotate-90  absolute left-1 font-iranYekanBlack top-4">جدید</p>

                                            {item.salAd && (
                                                <div className="absolute top-[100%] right-0 z-30 w-7 h-10 bg-[#201F1F]  top-0   after:w-[50%] after:h-3 after:clip-path-polygon-[0%_0%,_100%_0%,_100%_100%] after:bg-[#201F1F] after:z-50 after:top-[99%] after:absolute after:flex after:right-0 before:bg-[#201F1F] before:left-0 before:top-[99%] before:flex before:absolute before:w-[50%] before:h-3 before:z-40 before:clip-path-polygon-[0%_0%,_100%_0%,_0%_100%] "  >
                                                    <p className="text-white text-[10px] text-center rotate-90 absolute left-1 font-iranYekanBlack top-4">{item.salAd}%</p>
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                )}

                                <img src={item.image1} className='object-cover w-full' alt="" />
                                <img src={item.image2} className='absolute w-full h-full object-cover left-0 top-0 scale-x-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300' alt="" />
                                <div className='flex flex-col w-fit bg-white  absolute  bottom-5 opacity-0 group-hover:opacity-100 duration-300 scale-x-0 group-hover:scale-x-100 '>
                                    <div className='  py-2 px-3 relative'>
                                        <FavoriteBorder className='text-[1rem] hover:text-[#BC8246]  ' style={{ "transition": ".2s ease-in-out" }} />
                                        <span className='w-[50%] h-[1px] absolute bg-[#b6b6b6] top-[100%] left-[50%] translate-x-[-50%]'>

                                        </span>
                                    </div>
                                    <div className='p-2 px-3 relative'>
                                        <TuneIcon className='text-[1rem] hover:text-[#BC8246]' style={{ "transition": ".2s ease-in-out" }} />
                                        <span className='w-[50%] h-[1px] absolute bg-[#b6b6b6] top-[100%] left-[50%] translate-x-[-50%]'>

                                        </span>
                                    </div>
                                    <div className='p-2 px-3'>
                                        <SearchIcon className='text-[1rem] hover:text-[#BC8246] ' style={{ "transition": ".2s ease-in-out" }} />
                                    </div>

                                </div>
                            </Link>
                        </figure>
                        <figcaption className=' py-2 pb-6'>
                            <Link href={'#'}>
                                <p className='text-[#848B8A] font-iranYekanBold'>
                                    {item.productName}
                                </p>
                            </Link>
                            <div className='flex py-2 relative cursor-pointer'>
                                <div className='flex absolute opacity-100 top-[20%] group-hover:top-[-20%] duration-300 group-hover:opacity-0'>
                                    <span className='font-irannum mx-3 font-bold flex '>
                                        {item.productPriceOld}<AttachMoney className='text-[1.2rem]' />
                                    </span>
                                    <span className='line-through font-irannum font-bold text-[#848b8a] text-[.8rem] flex'>
                                        {item.ProductPriceNew}<AttachMoney className='text-[1rem]' />
                                    </span>
                                </div>
                                <div className='font-snapFoodRegular opacity-0 translate-y-[.5rem] group-hover:translate-y-[0rem] duration-300 group-hover:opacity-100 flex hover:text-[#BC8246] relative after:absolute after:flex after:w-full after:h-[1px] after:bg-black after:bottom-[-2px] hover:after:bg-[#BC8246] after:duration-300' onClick={()=>addToCart(item.id)}>
                                    <p className='text-[.8rem] mx-2 '>
                                        اضافه کردن به سبد خرید
                                    </p>
                                    <AddIcon className='text-[1rem]' />

                                </div>

                            </div>
                        </figcaption>

                    </div>
                </>
            )
        })
    )

}
export default RelatedProduct
