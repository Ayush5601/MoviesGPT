import Header from "../components/Header";
import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import GptSearch from "./GptSearch";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import useTvShows from "../hooks/useTvShows";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useMoviesByGenre();
  useTopRatedMovies();
  useTvShows();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
