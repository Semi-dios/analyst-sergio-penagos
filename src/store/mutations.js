export default {
  SET_BACKGROUND(state, payload) {
    state.backgroundDark = payload;
  },
  SET_LANGUAGE(state, payload) {
    state.language = payload ? "en" : "es";
  },
};
