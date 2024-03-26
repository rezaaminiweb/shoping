 'use client'
import DetailSlide from "../components/componentsUI/Detail"
import DetailCart from "./Detail"



const CartItems = ()=>{
   
    return(
        
        <>
                       <DetailSlide Href1='/' Href2='/cartItem' P2tittle='خانه' H1tittle='سبد خرید' P3tittle='سبد خرید' />
                        <DetailCart/>

        </>
    )
}
export default CartItems