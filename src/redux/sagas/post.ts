import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { fetchPostsApi } from "../../api/post";
import { fetchPostsSuccess, fetchPostsError } from "../actionsCreators/posts";
import { FETCH_POSTS } from "../actions/post";

function* fetchPostsWorker() {
  try {
    const { data } = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(fetchPostsError(e.message));
    }
  }
}

export function* postsWatcher() {
  yield takeLatest(FETCH_POSTS, fetchPostsWorker);
}
