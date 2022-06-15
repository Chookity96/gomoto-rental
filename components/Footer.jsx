import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { useRouter } from 'next/router'

function Footer() {
    const navigate = useRouter()
    return (
        <footer className="w-full text-white bg-[#00133c] mt-10">
            <div className="space-y-6 w-full max-w-6xl mx-auto px-5 py-10">
                <div className="flex flex-col text-center space-y-4 xs:flex-row xs:justify-between xs:space-y-0">
                    <div className="space-y-4">
                        <h1 className="!text-gray-400 cursor-default">How it works</h1>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>Pricing</p>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>Locations</p>
                        <p onClick={() => navigate.push('/fleet')} className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>Fleet</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="!text-gray-400 cursor-default">Company</h1>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>About Us</p>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>Careers</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="!text-gray-400 cursor-default">Resources</h1>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>Blog</p>
                        <p className='font-bold cursor-pointer hover:text-[#fd2084] transition-all ease-linear'>FAQ</p>
                    </div>
                </div>

                <div className='space-y-2 lg:space-y-0 grid lg:grid-cols-3 items-center'>
                    <div className='flex space-x-4 items-center sm:justify-start lg:col-start-3 lg:row-span-full lg:justify-end'>
                        <FaFacebookF className='h-5 cursor-pointer' />
                        <FaInstagram className='h-10 cursor-pointer' />
                        <FaLinkedinIn className='h-10 cursor-pointer' />
                        <FaTiktok className='h-8 cursor-pointer' />
                    </div>
                    <div className='space-y-2 sm:flex sm:space-x-4 sm:space-y-0 lg:col-start-2 lg:row-span-full lg:justify-center whitespace-nowrap'>
                        <p className='cursor-pointer'>Privacy Policy</p>
                        <p className='cursor-pointer'>Terms & Conditions</p>
                    </div>

                    <p className='lg:col-start-1 lg:row-span-full lg:justify-start'>&copy; 2022 S Jegatheeswaran</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer