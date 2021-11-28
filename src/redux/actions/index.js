import axios from "axios";

export const getTopRatedMovies = () => (dispatch) => {
  dispatch({ type: "GET_TOPRATED_MOVIES_START" });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((result) => {
      console.log(result)
      dispatch({
        type: "GET_TOPRATED_MOVIES_SUCCESS",
        payload: result.data.results,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "GET_TOPRATED_MOVIES_ERROR", payload: err });
    });
};
export const getPopularMovies = () => (dispatch) => {
  dispatch({ type: "GET_POPULAR_MOVIES_START" });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((result) => {
      console.log(result)
      dispatch({
        type: "GET_POPULAR_MOVIES_SUCCESS",
        payload: result.data.results,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "GET_POPULAR_MOVIES_ERROR", payload: err });
    });
};

export const getUpcomingMovies = () => (dispatch) => {
  dispatch({ type: "GET_UPCOMING_MOVIES_START" });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((result) => {
      console.log(result)
      dispatch({
        type: "GET_UPCOMING_MOVIES_SUCCESS",
        payload: result.data.results,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "GET_UPCOMING_MOVIES_ERROR", payload: err });
    });
};

export const getMovieDetails = (id) => (dispatch) => {
  dispatch({ type: "GET_MOVIE_DETAILS_START" });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((result) => {
      console.log('det',result)
      dispatch({
        type: "GET_MOVIE_DETAILS_SUCCESS",
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "GET_MOVIE_DETAILS_ERROR", payload: err });
    });
};

export const getGenres = () => (dispatch) => {
  dispatch({ type: "GET_GENRES_START" });
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((result) => {
      dispatch({
        type: "GET_GENRES_SUCCESS",
        payload: result.data.genres,
      });
    })
    .catch((err) => {
      dispatch({ type: "GET_GENRES_ERROR", payload: err });
    });
};
