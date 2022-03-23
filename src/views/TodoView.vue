<script setup lang="ts">
import { ref } from "vue";

import { useTodoStore } from "@/stores/todo";
import Todo from "../components/Todo.vue";

const todoStore = useTodoStore();
const todoInput = ref("");

const handleChange = (e: Event) => {
  todoInput.value = (e.target as HTMLInputElement).value;
};

const handleClick = () => {
  if (todoInput.value !== "") {
    todoStore.addTodo(todoInput.value);
    todoInput.value = "";
  }
};
</script>

<template>
  <div class="todos">
    <div class="flex">
      <div>
        <h1>You can add ToDo's here</h1>
        <input
          class="input"
          type="text"
          v-model.trim="todoInput"
          @change="handleChange"
        />
        <button class="button" @click="handleClick">Add</button>
      </div>
      <Todo />
    </div>
  </div>
</template>

<style lang="scss">
.todos {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;

  .flex {
    margin: 0 auto;
    display: flex;
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #008800;
    border-radius: 4px;
    margin-top: 40px;
    font-size: 1.2rem;
    outline: none;

    &:focus {
      border: 2px solid #008800;
    }
  }

  .button {
    display: block;
    width: 100%;
    margin-top: 40px;
    padding: 10px 0;
  }
}
</style>
