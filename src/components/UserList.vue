<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button>Edit</button>
            </router-link>
            <button @click="deleteUser(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from "@/firebase";
export default {
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>