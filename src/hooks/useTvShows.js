import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/moviesSlice";

const useTvShows = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const tvShows = useSelector((store) => store.movies.tvShows);

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    //memoization
    !tvShows && getTvShows();
  }, []);
};

export default useTvShows;
