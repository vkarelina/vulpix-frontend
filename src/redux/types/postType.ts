import { ActionType } from "./index";

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

export const enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

type FetchPostsAction = ActionType<PostsActionTypes.FETCH_POSTS>;

type FetchPostsSuccessAction = ActionType<
  PostsActionTypes.FETCH_POSTS_SUCCESS,
  Post[]
>;

type FetchPostsErrorAction = ActionType<
  PostsActionTypes.FETCH_POSTS_ERROR,
  string
>;

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
