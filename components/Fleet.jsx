import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { data } from 'autoprefixer'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'


function Fleet() {
	const [category, setCategory] = useState("all")
	const [bikeData, setBikeData] = useState([])
	const navigate = useRouter()

	function slide(direction) {
		var container = document.getElementById('container');
		scrollCompleted = 0;
		let slideVar = setInterval(function () {
			if (direction == 'left') {
				container.scrollLeft -= 10;
			} else {
				container.scrollLeft += 10;
			}
			scrollCompleted += 10;
			if (scrollCompleted >= 100) {
				window.clearInterval(slideVar);
			}
		}, 50);
	}



	useEffect(() => {
		
		const fetchData = async () => {
			const { data } = await axios.get(`api/data`)
			setBikeData(data)
		}
		fetchData()
	}, []);


	const filteredCategoryData = bikeData.find(bikes => bikes.category === category);
	const allbikes = []
	const filterStreet = bikeData.find(bikes => bikes.category === 'street');
	const filterSports = bikeData.find(bikes => bikes.category === 'sports');
	const filterTouring = bikeData.find(bikes => bikes.category === 'touring');
	const filterMoto = bikeData.find(bikes => bikes.category === 'motocross');
	filterStreet?.bikes.forEach(bikes => allbikes.push(bikes))
	filterSports?.bikes.forEach(bikes => allbikes.push(bikes))
	filterTouring?.bikes.forEach(bikes => allbikes.push(bikes))
	filterMoto?.bikes.forEach(bikes => allbikes.push(bikes))
	const bikesRef = useRef(null)

	return (
		<div className='w-full max-w-6xl mx-auto space-y-5 p-5'>
			<div className='flex justify-between items-center'>
				<h2 className='text-[#19f9b9] text-4xl font-bold'>Meet the fleet</h2>
				<div className="space-x-6 hidden sm:inline-flex">
					<button onClick={() => bikesRef.current.scrollLeft -= 190} className="bg-[#fd2084] rounded-full">
						<ChevronLeftIcon className='text-white h-10 p-1 cursor-pointer' />
					</button>
					<button onClick={() => bikesRef.current.scrollLeft += 190} className="bg-[#fd2084] rounded-full">
						<ChevronRightIcon className='text-white h-10 p-1 cursor-pointer' />
					</button>
				</div>
			</div>

			<p className='text-white text-2xl'>Rent a bike that suits your needs.</p>
			<div className='pb-5'>
				{/* bg-[#2730ed] */}
				<ul className='flex space-x-4 sm:space-x-8 md:space-x-12 overflow-x-scroll scrollbar-hide'>
					<li className={`${category === 'all' && "selected"} py-2 px-8 rounded-full font-bold uppercase bg-white hover:bg-[#2730ed] hover:text-white cursor-pointer transition:all duration-300 ease-linear`} onClick={() => { setCategory('all'); bikesRef.current.scrollLeft = 0; }}>
						<p>All</p>
					</li>
					<li className={`${category === 'street' && "selected"} py-2 px-8 rounded-full font-bold uppercase bg-white hover:bg-[#2730ed] hover:text-white cursor-pointer transition:all duration-300 ease-linear`} onClick={() => { setCategory('street'); bikesRef.current.scrollLeft = 0; }}>
						<p>Street</p>
					</li>
					<li className={`${category === 'sports' && "selected"} py-2 px-8 rounded-full font-bold uppercase bg-white hover:bg-[#2730ed] hover:text-white cursor-pointer transition:all duration-300 ease-linear`} onClick={() => { setCategory('sports'); bikesRef.current.scrollLeft = 0; }}>
						<p>Sports</p>
					</li>
					<li className={`${category === 'touring' && "selected"} py-2 px-8 rounded-full font-bold uppercase bg-white hover:bg-[#2730ed] hover:text-white cursor-pointer transition:all duration-300 ease-linear`} onClick={() => { setCategory('touring'); bikesRef.current.scrollLeft = 0; }}>
						<p>Touring</p>
					</li>
					<li className={`${category === 'motocross' && "selected"} py-2 px-8 rounded-full font-bold uppercase bg-white hover:bg-[#2730ed] hover:text-white cursor-pointer transition:all duration-300 ease-linear`} onClick={() => { setCategory('motocross'); bikesRef.current.scrollLeft = 0; }}>
						<p>Moto-X</p>
					</li>
				</ul>
			</div>
			<div className='flex overflow-x-scroll scrollbar-hide space-x-4 transition-all ease-linear scroll-smooth' ref={bikesRef}>
				{
					category === 'all' ? (
						allbikes.map((bike, index) => (
							<div key={index} id={bike.id} className="bg-[#2730ed] min-h-[280px] min-w-[180px] rounded-xl z-10 cursor-pointer md:min-w-[240px] lg:min-w-[300px]" onClick={() => navigate.push(`/fleet/bikes/${bike.id}`)}>
								<div className='flex flex-col justify-between h-full w-full'>
									<div className='p-3 text-white space-y-2'>
										<p className='opacity-80 text-sm'>Standard</p>
										<h1 className="text-3xl font-semibold">{bike.name}</h1>
										<p className="text-md capitalize">{bike.type}</p>
									</div>

									<div className=''>
										<img src={bike.image} alt="" className="rounded-b-xl" />
									</div>
								</div>
							</div>

						))
					) : (
						filteredCategoryData?.bikes.map((bike, index) => (
							<div key={index} id={bike.id} className="bg-[#2730ed] min-h-[280px] min-w-[180px] rounded-xl z-10 cursor-pointer md:min-w-[240px] lg:min-w-[300px]" onClick={() => navigate.push(`/fleet/bikes/${bike.id}`)}>
								<div className='flex flex-col justify-between h-full w-full'>
									<div className='p-3 text-white space-y-2'>
										<p className='opacity-80 text-sm'>Standard</p>
										<h1 className="text-3xl font-semibold">{bike.name}</h1>
										<p className="text-md capitalize">{bike.type}</p>
									</div>

									<div className=''>
										<img src={bike.image} alt="" className="rounded-b-xl" />
									</div>
								</div>
							</div>

						))
					)

				}
			</div>

			<div className='flex justify-between items-center min-w-[240px]'>
				<button className="bg-[#19f9b9] py-3 px-4 text-lg rounded-md font-bold cursor-pointer active:opacity-80 transition-opacity ease-linear" onClick={() => navigate.push('/fleet')}>See all bikes</button>
				<div className="space-x-3 sm:hidden">
					<button onClick={() => bikesRef.current.scrollLeft -= 190} className="bg-[#fd2084] rounded-full">
						<ChevronLeftIcon className='text-white h-10 p-1 cursor-pointer' />
					</button>
					<button onClick={() => bikesRef.current.scrollLeft += 190} className="bg-[#fd2084] rounded-full">
						<ChevronRightIcon className='text-white h-10 p-1 cursor-pointer' />
					</button>
				</div>

			</div>

		</div>
	)
}

export default Fleet