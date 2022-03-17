<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="30"
      height="30"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/todo">ToDo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.css";

header {
  display: flex;
  align-items: center;
  background-color: #008000;
  padding: 40px;

  .logo {
    margin-right: 40px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 40px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
