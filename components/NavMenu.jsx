import React from 'react'

function NavMenu( {className} ) {
    return (
        // #001951
    <div className={`fixed opacity-0 bg-[#001951] top-20 left-0 w-full h-full pt-10 ${className}`}>
            <ul className='text-[#19f9b9] font-bold flex flex-col items-center space-y-10 h-screen'>
                <li>
                    <a href="">Fleet</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">GoMoto Locations</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Careers</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
                <li className=''>
                    <a href="">Sign up</a>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu