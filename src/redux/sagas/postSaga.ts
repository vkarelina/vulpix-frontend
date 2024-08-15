import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { fetchPostsApi } from "../../api/apiPost";
import {
  fetchPostsSuccess,
  fetchPostsError,
} from "../actionsCreators/actionsCreatorsPosts";
import { FETCH_POSTS } from "../actions/actionsPost";

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
