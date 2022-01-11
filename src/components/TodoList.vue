<template>
  <section
    v-for="{ id, todo, priority, description, created, done } in Todos"
    :key="id"
  >
    <div style="width: 90%">
      <h1>{{ todo }}</h1>
      <p>{{ description }}</p>
      <i>Created on: {{ created }}</i>
      <div>
        <button @click="toggleTodo(id)">Done ({{ done }})</button>
        <button @click="deleteTodo(id)">Delete</button>
      </div>
    </div>
    <h1 style="width: 10%">{{ priority }}</h1>
  </section>
</template>

<script>
import { useLoadTodos, deleteTodo } from "@/firebase";
export default {
  setup() {
    const Todos = useLoadTodos();
    return { Todos, deleteTodo };
  },
  methods: {
    toggleTodo() {
      this.todo.done == !this.todo.done;
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
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

</style>