import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    count: (state) => state.counter,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
