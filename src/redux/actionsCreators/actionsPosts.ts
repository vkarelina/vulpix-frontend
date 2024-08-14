import { PostsActionTypes, Post } from "../types/postType";

export const fetchPosts = () => ({
  type: PostsActionTypes.FETCH_POSTS,
});

export const fetchPostsSuccess = (posts: Post[]) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error: string) => ({
  type: PostsActionTypes.FETCH_POSTS_ERROR,
  payload: error,
});
