import { MutationTree } from "vuex";
import { State } from "./state";

export enum DataMutationTypes {
  SET_DATA = "SET_DATA",
}

export type Mutations<S = State> = {
  [DataMutationTypes.SET_DATA](state: S, payload: []): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [DataMutationTypes.SET_DATA](state: State, data: []) {
    state.data = data;
  },
};
