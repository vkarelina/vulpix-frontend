import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCH_ACCESS_TOKEN,
  FETCH_REGISTRATION,
  FETCH_WHO_AM_I,
} from "../actions/auth";
import {
  fetchLoginApi,
  fetchProfile,
  fetchRegistrationApi,
} from "../../api/auth";
import {
  FetchAccessTokenAction,
  IFetchRegistrationAction,
} from "../types/auth";
import {
  fetchAccessTokenError,
  fetchAccessTokenSuccess,
  fetchRegistrationError,
  fetchRegistrationSuccess,
  fetchWhoAmIError,
  fetchWhoAmISuccess,
} from "../actionsCreators/auth";

// Получение access token при логине
function* fetchAccessTokenSaga(action: FetchAccessTokenAction) {
  try {
    if (!action.payload) throw new Error("No payload login");
    const { data } = yield call(fetchLoginApi, action.payload);
    localStorage.setItem("token", data.token);
    yield put(fetchAccessTokenSuccess(data.userData));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(fetchAccessTokenError(e.message));
    }
  }
}

// Регистрация пользователя
function* fetchRegistrationSaga(action: IFetchRegistrationAction) {
  try {
    if (!action.payload) throw new Error("No payload registration");
    const { data } = yield call(fetchRegistrationApi, action.payload);
    yield localStorage.setItem("token", data);
    const userData: AxiosResponse = yield call(fetchProfile);
    yield put(fetchRegistrationSuccess(userData.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(fetchRegistrationError(e.message));
    }
  }
}

// Получение данных о текущем пользователе
function* fetchWhoAmISaga() {
  try {
    const { data } = yield call(fetchProfile);
    yield put(fetchWhoAmISuccess(data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(fetchWhoAmIError(e.message));
    }
  }
}

export function* authWatcher() {
  yield takeLatest(FETCH_ACCESS_TOKEN, fetchAccessTokenSaga);
  yield takeLatest(FETCH_REGISTRATION, fetchRegistrationSaga);
  yield takeLatest(FETCH_WHO_AM_I, fetchWhoAmISaga);
}
