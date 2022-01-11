<template>
  <div>
    <h1>edit</h1>
    <form @submit.prevent="update">
      <label>todo</label>
      <input v-model="form.todo" required />

      <label>Email</label>
      <input v-model="form.priority" type="text" required />

      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { Todooute, Todoouter } from "vue-router";
import { getTodo, updateTodo } from "@/firebase";

export default {
  setup() {
    const router = Todoouter();
    const route = Todooute();
    const TodoId = computed(() => route.params.id);

    const form = reactive({ name: "", email: "" });
    onMounted(async () => {
      const todo = await getTodo(TodoId.value);
      form.todo = todo.todo;
      form.priority = todo.priority;
    });

    const update = async () => {
      await updateTodo(TodoId.value, { ...form });
      router.push("/");
      form.todo = "";
      form.priority = "";
    };
    return { form, update };
  },
};
</script>

<style>
</style>