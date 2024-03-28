'use client'

import { useContext, useState } from "react"
import { ShopC } from "../components/context/Shopcontext"
import DetailSlide from "../components/componentsUI/Detail"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const Checkout = () => {
    const { cartItems } = useContext(ShopC)
    const [selectedCountry, setSelectedCountry] = useState("");
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "IRAN", "USA", 'BRAZIAIL', 'ARGANITINA' /* and so on... */
    ];

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    return (
        <>
            <DetailSlide H1tittle='تسویه حساب' P2tittle='خانه' Href2='/checkout' Href1='/' P3tittle='تسویه حساب' />
            <div className="w-full">
                <div className="container mx-auto">
                    <div className="w-full flex flex-wrap ">
                        <div className="w-[100%] md:w-[50%] p-3 md:px-5 md:py-6 font-shabnamLight">
                            <div>
                                <p>
                                    جزییات صورتحساب
                                </p>
                                <div className="py-4">

                                    <hr />
                                </div>

                            </div>
                            <form action="">
                                <div className="flex flex-col">

                                    <label htmlFor="country" className=" py-3  w-fit relative">کشور
                                        <StarIcon className="text-[7px] text-red-500 absolute top-4" />
                                    </label>
                                    <div className="relative w-full md:w-[70%]">
                                        <select name="country" id="country" className=" w-full outline-none border rounded-sm border-[#707070ed] p-2 appearance-none" onChange={handleCountryChange} value={selectedCountry}>
                                            <option value="">لطفاً کشور خود را انتخاب کنید</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="absolute left-0 top-0 bottom-0 flex items-center pr-2">
                                            <ExpandMoreIcon />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap pt-8 py-4">
                                    <div className="flex flex-col w-full md:w-[50%]">

                                        <label htmlFor="name" className="relative">
                                            نام
                                            <StarIcon className="text-[7px] text-red-500 absolute top-0" />

                                        </label>
                                        <input type="text" placeholder="رضا" className="px-2 py-1 w-full md:w-[70%] outline-none border rounded-sm border-[#707070ed]" name="" id="name" />
                                    </div>
                                    <div className="flex flex-col w-full md:w-[50%] py-4 md:py-0">
                                        <label htmlFor="family" className="relative">
                                            نام خانوادگی
                                            <StarIcon className="text-[7px] text-red-500 absolute top-0" />
                                        </label>
                                        <input type="text" name="" placeholder="امینی" id="family" className="px-2 py-1 outline-none border rounded-sm border-[#707070ed] w-full md:w-[70%] " />
                                    </div>

                                </div>
                                <div className="py-4 flex flex-col">
                                    <label htmlFor="companyname" className="relative w-fit py-1">
                                        نام شرکت
                                        <StarIcon className="text-[7px] text-red-500 absolute top-0" />
                                    </label>
                                    <input type="text" name="" placeholder="فراگستر" id="companyname" className="px-2 py-1 outline-none border rounded-sm border-[#707070ed] w-full  md:w-[70%] " />

                                </div>
                                <div className="py-4 flex flex-col">
                                    <label htmlFor="companyname" className="relative w-fit py-1">
                                        آدرس
                                        <StarIcon className="text-[7px] text-red-500 absolute top-0" />
                                    </label>
                                    <input type="text" name="" placeholder="تهران منطقه 19 " id="companyname" className="px-2 py-1 outline-none border rounded-sm border-[#707070ed] w-full md:w-[70%] " />

                                </div>
                                <div className="py-4 flex flex-col">
                                    <label htmlFor="companyname" className="relative w-fit py-1">
                                        ایمیل
                                        <StarIcon className="text-[7px] text-red-500 absolute top-0" />
                                    </label>
                                    <input type="email" name="" placeholder=" rezaaminiweb@gmail.com" id="companyname" className="px-2 py-1 outline-none border rounded-sm border-[#707070ed] w-full md:w-[70%] " />

                                </div>
                                <div className="py-4 flex flex-col">
                                    <label htmlFor="companyname" className="relative w-fit py-1">
                                        تلفن
                                        <StarIcon className="text-[7px] text-red-500 absolute top-0" />
                                    </label>
                                    <div className="flex  ">
                                        
                                        <input type="tel" name="phone" placeholder="+989126059969" id="companyname" className="px-2 py-1 outline-none border rounded-sm border-[#707070ed] w-full md:w-[50%] text-end" />
                                        <select name="" id="" className="w-[20%] appearance-none">
                                            <option value="+98" className="flex">+98 IRAN</option>
                                            <option value="+41">+41 UNITED KINGDOM</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="w-[100%] md:w-[50%] p-3 md:px-5 md:py-6">

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Checkout