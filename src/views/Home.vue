<template>
  <div>
    <h1>WIP</h1>
    <todo-create />
    <hr />
    <h1>Todos</h1>
    <todo-list />
  </div>
</template>

<script>
import TodoCreate from "@/components/TodoCreate.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoCreate,
    TodoList,
  },
};
</script>