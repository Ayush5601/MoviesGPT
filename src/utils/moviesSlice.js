import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    moviesByGenre: null,
    tvShows: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMoviesByGenre: (state, action) => {
      state.moviesByGenre = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addMoviesByGenre,
  addTvShows,
} = moviesSlice.actions;

export default moviesSlice.reducer;
