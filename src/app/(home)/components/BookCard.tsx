import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}: {book: Book}) => {
  // console.log(book.author, book.id);
  return (
    <div className='flex gap-5 border p-5 shadow-md'>
        <Image src={book.cover_image} alt={book.title} width={0} height={0} style={{width: 'auto', height: '12rem'}} sizes='100vw'/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-[#ec1d25] text-balance'>{book.title}</h2>
            <p className='font-bold mt-2'>{book.author}</p>
            <Link href={`/book/${book.id}`} className='border-2 border-[#ec1d25] text-[#ec1d25] py-2 px-2 rounded mt-5 inline-block hover:bg-[#ec1d25] hover:text-white text-sm transition'>Read More</Link>
        </div>
    </div>
  )
}

export default BookCard