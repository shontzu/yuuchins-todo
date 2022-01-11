<template >
  <div v-for="todo in Todos" :key="todo.id">
    <section v-if="todo.done === true">
      <div style="width: 90%">
        <h1>{{ todo.todo }}</h1>
        <p>{{ todo.description }}</p>
        <i>Created on: {{ new Date(todo.created).toString() }}</i>
        <div>
          <button @click="toggleTodo(todo)">Mark it as Not Done</button>
          <button @click="deleteTodo(todo.id)">Delete</button>
        </div>
      </div>
      <h1 style="width: 10%">{{ todo.priority }}</h1>
    </section>
  </div>
</template>

<script>
import { useLoadTodos, deleteTodo, updateTodo } from "@/firebase";
export default {
  setup() {
    const Todos = useLoadTodos();
    return { Todos, deleteTodo };
  },
  methods: {
    toggleTodo(todo) {
      todo.done = !todo.done;
      updateTodo(todo.id, todo);
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 10px;
  background-color: rgba(0, 255, 0, 0.5);
  border-radius: 10px;
}
</style>