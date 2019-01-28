export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export const GET_MOVIE_DETAIL_FAILED = "GET_MOVIE_DETAIL_FAILED";

//clear data
export const CLEAR_MOVIE_DETAIL = 'CLEAR_MOVIE_DETAIL'

//action creator
export const getMovieDetail = id => ({
  type: GET_MOVIE_DETAIL,
  id
});

//clear action
export const clearMovies = () => ({
    type : CLEAR_MOVIE_DETAIL
})
