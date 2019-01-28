import {
  FRONT_NOW_PLAYING_PAGE_LIST,
  FRONT_NOW_PLAYING_PAGE_LIST_FAILED,
  FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS,
  FRONT_POPULAR_PAGE_LIST,
  FRONT_POPULAR_PAGE_LIST_FAILED,
  FRONT_POPULAR_PAGE_LIST_SUCCESS
} from "../action/homeList";

const initialState = {
  loading: true,
  data: null,
  dataPopular: null,
  error: null,
  popularError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FRONT_NOW_PLAYING_PAGE_LIST:
      return {
        ...state
      };
    case FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS:
      return {
        ...state,
        data: action.result
      };

    case FRONT_NOW_PLAYING_PAGE_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case FRONT_POPULAR_PAGE_LIST:
      return {
        ...state,
        loading: true
      };

    case FRONT_POPULAR_PAGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        dataPopular: action.result
      };

    case FRONT_POPULAR_PAGE_LIST_FAILED:
      return {
        ...state,
        loading: false,
        popularError: action.error
      };
    default:
      return state;
  }
};
