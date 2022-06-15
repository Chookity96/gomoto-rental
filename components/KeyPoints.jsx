import React from 'react'
import KeyPoint from './KeyPoint'
import mobile from '../assets/mobile.svg'
import time from '../assets/time.svg'
import location from '../assets/location.svg'

function KeyPoints() {
	return (
		<div className='max-w-6xl mx-auto w-full p-5 space-y-6'>
			<h2 className="text-4xl text-[#19f9b9] font-bold">Why GoMoto?</h2>
			<div className='flex flex-col max-w-xl md:max-w-6xl md:flex-row mx-auto md:space-x-8'>
				<KeyPoint title="Simple" pic={mobile} description={"Register, book, and ride on GoMoto’s mobile app anytime, anywhere."} />
				<KeyPoint title="Flexible" pic={time} description={"No deposit and no membership fees required! Pay only for the hours and mileage used."} />
				<KeyPoint title="Accessible" pic={location} description={"We provide islandwide station coverage with vehicles available 24/7."} />
			</div>
		</div>
	)
}

export default KeyPoints