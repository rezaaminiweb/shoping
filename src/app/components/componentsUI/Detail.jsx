import Link from 'next/link'

const DetailSlide = (props)=>{
    return(
        <>
        <div className="w-full relative">
                <figure className='w-full '>
                    <img src="/images/page-title-1.ff64a97e.jpg" className='w-full ' alt="" />
                </figure>
                <div className=" w-full absolute  left-[0%] top-[40%] translate-y-[-50%]  text-center font-iranYekanBlack">
                    <h3 className='py-3'>

                        {props.H1tittle}
                    </h3>
                    <p>
                        <Link href={props.Href1 ? props.Href1 : '#'} className='mx-2 duration-300 hover:text-[#BC8246]'>
                            {props.P2tittle}

                        </Link>
                        /
                        <Link href={props.Href2 ? props.Href2 : '#'} className='mx-2 duration-300 hover:text-[#BC8246]'>
                            {props.P3tittle}
                        </Link>
                    </p>



                </div>

            </div>
        </>
    )
}
export default DetailSlide