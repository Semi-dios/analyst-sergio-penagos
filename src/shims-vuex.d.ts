import { Store } from "@/store";

declare module "@vue/runtime-core" {
  interface State {
    backgroundDark: false;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
