import Image from 'next/image'
import React from 'react'

const ContactUsSection = () => {
    return (
        <div className='relative'>
            <div className='flex justify-start gap-10'>

                <div className='flex flex-col justify-start max-w-[500px] w-full'>
                    <div>
                        <h1 className='text-2xl font-bold text-[#9F7C39]'>Take a First Step</h1>
                        <p>We're here to help</p>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>

                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        </div>
                        <div>

                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                        </div>
                        <div>
                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>
                </div>


                <div className='flex flex-col justify-start max-w-[400px] w-full'>
                    <div>
                        <h1>What can we do to help you?</h1>
                        <p>Lets Talk</p>
                    </div>
                    <div>
                        <p>
                            Ignite IT Marketing is looking forward to helping you and your company accomplish your digital marketing goals.
                            Let us discuss your online marketing requirements! Don't hesitate to get in touch with us. We would love to hear from you.
                        </p>
                    </div>
                    <div className='flex flex-col justify-start gap-4'>
                        <div className='flex'>
                            <Image />

                            <div className='flex justify-center items-center gap-1'>
                                <h3>Have Any Question?</h3>
                                <p>Free 828-702-7462</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <Image />

                            <div className='flex justify-center items-center gap-1'>
                                <h3>Write Email?</h3>
                                <p>angela@ignitemarketing.net</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <Image />

                            <div className='flex justify-center items-center gap-1'>
                                <h3>Visit Anytime</h3>
                                <p>Free 828-702-7462</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection
