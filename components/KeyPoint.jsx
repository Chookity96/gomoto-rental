import React from 'react'
import Image from 'next/image'

function KeyPoint( {title, description, pic} ) {
  return (
    <div className="text-white flex flex-col p-5 items-center md:items-start">
        <Image src={pic} width={120} height={120}/>
        <h4 className='font-semibold text-2xl mt-5'>{title}</h4>
        <p className='text-xl text-center md:text-left'>{description}</p>
    </div>
  )
}

export default KeyPoint