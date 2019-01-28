import {
  GET_MOVIE_BY_QUERY,
  GET_MOVIE_BY_QUERY_FAILED,
  GET_MOVIE_BY_QUERY_SUCCESS,
  CLEAR_SEARCH_PAGE
} from "../action/searchList";

const initialState = {
  loading: true,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_QUERY:
      return {
        ...state
      };
    case GET_MOVIE_BY_QUERY_SUCCESS:
      if (!state.data) {
        return {
          ...state,
          loading: false,
          data: action.result
        };
      } else {
        return {
          ...state,
          loading: false,
          data: {
            ...action.result,
            results: [...state.data.results, ...action.result.results]
          }
        };
      }

    case GET_MOVIE_BY_QUERY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case CLEAR_SEARCH_PAGE:
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
};
