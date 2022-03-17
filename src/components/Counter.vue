<script setup lang="ts">
defineProps<{
  onClickHandler: () => void;
  count: number;
}>();
</script>

<template>
  <div class="hello-world">
    <div>
      <h1>Hello World</h1>
      <button class="hello-world__button" @click="onClickHandler">
        Click Me {{ count }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.hello-world {
  height: calc(100vh - 110px);
  display: grid;
  place-items: center;
  text-align: center;

  &__button {
    margin-top: 40px;
    background-color: green;
    color: white;
    padding: 0 40px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    border: none;

    &:hover {
      opacity: 0.8;
      border: 1px solid lighten(green, 10%);
    }
  }
}
</style>
