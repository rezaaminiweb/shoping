import { useContext } from "react";
import { ShopC } from "../components/context/Shopcontext";
import { productlist } from "../components/product/productlist";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

const DetailCart = () => {
    const { cartItems, removeFromCart } = useContext(ShopC);
    console.log(cartItems);

    // محاسبه مجموع قیمت خریدهای موجود در سبد خرید
    const totalPrice = cartItems.reduce((acc , currentItem) => {
       
       console.log(acc)
        const product = productlist.find(item => item.id === currentItem.id);
        return acc + (currentItem.count * product.ProductPriceNew);
    },0);

    return (
        <>
            <div className="w-full">
                <div className="container mx-auto">
                    {cartItems.length === 0 ? 
                    <div className=" py-10 text-center font-iranYekanEBlack2">
                        <h1>
                            سبد خرید شما خالی است
                        </h1>
                        <p className="font-iranYekanMedium py-7">
                            برای خرید کردن به <Link href={'/shop'} className="text-red-500">فروشگاه</Link> مراجعه کنید
                        </p>
                    </div>
                    : 
                    <div className="py-10 pt-16">
                        <table className="table-auto w-full font-iranYekanMedium">
                            <thead>
                                <tr className="xxs:text-[10px] text-[10px]">
                                    <th className="border px-4 py-2">عکس ها</th>
                                    <th className="border px-4 py-2">نام محصول</th>
                                    <th className="border px-4 py-2">قیمت</th>
                                    <th className="border px-4 py-2">تعداد</th>
                                    <th className="border px-4 py-2">مجموع</th>
                                    <th className="border px-4 py-2">حذف کردن</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems?.map((val) => {
                                    const product = productlist.find(item => item.id === val.id);
                                    return (
                                        <tr key={val.id} className="border xxs:text-[10px] text-[10px]">
                                            <td className="px-4 py-2 text-center flex justify-center">
                                                <img src={product.image1} alt="Product" className="xxs:w-6 xxs:h-10" />
                                            </td>
                                            <td className="border px-4 py-2 text-center">{product.productName}</td>
                                            <td className="border px-4 py-2 text-center">{product.ProductPriceNew}</td>
                                            <td className="border px-4 py-2 text-center">{val.count}</td>
                                            <td className="border px-4 py-2 text-center">{val.count * product.ProductPriceNew}</td>
                                            <td className="border px-4 py-2 text-center text-red-500">
                                                <CloseIcon className="cursor-pointer"
                                                    onClick={() => removeFromCart(val.id)}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td colSpan="4" className="text-right">مجموع قیمت خریدها:</td>
                                    <td className="px-4 py-2 text-center">{totalPrice}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default DetailCart;
