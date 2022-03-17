<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import Counter from "../components/Counter.vue";
const counter = useCounterStore();

const onClickHandler = () => {
  counter.increment();
};
</script>

<template>
  <main>
    <Counter :onClickHandler="onClickHandler" :count="counter.count" />
  </main>
</template>
