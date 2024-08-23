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
} from "../actions/auth";
import { LoginData, RegistrationData, UserData } from "../types/auth";

export const fetchAccessToken = (payload: LoginData) => ({
  type: FETCH_ACCESS_TOKEN,
  payload,
});

export const fetchAccessTokenSuccess = (payload: UserData) => ({
  type: FETCH_ACCESS_TOKEN_SUCCESS,
  payload,
});

export const fetchAccessTokenError = (payload: string) => ({
  type: FETCH_ACCESS_TOKEN_ERROR,
  payload,
});

export const fetchRegistration = (payload: RegistrationData) => ({
  type: FETCH_REGISTRATION,
  payload,
});

export const fetchRegistrationSuccess = (payload: UserData) => ({
  type: FETCH_REGISTRATION_SUCCESS,
  payload,
});

export const fetchRegistrationError = (payload: string) => ({
  type: FETCH_REGISTRATION_ERROR,
  payload,
});

export const fetchWhoAmI = () => ({
  type: FETCH_WHO_AM_I,
});

export const fetchWhoAmISuccess = (payload: UserData) => ({
  type: FETCH_WHO_AM_I_SUCCESS,
  payload,
});

export const fetchWhoAmIError = (payload: string) => ({
  type: FETCH_WHO_AM_I_ERROR,
  payload,
});
