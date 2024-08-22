import { AxiosResponse } from "axios";

import api from "./api";
import { LoginData, RegistrationData, UserData } from "../redux/types/authType";

export const fetchLoginApi = (
  data: LoginData,
): Promise<AxiosResponse<{ token: string }>> => api.post("/auth/login", data);

export const fetchRegistrationApi = (
  data: RegistrationData,
): Promise<AxiosResponse<string>> => api.post("/auth/registration", data);

export const fetchWhoAmIApi = (): Promise<AxiosResponse<{ id: number }>> =>
  api.get("/auth/whoami");

export const fetchProfile = (): Promise<AxiosResponse<UserData>> =>
  api.get("users/profile");
