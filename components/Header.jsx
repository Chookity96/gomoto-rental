import React from 'react'
import bike from '../assets/bike.png'
import Image from 'next/image'
function Header() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-10 grid grid-cols-1 items-center sm:grid-cols-2 p-5 min-w-[260px] lg:grid-cols-4">
            <h1 className='text-white text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl lg:col-span-2 text-center sm:text-left'>Start Riding in less than 3 Minutes</h1>
            <div className='invert mx-auto w-[50%] lg:col-span-2'>
                <Image src={bike} alt="Motorbike"/>
            </div>
            <p className='text-white text-3xl font-normal sm:col-span-2 lg:col-span-4'>GoMoto is the largest bikesharing service in Singapore, with over 1,100 locations islandwide. Download the app now to rent a motorbike anytime, anywhere with no deposit or membership fees.</p>
            <button className='border-2 border-white hover:text-[#fd2084] hover:border-[#fd2084] transition-all ease-linear cursor-pointer py-2 px-4 text-xl rounded-md text-white font-bold max-w-[240px]'>
                Sign up
            </button>
        </div>
    )
}

export default Header