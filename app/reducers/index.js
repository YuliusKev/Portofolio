import { combineReducers } from "redux";

import movieDetails from "./movieDetails";
import movieLists from "./movieLists";
import homeLists from "./homeList";
import searchLists from "./searchList";
import number from "./number";

export default combineReducers({
  movie: movieDetails,
  movieLists: movieLists,
  homeLists: homeLists,
  searchLists: searchLists,
  number: number
});
