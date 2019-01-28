export const GET_MOVIE_BY_QUERY = "GET_MOVIE_BY_QUERY";
export const GET_MOVIE_BY_QUERY_SUCCESS = "GET_MOVIE_BY_QUERY_SUCCESS";
export const GET_MOVIE_BY_QUERY_FAILED = "GET_MOVIE_BY_QUERY_FAILED";
export const CLEAR_SEARCH_PAGE = "CLEAR_SEARCH_PAGE";

export const getMovieByQuery = (keyword, page) => ({
  type: GET_MOVIE_BY_QUERY,
  keyword,
  page
});

export const clearSearchPage = () => ({
  type: CLEAR_SEARCH_PAGE
});
