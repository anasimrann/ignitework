import React from 'react'
import Image from 'next/image'
import { aboutusimage, rightarrow } from '../../public'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <div className='flex justify-start items-center gap-20'>
            <div>
                <Image className='max-w-[550px] object-cover object-center w-full'
                    src={aboutusimage}
                    width={500}
                    height={500}
                />
            </div>


            <div className='flex justify-start flex-col max-w-[500px] gap-4'>
                <div>
                    <h1 className='text-3xl font-bold text-[#9F7C39]'>About Us</h1>
                </div>
                <div>
                    <p className='text-3xl  text-[#5C5C5C]'>Ignite your Brand Voice</p>
                </div>
                    <p className=''>Ignite IT Marketing Agency helps you dominate the digital landscape
                        with perseverance, creativity, and dedication.
                        We offer tailored strategies and expert digital marketing services to businesses looking
                        for solutions to boost productivity, drive growth, and achieve success.
                    </p>
                    <p className=''> Our unwavering commitment and dedicated mindset have
                        helped us deliver exceptional results for our many clients. If you want your project to be creative,
                        manageable, and scalable, Ignite IT Solutions is here as your trusted partner.</p>

             
                    <Link href={"/"} 
                    className='bg-[#9F7C39] px-5 py-1 rounded-[10px] text-white max-w-[150px] w-full flex justify-center items-center gap-2'
                    >
                        <div>
                        Learn More
                        </div>
                        <Image className=''
                        src={rightarrow}
                        />
                        
                    </Link>
                
            </div>

        </div>
    )
}

export default AboutUs
