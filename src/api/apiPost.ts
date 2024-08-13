import { AxiosResponse } from "axios";

import api from "./api";
import { PostState } from "../redux/types/postType";

export const fetchPostsApi = async (): Promise<
  AxiosResponse<PostState[], []>
> => {
  const response = await api.get<PostState[]>("/posts");
  return response;
};
