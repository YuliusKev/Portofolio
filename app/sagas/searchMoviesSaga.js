import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import {
  GET_MOVIE_BY_QUERY,
  GET_MOVIE_BY_QUERY_FAILED,
  GET_MOVIE_BY_QUERY_SUCCESS
} from "../action/searchList";

import { TMDB_API_KEY, TMDB_HOST } from "../config/constants";

const fetchMoviesByQueryUrl = (keyword, page) =>
  axios.get(
    `${TMDB_HOST}/search/movie?api_key=${TMDB_API_KEY}&query=${keyword}&page=${page}`
  );

function* fetchMoviesByQuery(getMovieByQuery) {
  try {
    let keyword = getMovieByQuery.keyword;
    let page = getMovieByQuery.page;

    const response = yield call(fetchMoviesByQueryUrl, keyword, page);
    const result = yield response.data;

    yield put({
      type: GET_MOVIE_BY_QUERY_SUCCESS,
      result
    });
  } catch (err) {
    yield put({
      type: GET_MOVIE_BY_QUERY_FAILED,
      error: err.message
    });
  }
}

export default [takeEvery(GET_MOVIE_BY_QUERY, fetchMoviesByQuery)];
