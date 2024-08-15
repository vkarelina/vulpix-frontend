import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

import { RootState } from "../redux/reducers";

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
