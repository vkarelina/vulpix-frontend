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

export interface PostState {
  id: number;
  title: string;
  description: string;
  picturePath: string;
  user: UserPostState[];
  tags: TagPostState[];
}

export interface PostsState {
  posts?: PostState[];
  error?: string | null;
  loading: boolean;
}

export const enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

interface PostAction<T, K = unknown> {
  type: T;
  payload?: K;
}

type FetchPostsAction = PostAction<PostsActionTypes.FETCH_POSTS>;

type FetchPostsSuccessAction = PostAction<
  PostsActionTypes.FETCH_POSTS_SUCCESS,
  PostState[]
>;

type FetchPostsErrorAction = PostAction<
  PostsActionTypes.FETCH_POSTS_ERROR,
  string
>;

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
