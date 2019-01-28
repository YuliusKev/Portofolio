//Popular on Front Page
export const FRONT_POPULAR_PAGE_LIST = "FRONT_POPULAR_PAGE_LIST";
export const FRONT_POPULAR_PAGE_LIST_SUCCESS =
  "FRONT_POPULAR_PAGE_LIST_SUCCESS";
export const FRONT_POPULAR_PAGE_LIST_FAILED = "FRONT_POPULAR_PAGE_LIST_FAILED";

//Now Playing on Front Page
export const FRONT_NOW_PLAYING_PAGE_LIST = "FRONT_NOW_PLAYING_PAGE_LIST";
export const FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS =
  "FRONT_NOW_PLAYING_PAGE_LIST_SUCCESS";
export const FRONT_NOW_PLAYING_PAGE_LIST_FAILED =
  "FRONT_NOW_PLAYING_PAGE_LIST_FAILED";

export const getHomeNowPlayingList = () => ({
  type: FRONT_NOW_PLAYING_PAGE_LIST
});

export const getHomePopularList = () => ({
  type: FRONT_POPULAR_PAGE_LIST
});
