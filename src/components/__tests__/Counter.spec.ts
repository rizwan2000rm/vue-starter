import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Counter from "../Counter.vue";

describe("HelloWorld", () => {
  let count = 0;

  const onClickHandler = () => {
    count++;
  };

  it("renders properly", () => {
    const wrapper = mount(Counter, {
      props: { onClickHandler: onClickHandler, count: count },
    });
    expect(wrapper.text()).toContain("Hello World");

    wrapper.find(".hello-world__button").trigger("click");
    expect(count).toBe(1);
  });
});
