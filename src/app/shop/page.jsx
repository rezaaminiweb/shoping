'use client'

import Image from 'next/image'
import Link from 'next/link'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useRef, useState } from 'react';
import DetailSlide from '../components/componentsUI/Detail';

const Reza = () => {
    

    return (
        <>
            <DetailSlide Href1='/' Href2='/shop' P2tittle='خانه' H1tittle='فروشگاه' P3tittle='فروشگاه' />
            <div className='w-full py-10'>


            </div>
         
        </>
    )

}
export default Reza