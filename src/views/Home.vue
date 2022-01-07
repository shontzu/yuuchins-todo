<template>
  <div>
    <h1>create new user</h1>
    <user-create />
    <hr />
    <h1>list all users</h1>
    <user-list />
  </div>
</template>

<script>
import UserCreate from "@/components/UserCreate.vue";
import UserList from "@/components/UserList.vue";

export default {
  name: "Home",
  components: {
    UserCreate,
    UserList,
  },
};
</script>