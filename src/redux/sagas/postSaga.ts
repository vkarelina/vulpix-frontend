import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

import { PostsActionTypes, PostState } from "../types/postType";
import { fetchPostsApi } from "../../api/apiPost";
import { setPostsError, setPostsSuccess } from "../actions/actions";

function* fetchPostsWorker() {
  try {
    const { data }: AxiosResponse<PostState[]> = yield call(fetchPostsApi);
    yield put(setPostsSuccess(data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(setPostsError(e.message));
    }
  }
}

export function* postsWatcher() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS, fetchPostsWorker);
}
