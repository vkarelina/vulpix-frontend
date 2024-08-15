export interface ActionType<T, K = unknown> {
  type: T;
  payload?: K;
}
