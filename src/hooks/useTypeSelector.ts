import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

import { RootState } from "../redux/reducers";

export const useTypeSelector: TypedUseSelectorHook<RootState> =
  useReduxSelector;
