import { State } from "./state";

export type Getters = {
  getData(state: State): [] | null;
};

export const getters: Getters = {
  getData: (state: { data: any }) => state.data,
};
