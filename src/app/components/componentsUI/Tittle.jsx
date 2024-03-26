import React from "react";

const Tittle = (props)=>{
    return (
        <div className='w-full bg-white'>
            <div className='container mx-auto '>

                <div className='flex justify-center pt-10'>
                    <section className='flex-1 relative flex justify-center '>
                        <span
                            className='absolute top-[50%] left-[50%] translate-x-[-50%] w-[70%] lg:w-[80%] h-[1px] bg-[#2626263d]'>

                        </span>
                    </section>
                    <div className='py-10 '>
                        <p className='font-iranYekanBlack text-[2rem]'>
                            {props.tittle}
                        </p>


                    </div>
                    <section className='flex-1 relative flex justify-center '>
                        <span
                            className='absolute top-[50%] left-[50%] translate-x-[-50%] w-[70%] lg:w-[80%] h-[1px] bg-[#2626263d]'>

                        </span>
                    </section>
                </div>
                <div className='flex justify-center font-snapFoodRegular'>
                    <p className=' text-[.7rem] sm:text-[1.1rem] text-center md:text-[1.3rem] lg:tex-[1.5rem]'>
                        {props.pargraph}
                    </p>

                </div>

            </div>

        </div>
    )
}
export default Tittle