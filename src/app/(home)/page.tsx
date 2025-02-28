
import Banner from "@/app/(home)/components/Banner";
import MovieList from "./components/MovieList";
import Head from "next/head";

export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/movies`);
  if(!response.ok){
    throw new Error('An error occured while fetching the books');
  }

  const movies = await response.json();
  // console.log('books', books);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Banner />
      <MovieList movies={movies} />
    </>
  );
}

