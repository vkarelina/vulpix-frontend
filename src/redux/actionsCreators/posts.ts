import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
} from "../actions/post";
import { Post } from "../types/post";

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error: string) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});
