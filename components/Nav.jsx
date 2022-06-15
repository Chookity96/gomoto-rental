import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { useRouter, } from 'next/router';
import Link from 'next/link'
import logo from '../assets/logo.png';


function Nav({ className }) {
	const [show, setShow] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [search, setSearch] = useState(false)
	const navigate = useRouter()
	// let widthMatch = window.matchMedia("(min-width: 1024px)")


	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			setShow(true)
		}
		else {
			setShow(false)
		}
	}

	useEffect(() => {

		window.matchMedia("(min-width: 1024px)").addEventListener('change', function (mm) {
			if (mm.matches) {
				// it matches the media query: that is, min-width is >= 1024px
				setShowMenu(false)
				setSearch(false)
			}
			else {
				// it no longer matches the media query
				// remove the event listener
			}
		});
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar)

		return () => {
			window.removeEventListener("scroll", transitionNavBar)
		}
	}, [])

	return (
		<div className={`sticky top-0 bg-[#001951] z-[10000] ${className}`}>
			<div className={`w-full max-w-6xl mx-auto flex  justify-between items-center p-5 h-24 bg-[#001951] lg:h-20 ${show && ' shadow-md'}`}>
				<div className={`transition-opacity ease-linear ${(showMenu || search) && "opacity-0"} lg:opacity-100`} onClick={() => navigate.push('/')}>
					<Image
						src={logo}
						width={215 / 3}
						height={130 / 3}
						className='cursor-pointer'
					/>
				</div>

				<div className='flex space-x-4 lg:hidden text-white items-center'>
					{
						search ? (
							<XIcon
								className={` h-8 cursor-pointer hover:text-[#19f9b9]`}
								onClick={() => setSearch(false)} />
						) : (
							<SearchIcon className='h-6 cursor-pointer hover:text-[#19f9b9]' onClick={() => { setSearch(true); setShowMenu(false); }} />
						)
					}
					{
						showMenu ? (
							<XIcon
								className={` h-8 cursor-pointer hover:text-[#19f9b9]`}
								onClick={() => setShowMenu(false)} />
						) : (
							<MenuIcon
								className={`h-8 cursor-pointer hover:text-[#19f9b9]`}
								onClick={() => { setShowMenu(true); setSearch(false) }} />
						)
					}
				</div>

				<div className='hidden lg:inline-flex'>
					<ul className='flex items-center space-x-10 font-bold text-white'>
						<li>
							<Link href="/fleet">
								<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>Fleet</a>
							</Link>
						</li>
						<li>
							<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>Pricing</a>
						</li>
						<li>
							<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>GoMoto Locations</a>
						</li>
						<li>
							<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>Blog</a>
						</li>
						<li>
							<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>Careers</a>
						</li>
						<li>
							<a className='hover:text-[#19f9b9] transition-all duration-300 ease-linear cursor-pointer'>FAQ</a>
						</li>
						<li className='border-2 border-white px-6 py-2 text-xl rounded-md hover:text-[#fd2084] hover:border-[#fd2084] transition-all ease-linear cursor-pointer'>
							<a className=''>Sign up</a>
						</li>
					</ul>
				</div>

				<div className={`fixed bg-[#001951] top-20 left-0 w-full h-full pt-10 ${showMenu ? 'opacity-100 visible z-[100]' : 'opacity-0 invisible'} lg:hidden z-0`}>
					<ul className='text-[#19f9b9] font-bold flex flex-col items-center space-y-10 h-screen'>
						<li>
							<Link href="/fleet">
								<a>Fleet</a>
							</Link>
						</li>
						<li>
							<a className='cursor-pointer'>Pricing</a>
						</li>
						<li>
							<a className='cursor-pointer'>GoMoto Locations</a>
						</li>
						<li>
							<a className='cursor-pointer'>Blog</a>
						</li>
						<li>
							<a className='cursor-pointer'>Careers</a>
						</li>
						<li>
							<a className='cursor-pointer'>FAQ</a>
						</li>
						<li className=''>
							<a className='cursor-pointer'>Sign up</a>
						</li>
					</ul>
				</div>

				<div className={`fixed flex justify-center items-center bg-[#001951] top-20 left-0 w-full h-full pb-24 ${search ? 'opacity-100 visible z-[100]' : 'opacity-0 invisible z-0'} lg:hidden`}>
					<input type="text" placeholder='Search...' className='text-[#19f9b9] text-5xl font-bold max-w-2xl placeholder:text-[#19f9b9] border-t-0 border-x-0 border-[#19f9b9] bg-[#001951] w-4/5 cursor-not-allowed' />
				</div>
			</div>
		</div>
	)
}

export default Nav