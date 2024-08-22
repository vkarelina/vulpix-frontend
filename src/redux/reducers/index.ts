import { combineReducers } from "redux";

import { postsReducer } from "./postReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
