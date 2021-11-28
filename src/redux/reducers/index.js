const INITIAL_STATE = {
  name: "neco",
  movies: [],
  genres: [],
  isLoading: false,
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TOPRATED_MOVIES_START":
      return { ...state, isLoading: true };
    case "GET_TOPRATED_MOVIES_SUCCESS":
      return { ...state, isLoading: false, movies: action.payload };
    case "GET_TOPRATED_MOVIES_ERROR":
      return { ...state, isLoading: false, message: action.payload };

    case "GET_POPULAR_MOVIES_START":
      return { ...state, isLoading: true };
    case "GET_POPULAR_MOVIES_SUCCESS":
      return { ...state, isLoading: false, movies: action.payload };
    case "GET_POPULAR_MOVIES_ERROR":
      return { ...state, isLoading: false, message: action.payload };

    case "GET_UPCOMING_MOVIES_START":
      return { ...state, isLoading: true };
    case "GET_UPCOMING_MOVIES_SUCCESS":
      return { ...state, isLoading: false, movies: action.payload };
    case "GET_UPCOMING_MOVIES_ERROR":
      return { ...state, isLoading: false, message: action.payload };

    case "GET_MOVIE_DETAILS_START":
      return { ...state, isLoading: true };
    case "GET_MOVIE_DETAILS_SUCCESS":
      return { ...state, isLoading: false, details: action.payload };
    case "GET_MOVIE_DETAILS_ERROR":
      return { ...state, isLoading: false, message: action.payload };

    case "GET_GENRES_START":
      return { ...state, isLoading: true };
    case "GET_GENRES_SUCCESS":
      return { ...state, isLoading: false, genres: action.payload };
    case "GET_GENRES_ERROR":
      return { ...state, isLoading: false, message: action.payload };
    default:
      return state;
  }
};
