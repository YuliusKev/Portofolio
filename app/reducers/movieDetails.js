import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  CLEAR_MOVIE_DETAIL
} from "../action/movieDetails";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        loading: true
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.result
      };

    case GET_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.result
      };
    case CLEAR_MOVIE_DETAIL:
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
};
