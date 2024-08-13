import { PostsActionTypes, PostState } from "../types/postType";

export const getAllPosts = () => ({
  type: PostsActionTypes.FETCH_POSTS,
});

export const setPostsSuccess = (posts: PostState[]) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const setPostsError = (error: string) => ({
  type: PostsActionTypes.FETCH_POSTS_ERROR,
  payload: error,
});
