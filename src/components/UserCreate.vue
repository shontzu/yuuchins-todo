<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>Name</label>
      <input v-model="form.name" required />

      <label>Email</label>
      <input v-model="form.email" required />

      <button type="submit">Create user</button>
    </form>
  </div>
</template>

<script>
import { createUser } from "../firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({ name: "", email: "" });
    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.email = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style>
</style>