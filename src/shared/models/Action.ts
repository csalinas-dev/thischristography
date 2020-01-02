export interface Action<T extends string, V = {}> {
  type: T;
  value: V;
}