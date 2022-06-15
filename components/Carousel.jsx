// import React, { useState } from 'react'
// import { CarouselData } from "./CarouselData";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Swipe from "react-easy-swipe";

// function Carousel() {
// 	const [currentSlide, setCurrentSlide] = useState(0)
// 	const nextSlide = () => {
// 		console.log("next")
// 		if (currentSlide === CarouselData.length - 1) {
// 			setCurrentSlide(0)
// 		}
// 		else {
// 			setCurrentSlide(currentSlide + 1)
// 		}
// 	}

// 	const prevSlide = () => {
// 		console.log("previous")
// 		if (currentSlide === 0) {
// 			setCurrentSlide(CarouselData.length - 1)
// 		}
// 		else {
// 			setCurrentSlide(currentSlide - 1)
// 		}
// 	}
// 	return (
// 		<div className="mt-8">
// 			<div className="max-w-lg h-72 flex overflow-hidden relative">
// 				<AiOutlineLeft onClick={prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' />

// 				<AiOutlineRight onClick={nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' />

// 				{CarouselData.map((slide, index) => {
// 					return (
// 						<img
// 							src={slide.image}
// 							alt="This is a carousel slide"
// 							key={index}
// 							className={
// 								index === currentSlide
// 									? "block w-full h-auto object-cover"
// 									: "hidden"
// 							}
// 						/>
// 					);
// 				})}

// 				{/* <div className="absolute w-full flex justify-center bottom-0">
// 					{CarouselData.map((element, index) => {
// 						return (
// 							<div
// 								className={
// 									index === currentSlide
// 										? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
// 										: "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
// 								}
// 								key={index}
// 								onClick={() => {
// 									setCurrentSlide(index);
// 								}}
// 							></div>
// 						);
// 					})}
// 				</div> */}

// 			</div>
// 		</div>
// 	)
// }

// export default Carousel





import React from 'react'
import { Helmet } from 'react-helmet';
import pic from '../assets/simple_app.svg'
import Image from 'next/image'
// import CarouselScript from '../node_modules/flowbite/src/flowbite'
function Carousel() {
	return (
		<>
			<Helmet>
				<script src={CarouselScript}></script>
			</Helmet>

			<div id="default-carousel" className="relative z-30" data-carousel="static">
				{/* <!-- Carousel wrapper --> */}
				<div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
					{/* <!-- Item 1 --> */}
					<div className="duration-700 ease-in-out" data-carousel-item>
						<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
						{/* <Image src={pic} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." /> */}
					</div>
					{/* <!-- Item 2 --> */}
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Second Slide</span>
					</div>
					{/* <!-- Item 3 --> */}
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Third Slide</span>
					</div>
				</div>
				{/* <!-- Slider indicators --> */}
				<div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
				</div>
				{/* <!-- Slider controls --> */}
				<button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
					<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
						<span className="hidden">Previous</span>
					</span>
				</button>
				<button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next onClick={() => console.log("Nextt")}>
					<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
						<span className="hidden">Next</span>
					</span>
				</button>
			</div>
		</>
	)
}

export default Carousel