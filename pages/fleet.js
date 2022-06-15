import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function Fleet() {
	const [showFilter, setShowFilter] = useState(false)
	const [category, setCategory] = useState('all')
	const [bikeData, setBikeData] = useState([])
	const [filter, setFilter] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const navigate = useRouter()
	useEffect(() => {
		
		const fetchData = async () => {
			const { data } = await axios.get(`http://${location.host}/api/data`)
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

	useEffect(() => {

		setFilteredData([])


		filter.forEach(category => {
			bikeData.find(bikes => bikes.category === category)?.bikes.forEach(bikes => setFilteredData(filteredData => [...filteredData, bikes]))
		})





	}, [filter]);

	useEffect(() => {
		window.screen.width >= 1024 && setShowFilter(true)
		window.screen.width < 1024 && setShowFilter(false)
		window.matchMedia("(min-width: 1024px)").addEventListener('change', function (mm) {
			if (mm.matches) {
				// it matches the media query: that is, min-width is >= 500px
				setShowFilter(true)
			}
			else {
				// it no longer matches the media query
				// remove the event listener
			}
		});
	}, []);

	return (
		<div className="bg-[#001951]">
			<Nav />
			<div className="w-full max-w-6xl mx-auto p-5 space-y-4 lg:flex lg:space-y-0 lg:pt-16">
				<div className="flex items-center justify-between">
					<h1 className="text-[#19f9b9] text-4xl font-bold lg:hidden">Filter</h1>
					{
						showFilter ? (
							<XCircleIcon className='text-[#19f9b9] h-10 cursor-pointer lg:hidden' onClick={() => setShowFilter(false)} />
						) : (
							<ChevronDownIcon className='text-[#19f9b9] h-10 cursor-pointer lg:hidden' onClick={() => setShowFilter(true)} />
						)
					}
				</div>

				{
					showFilter && (
						<div className='mr-10'>
							<p className='text-white font-bold text-xl mt-2'>Our Fleet</p>
							<ul className='list-none text-white'>
								<li className="flex m-4 space-x-2 items-center">
									<input className="" type="checkbox" id="check1" defaultChecked={filter.includes('street') && true} onClick={(e) => { e.target.checked ? setFilter(filter => [...filter, 'street']) : setFilter(filter => filter.filter(cat => cat !== 'street')) }} />
									<label className="tracking-wider select-none"><span></span>Street</label>
								</li>
								<li className="flex m-4 space-x-2 items-center">
									<input className="checkbox-pop" type="checkbox" id="check2" defaultChecked={filter.includes('sports') && true} onClick={(e) => { e.target.checked ? setFilter(filter => [...filter, 'sports']) : setFilter(filter => filter.filter(cat => cat !== 'sports')) }} />
									<label className="tracking-wider"><span></span>Sports</label>
								</li>
								<li className="flex m-4 space-x-2 items-center">
									<input className="checkbox-pull" type="checkbox" id="check3" defaultChecked={filter.includes('touring') && true} onClick={(e) => { e.target.checked ? setFilter(filter => [...filter, 'touring']) : setFilter(filter => filter.filter(cat => cat !== 'touring')) }} />
									<label className="tracking-wider"><span></span>Touring</label>
								</li>
								<li className="flex m-4 space-x-2 items-center">
									<input className="checkbox-spin" type="checkbox" id="check4" defaultChecked={filter.includes('motocross') && true} onClick={(e) => { e.target.checked ? setFilter(filter => [...filter, 'motocross']) : setFilter(filter => filter.filter(cat => cat !== 'motocross')) }} />
									<label className="tracking-wider"><span></span>MotoCross</label>
								</li>
							</ul>
							<hr />
						</div>
					)
				}

				<div className="flex flex-wrap w-full justify-between md:justify-start">
					{
						!(filter.length > 0) ? (
							allbikes.map((bike, index) => (
								<div key={index} id={bike.id} className="bg-[#2730ed] w-[100%] max-w-[280px] mx-auto xs:max-w-none xs:w-[45%] rounded-xl z-10 cursor-pointer xs:mx-2 my-3 md:w-[30%] shadow-lg" onClick={(e) => { navigate.push(`/fleet/bikes/${bike.id}`) }}>
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
							filteredData.map((bike, index) => (
								<div key={index} id={bike.id} className="bg-[#2730ed] w-[100%] max-w-[280px] mx-auto xs:max-w-none xs:w-[45%] rounded-xl z-10 cursor-pointer xs:mx-2 my-3 md:w-[30%] shadow-lg" onClick={(e) => { navigate.push(`/fleet/bikes/${bike.id}`) }}>
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




			</div>
			<Footer />
		</div>
	)
}

export default Fleet