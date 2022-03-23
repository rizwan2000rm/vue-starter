import { defineStore } from "pinia";

export interface Todo {
  text: string;
  id: number;
  isFinished: boolean;
}

export interface StateType {
  todos: Todo[];
  filter: string;
  nextId: number;
}

export const useTodoStore = defineStore("todos", {
  state: () =>
    ({
      /** @type {{ text: string, id: number, isFinished: boolean }[]} */
      todos: [],
      /** @type {'all' | 'finished' | 'unfinished'} */
      filter: "all",
      // type will be automatically inferred to number
      nextId: 0,
    } as StateType),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(): Todo[] {
      if (this.filter === "finished") {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text: string) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
  },
});
