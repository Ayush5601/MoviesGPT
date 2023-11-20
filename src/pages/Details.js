import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL, BACKDROP_CDN_URL } from "../utils/constants";

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();

    setMovieDetails(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  if (!movieDetails) return null;

  const {
    backdrop_path,
    tagline,
    poster_path,
    genres,
    title,
    overview,
    release_date,
    runtime,
    vote_average,
  } = movieDetails;

  return (
    <div className="w-screen md:h-screen text-white bg-gradient-to-bl from-black">
      <img
        className="fixed -z-10 object-cover w-screen h-screen"
        src={BACKDROP_CDN_URL + backdrop_path}
        alt="backdrop"
      />
      <div className="flex items-center justify-center ml-4 mr-4">
        <div className="mx-auto text-2xl md:text-5xl pb-4 font-semibold mt-14">
          {title} - {tagline}
        </div>
      </div>
      <div className="flex flex-col md:grid grid-flow-col pb-6">
        <div className="mx-auto md:col-span-4 mt-16 md:ml-28">
          <img
            className="max-h-96 col-span-4"
            alt="Movie Card"
            src={IMG_CDN_URL + poster_path}
          />
        </div>
        <div className="mr-16 md:col-span-8 mt-14 md:mr-24 ml-8">
          <div className="flex pb-8">
            {genres?.map((genre) => (
              <div key={genre.id} className="text-base">
                {genre.name + "/"}
              </div>
            ))}
          </div>
          <div className="pb-5 mb-10 text-lg text-justify">{overview}</div>
          <div className="text-xl italic">Release: {release_date}</div>
          <div className="text-xl italic">Runtime {runtime} mins</div>
          <div className="text-xl italic">
            Rating: {vote_average.toFixed(1)} ⭐
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
