import { shallowMount } from "@vue/test-utils";
import Mesh from "@/components/Mesh.vue";

describe("Mesh.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Mesh, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
