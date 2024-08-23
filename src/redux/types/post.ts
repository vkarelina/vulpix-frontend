import { ActionType } from "./index";
import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
} from "../actions/post";

interface UserPostState {
  id: number;
  login: string;
  email: string;
  avatarPath?: string;
}

interface TagPostState {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  picturePath: string;
  user: UserPostState[];
  tags: TagPostState[];
}

type FetchPostsAction = ActionType<typeof FETCH_POSTS>;

type FetchPostsSuccessAction = ActionType<typeof FETCH_POSTS_SUCCESS, Post[]>;

type FetchPostsErrorAction = ActionType<typeof FETCH_POSTS_ERROR, string>;

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
