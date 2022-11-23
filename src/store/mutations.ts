import { MutationTree } from "vuex";
import { State } from "./state";

export enum DataMutationTypes {
  SET_BACKGROUND = "SET_BACKGROUND",
}

export type Mutations<S = State> = {
  [DataMutationTypes.SET_BACKGROUND](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [DataMutationTypes.SET_BACKGROUND](state: State, backgroundDark: boolean) {
    state.backgroundDark = backgroundDark;
  },
};
