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
import { LoginData, RegistrationData, UserData } from "../types/authType";

export const fetchAccessToken = (payload: LoginData) => ({
  type: FETCH_ACCESS_TOKEN,
  payload,
});

export const fetchAccessTokenSuccess = (userData: UserData) => ({
  type: FETCH_ACCESS_TOKEN_SUCCESS,
  payload: userData,
});

export const fetchAccessTokenError = (error: string) => ({
  type: FETCH_ACCESS_TOKEN_ERROR,
  payload: error,
});

export const fetchRegistration = (payload: RegistrationData) => ({
  type: FETCH_REGISTRATION,
  payload,
});

export const fetchRegistrationSuccess = (payload: UserData) => ({
  type: FETCH_REGISTRATION_SUCCESS,
  payload,
});

export const fetchRegistrationError = (error: string) => ({
  type: FETCH_REGISTRATION_ERROR,
  payload: error,
});

export const fetchWhoAmI = () => ({
  type: FETCH_WHO_AM_I,
});

export const fetchWhoAmISuccess = (payload: UserData) => ({
  type: FETCH_WHO_AM_I_SUCCESS,
  payload,
});

export const fetchWhoAmIError = (error: string) => ({
  type: FETCH_WHO_AM_I_ERROR,
  payload: error,
});
