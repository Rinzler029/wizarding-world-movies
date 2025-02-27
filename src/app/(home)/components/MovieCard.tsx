import { Movie } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({movie}: {movie: Movie}) => {
  // console.log(movie.author, movie.id);
  return (
    <div className='flex gap-5 border p-5 shadow-md flex-col xl:flex-row'>
        <Image src={movie.attributes.poster} alt={movie.attributes.title} width={0} height={0} style={{width: 'auto'}} className='md:w-auto md:h-52' sizes='100vw'/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-[#ec1d25]'>{movie.attributes.title}</h2>
            <p className='font-bold mt-2'>Runtime: {movie.attributes.running_time}</p>
            <Link href={`/movie/${movie.id}`} className='border-2 border-[#ec1d25] text-[#ec1d25] py-2 px-2 rounded mt-5 inline-block hover:bg-[#ec1d25] hover:text-white text-sm transition'>Read More</Link>
        </div>
    </div>
  )
}

export default MovieCard