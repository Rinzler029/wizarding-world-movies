
import Banner from "@/app/(home)/components/Banner";
import MovieList from "./components/MovieList";

export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/movies`);
  if(!response.ok){
    throw new Error('An error occured while fetching the books');
  }

  const movies = await response.json();
  // console.log('books', books);

  return (
    <>
      <Banner />
      <MovieList movies={movies} />
    </>
  );
}

