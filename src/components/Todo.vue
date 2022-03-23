<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
const todoStore = useTodoStore();
</script>

<template>
  <ul>
    <li class="todo" v-for="(todos, index) in todoStore.todos" :key="index">
      <span> {{ todos.text }} </span>
    </li>
  </ul>
</template>

<style lang="scss">
ul {
  list-style: none;
  padding: 0;
  padding-left: 40px;
}

.todo {
  width: 300px;
  padding: 0.5rem;
  font-size: 1.2rem;
}

.button {
  background: #008000;
  border: none;
  border-radius: 8px;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
