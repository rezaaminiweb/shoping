'use client'

import Image from 'next/image'
import Link from 'next/link'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useRef, useState } from 'react';
import DetailSlide from '../components/componentsUI/Detail';
import Tittle from '../components/componentsUI/Tittle';
import Product from '../components/product/Product';
import ProductSale from '../components/product/productSale';

import {AttachMoney} from '@mui/icons-material'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { productlist, swiperDetail, swiperImage } from '../components/product/productlist';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
const Reza = () => {
    const [byLoading, setByLoading] = useState(false)
    const [visibleCount, setVisibleCount] = useState(4)
    const numberProduct = productlist.length

    return (
        <>
            <DetailSlide Href1='/' Href2='/shop' P2tittle='خانه' H1tittle='فروشگاه' P3tittle='فروشگاه' />
            <div className='w-full py-10'>
            <div>
                        <Tittle tittle="محصولات پرطرفدار" pargraph="جالب است بدانیم که چرا محصولات ما پرطرفدار و کاربردی هستند" />
                    </div>
                    <div className='w-full bg-white'>
                        <div className='container mx-auto'>
                            <div className='flex flex-wrap py-20 pb-10 px-20'>
                                {

                                    <Product span={byLoading} productCount={visibleCount} />

                                }

                            </div>
                            <div className='flex justify-center font-iranYekanBold pb-16'>
                                {
                                    (numberProduct > visibleCount) ? (
                                        <div className='relative group' onClick={() => {
                                            setByLoading(!byLoading);
                                            setVisibleCount(prev => prev + 2)
                                        }}>
                                            <button className='px-12 py-4 border border-[#a3a3a3] duration-500 group-hover:text-white group-hover:border-[#BD8448] relative z-10'>
                                                مشاهده بیشتر
                                            </button>
                                            <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-hover:h-full duration-500 z-0'>

                                            </div>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }


                            </div>

                        </div>

                    </div>
                    <div className='w-full bg-white'>



                        <Pop />


                    </div>
                    <div>
                        <Tittle tittle="حراج" pargraph="بیشترین تخفیفات را از ما بخواهید"
                        />

                    </div>
                    <div className='w-full bg-white'>
                        <div className='container mx-auto'>
                            <div className='flex flex-wrap py-20 pb-10 px-20'>


                                <ProductSale />
                            </div>
                        </div>




                    </div>
                    <div className='w-full bg-white'>
                        <div className='container mx-auto  '>
                            <Swiper2 />

                        </div>

                    </div>


            </div>
         
        </>
    )

}
const Swiper2 = () => {
    return (
        <div className='flex justify-center px-20 pb-20'>
            <Swiper loop={true}
                breakpoints={{
                    540: {
                        slidesPerView: 3
                    },
                    680: {
                        slidesPerView: 5
                    }
                }}
                slidesPerView={1} className="mySwiper flex justify-center">
                {swiperImage.map((item, index) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='flex justify-center'>
                                <figure>
                                    <img src={item.image} alt="" />
                                </figure>
                            </div>
                        </SwiperSlide>

                    )
                })}


            </Swiper>
        </div>
    )
}

 const Pop = () => {
    return (

        <div className='flex flex-wrap'>
            <div className='w-full md:w-[50%] pe-0 md:pe-5 '>
                <figure className='w-full group-custom relative font-shabnamMedium  overflow-hidden '>
                    <img src="images/banner-big-2.c3aa94be.jpg" className='w-full object-cover duration-300 group-custom-hover:-scale-x-110 group-custom-hover:scale-y-110 -scale-x-100' alt="" />
                    <figcaption className='absolute right-[5%] top-[50%] translate-y-[-50%] '>
                        <p className='text-[#BC8246]'>
                            محصولات شوینده
                        </p>
                        <Link href={'#'} className='hover:text-[#BC8246] duration-300 font-iranYekanBlack'>
                            <p className=''>
                                نصب بر روی دو دستگاه
                            </p>
                        </Link>
                        <div>

                            <Link href={'#'} className='flex group-1 text-[.8rem] relative  px-5 py-3 border-black border-2 mt-10 duration-300 hover:border-[#BD8448]'>
                                <div className='flex relative z-10 group-1-hover:text-white duration-300 '>

                                    <p className='mx-2'>
                                        خرید
                                    </p>
                                    /
                                    <div className='flex mx-2  '>
                                        <span className=' flex text-[.9rem]  '>

                                            230

                                        </span>
                                        <AttachMoney className='text-[1.2rem]   ' />

                                    </div>
                                </div>
                                <div className='absolute w-full group-1-hover:h-full duration-300 h-0 left-0 top-0 bg-[#BD8448]'>

                                </div>

                            </Link>
                        </div>

                    </figcaption>
                </figure>
            </div>
            <div className='w-full md:w-[50%]  ps-0 md:ps-5'>
                <figure className='w-full group-custom font-shabnamMedium relative overflow-hidden '>
                    <img src="images/banner-big-1.9697851e.jpg" className='w-full duration-300 group-custom-hover:-scale-x-110 group-custom-hover:scale-y-110 object-cover -scale-x-100' alt="" />
                    <figcaption className='absolute right-[5%] top-[50%] translate-y-[-50%] '>
                        <p className='text-[#BC8246]'>
                            محصولات شوینده
                        </p>
                        <Link href={'#'} className='hover:text-[#BC8246] duration-300 font-iranYekanBlack'>
                            <p className=''>
                                نصب بر روی دو دستگاه
                            </p>
                        </Link>
                        <div>

                            <Link href={'#'} className='flex group-1 text-[.8rem] relative  px-5 py-3 border-black border-2 mt-10 duration-300 hover:border-[#BD8448]'>
                                <div className='flex relative z-10 group-1-hover:text-white duration-300 '>

                                    <p className='mx-2'>
                                        خرید
                                    </p>
                                    /
                                    <div className='flex mx-2  '>
                                        <span className=' flex text-[.9rem]  '>

                                            230

                                        </span>
                                        <AttachMoney className='text-[1.2rem]   ' />

                                    </div>
                                </div>
                                <div className='absolute w-full group-1-hover:h-full duration-300 h-0 left-0 top-0 bg-[#BD8448]'>

                                </div>

                            </Link>
                        </div>

                    </figcaption>
                </figure>
            </div>

        </div>
    )
}
export default Reza