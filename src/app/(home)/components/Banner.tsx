import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="mx-auto container p-10">
            <div className="relative">
                <Image
                    src={'/GreatHall.jpg'}
                    alt="billboard"
                    className="h-72 w-full rounded-lg"
                    height={0}
                    width={0}
                    sizes="100vw"
                />
                {/* <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30" /> */}
                <h3 className="absolute left-5 md:left-10 top-1/2 w-auto max-w-3xl -translate-y-1/2 text-3xl md:text-5xl md:w-full font-semibold tracking-tight text-white ">
                    Welcome to the wizarding world of Harry Potter
                </h3>
            </div>
        </div>
  )
}

export default Banner