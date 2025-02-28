import React from "react";
import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";
import Head from "next/head";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.BACKEND_URL}/movies`);
  const movies: { data: Movie[] } = await res.json();

  return movies.data?.map((movie) => ({
    movieId: movie.id.toString(),
  }));
}

type Params = Promise<{ movieId?: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const newParams = await params;
  const res = await fetch(
    `${process.env.BACKEND_URL}/movies/${newParams.movieId}`
  );
  if (!res.ok) {
    console.log("Movie not found");
  }
  const newMovie: { data: Movie } = await res.json();
  console.log( "title", `${newMovie.data.attributes.title}`)
  return {
    title: `${newMovie.data.attributes.title}`,
  };
}

const SingleMoviePage = async ({ params }: { params: Params }) => {
  const newParams = await params;
  const res = await fetch(
    `${process.env.BACKEND_URL}/movies/${newParams.movieId}`
  );
  console.log("single movie response.................");

  if (!res.ok) {
    console.log("Movie not found");
    return <h1 className="text-center text-3xl mt-10">Movie not found</h1>;
  }

  const newMovie: { data: Movie } = await res.json();

  console.log("Fetched Movie:", newMovie.data.attributes.title);

  return (
    <div className="container mx-auto lg:w-2/3 ">
      <Head>
        <title>{newMovie.data.attributes.title}</title>
      </Head>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-10 px-5 py-10">
        <div className="col-span-2 pr-16 text-primary-950">
          <h2 className="text-5xl font-bold leading-[1.1]">
            {newMovie.data.attributes.title}
          </h2>
          <p className="mt-5 font-semibold">
            Runtime: {newMovie.data.attributes.running_time}
          </p>
          <p className="mt-5 font-semibold">
            Release Date: {newMovie.data.attributes.release_date}
          </p>
          <p className="mt-5 font-semibold">
            Rating: {newMovie.data.attributes.rating}
          </p>
          <div className="mt-8">
            <Link href={newMovie.data.attributes.trailer}>
              <button className="p-4 border-2 border-none rounded-lg text-white bg-blue-600 hover:bg-violet-500">
                View Trailer
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src={newMovie.data.attributes.poster}
            alt={newMovie.data.attributes.title}
            className="rounded-md border"
            width={300}
            height={450}
            priority
          />
        </div>
      </div>
      <p className="text-lg container mx-auto px-5 leading-8 mb-20">
        {newMovie.data.attributes.summary}
      </p>
    </div>
  );
};

export default SingleMoviePage;
