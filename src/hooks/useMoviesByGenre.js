import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesByGenre } from "../utils/moviesSlice";

const useMoviesByGenre = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const moviesByGenre = useSelector((store) => store.movies.moviesByGenre);

  const getMoviesByGenre = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    dispatch(addMoviesByGenre(json.results));
  };

  useEffect(() => {
    //memoization
    !moviesByGenre && getMoviesByGenre();
  }, []);
};

export default useMoviesByGenre;
