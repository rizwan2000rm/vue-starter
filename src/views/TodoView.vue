<script setup lang="ts">
import { ref } from "vue";

import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
const todoInput = ref("");

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  todoInput.value = target.value;
};

const handleClick = () => {
  todoStore.addTodo(todoInput.value);
  todoInput.value = "";
};
</script>

<template>
  <div class="todos">
    <h1>You can add ToDo's here</h1>
    <input type="text" v-model="todoInput" @input="handleChange" />
    <button class="button" @click="handleClick">Add</button>
    {{ todoStore.todos }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todos {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
