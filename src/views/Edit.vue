<template>
  <div>
    <h1>edit user</h1>
    <form @submit.prevent="update">
      <label>Name</label>
      <input v-model="form.name" required />

      <label>Email</label>
      <input v-model="form.email" type="email" required />

      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "@/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);

    const form = reactive({ name: "", email: "" });
    onMounted(async () => {
      const user = await getUser(userId.value);
      form.name = user.name;
      form.email = user.email;
    });

    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push("/");
      form.name = "";
      form.email = "";
    };
    return { form, update };
  },
};
</script>

<style>
</style>