import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { productlist } from "../product/productlist";

export const ShopC = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
   
    
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
            
        }
    }, []);
   

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId, count = 0) => {
        const existproduct = productlist.find(item => item.id == itemId);
        const existItem2 = cartItems?.find(item => item.id == itemId);

        if (existItem2) {
            const updateExist = cartItems.map((item) => {
                if (item.id == itemId) {
                    return {
                        ...item,
                        id: itemId,
                        count: count
                    };
                }
                return item;
            });
            setCartItems(updateExist);
        } else {
            setCartItems([...cartItems, {
                id: itemId,
                count: count
            }]);
        }
        toast.success(
            <div dir="rtl" className="flex font-iranYekanMedium text-sm">
                <img src={existproduct.image2} className="w-10 h-14" />
                <div className=" flex items-center justify-center w-full px-5">
                    <span className="text-[.6rem] me-4">
                         {existproduct.productName} {'به سبد خرید اضافه شد'}
                    </span>
                </div>
            </div>
        );
    };

    const addCountProduct = () => {
        // اضافه کردن تابع اضافه کردن تعداد محصول
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        const existproduct = productlist.find(item => item.id == itemId);
        const existItem2 = cartItems?.find(item => item.id == itemId);
        setCartItems(updatedCartItems);
        toast.error(
            <div dir="rtl" className="flex font-iranYekanMedium text-sm">
                <img src={existproduct.image2} className="w-10 h-14" />
                <div className=" flex items-center justify-center w-full px-5">
                    <span className="text-[.6rem] me-4">
                         {existproduct.productName} {'از سبد خرید حذف شد'}
                    </span>
                </div>
            </div>
        )
    };

    const contextValue = { cartItems, setCartItems, addToCart, removeFromCart };

    return (
        <ShopC.Provider value={contextValue}>
            {props.children}
        </ShopC.Provider>
    );
};
