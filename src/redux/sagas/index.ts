import { all } from "redux-saga/effects";

import { postsWatcher } from "./post";
import { authWatcher } from "./auth";

export function* rootSaga() {
  yield all([postsWatcher(), authWatcher()]);
}
