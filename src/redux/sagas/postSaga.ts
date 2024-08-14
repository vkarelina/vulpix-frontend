import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { PostsActionTypes } from "../types/postType";
import { fetchPostsApi } from "../../api/apiPost";
import {
  fetchPostsSuccess,
  fetchPostsError,
} from "../actionsCreators/actionsPosts";

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
  yield takeLatest(PostsActionTypes.FETCH_POSTS, fetchPostsWorker);
}
