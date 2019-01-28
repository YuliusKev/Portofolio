import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  FRONT_NOW_PLAYING_PAGE_LIST,
  FRONT_NOW_PLAYING_PAGE_LIST_FAILED,
  FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS,
  FRONT_POPULAR_PAGE_LIST,
  FRONT_POPULAR_PAGE_LIST_FAILED,
  FRONT_POPULAR_PAGE_LIST_SUCCESS
} from "../action/homeList";

import { TMDB_API_KEY, TMDB_HOST } from "../config/constants";

const host = `${TMDB_HOST}/movie/`;

const fetchHomeMovieListNowPlayingUrl = () =>
  axios.get(`${host}now_playing?api_key=${TMDB_API_KEY}&page=1`);

const fetchHomeMovieListPopularUrl = () =>
  axios.get(`${host}popular?api_key=${TMDB_API_KEY}&page=1`);

function* fetchHomeMovieListNowPlaying() {
  try {
    const response = yield call(fetchHomeMovieListNowPlayingUrl);
    const result = yield response.data;

    yield put({
      type: FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS,
      result
    });
  } catch (err) {
    yield put({
      type: FRONT_NOW_PLAYING_PAGE_LIST_FAILED,
      error: err.message
    });
  }
}

function* fetchHomeMovieListPopular() {
  try {
    const response = yield call(fetchHomeMovieListPopularUrl);
    const result = yield response.data;

    yield put({
      type: FRONT_POPULAR_PAGE_LIST_SUCCESS,
      result
    });
  } catch (err) {
    yield put({
      type: FRONT_POPULAR_PAGE_LIST_FAILED,
      error: err.message
    });
  }
}

export default [
  takeEvery(FRONT_NOW_PLAYING_PAGE_LIST, fetchHomeMovieListNowPlaying),
  takeEvery(FRONT_POPULAR_PAGE_LIST, fetchHomeMovieListPopular)
];
