import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = ({books}:{books: Book[]}) => {
  return (
    <div className='container px-10 grid grid-cols-1 gap-8 mb-10 md:grid-cols-3'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
        // <h1 key={book._id}>{book.title}</h1>
      ))}
    </div>
  )
}

export default BookList