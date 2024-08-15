import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
} from "../actions/actionsPost";
import { PostsAction, Post } from "../types/postType";

interface PostsState {
  posts?: Post[];
  error?: string | null;
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  error: null,
  loading: false,
};

export const postsReducer = (
  state = initialState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
