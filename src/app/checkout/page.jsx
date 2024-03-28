'use client'

import { useContext, useState } from "react"
import { ShopC } from "../components/context/Shopcontext"
import DetailSlide from "../components/componentsUI/Detail"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                            <div className="flex flex-col">
                                <label htmlFor="country" className=" py-4  w-fit">کشور</label>
                                <div className="relative w-[70%]">
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