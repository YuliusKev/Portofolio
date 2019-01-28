//Now Playing

//Popular
export const GET_MOVIE_LIST = "GET_MOVIE_LIST";
export const GET_MOVIE_LIST_SUCCESS = "GET_MOVIE_LIST_SUCCESS";
export const GET_MOVIE_LIST_FAILED = "GET_MOVIE_LIST_FAILED";

//data di clear ketika keluar halaman
export const CLEAR_MOVIE_LIST = "CLEAR_MOVIE_LIST";

//action creator

export const getMovieLists = (listName, page) => ({
  type: GET_MOVIE_LIST,
  listName,
  page
});

export const clearMovies = () => ({
  type: CLEAR_MOVIE_LIST
});
