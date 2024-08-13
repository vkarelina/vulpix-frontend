import { all } from "redux-saga/effects";

import { postsWatcher } from "./postSaga";

export function* rootSaga() {
  yield all([postsWatcher()]);
}
