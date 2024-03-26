'use client'

import Image from 'next/image'
import Link from 'next/link'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useRef, useState } from 'react';
import DetailSlide from '../components/componentsUI/Detail';

const Reza = () => {
    const [falsei , setfalsei]= useState(false)
    const [checkeds , setChecked] = useState({
    cheragh : false,
    miz : false
    })
    const [clickButtons, setClickButton] = useState({
        button1: true,
        button2 : true,
    })
    const [height, setHeight] = useState(0)
    const heihts = useRef()
    const heihts2 = useRef()


    function goHeight(event) {
        

            clickButtons.button1 ? heihts.current.style.height = '0px' : heihts.current.style.height = height + 'px'
            setClickButton(!clickButtons.button1)
            if(falsei){
               
                event.target.nextElementSibling.classList.toggle('-rotate-90')
            }else{
    
            }
            setfalsei (true)
     


    }
    function goWidth(event){
     
        const target = event.target

        if(target.tagName==='P'){

            clickButtons.button1 ? heihts.current.style.height = '0px' : heihts.current.style.height = height + 'px'
            setClickButton(!clickButtons.button1)
            if(falsei){
               
                event.target.nextElementSibling.classList.toggle('-rotate-90')
            }else{
    
            }
            setfalsei (true)
        }
        event.stopPropagation()
    }
    useEffect(() => {
        if (heihts.current) {
            setHeight(heihts.current.clientHeight)

            goHeight()





        }




    }, [])

    return (
        <>
            <DetailSlide Href1='/' Href2='/shop' P2tittle='خانه' H1tittle='فروشگاه' P3tittle='فروشگاه' />
            <div className='w-full py-10'>


            </div>
            <div className='w-full '>
                <div className='container mx-auto'>
                    <div className='w-full flex flex-wrap'>
                        <div className='w-[15%] font-shabnamMedium'>
                            <ul>
                                <li className='font-shabnamBold'>
                                    <p>
                                        دسته بندی محصولات
                                    </p>
                                </li>
                                <li className='w-[100%]  justify-between py-3 cursor-pointer group  ' onClick={(event) => goWidth(event)} >
                                    <div className='w-full flex justify-between '>
                                        <p className='group-hover:text-[#BC8246] duration-300'>
                                            چراغ دار و میز
                                        </p>

                                        <KeyboardArrowLeftIcon className='duration-300 group-hover:text-[#BC8246]' style={{transition:".4s ease-in-out"}} />
                                    </div>

                                    <ul className=' overflow-hidden duration-500 ps-5' ref={heihts}>
                                        <li className='w-[100%] flex  py-3'>
                                            {
                                                checkeds.cheragh?( <><input type="checkbox" id='چراغ دار' checked  className='me-1' />
                                                
                                                </>) : (<input type="checkbox" id='چراغ دار'  className='me-1' />
                                                )
                                            }
                                            
                                            <h5 onClick={()=>{
                                            setChecked(prev => ({...prev, 
                                                cheragh:!prev.cheragh}))
                                                ,console.log(checkeds.cheragh)}
                                            }>
                                                چراغ دار

                                            </h5>

                                        </li>
                                        <li className='w-[100%] flex py-3'>
                                            {checkeds.miz ? <>
                                            <input className='me-1' type="checkbox" id='میز' /></>:
                                            <input className='me-1' type="checkbox" checked id='میز' />}
                                            
                                            <h5  onClick={()=>{
                                            setChecked(prev =>({
                                                ...prev , miz: !prev.miz
                                               
                                            }))
                                            ,console.log(checkeds.miz)
                                        }}>
                                                میز
                                            </h5>

                                        </li>
                                    </ul>

                                </li>
                                <li className='w-[100%]  justify-between py-3' >
                                    <div className='w-full flex justify-between'>

                                    <p>
                                        دکوراسیون و لوازم جانبی
                                    </p>
                                    <KeyboardArrowLeftIcon />

                                    </div>
                                    <ul className=' overflow-hidden duration-500 ps-5' ref={heihts2}>
                                        <li className='w-[100%] flex justify-between py-3'>
                                            <p>
                                                چراغ دار

                                            </p>

                                        </li>
                                        <li className='w-[100%] flex justify-between py-3'>
                                            <p>
                                                میز
                                            </p>

                                        </li>
                                    </ul>

                                </li>
                                <li className='w-[100%] flex justify-between py-3' >
                                    <p>
                                        پوشاک و روغن
                                    </p>
                                    <KeyboardArrowLeftIcon />


                                </li>
                                <li className='w-[100%] flex justify-between py-3' >
                                    <p>
                                        چراغ دار و میز
                                    </p>
                                    <KeyboardArrowLeftIcon />


                                </li>
                                <li className='w-[100%] flex justify-between py-3' >
                                    <p>
                                        مردانه
                                    </p>
                                    <KeyboardArrowLeftIcon />


                                </li>
                                <li className='w-[100%] flex justify-between py-3' >
                                    <p>
                                        زنانه
                                    </p>
                                    <KeyboardArrowLeftIcon />


                                </li>
                            </ul>

                        </div>
                        <div className='w-[85%]'>

                        </div>



                    </div>


                </div>

            </div>
        </>
    )

}
export default Reza