import { AxiosResponse } from "axios";

import api from "./api";
import { Post } from "../redux/types/postType";

export const fetchPostsApi = (): Promise<AxiosResponse<Post[], []>> =>
  api.get<Post[]>("/posts");
