import { all } from "redux-saga/effects";
import movieDetailSaga from "./movieDetailSaga";
import numberSaga from "./numberSaga";
import homePageSaga from "./homePageSaga";
import movieListsSaga from "./movieListsSaga";
import searchMoviesSaga from "./searchMoviesSaga";

export default function*() {
  yield all([
    ...movieDetailSaga,
    ...movieListsSaga,
    ...homePageSaga,
    ...searchMoviesSaga
  ]);
}
