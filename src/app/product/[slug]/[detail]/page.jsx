'use client'

import {useParams} from "next/navigation"
import {productlist} from "@/app/components/product/productlist"
import DetailSlide from "@/app/components/componentsUI/Detail"
import {useContext, useState} from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {AttachMoney} from "@mui/icons-material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {ShopC} from "@/app/components/context/Shopcontext"
import DoneIcon from '@mui/icons-material/Done';
import Tittle from "@/app/components/componentsUI/Tittle";
import Product from "@/app/components/product/Product";
import RelatedProduct from "@/app/components/product/RelatedProduct";

const Reza = () => {
    const params = useParams()
    const [imageurl, setimageurl] = useState(null)
    const [stateone, setStateOne] = useState(1)
    const [tozihat, setTozihat] = useState(false)
    const [moshkh, setMoshkh] = useState(true)
    const [didgah, setDidgah] = useState(true)


    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(ShopC)
   
    const itemsselect = cartItems.find(item=>item.id == params.slug)
    console.log(itemsselect)

    const handleChangeImage = (imageUrl, event) => {
        setimageurl(imageUrl)
        let sd = event.target.parentElement.childNodes
        sd.forEach((item) => {
            item.classList.add('opacity-30')
            item.classList.remove('border-[#BC8246]')
            item.classList.remove('border-transparent')
        })
        console.log()
        event.target.classList.remove('opacity-30')
        event.target.classList.add('opacity-100')
        event.target.classList.add('border-[#BC8246]')
    }
    console.log(productlist)
    return (


        productlist.map((item) => {
            if ((item.id) == (params.slug)) {
                console.log(item.image1)

                return (<>
                        <DetailSlide H1tittle='جزییات محصول' P2tittle='خانه' Href2='#' Href1='/'
                                     P3tittle='جزییات محصول'/>
                        <div className='py-10 md:py-16'>

                        </div>
                        <div className='w-full'>
                            <div className='container mx-auto'>

                                <div className='flex flex-wrap'>
                                    <div className='w-full md:w-[50%] flex  '>
                                        <div className="w-[25%]">
                                            <figure className="grid gap-7 me-7">

                                                <img src={ item.image2}
                                                     className="border-transparent border-2 opacity-100 duration-300 "
                                                     onClick={(event) => handleChangeImage(item.image2, event)}
                                                     id="reza" alt=""/>
                                                <img src={ item.image1} alt="border-black"
                                                     className="border-transparent border-2 opacity-30 duration-300"
                                                     onClick={(event) => handleChangeImage(item.image1, event)}/>
                                                <img src={  item.image2} alt="border-black"
                                                     className="border-transparent border-2 opacity-30 duration-300"
                                                     onClick={(event) => handleChangeImage(item.image2, event)}/>
                                            </figure>

                                        </div>
                                        <div className="w-[70%]">
                                            <figure className="w-full">
                                                <img src={ ((imageurl == null) ? item.image1 : imageurl)}
                                                     className="w-full object-cover" id="aks" alt=""/>
                                            </figure>

                                        </div>
                                    </div>
                                    <div className='w-full md:w-[50%] py-11 md:py-0 ps-5 md:ps-0 '>
                                        <div>
                                            <div>
                                                <p className="text-black font-iranYekanBlack">
                                                    {item.productName}
                                                </p>
                                            </div>
                                            <div className="py-5">
                                                {
                                                    [...Array(5)].map((_, index) => {

                                                            return (
                                                                item.rate >= index + 1 ?
                                                                    <StarIcon className="text-[#BC8246]"/> :
                                                                    <StarBorderIcon className="text-[#BC8246]"/>

                                                            )
                                                        }
                                                    )
                                                }
                                                <span className="font-iranYekanEBold me-1 ms-3">
                                                {item.rate}
                                            </span>
                                                <span className="font-iranYekanEBold">

                                                امتیاز ثبت شده
                                            </span>


                                            </div>
                                            <div className="py-5 ">
                                                <div className='flex  opacity-100  duration-300'>
                                                <span className='font-irannum mx-3 font-bold flex '>
                                                    {item.productPriceOld}<AttachMoney className='text-[1.2rem]'/>
                                                </span>
                                                    <span
                                                        className='line-through font-irannum font-bold text-[#848b8a] text-[.8rem] flex'>
                                                    {item.ProductPriceNew}<AttachMoney className='text-[1rem]'/>
                                                </span>
                                                </div>

                                            </div>
                                            <hr/>
                                            <div className="py-5 ">
                                                <p className="font-iranYekanRegular w-[90%] leading-8">
                                                    {item.tozihat}
                                                </p>

                                            </div>
                                            <hr/>
                                            <div className="py-3 font-iranYekanBold">
                                                <div className="py-2">
                                                    <div>
                                                        <label className="relative">
                                                            اندازه
                                                            <StarIcon
                                                                className="text-red-600 text-[10px] absolute left-[-40%] top-0"/>
                                                        </label>

                                                    </div>
                                                    <div className=" ">
                                                        <div className="w-full md:w-[60%] relative">

                                                            <select name="" id=""
                                                                    className="w-full px-3 appearance-none py-2 border outline-none  ">
                                                                <option value="">لطفا سایز خود را انتخاب کنید</option>
                                                                <option value="M">M</option>
                                                                <option value="L">L</option>
                                                                <option value="XL">XL</option>
                                                                <option value="XXL">XXL</option>

                                                            </select>
                                                            <ExpandMoreIcon
                                                                className="absolute left-[5%] top-[50%] translate-y-[-50%]"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div>
                                                        <label className="relative">
                                                            رنگ
                                                            <StarIcon
                                                                className="text-red-600 text-[10px] absolute left-[-40%] top-0"/>
                                                        </label>

                                                    </div>
                                                    <div className="py-2 ">
                                                        <div className="w-full md:w-[60%] relative">

                                                            <select name="" id=""
                                                                    className="w-full px-3 appearance-none border outline-none py-2 ">
                                                                <option value="">لطفا رنگ خود را انتخاب کنید</option>
                                                                <option value="M">آبی</option>
                                                                <option value="L">قرمز</option>


                                                            </select>
                                                            <ExpandMoreIcon
                                                                className="absolute left-[5%] top-[50%] translate-y-[-50%]"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>


                                                <label className="relative font-iranYekanEBold text-red-600 ">
                                                    فیلدهای الزامی

                                                    <StarIcon
                                                        className="text-red-600  text-[10px] absolute left-[-15%] top-0"/>


                                                </label>


                                            </div>
                                            <div className="flex py-3 items-center flex-wrap">
                                            <span className="font-iranYekanEBold text-[.7rem] md:text-[1rem] mt-3">
                                                تعداد
                                            </span>
                                                <div
                                                    className="flex mt-3 ms-2 md:ms-4 text-[.6rem] md:text-[1rem]  border-[#b1b1b1] border-2 py-2 px-2 md:px-3 items-center">

                                                    <AddIcon className="cursor-pointer text-[1rem] md:text-[1.3rem]"
                                                             onClick={() => setStateOne(prev => prev + 1)}/>
                                                    <span className="mx-5">{
                                                        stateone


                                                    }</span>
                                                    <RemoveIcon className="cursor-pointer text-[1rem] md:text-[1.3rem]"
                                                                onClick={() => {

                                                                    if (stateone <= 0) {
                                                                        setStateOne(0)
                                                                    } else {
                                                                        setStateOne(prev => prev - 1)
                                                                    }
                                                                }}/>

                                                </div>
                                                <div className="ms-2 md:ms-4 mt-3">
                                                    <div className='relative group font-iranYekanEBold bg-black'>
                                                        <button
                                                            className='px-3 py-3 border text-[.5rem] md:text-[.8rem] text-white flex items-center  border-[#a3a3a3] duration-500 group-hover:text-white group-hover:border-[#BD8448] relative z-10'
                                                            onClick={() => {
                                                                addToCart(item.id, stateone)

                                                            }}>
                                                            اضافه کردن به سبد خرید
                                                            <AddIcon className="text-[.8rem] ms-2"/>
                                                        </button>
                                                        <div
                                                            className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-hover:h-full duration-500 z-0'>

                                                        </div>
                                                    </div>

                                                </div>
                                                {
                                                    itemsselect?.count>0
                                                 ?  <div className="flex ms-2 mt-3 ">
                                                                        <div
                                                                            className='relative group font-iranYekanEBold bg-red-500'>
                                                                            <button
                                                                                className='px-3 py-3 border text-[.5rem] md:text-[.8rem] text-white flex items-center  border-[#a3a3a3] duration-500 group-hover:text-white group-hover:border-[#BD8448] relative z-10'
                                                                                onClick={() => {
                                                                                    removeFromCart(item.id)
                                                                                }}>
                                                                                حذف کردن از سبد خرید
                                                                                <RemoveIcon
                                                                                    className="text-[.8rem] ms-2"/>
                                                                            </button>
                                                                            <div
                                                                                className='absolute left-0 top-0 w-full bg-[#BD8448]  h-0 group-hover:h-full duration-500 z-0'>

                                                                            </div>
                                                                        </div>
                                                                    </div>:null}


                                            </div>


                                        </div>


                                    </div>


                                </div>
                                <div className="py-12 ">

                                </div>
                                <div className="flex items-center justify-center">
                                    <ul className="flex justify-center items-center font-iranYekanEBold">
                                        <li className="cursor-pointer" onClick={() => {
                                            setTozihat(false), setMoshkh(true), setDidgah(true)
                                        }}>توضیحات
                                        </li>
                                        <li className="mx-7 cursor-pointer" onClick={() => {
                                            setMoshkh(false), setDidgah(true), setTozihat(true)
                                        }}>مشخصات
                                        </li>
                                        <li className="cursor-pointer" onClick={() => {
                                            setDidgah(false), setMoshkh(true), setTozihat(true)
                                        }}>دیدگاها
                                            <span className='ms-2'>
                                                (

                                                {productlist[item.id - 1].review.length})

                                            </span>

                                        </li>
                                    </ul>


                                </div>

                                <div
                                    className={tozihat ? "py-11 hidden opacity-0 transition-opacity  font-iranYekanRegular px-3 md:px-0" : "py-11   transition-opacity block font-iranYekanRegular opacity-100  px-3 md:px-0"}>
                                    <p className="leading-9 text-justify">
                                        {item.tozihatZiad}
                                    </p>
                                    <div className="py-6">

                                        {[...Array(5)].map((val3, index) => {
                                            return (
                                                <div key={index} className="flex pt-3">
                                                    <DoneIcon/>
                                                    <p>
                                                        {
                                                            item.tozihkam
                                                        }
                                                    </p>


                                                </div>
                                            )
                                        })}

                                    </div>


                                    <div className="font-iranYekanRegular">
                                        <p className="leading-8">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                            ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className={moshkh ? "py-11  opacity-0  transition-opacity hidden font-iranYekanRegular px-3 md:px-0" : "py-11 block duration-300 transition-opacity font-iranYekanRegular opacity-100  px-3 md:px-0"}>
                                    <div className='w-full '>
                                        <div className='flex flex-wrap border-b-2 font-iranYekanEBold py-3'>
                                            <div className='w-[50%]'>
                                                <h4>
                                                    وزن
                                                </h4>
                                            </div>
                                            <div className='w-[50%]'>
                                                <p>
                                                    {item.fani.weight}
                                                </p>
                                            </div>


                                        </div>
                                        <div className='flex flex-wrap border-b-2 font-iranYekanEBold py-3'>
                                            <div className='w-[50%]'>
                                                <h4>
                                                    ابعاد
                                                </h4>
                                            </div>
                                            <div className='w-[50%]'>
                                                <p>
                                                    {item.fani.deminition}
                                                </p>
                                            </div>


                                        </div>
                                        <div className='flex flex-wrap border-b-2 font-iranYekanEBold py-3'>
                                            <div className='w-[50%]'>
                                                <h4>
                                                    اندازه
                                                </h4>
                                            </div>
                                            <div className='w-[50%]'>
                                                <p>
                                                    {item.fani.size}
                                                </p>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                                <div
                                    className={didgah ? "py-11  opacity-0  transition-opacity hidden font-iranYekanRegular px-3 md:px-0" : "py-11 block duration-300 transition-opacity font-iranYekanRegular opacity-100  px-3 md:px-0"}>
                                    <div className='w-full  '>
                                        {

                                            productlist[(item.id) - 1].review.map(item => {
                                                return (
                                                    <div key={item.id} className='flex pb-8'>
                                                        <figure>
                                                            <img src={item.img} alt=""/>
                                                        </figure>
                                                        <div className='ms-4'>
                                                            <div className=' font-iranYekanEBlack2 flex'>
                                                                <p>{item.name}</p>
                                                                <span className='mx-3 font-iranYekanEBold'>
                                                                -
                                                            </span>
                                                                <p className='font-iranYekanEBold'>
                                                                    {item.date}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                {[...Array(5)].map((_, index) => {
                                                                    return (
                                                                        item.rate >= index + 1 ?
                                                                            <StarIcon
                                                                                className="text-[#BC8246] text-sm"/> :
                                                                            <StarBorderIcon
                                                                                className="text-[#BC8246] text-sm"/>
                                                                    )
                                                                })
                                                                }

                                                            </div>
                                                            <div>
                                                                <p>
                                                                    {item.nazar}
                                                                </p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                );
                                            })

                                        }


                                    </div>
                                </div>
                                <div>
                                    <Tittle tittle="محصولات مرتبط" pargraph="جالب است بدانیم اگر این نکات را رعایت کنیم "/>

                                </div>
                                <div className='flex flex-wrap px-10 py-7'>
                                    <RelatedProduct/>

                                </div>


                            </div>

                        </div>
                    </>
                );
            }
        })
    )


}
export default Reza

