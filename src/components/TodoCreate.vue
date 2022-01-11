<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>todo</label>
      <input v-model="form.todo" required />

      <label>Priority</label>
      <input v-model="form.priority" required />

      <button type="submit">Create todo</button>
    </form>
  </div>
</template>

<script>
import { createTodo } from "../firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({ todo: "", priority: "" });
    const onSubmit = async () => {
      await createTodo({ ...form });
      form.todo = "";
      form.priority = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style>
</style>