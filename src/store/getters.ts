import { State } from "./state";

export type Getters = {
  getBackground(state: State): boolean | null;
};

export const getters: Getters = {
  getBackground: (state: { backgroundDark: boolean }) => state.backgroundDark,
};
