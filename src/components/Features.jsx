import Image from 'next/image'
import React from 'react'
import { featureMessage } from '../../public'

const Features = () => {
    return (
        <div className='container mx-auto'>
            <div className=''>
                <div className='flex items-center justify-center'>
                    <p className='text-2xl font-bold text-[#9F7C39]'>Marketing</p>
                    <p className='text-2xl font-thin border-b-2 border-[#9F7C39]'>Features</p>
                </div>
                <div className='flex justify-around'>
                    <div className='flex mt-10 w-full flex-col'>
                        <div className='text-white flex justify-center w-full items-center'>
                            <Image alt=''
                                width={60}
                                height={70}
                                src={featureMessage}
                            />
                        </div>
                        <div>
                            <p className='text-2xl text-black text-center'>Send Us The Details</p>
                        </div>
                        <div>
                            <p className='text-center'>Give as much information about your company as you possibly can. Done? Now, we'll be able to get you ready for the next phase.</p>
                        </div>
                    </div>
                    <div className='flex mt-10 w-full flex-col'>
                        <div className='text-white flex justify-center w-full items-center'>
                            <Image alt=''
                                width={60}
                                height={70}
                                src={featureMessage}
                            />
                        </div>
                        <div>
                            <p className='text-2xl text-black text-center'>Set Up A Strategy Call</p>
                        </div>
                        <div>
                            <p className='text-center'>Give as much information about your company as you possibly can. Done? Now, we'll be able to get you ready for the next phase.</p>
                        </div>
                    </div>
                    <div className='flex mt-10 w-full flex-col'>
                        <div className='text-white flex justify-center w-full items-center'>
                            <Image alt=''
                                width={60}
                                height={70}
                                src={featureMessage}
                            />
                        </div>
                        <div>
                            <p className='text-2xl text-black text-center'>Start Measuring Results</p>
                        </div>
                        <div>
                            <p className='text-center w-[40]'>Give as much information about your company as you possibly can. Done? Now, we'll be able to get you ready for the next phase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Features
