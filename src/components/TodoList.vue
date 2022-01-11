<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>todo</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, todo, priority } in Todos" :key="id">
          <td>{{ todo }}</td>
          <td>{{ priority }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteTodo(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadTodos, deleteTodo } from "@/firebase";
export default {
  setup() {
    const Todos = useLoadTodos();
    return { Todos, deleteTodo };
  },
};
</script>