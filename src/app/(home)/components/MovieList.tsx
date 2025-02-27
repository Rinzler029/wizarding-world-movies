import { Movie } from '@/types'
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}:{movies: {data: Movie[]}}) => {
  return (
    <div className='container mx-auto px-10 grid grid-cols-1 gap-8 mb-20 md:grid-cols-3'>
      {movies.data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        // <h1 key={book._id}>{book.title}</h1>
      ))}
    </div>
  )
}

export default MovieList