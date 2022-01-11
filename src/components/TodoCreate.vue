<template>
  <form @submit.prevent="onSubmit">
    <label>Todo</label>
    <input v-model="form.todo" type="text" required />

    <label>Priority</label>
    <div>
      <input v-model="form.priority" type="radio"  id="1"  name="priority"  value="1"  required  />
      <label for="1">Primary (1)</label><br />
    </div>
    <div>
      <input  v-model="form.priority"   type="radio"  id="2"  name="priority"  value="2"  required />
      <label for="2">Secondary (2)</label><br />
    </div>
    <div>
      <input  v-model="form.priority"  type="radio"  id="3"  name="priority"  value="3"  required />
      <label for="3"></label>Tertiary (3)<br /><br />
    </div>

    <label>Description</label>
    <input v-model="form.description" type="text" />

    <button type="submit">Create todo</button>
  </form>
</template>

<script>
import { createTodo } from "../firebase";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      todo: "",
      priority: "",
      description: "",
      done: false,
      created: new Date().toString(),
    });
    const onSubmit = async () => {
      await createTodo({ ...form });
      form.todo = "";
      form.priority = "";
      form.description = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,0,0.5);
}
</style>