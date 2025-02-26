// import React from "react";
// import Image from "next/image";
// import { Book } from "@/types";

// type Params = Promise<{ bookId?: string }>

// const SingleBookPage = async ({ params }: { params: Params }) => {
//   console.log('hello',params)
//   let book: Book | null = null;
//   try {
//     const newParams=await params;
//     const response = await fetch(
//       `${process.env.BACKEND_URL}/books/${newParams?.bookId}`
//     );
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("error fetching book1");
//     }
//     book = await response.json();
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//         throw new Error("error fetching book2: " + err.message);
//     } else {
//         throw new Error("error fetching book2: Unknown error occurred");
//     }
// }

// if (!book) {
//     throw new Error("Book not found");
// }
    
// //     return (
// //     <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
// //         <div className="col-span-2 pr-16 text-primary-950">
// //         <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
// //         <span className="font-semibold">by {book.author}</span>
// //         <p className="mt-5 text-lg leading-8">{book.description}</p>
// //         </div>
// //         <div className="flex justify-end">
// //         <Image
// //             src={book.cover_image}
// //             alt={book.title}
// //             className="rounded-md border"
// //             height={0}
// //             width={0}
// //             sizes="100vw"
// //             style={{ width: "auto", height: "auto" }}
// //         /> 
// //         </div>
// //     </div>
// //     );
// // };
// }
// export default SingleBookPage;



import React from "react";
import Image from "next/image";
import { Book } from "@/types";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.BACKEND_URL}/books`);
  const books: Book[] = await res.json();

  return books.map((book) => ({
    bookId: book.id.toString(),
  }));
}

type Params = Promise<{ bookId?: string }>

const SingleBookPage = async ({ params }: { params: Params }) => {
  const newParams = await params
  const res = await fetch(`${process.env.BACKEND_URL}/books/${newParams.bookId}`);
  console.log(res);

  if (!res.ok) {
    console.log("Book not found");
    return <h1 className="text-center text-3xl mt-10">Book not found</h1>;
  }

  const book: Book = await res.json();

  console.log("Fetched Book:", book.title);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
      </div>
      <div className="flex justify-end">
        <Image
          src={book.cover_image}
          alt={book.title}
          className="rounded-md border"
          width={300}
          height={450}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;


