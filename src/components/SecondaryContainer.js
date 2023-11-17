import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-[100%]">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Tv Shows"} movies={movies.tvShows} />
          {/* <MovieList title={"Genres"} movies={movies.moviesByGenre} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;