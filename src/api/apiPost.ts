import { AxiosResponse } from "axios";

import api from "./api";
import { Post } from "../redux/types/postType";

export const fetchPostsApi = async (): Promise<AxiosResponse<Post[], []>> =>
  await api.get<Post[]>("/posts");
