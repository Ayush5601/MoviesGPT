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

  return (
    <div className="w-screen h-screen text-white bg-gradient-to-bl from-black">
      <img
        className="fixed -z-10 object-cover w-screen h-screen"
        src={BACKDROP_CDN_URL + movieDetails.backdrop_path}
        alt="backdrop"
      />
      <div className="flex items-center justify-center">
        <div className="text-2xl md:text-5xl pb-4 -ml-5 font-semibold mr-2 mt-14">
          {movieDetails.title} - {movieDetails.tagline}
        </div>
        {/* <div className="md:text-xl italic ml-2 align-middle">
          
        </div> */}
      </div>
      <div className="flex flex-col md:grid grid-flow-col">
        <div className="md:col-span-4 mt-16 ml-28">
          <img
            className="max-h-96 col-span-4"
            alt="Movie Card"
            src={IMG_CDN_URL + movieDetails.poster_path}
          />
        </div>
        <div className="col-span-8 mt-14 mr-20 ml-6">
          <div className="flex pb-8">
            {movieDetails.genres?.map((genre) => (
              <div key={genre.id} className="text-xl">
                {genre.name + "/"}
              </div>
            ))}
          </div>
          <div className="pb-5 mb-10 text-lg">{movieDetails.overview}</div>
          <div className="text-xl italic">
            Release: {movieDetails.release_date}
          </div>
          <div className="text-xl italic">
            Runtime {movieDetails.runtime} mins
          </div>
          <div className="text-xl italic">
            Rating: {movieDetails.vote_average} ⭐
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
