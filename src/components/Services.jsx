import React from 'react'
import { analyticsicon, contentcreationicon, digitalmarketingicon, marketingfunnelsicon, marketingstrategyicon } from '../../public'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='services p-7'>

            <div className='flex justify-center items-center flex-col pb-6'>
                <p className='text-white text-2xl sm:text-4xl font-lg'>Ignite Services</p>
                <p className='text-[#9F7C39] underline text-2xl sm:text-4xl'>Drive Success With Our Tailored Solutions</p>
            </div>


            <div className='container mx-auto'>
                <div className='grid grid-cols-2 place-items-center place-content-center gap-6'>
                    <div className='flex justify-center items-center gap-4'>
                        <Image
                            src={digitalmarketingicon}
                            width={100}
                            height={100}
                            className='max-w-[100px] w-full object-cover object-center'
                        />
                        <div className='flex flex-col justify-start gap-2 max-w-[500px] w-full'>
                            <h2 className='text-white text-2xl font-lg'>Digital Marketing</h2>
                            <p
                                className='text-white text-[#16px] font-[#500px]'>

                                The digital marketing
                                landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                consultations, and services tailored to your main goals</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image
                            src={analyticsicon}
                            width={100}
                            height={100}
                            className='max-w-[100px] w-full object-cover object-center'
                        />
                        <div className='flex flex-col justify-start gap-2 max-w-[500px] w-full'>
                            <h2 className='text-white text-2xl font-lg'>Analytics And Reporting</h2>
                            <p
                                className='text-white text-[#16px] font-[#500px]'>

                                The digital marketing
                                landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                consultations, and services tailored to your main goals</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image
                            src={marketingfunnelsicon}
                            width={100}
                            height={100}
                            className='max-w-[100px] w-full object-cover object-center'
                        />
                        <div className='flex flex-col justify-start gap-2 max-w-[500px] w-full'>
                            <h2 className='text-white text-2xl font-lg'>Digital Marketing</h2>
                            <p
                                className='text-white text-[#16px] font-[#500px]'>

                                The digital marketing
                                landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                consultations, and services tailored to your main goals</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image
                            src={contentcreationicon}
                            width={100}
                            height={100}
                            className='max-w-[100px] w-full object-cover object-center'
                        />
                        <div className='flex flex-col justify-start gap-2 max-w-[500px] w-full'>
                            <h2 className='text-white text-2xl font-lg'>Digital Marketing</h2>
                            <p
                                className='text-white text-[#16px] font-[#500px]'>

                                The digital marketing
                                landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                consultations, and services tailored to your main goals</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Image
                            src={marketingstrategyicon}
                            width={100}
                            height={100}
                            className='max-w-[100px] w-full object-cover object-center'
                        />
                        <div className='flex flex-col justify-start gap-2 max-w-[500px] w-full'>
                            <h2 className='text-white text-2xl font-lg'>Digital Marketing</h2>
                            <p
                                className='text-white text-[#16px] font-[#500px]'>

                                The digital marketing
                                landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                consultations, and services tailored to your main goals</p>
                        </div>

                    </div>
                </div>
                {/* <div class="grid grid-cols-2 gap-10">
                    <div className='flex flex-col'>

                        <div className='flex gap-3'>
                            <div className='bg-white  rounded'>
                                <Image
                                    className='max-w-[100px] object-cover object-center w-full px-4 py-4'
                                    src={digitalmarketingicon}
                                />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex justify-start'>
                                    <p className='text-white text-[#30px] font-[#700px]'>Digital Marketing</p>
                                </div>
                                <div className='flex justify-start'>
                                    <p
                                        className='text-white text-[#16px] font-[#500px]'>

                                        The digital marketing
                                        landscape is a highly competitive zone. Our team of experts helps you stand out with curated, optimized, and success-worthy strategies,
                                        consultations, and services tailored to your main goals</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex gap-3'>
                            <div className='bg-white  rounded'>
                                <Image
                                    className='max-w-[100px] object-cover object-center w-full px-4 py-4'
                                    src={analyticsicon}
                                />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex justify-start'>
                                    <p className='text-white text-[#30px] font-[#700px]'>Analtyics And Reporting</p>
                                </div>
                                <div className='flex justify-start'>
                                    <p
                                        className='text-white text-[#16px] font-[#500px]'>
                                        We carefully monitor each marketing campaign to track progress and assess insights,
                                        analytics, and reporting
                                        to ensure your strategies deliver the desired results and
                                        see how we can improve them.</p>
                                </div>
                            </div>
                        </div>




                        <div className='flex gap-3'>
                            <div className='bg-white  rounded'>
                                <Image
                                    className='max-w-[100px] object-cover object-center w-full px-4 py-4'
                                    src={marketingfunnelsicon}
                                />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex justify-start'>
                                    <p className='text-white text-[#30px] font-[#700px]'>Marketing Funnels</p>
                                </div>
                                <div className='flex justify-start'>
                                    <p
                                        className='text-white text-[#16px] font-[#500px]'>
                                        Ignite identifies the target audience, the buyer journey, and the desired actions at each stage
                                        of the funnel. Our expertise
                                        helps you build and optimize marketing funnels that attract
                                        investors and open financing opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div className='flex gap-3'>
                            <div className='bg-white  rounded'>
                                <Image
                                    className='max-w-[100px] object-cover object-center w-full px-4 py-4'
                                    src={contentcreationicon}
                                />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex justify-start'>
                                    <p className='text-white text-[#30px] font-[#700px]'>Content Creation</p>
                                </div>
                                <div className='flex justify-start'>
                                    <p
                                        className='text-white text-[#16px] font-[#500px]'>
                                        Content is the heart and soul of every marketing campaign,
                                        whether written or visual. It has to be precise, engaging,
                                        and according to the needs and demands of your customers -
                                        we help you excel in all.</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='bg-white  rounded'>
                                <Image
                                    className='max-w-[100px] object-cover object-center w-full px-4 py-4'
                                    src={marketingstrategyicon}
                                />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex justify-start'>
                                    <p className='text-white text-[#30px] font-[#700px]'>Marketing Strategy</p>
                                </div>
                                <div className='flex justify-start'>
                                    <p
                                        className='text-white text-[#16px] font-[#500px]'>
                                        A clear marketing plan is crucial for the success of any business.
                                        We analyze your business and develop
                                        powerful strategies to target the correct audience, advertise your brand, and achieve your goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>





        </div>
    )
}

export default Services
