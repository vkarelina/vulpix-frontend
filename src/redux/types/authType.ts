import { ActionType } from "./index";
import {
  FETCH_ACCESS_TOKEN,
  FETCH_ACCESS_TOKEN_ERROR,
  FETCH_ACCESS_TOKEN_SUCCESS,
  FETCH_REGISTRATION,
  FETCH_REGISTRATION_ERROR,
  FETCH_REGISTRATION_SUCCESS,
  FETCH_WHO_AM_I,
  FETCH_WHO_AM_I_ERROR,
  FETCH_WHO_AM_I_SUCCESS,
} from "../actions/actionsAuth";

export interface AuthState {
  accessToken: string | null;
  loading: boolean;
  error: null | string;
}

export interface RegistrationData {
  login: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  login: string;
  email: string;
  avatarPath: string | null;
  createdAt: string;
  updatedAt: string;
}

export type IFetchRegistrationAction = ActionType<
  typeof FETCH_REGISTRATION,
  RegistrationData
>;

export type IFetchRegistrationSuccessAction = ActionType<
  typeof FETCH_REGISTRATION_SUCCESS,
  UserData
>;

export type IFetchRegistrationErrorAction = ActionType<
  typeof FETCH_REGISTRATION_ERROR,
  string
>;

export type IFetchWhoAmIAction = ActionType<typeof FETCH_WHO_AM_I>;

export type IFetchWhoAmISuccessAction = ActionType<
  typeof FETCH_WHO_AM_I_SUCCESS,
  UserData
>;

export type IFetchWhoAmIErrorAction = ActionType<
  typeof FETCH_WHO_AM_I_ERROR,
  string
>;

export type FetchAccessTokenAction = ActionType<
  typeof FETCH_ACCESS_TOKEN,
  LoginData
>;

export type FetchAccessTokenSuccessAction = ActionType<
  typeof FETCH_ACCESS_TOKEN_SUCCESS,
  UserData
>;

export type FetchAccessTokenErrorAction = ActionType<
  typeof FETCH_ACCESS_TOKEN_ERROR,
  string
>;

export type AuthAction =
  | FetchAccessTokenAction
  | FetchAccessTokenSuccessAction
  | FetchAccessTokenErrorAction
  | IFetchWhoAmIAction
  | IFetchWhoAmISuccessAction
  | IFetchWhoAmIErrorAction
  | IFetchRegistrationAction
  | IFetchRegistrationSuccessAction
  | IFetchRegistrationErrorAction;
