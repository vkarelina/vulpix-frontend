import { all } from "redux-saga/effects";

import { postsWatcher } from "./postSaga";
import { authWatcher } from "./authSaga";

export function* rootSaga() {
  yield all([postsWatcher(), authWatcher()]);
}
