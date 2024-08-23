import { combineReducers } from "redux";

import { postsReducer } from "./post";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
