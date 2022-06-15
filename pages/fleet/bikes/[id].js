import Nav from '../../../components/Nav'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Footer from '../../../components/Footer'
import { ChevronLeftIcon } from '@heroicons/react/outline'

function Bike() {
	const [bikeData, setBikeData] = useState([])
	const navigate = useRouter()
	useEffect(() => {
		
		const fetchData = async () => {
			const { data } = await axios.get(`https://62aa09d13b3143855440da67.mockapi.io/api/fleetdata/fleetdata`)
			setBikeData(data)
		}
		fetchData()
	}, []);
	const allbikes = []
	const filterStreet = bikeData.find((bikes) => bikes.category === 'street')
	const filterSports = bikeData.find((bikes) => bikes.category === 'sports')
	const filterTouring = bikeData.find((bikes) => bikes.category === 'touring')
	const filterMoto = bikeData.find((bikes) => bikes.category === 'motocross')
	filterStreet?.bikes.forEach((bikes) => allbikes.push(bikes))
	filterSports?.bikes.forEach((bikes) => allbikes.push(bikes))
	filterTouring?.bikes.forEach((bikes) => allbikes.push(bikes))
	filterMoto?.bikes.forEach((bikes) => allbikes.push(bikes))
	const bike = allbikes.find((bike) => bike.id === navigate.query.id)
	// console.log(bike)
	return (
		<div className="bg-[#001951]">
			<Nav className="w-full" />
			<div className="w-full mx-auto space-y-4">
				<div className="flex flex-col-reverse justify-between bg-white p-8 md:flex-row lg:px-20 relative">
					<button className="absolute top-3 left-7 md:p-3 xl:pl-11" onClick={() => navigate.push('/fleet')}>
						<ChevronLeftIcon className="h-6" />
					</button>
					<img src={bike?.image} alt="" />
					<div className="">
						<h1 className="text-2xl font-semibold mt-2">Our Fleet</h1>
						<h2 className="text-4xl sm:text-5xl font-bold mb-5">
							{bike?.name}
						</h2>
						<button className="border-2 border-black hover:text-[#fd2084] hover:border-[#fd2084] transition-all ease-linear cursor-pointer py-2 px-4 text-xl rounded-md font-bold max-w-[240px]">
							Book now
						</button>
					</div>
				</div>
				<div className="p-5 space-y-16 max-w-6xl">
					<div className="space-y-5">
						<h1 className="text-3xl sm:text-4xl font-bold text-[#19f9b9]">
							About the bike
						</h1>
						<div className="flex space-x-10">
							<div>
								<h3 className="text-md sm:text-lg text-gray-500 uppercase">
									Fuel
								</h3>
								<p className="text-white text-xl sm:text-2xl font-semibold">
									Petrol
								</p>
							</div>

							<div>
								<h3 className="text-md sm:text-lg text-gray-500 uppercase">
									Description
								</h3>
								<p className="text-white text-xl sm:text-2xl font-semibold">
									{bike?.about}
								</p>
							</div>
						</div>
					</div>

					<div className="">
						<h1 className="text-3xl sm:text-4xl  font-bold text-[#19f9b9] mb-2">
							User guide
						</h1>
						<p className="text-white text-xl sm:text-2xl mb-10">
							Learn more about this car
						</p>
						<button className="border-2 border-[#19f9b9] bg-[#19f9b9] cursor-pointer py-2 px-4 text-xl rounded-md font-semibold max-w-[240px]">
							Learn more
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Bike
