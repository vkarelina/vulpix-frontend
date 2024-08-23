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
import { AuthAction, UserData } from "../types/auth";

interface AuthState {
  loading: boolean;
  error: string | null;
  userData: UserData | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  userData: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case FETCH_WHO_AM_I:
    case FETCH_ACCESS_TOKEN:
    case FETCH_REGISTRATION:
      return { ...state, loading: true, error: null };
    case FETCH_ACCESS_TOKEN_SUCCESS:
      return {
        ...initialState,
        userData: action.payload as UserData,
      };
    case FETCH_REGISTRATION_SUCCESS:
      return {
        userData: action.payload as UserData,
        loading: false,
        error: null,
      };
    case FETCH_WHO_AM_I_SUCCESS:
      return {
        loading: false,
        error: null,
        userData: action.payload as UserData,
      };
    case FETCH_WHO_AM_I_ERROR:
      return {
        ...initialState,
        error: action.payload as string,
      };
    case FETCH_ACCESS_TOKEN_ERROR:
    case FETCH_REGISTRATION_ERROR:
      return {
        ...state,
        error: action.payload as string,
      };
    default:
      return state;
  }
};
