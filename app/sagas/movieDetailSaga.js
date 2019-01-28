import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS
} from "../action/movieDetails";

import { TMDB_API_KEY, TMDB_HOST } from "../config/constants";

const host = `${TMDB_HOST}/movie/`;

const fetchMovieDetailUrl = movie_id =>
  axios.get(
    `${host}${movie_id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images,casts`
  );

function* fetchMovieDetail(getMovieDetail) {
  try {
    let movie_id = getMovieDetail.id;

    const response = yield call(fetchMovieDetailUrl, movie_id);
    const result = yield response.data;

    yield put({
      type: GET_MOVIE_DETAIL_SUCCESS,
      result
    });
  } catch (err) {
    yield put({
      type: GET_MOVIE_DETAIL_FAILED,
      error: err.message
    });
  }
}

export default [takeEvery(GET_MOVIE_DETAIL, fetchMovieDetail)];
