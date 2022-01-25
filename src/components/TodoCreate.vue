<template>
  <form @submit.prevent="onSubmit">
    <b>Todo</b>
    <input v-model="form.todo" type="text" required />
<br>
    <b>Priority</b>
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
      <label for="3">Tertiary (3)</label>
    </div>
<br>
    <b>Description</b>
    <input v-model="form.description" type="text" />
<br>
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
      created: new Date().getTime(),
    });
    const onSubmit = async () => {
      await createTodo({ ...form });
      // clear form after succesfully submit
      form.todo = '';
      form.priority = '';
      form.description = '';
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
  padding:10px;
  margin:5px;
  border-radius:10px;
}
</style>