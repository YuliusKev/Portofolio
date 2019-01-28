import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  CLEAR_MOVIE_LIST
} from "../action/movieLists";

const initialState = {
  loading: false,
  listName: null,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return {
        ...state
      };

    case GET_MOVIE_LIST_SUCCESS:
      if (!state.data) {
        return {
          ...state,
          listName: action.lists,
          data: action.result
        };
      } else {
        return {
          ...state,
          listName: action.lists,
          data: {
            ...action.result,
            results: [...state.data.results, ...action.result.results]
          }
        };
      }

    case GET_MOVIE_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CLEAR_MOVIE_LIST:
      return {
        ...state,
        data: action.page == 1 ? null : undefined
      };
    default:
      return state;
  }
};
