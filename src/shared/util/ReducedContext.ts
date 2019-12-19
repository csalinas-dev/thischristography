export interface ReducedContext<T, S> {
  dispatch: React.Dispatch<T>;
  state: S;
};
