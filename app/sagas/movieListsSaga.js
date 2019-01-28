import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS
} from "../action/movieLists";

import { TMDB_API_KEY, TMDB_HOST } from "../config/constants";

const host = `${TMDB_HOST}/movie/`;

const fetchMovieListsUrl = (listName, page) =>
  axios.get(`${host}${listName}?api_key=${TMDB_API_KEY}&page=${page}`);

function* fetchMovieLists(getMovieLists) {
  try {
    let listName = getMovieLists.listName;
    let page = getMovieLists.page;

    const response = yield call(fetchMovieListsUrl, listName, page);
    const lists = yield listName;
    const result = yield response.data;

    yield put({
      type: GET_MOVIE_LIST_SUCCESS,
      result,
      lists
    });
  } catch (err) {
    yield put({
      type: GET_MOVIE_LIST_FAILED,
      error: err.message
    });
  }
}

export default [takeEvery(GET_MOVIE_LIST, fetchMovieLists)];
