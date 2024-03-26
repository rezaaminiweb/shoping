'use client'
import React, {useContext, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './../assets/css/stylecssswiper.css'
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { AddAPhoto, AddAlert, AddBox, AddBoxTwoTone, AddBusiness, AddCard, AddCircle, AddCircleOutlineOutlined, AddCircleSharp, AddIcCallOutlined, AddReactionSharp, AttachMoney, FavoriteBorder, PlusOne, PlusOneSharp } from '@mui/icons-material';
import Product from "./components/product/Product"
import { productlist, swiperDetail, swiperImage } from './components/product/productlist';
import ProductSale from './components/product/productSale'
import Tittle from "@/app/components/componentsUI/Tittle";
import {ShopC} from "@/app/components/context/Shopcontext";



const Home = () => {
    const [byLoading, setByLoading] = useState(false)
    const [visibleCount, setVisibleCount] = useState(4)
    const numberProduct = productlist.length
    const {cartItems, addToCart} = useContext(ShopC)
    console.log(byLoading);
    const swiper = useSwiper()
    return (
        <div className='w-full bg-[#F5F5F5]'>
            <div className=''>


                <div className='SliderWrapper'>
                    <Swiper
                        breakpoints={{
                            0: {
                                pagination: {
                                    dynamicBullets: false,
                                    enabled: false
                                }
                            },
                            576: {
                                pagination: {
                                    clickable: true,
                                    enabled: true
                                }
                            }
                        }} loop={true} pagination={{ clickable: true, enabled: false }} modules={[Pagination]} className="mySwiper  ">
                        <SwiperSlide className=' relative'>
                            {({ isActive }) => {
                                return (
                                    <>
                                        <div className='flex justify-end'>


                                            <img src="images/slider-1.9ccbaa17.jpg" className='-scale-x-100 object-cover  4xl:w-[50%] w-full' alt="" />
                                            <div className='absolute  w-fit  md:right-[25%]   right-[5%] md:left-[0%] top-[50%] translate-y-[-50%]  font-iranYekanMedium '>
                                                <div className={isActive ? 'translate-y-0 duration-500 opacity-100 delay-300' : 'opacity-0 duration-500 translate-y-10 delay-300'}>
                                                    <h3 className=' text-start font-bold text-[20px] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] '>
                                                        دست ساز
                                                        <br />
                                                        قهوه حک شده با دست                    </h3>

                                                </div>
                                                <div className={isActive ? 'flex justify-start translate-y-0 opacity-100 delay-700 duration-300' : 'duration-500 opacity-0 flex justify-start  translate-y-10 '}>
                                                    <p className=' w-[50%] py-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px]'>
                                                        این فرایند بخشی از فرانید پویا است که  ایجاد کرده است.                    </p>
                                                </div>
                                                <div className={isActive ? 'flex translate-y-0 opacity-100 delay-1000 duration-500' : 'translate-y-10 duration-500 opacity-0  flex'} >
                                                    <div className='relative group border-2 border-black duration-500 hover:border-[#BC8246]'>
                                                        <a href="#" className='relative z-20 block py-2 px-7 group-hover:text-white duration-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] '>پیدا کنید</a>
                                                        <div className='absolute left-0 top-0 bg-[#BC8246] h-0 w-full transition-all duration-500  group-hover:h-full'>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </>
                                );
                            }}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({ isActive }) => {
                                return (
                                    <>
                                        <div className='flex justify-end'>

                                            <img src="images/slider-2.ddb414d2.jpg" className='-scale-x-100 4xl:w-[50%] w-full' alt="" />

                                            <div className='absolute  w-fit  md:right-[25%]   right-[5%] md:left-[0%] top-[50%] translate-y-[-50%]  font-iranYekanMedium '>
                                                <div className={isActive ? 'translate-y-0 duration-500 opacity-100 delay-300' : 'opacity-0 duration-500 translate-y-10 delay-300'}>
                                                    <h3 className=' text-start font-bold text-[20px] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] '>
                                                        دست ساز
                                                        <br />
                                                        قهوه حک شده با دست                    </h3>

                                                </div>
                                                <div className={isActive ? 'flex justify-start translate-y-0 opacity-100 delay-700 duration-300' : 'duration-500 opacity-0 flex justify-start  translate-y-10 '}>
                                                    <p className=' w-[50%] py-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px]'>
                                                        این فرایند بخشی از فرانید پویا است که  ایجاد کرده است.                    </p>
                                                </div>
                                                <div className={isActive ? 'flex translate-y-0 opacity-100 delay-1000 duration-500' : 'translate-y-10 duration-500 opacity-0  flex'} >
                                                    <div className='relative group border-2 border-black duration-500 hover:border-[#BC8246]'>
                                                        <a href="#" className='relative z-20 block py-2 px-7 group-hover:text-white duration-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] '>پیدا کنید</a>
                                                        <div className='absolute left-0 top-0 bg-[#BC8246] h-0 w-full transition-all duration-500  group-hover:h-full'>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </>
                                );
                            }}
                        </SwiperSlide>

                        <SwiperSlide>
                            {({ isActive }) => {
                                return (
                                    < >
                                        <div className='flex justify-end'>


                                            <img src="images/slider-3.2c2310fe.jpg" className='-scale-x-100 4xl:w-[50%] w-full' alt="" />
                                            <div className='absolute  w-fit  md:right-[25%]   right-[5%] md:left-[0%] top-[50%] translate-y-[-50%]  font-iranYekanMedium '>
                                                <div className={isActive ? 'translate-y-0 duration-500 opacity-100 delay-300' : 'opacity-0 duration-500 translate-y-10 delay-300'}>
                                                    <h3 className=' text-start font-bold text-[20px] sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] '>
                                                        دست ساز
                                                        <br />
                                                        قهوه حک شده با دست                    </h3>

                                                </div>
                                                <div className={isActive ? 'flex justify-start translate-y-0 opacity-100 delay-700 duration-300' : 'duration-500 opacity-0 flex justify-start  translate-y-10 '}>
                                                    <p className=' w-[50%] py-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px]'>
                                                        این فرایند بخشی از فرانید پویا است که  ایجاد کرده است.                    </p>
                                                </div>
                                                <div className={isActive ? 'flex translate-y-0 opacity-100 delay-1000 duration-500' : 'translate-y-10 duration-500 opacity-0  flex'} >
                                                    <div className='relative group border-2 border-black duration-500 hover:border-[#BC8246]'>
                                                        <a href="#" className='relative z-20 block py-2 px-7 group-hover:text-white duration-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] '>پیدا کنید</a>
                                                        <div className='absolute left-0 top-0 bg-[#BC8246] h-0 w-full transition-all duration-500  group-hover:h-full'>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </>
                                );
                            }}
                        </SwiperSlide>

                    </Swiper>
                    <div className='w-full '>

                        <div className='2xl:container mx-auto'>
                            <div className='flex flex-wrap md:justify-start lg:justify-center bg-white'>
                                <div className='w-full md:w-[50%] lg:w-[33%] group  relative py-6 px-4 bg-white  '>
                                    <div className='overflow-hidden'>
                                        <img src="/images/banner-sm-1.39ffa9b9.jpg" className='w-full -scale-x-100 object-cover group-hover:-scale-x-110 group-hover:scale-y-110  duration-500' alt="" />
                                        <div className='absolute group-hover:top-[60%] duration-500 right-[10%] top-[50%] translate-y-[-50%] font-iranYekanBold  '>
                                            <p className='line leading-10 duration-300 hover:text-[#BC8246]'>
                                                چراغ راهنما
                                            </p>
                                            <a href='#' >
                                                <p className='font-iranYekanBlack hover:text-[#BC8246] duration-300'>
                                                    جزییات بیشتر
                                                </p>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[50%] lg:w-[33%] group  relative py-6 px-4 bg-white  '>
                                    <div className='overflow-hidden'>
                                        <img src="/images/banner-sm-2.771cae9f.jpg" className='object-cover -scale-x-100 w-full group-hover:-scale-x-110 group-hover:scale-y-110 duration-500' alt="" />
                                        <div className='absolute group-hover:top-[60%] duration-500 right-[10%] top-[50%] translate-y-[-50%] font-iranYekanBold  '>
                                            <p className='line leading-10 duration-300 hover:text-[#BC8246]'>
                                                چراغ راهنما
                                            </p>
                                            <a href='#' >
                                                <p className='font-iranYekanBlack hover:text-[#BC8246] duration-300'>
                                                    جزییات بیشتر
                                                </p>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[50%] lg:w-[33%] group  relative py-6 px-4 bg-white  '>
                                    <div className='overflow-hidden'>
                                        <img src="/images/banner-sm-3.3ac76e33.jpg" className='object-cover w-full -scale-x-100 group-hover:scale-y-110 group-hover:-scale-x-110 duration-500' alt="" />
                                        <div className='absolute group-hover:top-[60%] duration-500 right-[10%] top-[50%] translate-y-[-50%] font-iranYekanBold  '>
                                            <p className='line leading-10 duration-300 hover:text-[#BC8246]'>
                                                چراغ راهنما
                                            </p>
                                            <a href='#' >
                                                <p className='font-iranYekanBlack hover:text-[#BC8246] duration-300'>
                                                    جزییات بیشتر
                                                </p>
                                            </a>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
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
                    <div className='w-full'>
                        <Tittle tittle="پست های وبلاگ ما" pargraph="ما در این جا بهترین مقاله ها را گرد آوری کرده ایم" />


                    </div>
                    <div className='w-full py-20 bg-white'>
                        <div className='container mx-auto'>


                            <Swiper 
                            breakpoints={{
                                640:{
                                    slidesPerView:2
                                },
                                768:{
                                    slidesPerView:3
                                }
                            }}
                            slidesPerView={1}
                            loop={true}>
                                {swiperDetail.map((item)=>{
                                    return(
                                        
                                <SwiperSlide  key={item.id} >
                                <div className='px-10'>
                                    <figure className='font-shabnamMedium flex flex-col '>
                                        <Link href={'#'} className=''>
                                        <img src="images/blog-1.515cf7a4.jpg" alt="" />
                                        </Link>
                                        <figcaption className='py-5  flex flex-col '>
                                            <div className='flex'>
                                            <Link href={'#'} className='py-2 cursor-pointer flex '  >
                                                <p className='font-iranYekanEBold text-[1.5rem] hover:text-[#BC8246] duration-500'>
                                                   {item.tittle}
                                                </p>
                                            </Link>
                                            </div>
                                            <div className='flex py-3'>
                                                <p>
                                                    توسط <Link href={'#'} className='text-[#BC8246]'>{item.author}</Link> نوشته شده / {item.history}                                                    </p>

                                            </div>
                                            <div className='text-[13px] '>
                                                <p className='leading-7'>
                                {item.matn.slice(0,100)+'...'}
                                                </p>
                                            </div>
                                            <div className='py-4'>
                                            <ButtonR />
                                            </div>




                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>
                                    )
                                })}
                              
                            </Swiper>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
const ButtonR = () => {
    return (
        <div className='flex'>


            <div className='relative group' >
                <button className='px-3 py-2 border text-[.8rem] border-[#a3a3a3] duration-500 group-hover:text-white group-hover:border-[#BD8448] relative z-10'>
                    مشاهده بیشتر
                </button>
                <div className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-hover:h-full duration-500 z-0'>

                </div>
            </div>
        </div>
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
export default Home